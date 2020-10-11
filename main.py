from PyQt5 import QtWidgets, QtCore, QtGui
import sys, os
import uncrustify_ui


class MainWidget(QtWidgets.QMainWindow):
    def __init__(self):
        super(MainWidget, self).__init__()
        self.central = QtWidgets.QSplitter(self)
        self.config = uncrustify_ui.Widget(self.central)
        self.right =  QtWidgets.QSplitter()
        self.central.addWidget(self.right)

        self.in_text = QtWidgets.QTextEdit(self.right)
        self.in_text.setFontFamily('Courier')
        self.in_text.setWordWrapMode(0)

        self.out_text = QtWidgets.QTextBrowser(self.right)
        self.out_text.setFontFamily('Courier')
        self.out_text.setWordWrapMode(0)

        self.setCentralWidget(self.central)
        self.panel = self.addToolBar("main")

        self.process = QtWidgets.QAction("process")
        self.process.triggered.connect(self.on_process)
        self.panel.addAction(self.process)

        self.sppos = QtWidgets.QAction("vertical")
        self.sppos.setCheckable(True)
        self.sppos.toggled.connect(self.on_sppos)
        self.panel.addAction(self.sppos)

        if os.path.exists('conf.cfg'):
            self.config.load('conf.py')

        if os.path.exists('in.cpp'):
            f = open("in.cpp", "r", encoding="utf-8")
            self.in_text.setPlainText(f.read())
            f.close()


    def on_sppos(self, b):
        if b:
            self.right.setOrientation(QtCore.Qt.Vertical)
        else:
            self.right.setOrientation(QtCore.Qt.Horizontal)
        pass

    def on_process(self):
        f = open("in.cpp", "w", encoding="utf-8")
        f.write(self.in_text.toPlainText())
        f.close()
        f = open("conf.cfg", "w", encoding="utf-8")
        f.write(self.config.get())
        f.close()
        if os.system("uncrustify.exe  -c conf.cfg -f in.cpp -o out.cpp"):
            pass
        else:
            if os.path.exists('out.cpp'):
                f = open("out.cpp", "r", encoding="utf-8")
                d = f.read()
                f.close()
                self.out_text.setText(d)
        pass



if __name__ == "__main__":
    a = QtWidgets.QApplication(sys.argv)
    translator = QtCore.QTranslator()
    translator.load("uncrustify")
    a.installTranslator(translator)
    w = MainWidget()
    w.show()
    sys.exit(a.exec_())
