from PyQt5 import QtWidgets, QtCore
import sys
import uncrustify_ui
import textwrap

a = QtWidgets.QApplication(sys.argv)
t = QtCore.QTranslator()
t.load('uncrustify')
a.installTranslator(t)
w = uncrustify_ui.Widget()
w.show()
a.exec_()
print(w.get())
