#!/usr/bin/python3
from PyQt5 import QtWidgets, QtCore, QtGui
import sys, os
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

        self.setCentralWidget(self.central)
        self.panel = self.addToolBar(self.tr("main"))

        self.process = QtWidgets.QAction(self.tr("process"))
        self.process.triggered.connect(self.on_process)
        self.panel.addAction(self.process)

        self.diff = QtWidgets.QAction(self.tr("diff"))
        self.diff.triggered.connect(self.on_diff)
        self.panel.addAction(self.diff)

        self.reload = QtWidgets.QAction(self.tr("reload"))
        self.reload.triggered.connect(self.on_reload)
        self.panel.addAction(self.reload)

        self.sppos = QtWidgets.QAction(self.tr("vertical"))
        self.sppos.setCheckable(True)
        self.sppos.toggled.connect(self.on_sppos)
        self.panel.addAction(self.sppos)
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
        f = open("conf.cfg", "w", encoding="utf-8")
        f.write(self.config.get())
        f.close()
        if os.system("uncrustify  -c conf.cfg -f in.cpp -o out.cpp"):
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
        f = open("conf1.cfg", "w", encoding="utf-8")
        f.write(self.config.get())
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
