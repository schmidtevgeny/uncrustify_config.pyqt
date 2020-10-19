#!/usr/bin/python3
import os
import re
import platform

'''
⮰
1234567890
↑↑↑↑↑↑↑↑↑↑
↓↓↓↓↓↓↓↓↓↓
··········
¶¶¶¶¶¶¶¶¶¶
'''
FontName = "Arial"
FontNameSize = 14
if platform.system() == "Windows":
    FontCode = "Consolas"
else:
    FontCode = "monospace"
FontCodeSize = 10
regex = r"\.\s*[A-Z]"
os.system("uncrustify --show-config > uncrustify.cfg")


def parse_str(s):
    items = []
    lines = s.split("\n")
    sc = None
    for si in lines:
        if si == "":
            if not sc is None:
                items.append(sc)
            items.append("\n")
            sc = None
        elif si[0] == '-':
            # start list
            if not sc is None:
                items.append(sc)
            sc = "\n" + si
        else:
            if sc is None:
                sc = ""
            sc += " " + si
            math = re.search(regex, sc)
            while math:
                items.append(sc[:math.start() + 1])
                sc = sc[math.start() + 1:]
                math = re.search(regex, sc)
    if not sc is None:
        items.append(sc)
        sc = None
    items2 = []
    for s in items:
        items2.append(
            "self.tr(\"{}\")".format(s.strip(" \t").replace("'", "\'").replace("\"", "\\\"").replace("\n", "\\n")))

    return "+' '+".join(items2)


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
            name += d[i].strip()[2:] + '\n'
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
    "super(Widget, self).__init__(parent)",
    "self.setWindowTitle('" + title + "')"
    ]
get_strings = ['s=[]']
load_strings = ['pass']
filter_string = []
section_id = 0
rowid = 0

for it in data:
    if it['type'] == "section":
        section_id += 1
        init_strings.append("self.widget{} = QtWidgets.QWidget()".format(section_id))
        init_strings.append("self.addItem(self.widget{}, self.tr(\"{}\"))".format(section_id, it['title']))
        init_strings.append("self.lt{} = QtWidgets.QGridLayout(self.widget{})".format(section_id, section_id))
        rowid = 0

        get_strings.append('s.append(wrap(self.tr(\"\\n{}\\n\")))'.format(it['title']))
    elif it['type'] == "option":
        s = parse_str(it['title'])
        init_strings.append("self.label{} = QtWidgets.QLabel({})".format(it['name'], s))
        init_strings.append("self.label{}.setWordWrap(True)".format(it['name']))
        init_strings.append("self.label{}.setStyleSheet(\"QLabel{{ border-top: 1px solid red;}}\")".format(it['name']))
        init_strings.append("self.lt{}.addWidget(self.label{}, {}, 0, 1, 5)".format(section_id, it['name'], rowid))
        rowid += 1
        init_strings.append("if self.tr(\"code_{}\")!=\"code_{}\":".format(it['name'], it['name']))
        init_strings.append("    self.code{} = QtWidgets.QLabel(self.tr(\"code_{}\"))".format(it['name'], it['name']))
        init_strings.append(
            "    self.code{}.setFont(QtGui.QFont('{}', {}, 0))".format(it['name'], FontCode, FontCodeSize))
        init_strings.append("    self.lt{}.addWidget(self.code{}, {}, 0, 1, 5)".format(section_id, it['name'], rowid))
        rowid += 1
        init_strings.append("self.name{} = QtWidgets.QLabel(\"{}\")".format(it['name'], it['name']))
        init_strings.append("self.name{}.setFont(QtGui.QFont('{}', {}, 2))".format(it['name'], FontName, FontNameSize))
        init_strings.append("self.lt{}.addWidget(self.name{}, {}, 0)".format(section_id, it['name'], rowid))

        if it['vtype'] == 'number':
            init_strings.append("self.{} = QtWidgets.QSpinBox()".format(it['name']))
            init_strings.append("self.{}.setMinimum(-100)".format(it['name']))
            init_strings.append("self.{}.setMaximum(100)".format(it['name']))
            init_strings.append("self.{}.setValue({})".format(it['name'], it['val']))
            init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

            get_strings.append('s.append(wrap({}))'.format(s))
            get_strings.append(
                's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it['name'] + '.value()))')

            load_strings.append(
                "if \"{}\" in params: self.{}.setValue(int(params[\"{}\"]))".format(it['name'], it['name'], it['name']))
        elif it['vtype'] == 'unsigned number':
            init_strings.append("self.{} = QtWidgets.QSpinBox()".format(it['name']))
            init_strings.append("self.{}.setMinimum(0)".format(it['name']))
            init_strings.append("self.{}.setMaximum(100)".format(it['name']))
            init_strings.append("self.{}.setValue({})".format(it['name'], it['val']))
            init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

            get_strings.append('s.append(wrap({}))'.format(s))
            get_strings.append(
                's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it['name'] + '.value()))')

            load_strings.append(
                "if \"{}\" in params: self.{}.setValue(int(params[\"{}\"]))".format(it['name'], it['name'], it['name']))
        elif it['vtype'] == 'true/false':
            init_strings.append("self.{} = QtWidgets.QComboBox()".format(it['name']))
            init_strings.append("self.{}.addItems(['true','false'])".format(it['name']))
            init_strings.append("self.{}.setCurrentText('{}')".format(it['name'], it['val']))
            init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

            get_strings.append('s.append(wrap({}))'.format(s))
            get_strings.append(
                's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it[
                    'name'] + '.currentText()))')

            load_strings.append(
                "if \"{}\" in params: self.{}.setCurrentText(params[\"{}\"])".format(it['name'], it['name'],
                                                                                     it['name']))
        elif it['vtype'] == 'string':
            init_strings.append("self.{} = QtWidgets.QLineEdit()".format(it['name']))
            init_strings.append("self.{}.setText({})".format(it['name'], it['val']))
            init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

            get_strings.append('s.append(wrap({}))'.format(s))
            get_strings.append(
                's.append("' + it['name'] + ' = \\"{}\\" # ' + it['vtype'] + '".format(self.' + it[
                    'name'] + '.text()))')

            load_strings.append(
                "if \"{}\" in params: self.{}.setText(params[\"{}\"])".format(it['name'], it['name'],
                                                                              it['name']))
        elif it['vtype'] == 'ignore/add/remove/force':
            init_strings.append("self.{} = QtWidgets.QComboBox()".format(it['name']))
            init_strings.append("self.{}.addItems(['ignore','add','remove','force'])".format(it['name']))
            init_strings.append("self.{}.setCurrentText('{}')".format(it['name'], it['val']))
            init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

            get_strings.append('s.append(wrap({}))'.format(s))
            get_strings.append(
                's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it[
                    'name'] + '.currentText()))')

            load_strings.append(
                "if \"{}\" in params: self.{}.setCurrentText(params[\"{}\"])".format(it['name'], it['name'],
                                                                                     it['name']))
        elif it['vtype'] == 'ignore/break/force/lead/trail/join/lead_break/lead_force/trail_break/trail_force':
            init_strings.append("self.{} = QtWidgets.QComboBox()".format(it['name']))
            init_strings.append(
                "self.{}.addItems(['ignore','break','force','lead','trail','join','lead_break','lead_force','trail_break','trail_force'])".format(
                    it['name']))
            init_strings.append("self.{}.setCurrentText('{}')".format(it['name'], it['val']))
            init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

            get_strings.append('s.append(wrap({}))'.format(s))
            get_strings.append(
                's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it[
                    'name'] + '.currentText()))')

            load_strings.append(
                "if \"{}\" in params: self.{}.setCurrentText(params[\"{}\"])".format(it['name'], it['name'],
                                                                                     it['name']))
        elif it['vtype'] == 'lf/crlf/cr/auto':
            init_strings.append("self.{} = QtWidgets.QComboBox()".format(it['name']))
            init_strings.append("self.{}.addItems(['lf','crlf','cr','auto'])".format(it['name']))
            init_strings.append("self.{}.setCurrentText('{}')".format(it['name'], it['val']))
            init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))

            get_strings.append('s.append(wrap({}))'.format(s))
            get_strings.append(
                's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it[
                    'name'] + '.currentText()))')

            load_strings.append(
                "if \"{}\" in params: self.{}.setCurrentText(params[\"{}\"])".format(it['name'], it['name'],
                                                                                     it['name']))
        else:
            print(it['vtype'])

        filter_string.append(
            "self.label{}.setVisible(filter=='' or '{}'.find(filter)!=-1)".format(it['name'], it['name']))
        filter_string.append("if self.tr(\"code_{}\")!=\"code_{}\":".format(it['name'], it['name']))
        filter_string.append(
            "    self.code{}.setVisible(filter=='' or '{}'.find(filter)!=-1)".format(it['name'], it['name'],
                                                                                     it['name']))
        filter_string.append(
            "self.name{}.setVisible(filter=='' or '{}'.find(filter)!=-1)".format(it['name'], it['name']))
        filter_string.append("self.{}.setVisible(filter=='' or '{}'.find(filter)!=-1)".format(it['name'], it['name']))
        rowid += 1
        pass

for i in range(1, section_id + 1):
    init_strings.append(
        "self.lt{}.addItem(QtWidgets.QSpacerItem(10, 10, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Expanding), self.lt{}.rowCount(), 0)".format(
            i, i))

get_strings.append("return '\\n'.join(s)")

f = open("uncrustify_ui.py", "w")
f.write('''from PyQt5 import QtWidgets, QtGui
import textwrap
import re
def wrap(s):
    my_wrap = textwrap.TextWrapper(width = 80)
    wrap_list = my_wrap.wrap(text=s)
    s = ""
    for line in wrap_list:
        s += "\\n# "+line
    return s
class Widget(QtWidgets.QToolBox):
    def __init__(self, parent=None):
        ''')
f.write("\n        ".join(init_strings))
f.write('''
    def get(self):
        ''')
f.write("\n        ".join(get_strings))
f.write('''
    def load(self, path):
        regexp = r"^([^#\\s].+)\\s*=\\s*(.*?)\\n"
        f = open('conf.cfg', encoding = "utf-8")
        d = f.read()
        f.close()
        matches = re.finditer(regexp, d, re.MULTILINE | re.IGNORECASE)
        params = {}
        for matchNum, match in enumerate(matches, start = 1):
            param = match.group(1).strip()
            val = match.group(2)
            if val[0] == '"':
                val = val[1:val.rfind('"')]
            elif val[0] == "'":
                val = val[1:val.rfind("'")]
            else:
                if val.rfind("#") > 0:
                    val = val[:val.rfind("#")]
                val = val.strip()
            params[param] = val
        ''')
f.write("\n        ".join(load_strings))
f.write('''
    def filter(self, filter):
        ''')
f.write("\n        ".join(filter_string))

f.close()

os.system('pylupdate5 uncrustify_ui.py -ts uncrustify.ts')

if platform.system() == "Windows":
    os.system("main.py")
else:
    os.system("./main.py")
