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

header = "uncrustify/src/options.h"

# !/usr/bin/env python

import argparse
import io
import os
import re

max_name_len = 60

re_name = re.compile(r'^[a-z][a-z0-9_]*$')
re_group = re.compile(r'//BEGIN')
re_option = re.compile(r'extern (Bounded)?Option<[^>]+>')
re_default = re.compile(r' *// *= *(.*)')
groups = []


# =============================================================================
class Group(object):
    # -------------------------------------------------------------------------
    def __init__(self, desc):
        self.desc = desc
        self.options = []

    # -------------------------------------------------------------------------
    def append(self, option):
        self.options.append(option)


# =============================================================================
class Option(object):
    # -------------------------------------------------------------------------
    def __init__(self, name, dval, decl, desc):
        if re_name.match(name) is None:
            raise ValueError('{!r} is not a valid option name'.format(name))
        if len(name) > max_name_len:
            raise ValueError(
                '{!r} (length={:d}) exceeds the maximum length {:d}'.format(
                    name, len(name), max_name_len))

        self.desc = u'\n'.join(desc).split('\n\n')
        self.decl = decl[7:]
        self.name = name
        self.dval = dval


# -----------------------------------------------------------------------------
def extract_default(decl):
    m = re_default.match(decl)
    if m:
        return m.group(1)
    return None


# -----------------------------------------------------------------------------
def parse_config():
    with io.open(header, 'rt', encoding='utf-8') as f:
        desc = []
        for line in iter(f.readline, ''):
            line = line.strip()

            if re_group.match(line):
                groups.append(Group(line[8:]))

            elif not len(line):
                desc = []

            elif line == '//':
                desc.append('')

            elif line.startswith('// '):
                desc.append(line[3:])

            elif re_option.match(line):
                n, d = f.readline().split(';')
                o = Option(n, extract_default(d.strip()), line, desc)
                groups[-1].append(o)


parse_config()

classdef = '''from PyQt5 import QtWidgets, QtGui, QtCore
import textwrap
import re

# сворачивание вывода в config
def wrap(s):
    if s=="\\n": return "\\n#"
    my_wrap = textwrap.TextWrapper(width = 80)
    so = ""
    for si in s.split("\\n"):        
        wrap_list = my_wrap.wrap(text=si)        
        for line in wrap_list:
            so += "\\n# "+line.strip()
    return so
    
class Widget(QtWidgets.QTabWidget):
'''

FontName = "Arial"
FontNameSize = 14
if platform.system() == "Windows":
    FontCode = "Consolas"
else:
    FontCode = "monospace"
classinit = '''
    def __init__(self, parent=None):
        super(Widget, self).__init__(parent)
        self.setWindowTitle('Uncrustify-0.74.0')    
        font_name = QtGui.QFont('{}', {}, 2)
        font_code = QtGui.QFont('{}', {}, 2)
'''.format(FontName, FontNameSize, FontCode, FontNameSize)

classget = '''
    ###########################################################################################
    ###########################################################################################
    ###########################################################################################
    ###########################################################################################
    ###########################################################################################
    def get(self):
        s=[]
'''

classset = '''
    ###########################################################################################
    ###########################################################################################
    ###########################################################################################
    ###########################################################################################
    ###########################################################################################
    def load(self, path):
        regexp = r"^([^#\\s].+)\\s*=\\s*([^\\n]*?)\\n"
        f = open(path, encoding = "utf-8")
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
'''

classflt = '''
    ###########################################################################################
    ###########################################################################################
    ###########################################################################################
    ###########################################################################################
    ###########################################################################################
    def filter(self, filter):
        pass
'''


def perr(opt):
    print('parse error')
    print(opt.desc)
    print(opt.decl)
    print(opt.name)
    print(opt.dval)
    exit(1)


gr_id = 0
for gr in groups:
    gr_id += 1
    group = "group_page_{}".format(gr_id)
    grouplt = "group_page_layout_{}".format(gr_id)

    classinit += "\n        #================== {} ".format(gr.desc)+'='*(80-len(gr.desc))
    classget +=  "\n        #================== {} ".format(gr.desc)+'='*(80-len(gr.desc))
    classset +=  "\n        #================== {} ".format(gr.desc)+'='*(80-len(gr.desc))
    
    classinit += "\n        self.{} = QtWidgets.QWidget()".format(group)
    classinit += "\n        self.{} = QtWidgets.QGridLayout(self.{})".format(grouplt, group)
    classinit += "\n        self.{}.addWidget(QtWidgets.QLabel(self.tr(\"{} help\")), 0, 0, 1, 2)".format(grouplt, gr.desc)

    classget += "\n        s.append('\\n\\n'+'#'*80+wrap(\"{}\"))".format(gr.desc)
    classget += "\n        s.append('#'*80)"

    row_id = 1
    
    for opt in gr.options:
        s = '"<hr>"+self.tr("{}")'.format(opt.desc.replace("\\", "\\\\").replace('"', '\\"').replace('\n', '\\n'))
        opt.desc = opt.desc.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '# \\n')

        if opt.decl == 'Option<line_end_e>':
            # lf/crlf/cr/auto
            if opt.dval is None:
                opt.dval = 'auto'
            classinit += "\n        #--------------------------------------------"
            classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
            classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
            row_id += 1
            # todo: code
            classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
            classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name, row_id)
            classinit += "\n        self.option_{} =  QtWidgets.QComboBox()".format(opt.name)
            classinit += "\n        self.option_{}.addItems(['lf', 'crlf', 'cr', 'auto'])".format(opt.name)
            classinit += "\n        self.option_{}.setCurrentText('''{}''')".format(opt.name, str(opt.dval[3:]).lower())
            classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
            row_id += 1
            classget += "\n        s.append(wrap(\"{}\"))".format(opt.desc)
            classget += "\n        s.append('''#\n# Type: lf/crlf/cr/auto''')"
            classget += "\n        s.append('''# Default: {} ''')".format(str(opt.dval[3:]).lower())
            classget += "\n        s.append('{} = ' + self.option_{}.currentText())".format(opt.name,opt.name)
            classset += "\n        if \"{}\" in params: self.option_{}.setCurrentText(params[\"{}\"])".format(opt.name,opt.name,opt.name)
            pass
        elif opt.decl == 'Option<bool>':
            if opt.dval is None:
                opt.dval = 'false'
            classinit += "\n        #--------------------------------------------"
            classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
            classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
            row_id += 1
            # todo: code
            classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
            classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name, row_id)
            classinit += "\n        self.option_{} =  QtWidgets.QComboBox()".format(opt.name)
            classinit += "\n        self.option_{}.addItems(['true','false'])".format(opt.name)
            classinit += "\n        self.option_{}.setCurrentText('''{}''')".format(opt.name, str(opt.dval).lower())
            classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
            row_id += 1
            classget += "\n        s.append(wrap(\"{}\"))".format(opt.desc)
            classget += "\n        s.append('''#\n# Type: true/false''')"
            classget += "\n        s.append('''# Default: {} ''')".format(str(opt.dval).lower())
            classget += "\n        s.append('{} = ' + self.option_{}.currentText())".format(opt.name,opt.name)
            classset += "\n        if \"{}\" in params: self.option_{}.setCurrentText(params[\"{}\"])".format(opt.name,opt.name,opt.name)
        elif opt.decl == 'Option<string>':
            if opt.dval is None:
                opt.dval = ''
            classinit += "\n        #--------------------------------------------"
            classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
            classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
            row_id += 1
            # todo: code
            classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
            classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name, row_id)
            classinit += "\n        self.option_{} =  QtWidgets.QLineEdit('''{}''')".format(opt.name, opt.dval)
            classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
            row_id += 1
            classget += "\n        s.append(wrap(\"{}\"))".format(opt.desc)
            classget += "\n        s.append('''#\n# Type: string''')"
            classget += "\n        s.append('''# Default: \"{}\" ''')".format(opt.dval)
            classget += "\n        s.append('{} = \"' + self.option_{}.text()+'\"\\n')".format(opt.name,opt.name)
            classset += "\n        if \"{}\" in params: self.option_{}.setText(params[\"{}\"])".format(opt.name,opt.name,opt.name)

        elif opt.decl == 'Option<signed>':
            if opt.dval is None:
                opt.dval = 0
        elif opt.decl == 'Option<iarf_e>':
            # ignore / add / remove / force / not_defined
            if opt.dval is None:
                opt.dval = 'ignore'
            classinit += "\n        #--------------------------------------------"
            classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
            classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
            row_id += 1
            # todo: code
            classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
            classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name, row_id)
            classinit += "\n        self.option_{} =  QtWidgets.QComboBox()".format(opt.name)
            classinit += "\n        self.option_{}.addItems(['ignore','add','remove','force','not_defined'])".format(opt.name)
            classinit += "\n        self.option_{}.setCurrentText('''{}''')".format(opt.name, opt.dval)
            classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
            row_id += 1
            classget += "\n        s.append(wrap(\"{}\"))".format(opt.desc)
            classget += "\n        s.append('''#\n# Type: ignore / add / remove / force / not_defined''')"
            classget += "\n        s.append('''# Default: {} ''')".format(opt.dval)
            classget += "\n        s.append('{} = ' + self.option_{}.currentText())".format(opt.name,opt.name)
            classset += "\n        if \"{}\" in params: self.option_{}.setCurrentText(params[\"{}\"])".format(opt.name,opt.name,opt.name)
            
        elif opt.decl == 'Option<token_pos_e>':
            # ignore/break/force/lead/trail/join/lead_break/lead_force/trail_break/trail_force
            if opt.dval is None:
                opt.dval = 'ignore'
            classinit += "\n        #--------------------------------------------"
            classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
            classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
            row_id += 1
            # todo: code
            classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
            classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name, row_id)
            classinit += "\n        self.option_{} =  QtWidgets.QComboBox()".format(opt.name)
            classinit += "\n        self.option_{}.addItems(['ignore','break','force','lead','trail','join','lead_break','lead_force','trail_break','trail_force'])".format(opt.name)
            classinit += "\n        self.option_{}.setCurrentText('''{}''')".format(opt.name, opt.dval)
            classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
            row_id += 1
            classget += "\n        s.append(wrap(\"{}\"))".format(opt.desc)
            classget += "\n        s.append('''#\n# Type: ignore/break/force/lead/trail/join/lead_break/lead_force/trail_break/trail_force''')"
            classget += "\n        s.append('''# Default: {} ''')".format(opt.dval)
            classget += "\n        s.append('{} = ' + self.option_{}.currentText())".format(opt.name,opt.name)
            classset += "\n        if \"{}\" in params: self.option_{}.setCurrentText(params[\"{}\"])".format(opt.name,opt.name,opt.name)

        elif opt.decl.startswith('BoundedOption'):
            t = opt.decl.replace('BoundedOption', '').replace('<', '').replace('>', '').split(',')
            if t[0].strip() in ['unsigned', 'signed']:
                if opt.name=='string_escape_char':
                    opt.dval=92
                if opt.dval==None:
                    opt.dval=0                    
                if opt.dval=='LWARN':
                    opt.dval=2

                classinit += "\n        #--------------------------------------------"
                classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
                classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
                classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
                row_id += 1
                # todo: code
                classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
                classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
                classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name, row_id)
                classinit += "\n        self.option_{} =  QtWidgets.QSpinBox()".format(opt.name)
                classinit += "\n        self.option_{}.setMinimum({})".format(opt.name, t[1])
                classinit += "\n        self.option_{}.setMaximum({})".format(opt.name, t[2])
                classinit += "\n        self.option_{}.setValue({})".format(opt.name, opt.dval)
                classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
                row_id += 1
                classget += "\n        s.append(wrap(\"{}\"))".format(opt.desc)
                classget += "\n        s.append('''#\n# Type: {}''')".format(' '.join(t))
                classget += "\n        s.append('''# Default: {} ''')".format(opt.dval)
                classget += "\n        s.append('{} = ' + self.option_{}.value())".format(opt.name,opt.name)
                classset += "\n        if \"{}\" in params: self.option_{}.setValue(params[\"{}\"])".format(opt.name,opt.name,opt.name)

            else:
                perr(opt)
        else:
            perr(opt)

    # end of group loop step
    classinit += "\n        self.scroll_{} = QtWidgets.QScrollArea()".format(group)
    # classinit += "\n        self.scroll_{}.setVerticalScrollBarPolicy(QtCore.Qt.ScrollBarAlwaysOn)".format(group)
    # classinit += "\n        self.scroll_{}.setHorizontalScrollBarPolicy(QtCore.Qt.ScrollBarAlwaysOff)".format(group)
    classinit += "\n        self.scroll_{}.setWidget(self.{})".format(group, group)
    # classinit += "\n        self.{}.setStyleSheet('QWidget{{ border: 1px solid red;}}')".format(group)
    classinit += "\n        self.scroll_{}.setWidgetResizable(True)".format(group)
    classinit += "\n        self.addTab(self.scroll_{}, self.tr(\"{}\"))".format(group, gr.desc)

# end of loop
classget += "\n        return '\\n'.join(s)"

f = open('uncrustify_ui.py', 'w', encoding='utf-8')
f.write(classdef)
f.write(classinit)
f.write(classget)
f.write(classset)
f.write(classflt)
f.close()

# if __name__ == '__main__':
#     main()

# print(parse(path))

# FontName = "Arial"
# FontNameSize = 14
# if platform.system() == "Windows":
#     FontCode = "Consolas"
# else:
#     FontCode = "monospace"
# FontCodeSize = 10
# regex = r"\.\s*[A-Z]"
# os.system("uncrustify --show-config > uncrustify.cfg")
#
#
# def parse_str(s):
#     items = []
#     lines = s.split("\n")
#     sc = None
#     for si in lines:
#         if si == "":
#             if not sc is None:
#                 items.append(sc)
#             items.append("\n")
#             sc = None
#         elif si[0] == '-':
#             # start list
#             if not sc is None:
#                 items.append(sc)
#             sc = "\n" + si
#         else:
#             if sc is None:
#                 sc = ""
#             sc += " " + si
#             math = re.search(regex, sc)
#             while math:
#                 items.append(sc[:math.start() + 1])
#                 sc = sc[math.start() + 1:]
#                 math = re.search(regex, sc)
#     if not sc is None:
#         items.append(sc)
#         sc = None
#     items2 = []
#     items3 = []
#     for s in items:
#         items2.append(
#             "self.tr(\"{}\").strip()".format(
#                 s.strip(" \t").replace("'", "\'").replace("\"", "\\\"").replace("\n", "\\n")))
#         items3.append(
#             "wrap(self.tr(\"{}\"))".format(
#                 s.strip(" \t").replace("'", "\'").replace("\"", "\\\"").replace("\n", "\\n")))
#
#     return ["+' '+".join(items2), "+' '+".join(items3)]
#
#
# if not os.path.exists("uncrustify.cfg"):
#     print("config not found")
#     exit()
#
# f = open("uncrustify.cfg")
# d = f.read().split("\n")
# f.close()
#
# title = d[0][2:]
# data = []
# comment = ""
# i = 2
#
# while i < len(d):
#     s = d[i]
#     s = s.strip()
#     if s == "#":
#         # start section
#         name = ""
#         i += 1
#         while i < len(d) and d[i].strip() != "":
#             name += d[i].strip()[2:]
#             i += 1
#
#         data.append({'type': 'section', 'title': name})
#     elif s != "" and s[0] == "#":
#         name = ""
#         while i < len(d) and d[i] != "" and d[i].strip()[0] == "#":
#             name += d[i].strip()[2:] + '\n'
#             i += 1
#         optstring = d[i]
#         if optstring == "":
#             data.append({'type': 'info', 'title': name})
#             break
#
#         optname = optstring[:optstring.find("=")].strip()
#         optstring = optstring[optstring.find("=") + 1:]
#         optvalue = optstring[:optstring.find("#")].strip()
#         opttype = optstring[optstring.find("#") + 1:].strip()
#         i += 1
#
#         data.append({'type': 'option', 'title': name, 'name': optname, 'val': optvalue, 'vtype': opttype})
#
#     i += 1
#
# init_strings = [
#     "super(Widget, self).__init__(parent)",
#     "self.setWindowTitle('" + title + "')"
# ]
# init_strings2 = ['']
# get_strings = ['s=[]']
# load_strings = ['pass']
# filter_string = []
# section_id = 0
# rowid = 0
#
# for it in data:
#     if it['type'] == "section":
#         section_id += 1
#         init_strings.append("self.widget{} = QtWidgets.QWidget()".format(section_id))
#         init_strings2.append("self.scroll{} = QtWidgets.QScrollArea()".format(section_id))
#         init_strings2.append("self.scroll{}.setWidget(self.widget{})".format(section_id, section_id))
#         init_strings2.append("self.addTab(self.scroll{}, self.tr(\"{}\"))".format(section_id, it['title']))
#         init_strings.append("self.lt{} = QtWidgets.QGridLayout(self.widget{})".format(section_id, section_id))
#         rowid = 0
#         init_strings.append("self.label{} = QtWidgets.QLabel(self.tr(\"{} help\"))".format(section_id, it['title']))
#         init_strings.append("self.label{}.setWordWrap(True)".format(section_id))
#         init_strings.append("self.label{}.setFont(QtGui.QFont('{}', {}, 0))".format(section_id, FontCode, FontCodeSize))
#         init_strings.append("self.lt{}.addWidget(self.label{}, {}, 0, 1, 5)".format(section_id, section_id, rowid))
#         rowid += 1
#         get_strings.append('s.append(wrap("\\n")+wrap(self.tr(\"{}\")+wrap("\\n")))'.format(it['title']))
#
#     elif it['type'] == 'info':
#         init_strings.append("self.widgetif{} = QtWidgets.QLabel(self.tr('''{}'''))".format(section_id, it['title']))
#         init_strings.append("self.addTab(self.widgetif{}, self.tr('Info'))".format(section_id))
#         get_strings.append("s.append(wrap(self.tr('''{}''')))".format(it['title']))
#
#     elif it['type'] == "option":
#         s = parse_str(it['title'])
#         init_strings.append("self.label{} = QtWidgets.QLabel({})".format(it['name'], s[0]))
#         init_strings.append("self.label{}.setWordWrap(True)".format(it['name']))
#         init_strings.append("self.label{}.setStyleSheet(\"QLabel{{ border-top: 1px solid red;}}\")".format(it['name']))
#         init_strings.append("self.lt{}.addWidget(self.label{}, {}, 0, 1, 5)".format(section_id, it['name'], rowid))
#         rowid += 1
#         init_strings.append("if self.tr(\"code_{}\")!=\"code_{}\":".format(it['name'], it['name']))
#         init_strings.append("    self.code{} = QtWidgets.QLabel(self.tr(\"code_{}\"))".format(it['name'], it['name']))
#         init_strings.append(
#             "    self.code{}.setFont(QtGui.QFont('{}', {}, 0))".format(it['name'], FontCode, FontCodeSize))
#         init_strings.append("    self.lt{}.addWidget(self.code{}, {}, 0, 1, 5)".format(section_id, it['name'], rowid))
#         rowid += 1
#         init_strings.append("self.name{} = QtWidgets.QLabel(\"{}\")".format(it['name'], it['name']))
#         init_strings.append("self.name{}.setFont(QtGui.QFont('{}', {}, 2))".format(it['name'], FontName, FontNameSize))
#         init_strings.append("self.lt{}.addWidget(self.name{}, {}, 0)".format(section_id, it['name'], rowid))
#
#         if it['vtype'] == 'number':
#             init_strings.append("self.{} = QtWidgets.QSpinBox()".format(it['name']))
#             init_strings.append("self.{}.setMinimum(-100)".format(it['name']))
#             init_strings.append("self.{}.setMaximum(100)".format(it['name']))
#             init_strings.append("self.{}.setValue({})".format(it['name'], it['val']))
#             init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))
#
#             get_strings.append('s.append({})'.format(s[1]))
#             get_strings.append(
#                 's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it['name'] + '.value()))')
#
#             load_strings.append(
#                 "if \"{}\" in params: self.{}.setValue(int(params[\"{}\"]))".format(it['name'], it['name'], it['name']))
#         elif it['vtype'] == 'unsigned number':
#             init_strings.append("self.{} = QtWidgets.QSpinBox()".format(it['name']))
#             init_strings.append("self.{}.setMinimum(0)".format(it['name']))
#             init_strings.append("self.{}.setMaximum(100)".format(it['name']))
#             init_strings.append("self.{}.setValue({})".format(it['name'], it['val']))
#             init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))
#
#             get_strings.append('s.append({})'.format(s[1]))
#             get_strings.append(
#                 's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it['name'] + '.value()))')
#
#             load_strings.append(
#                 "if \"{}\" in params: self.{}.setValue(int(params[\"{}\"]))".format(it['name'], it['name'], it['name']))
#         elif it['vtype'] == 'true/false':
#             init_strings.append("self.{} = QtWidgets.QComboBox()".format(it['name']))
#             init_strings.append("self.{}.addItems(['true','false'])".format(it['name']))
#             init_strings.append("self.{}.setCurrentText('{}')".format(it['name'], it['val']))
#             init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))
#
#             get_strings.append('s.append({})'.format(s[1]))
#             get_strings.append(
#                 's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it[
#                     'name'] + '.currentText()))')
#
#             load_strings.append(
#                 "if \"{}\" in params: self.{}.setCurrentText(params[\"{}\"])".format(it['name'], it['name'],
#                                                                                      it['name']))
#         elif it['vtype'] == 'string':
#             init_strings.append("self.{} = QtWidgets.QLineEdit()".format(it['name']))
#             init_strings.append("self.{}.setText({})".format(it['name'], it['val']))
#             init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))
#
#             get_strings.append('s.append({})'.format(s[1]))
#             get_strings.append(
#                 's.append("' + it['name'] + ' = \\"{}\\" # ' + it['vtype'] + '".format(self.' + it[
#                     'name'] + '.text()))')
#
#             load_strings.append(
#                 "if \"{}\" in params: self.{}.setText(params[\"{}\"])".format(it['name'], it['name'],
#                                                                               it['name']))
#         elif it['vtype'] == 'ignore/add/remove/force':
#             init_strings.append("self.{} = QtWidgets.QComboBox()".format(it['name']))
#             init_strings.append("self.{}.addItems(['ignore','add','remove','force'])".format(it['name']))
#             init_strings.append("self.{}.setCurrentText('{}')".format(it['name'], it['val']))
#             init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))
#
#             get_strings.append('s.append({})'.format(s[1]))
#             get_strings.append(
#                 's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it[
#                     'name'] + '.currentText()))')
#
#             load_strings.append(
#                 "if \"{}\" in params: self.{}.setCurrentText(params[\"{}\"])".format(it['name'], it['name'],
#                                                                                      it['name']))
#         elif it['vtype'] == 'ignore/break/force/lead/trail/join/lead_break/lead_force/trail_break/trail_force':
#             init_strings.append("self.{} = QtWidgets.QComboBox()".format(it['name']))
#             init_strings.append(
#                 "self.{}.addItems(['ignore','break','force','lead','trail','join','lead_break','lead_force','trail_break','trail_force'])".format(
#                     it['name']))
#             init_strings.append("self.{}.setCurrentText('{}')".format(it['name'], it['val']))
#             init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))
#
#             get_strings.append('s.append({})'.format(s[1]))
#             get_strings.append(
#                 's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it[
#                     'name'] + '.currentText()))')
#
#             load_strings.append(
#                 "if \"{}\" in params: self.{}.setCurrentText(params[\"{}\"])".format(it['name'], it['name'],
#                                                                                      it['name']))
#         elif it['vtype'] == 'lf/crlf/cr/auto':
#             init_strings.append("self.{} = QtWidgets.QComboBox()".format(it['name']))
#             init_strings.append("self.{}.addItems(['lf','crlf','cr','auto'])".format(it['name']))
#             init_strings.append("self.{}.setCurrentText('{}')".format(it['name'], it['val']))
#             init_strings.append("self.lt{}.addWidget(self.{}, {}, 1, 1, 4)".format(section_id, it['name'], rowid))
#
#             get_strings.append('s.append({})'.format(s[1]))
#             get_strings.append(
#                 's.append("' + it['name'] + ' = {} # ' + it['vtype'] + '".format(self.' + it[
#                     'name'] + '.currentText()))')
#
#             load_strings.append(
#                 "if \"{}\" in params: self.{}.setCurrentText(params[\"{}\"])".format(it['name'], it['name'],
#                                                                                      it['name']))
#         else:
#             print(it['vtype'])
#
#         filter_string.append(
#             "self.label{}.setVisible(filter=='' or '{}'.find(filter)!=-1)".format(it['name'], it['name']))
#         filter_string.append("if self.tr(\"code_{}\")!=\"code_{}\":".format(it['name'], it['name']))
#         filter_string.append(
#             "    self.code{}.setVisible(filter=='' or '{}'.find(filter)!=-1)".format(it['name'], it['name'],
#                                                                                      it['name']))
#         filter_string.append(
#             "self.name{}.setVisible(filter=='' or '{}'.find(filter)!=-1)".format(it['name'], it['name']))
#         filter_string.append("self.{}.setVisible(filter=='' or '{}'.find(filter)!=-1)".format(it['name'], it['name']))
#         rowid += 1
#         pass
#
# for i in range(1, section_id + 1):
#     init_strings.append(
#         "self.lt{}.addItem(QtWidgets.QSpacerItem(10, 10, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Expanding), self.lt{}.rowCount(), 0)".format(
#             i, i))
#
# get_strings.append("return '\\n'.join(s)")
#
# f = open("uncrustify_ui.py", "w")
# f.write('''from PyQt5 import QtWidgets, QtGui
# import textwrap
# import re
# def wrap(s):
#     if s=="\\n": return "\\n#"
#     my_wrap = textwrap.TextWrapper(width = 80)
#     so = ""
#     for si in s.split("\\n"):
#         wrap_list = my_wrap.wrap(text=si)
#         for line in wrap_list:
#             so += "\\n# "+line.strip()
#     return so
# class Widget(QtWidgets.QTabWidget):
#     def __init__(self, parent=None):
#         ''')
# f.write("\n        ".join(init_strings))
# f.write("\n        ".join(init_strings2))
# f.write('''
#     def get(self):
#         ''')
# f.write("\n        ".join(get_strings))
# f.write('''
#     def load(self, path):
#         regexp = r"^([^#\\s].+)\\s*=\\s*(.*?)\\n"
#         f = open('conf.cfg', encoding = "utf-8")
#         d = f.read()
#         f.close()
#         matches = re.finditer(regexp, d, re.MULTILINE | re.IGNORECASE)
#         params = {}
#         for matchNum, match in enumerate(matches, start = 1):
#             param = match.group(1).strip()
#             val = match.group(2)
#             if val[0] == '"':
#                 val = val[1:val.rfind('"')]
#             elif val[0] == "'":
#                 val = val[1:val.rfind("'")]
#             else:
#                 if val.rfind("#") > 0:
#                     val = val[:val.rfind("#")]
#                 val = val.strip()
#             params[param] = val
#         ''')
# f.write("\n        ".join(load_strings))
# f.write('''
#     def filter(self, filter):
#         ''')
# f.write("\n        ".join(filter_string))
#
# f.close()
#
os.system('pylupdate5 uncrustify_ui.py main.py -ts uncrustify.ts')

if platform.system() == "Windows":
    os.system("main.py")
else:
    os.system("./main.py")
# uncrustify\scripts\release_tool.py
