#!/usr/bin/python3
from PyQt5 import QtWidgets, QtCore, QtGui
import sys, os, glob
import uncrustify_ui

'''
⮰
1234567890
↑↑↑↑↑↑↑↑↑↑
↓↓↓↓↓↓↓↓↓↓
··········
¶¶¶¶¶¶¶¶¶¶
'''


class MainWidget(QtWidgets.QMainWindow):
    def __init__(self):
        super(MainWidget, self).__init__()
        self.central = QtWidgets.QSplitter(self)
        self.left = QtWidgets.QWidget(self.central)
        self.leftlt = QtWidgets.QVBoxLayout(self.left)
        self.filter = QtWidgets.QLineEdit()
        self.leftlt.addWidget(self.filter)
        self.config = uncrustify_ui.Widget()
        self.leftlt.addWidget(self.config)
        self.right = QtWidgets.QSplitter()
        self.central.addWidget(self.right)
        self.filter.textChanged.connect(self.config.filter)

        self.in_text = QtWidgets.QTextEdit(self.right)
        self.in_text.setFontFamily('Courier')
        self.in_text.setWordWrapMode(0)

        self.out_text = QtWidgets.QTextBrowser(self.right)
        self.out_text.setFontFamily('Courier')
        self.out_text.setWordWrapMode(0)

        self.menu = self.menuBar()
        self.main_menu = self.menu.addMenu(self.tr("File"))
        self.config_menu = self.menu.addMenu(self.tr("Config"))
        self.view_menu = self.menu.addMenu(self.tr("View"))

        self.setCentralWidget(self.central)
        # self.panel = self.addToolBar(self.tr("main"))

        self.process = self.main_menu.addAction(self.tr("process"))
        self.process.triggered.connect(self.on_process)
        # self.panel.addAction(self.process)

        self.diff = self.main_menu.addAction(self.tr("diff"))
        self.diff.triggered.connect(self.on_diff)
        # self.panel.addAction(self.diff)

        self.reload = self.view_menu.addAction(self.tr("reload"))
        self.reload.triggered.connect(self.on_reload)
        # self.panel.addAction(self.reload)

        self.sppos = self.view_menu.addAction(self.tr("vertical"))
        self.sppos.setCheckable(True)
        self.sppos.toggled.connect(self.on_sppos)
        # self.panel.addAction(self.sppos)

        self.filterdef = self.config_menu.addAction(self.tr("Show default"))
        self.filterdef.setCheckable(True)
        self.comment = self.config_menu.addAction(self.tr("Show comment"))
        self.comment.setCheckable(True)

        self.versions = ['latest']
        for v in glob.iglob('ui_*.py'):
            self.versions.append(os.path.splitext(v)[0])
        self.versions.sort()
        self.version = QtWidgets.QComboBox()
        self.version.addItems(self.versions)
        self.version.currentTextChanged.connect(self.ch_version)
        # self.panel.addWidget(self.version)
        self.on_reload()

        self.setWindowTitle("Config uncrustify")

    def ch_version(self, version):
        self.leftlt.removeWidget(self.config)
        if version == 'latest':
            import uncrustify_ui
            self.config = uncrustify_ui.Widget()
        elif version == 'ui_073':
            import ui_073
            self.config = ui_073.Widget()
        elif version == 'ui_074':
            import ui_074
            self.config = ui_074.Widget()
        elif version == 'ui_075':
            import ui_075
            self.config = ui_075.Widget()
        elif version == 'ui_076':
            import ui_076
            self.config = ui_076.Widget()
        self.leftlt.addWidget(self.config)
        self.on_reload()

    def on_sppos(self, b):
        if b:
            self.right.setOrientation(QtCore.Qt.Vertical)
        else:
            self.right.setOrientation(QtCore.Qt.Horizontal)
        pass

    def on_reload(self):
        if os.path.exists('conf.cfg'):
            self.config.load('conf.cfg')

        if os.path.exists('in.cpp'):
            f = open("in.cpp", "r", encoding="utf-8")
            self.in_text.setPlainText(f.read())
            f.close()

    def on_process(self):
        f = open("in.cpp", "w", encoding="utf-8")
        f.write(self.in_text.toPlainText())
        f.close()
        f = open("conf.cfg", "w")  # , encoding="utf-8")
        # DEBUG
        # for it in self.config.get().split('\n'):
        #     if it.startswith('#'): continue
        #     f.write(it + "\n")
        # END DEBUG
        f.write(self.config.get(self.filterdef.isChecked(), self.comment.isChecked()))
        f.close()
        if os.system("uncrustify -c conf.cfg -f in.cpp -o out.cpp"):
            pass
        else:
            if os.path.exists('out.cpp'):
                f = open("out.cpp", "r", encoding="utf-8")
                d = f.read()
                f.close()
                self.out_text.setText(d)
        pass

    def on_diff(self):
        f = open("in.cpp", "w", encoding="utf-8")
        f.write(self.in_text.toPlainText())
        f.close()
        f = open("conf1.cfg", "w")  # , encoding="utf-8")
        f.write(self.config.get(self.filterdef.isChecked(), self.comment.isChecked()))
        f.close()
        if os.system("uncrustify  -c conf.cfg -f in.cpp -o out1.cpp"):
            pass
        elif os.system("uncrustify  -c conf1.cfg -f in.cpp -o out2.cpp"):
            pass
        else:
            if os.path.exists('out1.cpp') and os.path.exists('out2.cpp'):
                os.system('meld out1.cpp out2.cpp')

        pass


if __name__ == "__main__":
    a = QtWidgets.QApplication(sys.argv)
    translator = QtCore.QTranslator()
    translator.load("uncrustify")
    a.installTranslator(translator)
    w = MainWidget()

    w.show()
    sys.exit(a.exec_())
