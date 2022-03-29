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
import html
import platform

import iuliia, markdown

# сворачивание вывода в config
def wrap(s):
    if s == "\\n": return "\\n#"
    my_wrap = textwrap.TextWrapper(width=80)
    so = ""
    for si in s.split("\\n"):
        si = si.replace('↑', '\\x18').replace('↓', '\\x19').replace('·', '\\x0f').replace('¶', '\\x14').replace('←','\\x17').replace('⟼', '\\t') 

        wrap_list = my_wrap.wrap(text=iuliia.translate(html.unescape(si), iuliia.MOSMETRO))
        for line in wrap_list:
            so += "\\n# " + line.strip()
    return so

def label(s):
        return markdown.markdown(s)
    
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
        f = open(path) #, encoding = "utf-8")
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


# help data

help = [
    '''Uncrustify''',
    '''Code Overview''',
    '''Step 1: Tokenize''',
    '''The entire source file is read into a buffer and then it is parsed into what I call 'chunks'.  These are the smallest lexical elements that form keywords, numbers, strings, identifiers, or punctuators.  The type of the chunk or token is as descriptive as needed and may depend on the language.''',
    '''The following information is gathered on each chunk:
    • The token type (see src/c_token_enum.h for a complete list)
    • The original line and column
    • The length (character count) of the chunk
    • The substring
    • Whether the token was right after a tab
    • The number of newlines in the string (mainly for the newline type)
    • Flags (ie found in a preprocessor)''', '''The chunk entry has other fields that get populated later.
    • The parent token type
    • Flags (see cparse_types.h for a complete list)
    • Output column
    • Brace Level (depth of open braces '{')
    • Level (depth of braces, parenthesis, and square brackets)''',
    '''Step 2: Tokenize Cleanup''',
    '''This step changes the type of certain chunks to a simpler type is the more complex type is not needed.''',
    '''This step checks the token after the version token and changes the type of the version chunk appropriately.''',
    '''Another example is the “[“ token followed by “]”.  This gets merged into a single chunk “[]”.''',
    '''Step 3: Brace Cleanup''', '''This is probably the most complicated step in the entire program.''',
    '''It figures out the brace level/depth of each token and inserts virtual braces around unbraced statements.''',
    '''This step also handles the ugliness of the #ifdef preprocessors in C, C++, and C#.''',
    '''To do this, the concept of a parse frame is introduced. I won't get into details here, but the idea is that the parse frame can be pushed onto a stack when it hits #if / #else / #endif preprocessors.''',
    '''A big unresolved problem is what to do when you have unbalanced #if / #else groups.''',
    '''Another big item here is marking expression and statement starts and setting the parent of parenthesis and braces.''',
    '''Step 4: Chunk Identification''',
    '''Once the brace stuff is all figured out, we can do some hard-core pattern matching to further identify each chunk.''',
    '''Everything else is marked in this step, such as:
    • Variable definitions
    • Function calls, prototypes, implementations
    • Words are marked as types
    • Operators like *, -, +, --, and ++ are classified
    • Casts are identified
    • The purpose of each colon (label, case, class, ?:, etc) is identified''',
    '''After all that is taken care of, we are ready to do useful work.''',
    '''Step 5: Brace to Virtual Brace conversion''',
    '''This step converts virtual braces into real braces or, optionally, converts real braces into virtual braces.  Obviously, this is only done on single-statement statements.''',
    '''Because of the macro abuse that C-like language allow, this can be dangerous and break your code.''',
    '''Step 6: Inter-chunk Spacing''',
    '''This step is really simple. It just goes through the list of chunks and looks at them two at a time.  It determines whether to ignore, add or remove spaces between the chunks.''',
    '''Step 7: Newlines ''',
    '''This step inserts and/or removes newlines in key areas.''',
    '''It does things like change brace styles, insert gaps between statements, etc.''',
    '''Step 8: Indenting''',
    '''This does the obvious indenting stuff.''',
    '''Indenting is done by changing the output column of the chunk.''',
    '''It is important to note that this ONLY shifts the entire line left or right.''',
    '''This step is revisited again near the end.''',
    '''Step 9: Aligning''',
    '''This does all the aligning stuff.
    • enums on equal signs
    • structure definitions (including bit fields)
    • regular assignments
    • variable definitions 
    • back-slash newline combos
    • #define values
    • trailing comments
    • etc''',
    '''Step 10: Rendering''',
    '''The rendering step outputs the chunks to a stream.''',
    '''This is rather simple, as the column of each chunk has already been figured out.''',
    '''The only bit of complication is that multi-line comments are formatted in this step.''',
]

# add help
group = "help_page"
grouplt = "help_page_layout"
label = "help_page_label"
classinit += "\n        #================== help page ======================================"
classinit += "\n        self.{} = QtWidgets.QWidget()".format(group)
classinit += "\n        self.{} = QtWidgets.QGridLayout(self.{})".format(grouplt, group)
row_id = 0
s = 'label(' + '""' + '+"\\n\\n"'.join(
    ['+self.tr("{}")'.format(it.replace("\\", "\\\\").replace('"', '\\"').replace('\n', '\\n')) for it in help]) + ')'

classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(label, s)
classinit += "\n        self.label_{}.setWordWrap(True)".format(label)
classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, label, row_id)
row_id += 1

classinit += "\n        self.{}.addItem(" \
             "QtWidgets.QSpacerItem(10, 10, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Expanding), " \
             "{},0)".format(grouplt, row_id)
classinit += "\n        self.scroll_{} = QtWidgets.QScrollArea()".format(group)
classinit += "\n        self.scroll_{}.setWidget(self.{})".format(group, group)
classinit += "\n        self.scroll_{}.setWidgetResizable(True)".format(group)
classinit += "\n        self.addTab(self.scroll_{}, self.tr(\"{}\"))".format(group, 'Help page')

# --------------------------------------

gr_id = 0
options = 0
for gr in groups:
    gr_id += 1
    group = "group_page_{}".format(gr_id)
    grouplt = "group_page_layout_{}".format(gr_id)

    classinit += "\n        #================== {} ".format(gr.desc) + '=' * (80 - len(gr.desc))
    classget += "\n        #================== {} ".format(gr.desc) + '=' * (80 - len(gr.desc))
    classset += "\n        #================== {} ".format(gr.desc) + '=' * (80 - len(gr.desc))

    classinit += "\n        self.{} = QtWidgets.QWidget()".format(group)
    classinit += "\n        self.{} = QtWidgets.QGridLayout(self.{})".format(grouplt, group)
    classinit += "\n        self.{}.addWidget(QtWidgets.QLabel(label(self.tr(\"{} help\"))), 0, 0, 1, 2)".format(
        grouplt,
        gr.desc)

    classget += "\n        s.append('\\n\\n'+'#'*80+wrap(self.tr(\"{}\")))".format(gr.desc)
    classget += "\n        s.append('#'*80)"

    row_id = 1

    for opt in gr.options:
        options += 1
        s = 'label(' + '"<hr>"' + '+"\\n\\n"'.join(
            ['+self.tr("{}", "{}")'.format(it.replace("\\", "\\\\").replace('"', '\\"').replace('\n', '\\n'), opt.name)
             for it in
             opt.desc]) + ')'

        wrap_desc = [it.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '# \\n') for it in opt.desc]
        wrap_desc = '+"\\n#"+'.join(
            ['wrap(self.tr("{}", "{}"))'.format(it.replace("\\", "\\\\").replace('"', '\\"').replace('\n', '\\n'),
                                                opt.name) for it in
             opt.desc])
        classflt += "\n        self.label_{}.setVisible(filter=='' or '{}'.find(filter)!=-1)".format(opt.name, opt.name)
        classflt += "\n        self.option_{}.setVisible(filter=='' or '{}'.find(filter)!=-1)".format(opt.name,
                                                                                                      opt.name)

        if opt.decl == 'Option<line_end_e>':
            # lf/crlf/cr/auto
            if opt.dval is None:
                opt.dval = 'auto'
            classinit += "\n        #--------------------------------------------"
            classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
            classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
            row_id += 1

            classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
            classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name, row_id)
            classinit += "\n        self.option_{} =  QtWidgets.QComboBox()".format(opt.name)
            classinit += "\n        self.option_{}.addItems(['lf', 'crlf', 'cr', 'auto'])".format(opt.name)
            classinit += "\n        self.option_{}.setCurrentText('''{}''')".format(opt.name, str(opt.dval[3:]).lower())
            classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
            row_id += 1
            classget += "\n        s.append({})".format(wrap_desc)
            classget += "\n        s.append('''#\n# Type: lf/crlf/cr/auto''')"
            classget += "\n        s.append('''# Default: {} ''')".format(str(opt.dval[3:]).lower())
            classget += "\n        s.append('{} = ' + self.option_{}.currentText())".format(opt.name, opt.name)
            classset += "\n        if \"{}\" in params: self.option_{}.setCurrentText(params[\"{}\"])".format(opt.name,
                                                                                                              opt.name,
                                                                                                              opt.name)
            pass
        elif opt.decl == 'Option<bool>':
            if opt.dval is None:
                opt.dval = 'false'
            classinit += "\n        #--------------------------------------------"
            classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
            classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
            row_id += 1

            classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
            classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name, row_id)
            classinit += "\n        self.option_{} =  QtWidgets.QComboBox()".format(opt.name)
            classinit += "\n        self.option_{}.addItems(['true','false'])".format(opt.name)
            classinit += "\n        self.option_{}.setCurrentText('''{}''')".format(opt.name, str(opt.dval).lower())
            classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
            row_id += 1
            classget += "\n        s.append({})".format(wrap_desc)
            classget += "\n        s.append('''#\n# Type: true/false''')"
            classget += "\n        s.append('''# Default: {} ''')".format(str(opt.dval).lower())
            classget += "\n        s.append('{} = ' + self.option_{}.currentText())".format(opt.name, opt.name)
            classset += "\n        if \"{}\" in params: self.option_{}.setCurrentText(params[\"{}\"])".format(opt.name,
                                                                                                              opt.name,
                                                                                                              opt.name)
        elif opt.decl == 'Option<string>':
            if opt.dval is None:
                opt.dval = ''
            classinit += "\n        #--------------------------------------------"
            classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
            classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
            row_id += 1

            classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
            classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name, row_id)
            classinit += "\n        self.option_{} =  QtWidgets.QLineEdit('''{}''')".format(opt.name, opt.dval)
            classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
            row_id += 1
            classget += "\n        s.append({})".format(wrap_desc)
            classget += "\n        s.append('''#\n# Type: string''')"
            classget += "\n        s.append('''# Default: \"{}\" ''')".format(opt.dval)
            classget += "\n        s.append('{} = \"' + self.option_{}.text()+'\"\\n')".format(opt.name, opt.name)
            classset += "\n        if \"{}\" in params: self.option_{}.setText(params[\"{}\"])".format(opt.name,
                                                                                                       opt.name,
                                                                                                       opt.name)

        elif opt.decl == 'Option<signed>':
            if opt.dval is None:
                opt.dval = 0
            classinit += "\n        #--------------------------------------------"
            classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
            classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
            row_id += 1

            classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
            classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name, row_id)
            classinit += "\n        self.option_{} =  QtWidgets.QSpinBox()".format(opt.name)
            classinit += "\n        self.option_{}.setMinimum({})".format(opt.name, -1000)
            classinit += "\n        self.option_{}.setMaximum({})".format(opt.name, 1000)
            classinit += "\n        self.option_{}.setValue({})".format(opt.name, opt.dval)
            classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
            row_id += 1
            classget += "\n        s.append({})".format(wrap_desc)
            classget += "\n        s.append('''#\n# Type: signed''')"
            classget += "\n        s.append('''# Default: {} ''')".format(opt.dval)
            classget += "\n        s.append('{} = ' + str(self.option_{}.value()))".format(opt.name, opt.name)
            classset += "\n        if \"{}\" in params: self.option_{}.setValue(int(params[\"{}\"]))".format(opt.name,
                                                                                                             opt.name,
                                                                                                             opt.name)

        elif opt.decl == 'Option<iarf_e>':
            # ignore / add / remove / force / not_defined
            if opt.dval is None:
                opt.dval = 'ignore'
            classinit += "\n        #--------------------------------------------"
            classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
            classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
            row_id += 1

            classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
            classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name, row_id)
            classinit += "\n        self.option_{} =  QtWidgets.QComboBox()".format(opt.name)
            classinit += "\n        self.option_{}.addItems(['ignore','add','remove','force','not_defined'])".format(
                opt.name)
            classinit += "\n        self.option_{}.setCurrentText('''{}''')".format(opt.name, opt.dval)
            classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
            row_id += 1
            classget += "\n        s.append({})".format(wrap_desc)
            classget += "\n        s.append('''#\n# Type: ignore / add / remove / force / not_defined''')"
            classget += "\n        s.append('''# Default: {} ''')".format(opt.dval)
            classget += "\n        s.append('{} = ' + self.option_{}.currentText())".format(opt.name, opt.name)
            classset += "\n        if \"{}\" in params: self.option_{}.setCurrentText(params[\"{}\"])".format(opt.name,
                                                                                                              opt.name,
                                                                                                              opt.name)

        elif opt.decl == 'Option<token_pos_e>':
            # ignore/break/force/lead/trail/join/lead_break/lead_force/trail_break/trail_force
            if opt.dval is None:
                opt.dval = 'ignore'
            classinit += "\n        #--------------------------------------------"
            classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
            classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
            row_id += 1

            classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
            classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
            classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name, row_id)
            classinit += "\n        self.option_{} =  QtWidgets.QComboBox()".format(opt.name)
            classinit += "\n        self.option_{}.addItems(['ignore','break','force','lead','trail','join','lead_break','lead_force','trail_break','trail_force'])".format(
                opt.name)
            classinit += "\n        self.option_{}.setCurrentText('''{}''')".format(opt.name, opt.dval)
            classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
            row_id += 1
            classget += "\n        s.append({})".format(wrap_desc)
            classget += "\n        s.append('''#\n# Type: ignore/break/force/lead/trail/join/lead_break/lead_force/trail_break/trail_force''')"
            classget += "\n        s.append('''# Default: {} ''')".format(opt.dval)
            classget += "\n        s.append('{} = ' + self.option_{}.currentText())".format(opt.name, opt.name)
            classset += "\n        if \"{}\" in params: self.option_{}.setCurrentText(params[\"{}\"])".format(opt.name,
                                                                                                              opt.name,
                                                                                                              opt.name)

        elif opt.decl.startswith('BoundedOption'):
            t = opt.decl.replace('BoundedOption', '').replace('<', '').replace('>', '').split(',')
            if t[0].strip() in ['unsigned', 'signed']:
                if opt.name == 'string_escape_char':
                    opt.dval = 92
                if opt.dval == None:
                    opt.dval = 0
                if opt.dval == 'LWARN':
                    opt.dval = 2

                classinit += "\n        #--------------------------------------------"
                classinit += "\n        self.label_{} = QtWidgets.QLabel({})".format(opt.name, s)
                classinit += "\n        self.label_{}.setWordWrap(True)".format(opt.name)
                classinit += "\n        self.{}.addWidget(self.label_{}, {}, 0, 1, 2)".format(grouplt, opt.name, row_id)
                row_id += 1

                classinit += "\n        self.label_option_{} = QtWidgets.QLabel('''{}''')".format(opt.name, opt.name)
                classinit += "\n        self.label_option_{}.setFont(font_name)".format(opt.name)
                classinit += "\n        self.{}.addWidget(self.label_option_{}, {}, 0)".format(grouplt, opt.name,
                                                                                               row_id)
                classinit += "\n        self.option_{} =  QtWidgets.QSpinBox()".format(opt.name)
                classinit += "\n        self.option_{}.setMinimum({})".format(opt.name, t[1])
                classinit += "\n        self.option_{}.setMaximum({})".format(opt.name, t[2])
                classinit += "\n        self.option_{}.setValue({})".format(opt.name, opt.dval)
                classinit += "\n        self.{}.addWidget(self.option_{}, {}, 1)".format(grouplt, opt.name, row_id)
                row_id += 1
                classget += "\n        s.append({})".format(wrap_desc)
                classget += "\n        s.append('''#\n# Type: {}''')".format(' '.join(t))
                classget += "\n        s.append('''# Default: {} ''')".format(opt.dval)
                classget += "\n        s.append('{} = ' + str(self.option_{}.value()))".format(opt.name, opt.name)
                classset += "\n        if \"{}\" in params: self.option_{}.setValue(int(params[\"{}\"]))".format(
                    opt.name,
                    opt.name,
                    opt.name)

            else:
                perr(opt)
        else:
            perr(opt)

    # end of group loop step
    classinit += "\n        self.{}.addItem(" \
                 "QtWidgets.QSpacerItem(10, 10, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Expanding), " \
                 "{},0)".format(grouplt, row_id)
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
print('options: {}'.format(options))

os.system('pylupdate5 uncrustify_ui.py main.py -ts uncrustify.ts')
# os.system('pylupdate5 uncrustify_ui.py main.py -ts uncrustify.ts -noobsolete')

if platform.system() == "Windows":
    os.system("main.py")
else:
    os.system("./main.py")
# uncrustify\scripts\release_tool.py
