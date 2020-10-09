import os


# os.system("uncrustify --show-config > uncrustify.cfg")


def parse_str(s):
    s = s.replace("i.e.", "ie").replace("i.e.", "vs")
    s = s.split("\n")
    items = []
    for i in s:
        if s == '':
            items.append('self.tr("\n\n")')
        else:
            w = i.split(". ")
            for j in w:
                j = j.strip()
                if j != "":
                    items.append('self.tr("{}. ")'.format(j.replace('"', '\\"')))
    return "+".join(items)


if not os.path.exists("uncrustify.cfg"):
    print("config not found")
    exit()

f = open("uncrustify.cfg")
d = f.read().split("\n")
f.close()

title = d[0][2:]
data = []
comment = ""
i = 2

while i < len(d):
    s = d[i]
    s = s.strip()
    if s == "#":
        # start section
        name = ""
        i += 1
        while i < len(d) and d[i].strip() != "":
            name += d[i].strip()[2:]
            i += 1

        data.append({'type': 'section', 'title': name})
    elif s != "" and s[0] == "#":
        name = ""
        while i < len(d) and d[i] != "" and d[i].strip()[0] == "#":
            name += d[i].strip()[2:] + ' '
            if d[i].strip()[2:] == '':
                name += "\n"
            i += 1
        optstring = d[i]
        if optstring == "":
            data.append({'type': 'info', 'title': name})
            break

        optname = optstring[:optstring.find("=")].strip()
        optstring = optstring[optstring.find("=") + 1:]
        optvalue = optstring[:optstring.find("#")].strip()
        opttype = optstring[optstring.find("#") + 1:].strip()
        i += 1

        data.append({'type': 'option', 'title': name, 'name': optname, 'val': optvalue, 'vtype': opttype})

    i += 1
    init_strings = [
        "super(Widget, self).__init__()",
        "self.setWindowTitle('" + title + "')"
    ]
    get_strings = ['s=[]']
    section_id = 0
    rowid = 0
    for it in data:
        if it['type'] == "section":
            section_id += 1
            init_strings.append("self.widget{} = QtWidgets.QWidget()".format(section_id))
            init_strings.append("self.addItem(self.widget{}, self.tr(\"{}\"))".format(section_id, it['title']))
            init_strings.append("self.lt{} = QtWidgets.QGridLayout(self.widget{})".format(section_id, section_id))
            rowid = 0
        elif it['type'] == "option":
            s = parse_str(it['title'])
            init_strings.append("label = QtWidgets.QLabel({})".format(s))
            init_strings.append("label.setWordWrap(True)")
            init_strings.append("self.lt{}.addWidget(label, {}, 0, 1, 5)".format(section_id, rowid))
            rowid += 1
            init_strings.append("if self.tr(\"code_{}\")!=\"code_{}\":".format(it['name'],it['name']))
            init_strings.append(
                "    self.lt{}.addWidget(QtWidgets.QLabel(self.tr(\"code_{}\")), {}, 0, 1, 5)".format(section_id,
                                                                                                  it['name'], rowid))
            rowid += 1
            init_strings.append("label = QtWidgets.QLabel(\"{}\")".format(it['name']))
            init_strings.append("label.setFont(QtGui.QFont('Arial', 14, 2))")
            init_strings.append("self.lt{}.addWidget(label, {}, 0)".format(section_id, rowid))

            if it['vtype'] == 'number':
                init_strings.append("self.{} = QtWidgets.QSpinBox()".format(it['name']))
                init_strings.append("self.{}.setMinimum(-100)".format(it['name']))
                init_strings.append("self.{}.setMaximum(100)".format(it['name']))
                init_strings.append("self.{}.setValue({})".format(it['name'], it['val']))
                init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'],rowid))

                get_strings.append('s.append(wrap({}))'.format(s))
                get_strings.append(
                    's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it['name'] + '.value()))')
            elif it['vtype'] == 'unsigned number':
                init_strings.append("self.{} = QtWidgets.QSpinBox()".format(it['name']))
                init_strings.append("self.{}.setMinimum(0)".format(it['name']))
                init_strings.append("self.{}.setMaximum(100)".format(it['name']))
                init_strings.append("self.{}.setValue({})".format(it['name'], it['val']))
                init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

                get_strings.append('s.append(wrap({}))'.format(s))
                get_strings.append(
                    's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it['name'] + '.value()))')
            elif it['vtype'] == 'true/false':
                init_strings.append("self.{} = QtWidgets.QComboBox()".format(it['name']))
                init_strings.append("self.{}.addItems(['true','false'])".format(it['name']))
                init_strings.append("self.{}.setCurrentText('{}')".format(it['name'], it['val']))
                init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

                get_strings.append('s.append(wrap({}))'.format(s))
                get_strings.append(
                    's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it[
                        'name'] + '.currentText()))')
            elif it['vtype'] == 'string':
                init_strings.append("self.{} = QtWidgets.QLineEdit()".format(it['name']))
                init_strings.append("self.{}.setText({})".format(it['name'], it['val']))
                init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

                get_strings.append('s.append(wrap({}))'.format(s))
                get_strings.append(
                    's.append("' + it['name'] + ' = \\"{}\\" # ' + it['vtype'] + '".format(self.' + it['name'] + '.text()))')
            elif it['vtype'] == 'ignore/add/remove/force':
                init_strings.append("self.{} = QtWidgets.QComboBox()".format(it['name']))
                init_strings.append("self.{}.addItems(['ignore','add','remove','force'])".format(it['name']))
                init_strings.append("self.{}.setCurrentText('{}')".format(it['name'], it['val']))
                init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

                get_strings.append('s.append(wrap({}))'.format(s))
                get_strings.append(
                    's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it[
                        'name'] + '.currentText()))')
            elif it['vtype'] == 'ignore/break/force/lead/trail/join/lead_break/lead_force/trail_break/trail_force':
                init_strings.append("self.{} = QtWidgets.QComboBox()".format(it['name']))
                init_strings.append("self.{}.addItems(['ignore','break','force','lead','trail','join','lead_break','lead_force','trail_break','trail_force'])".format(it['name']))
                init_strings.append("self.{}.setCurrentText('{}')".format(it['name'], it['val']))
                init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

                get_strings.append('s.append(wrap({}))'.format(s))
                get_strings.append(
                    's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it[
                        'name'] + '.currentText()))')
            elif it['vtype'] == 'lf/crlf/cr/auto':
                init_strings.append("self.{} = QtWidgets.QComboBox()".format(it['name']))
                init_strings.append("self.{}.addItems(['lf','crlf','cr','auto'])".format(it['name']))
                init_strings.append("self.{}.setCurrentText('{}')".format(it['name'], it['val']))
                init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

                get_strings.append('s.append(wrap({}))'.format(s))
                get_strings.append(
                    's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it[
                        'name'] + '.currentText()))')
            else:
                print(it['vtype'])
            rowid += 1
            pass

f = open("uncrustify_ui.py", "w")
f.write("from PyQt5 import QtWidgets, QtGui\n")
f.write("import textwrap\n")
f.write('''
def wrap(s):
    my_wrap = textwrap.TextWrapper(width = 80)
    wrap_list = my_wrap.wrap(text=s)
    s = ""
    for line in wrap_list:
        s += "\\n# "+line
    return s''')
f.write("\nclass Widget(QtWidgets.QToolBox):\n")
f.write("\n    def __init__(self):\n        ")
f.write("\n        ".join(init_strings))
f.write("\n    def get(self):\n        ")
get_strings.append("return '\\n'.join(s)")
f.write("\n        ".join(get_strings))

f.close()

os.system('pylupdate5 uncrustify_ui.py -ts uncrustify.ts')