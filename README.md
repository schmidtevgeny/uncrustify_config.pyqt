﻿# О программе

Сей выкидыш программной мысли предназначен для настройки программы `uncrustify`
под потребный стиль форматирования.

Поскольку `UniversalIndent` давно заброшен, а новые опции появляются, пришлось
изгаляться.

Собственно состав комплекта

`main.py` - основной файл, показывает окно, где настраиваются параметры, и 
кнопку для сравнения и т. п.

`uncrustify_ui.py` - файл формы, которая показывается через main.py, 
генерится файлом `create_ui.py` после обновления uncrustify

`create_ui.py` - обновление формы

`uncrustify.qm`
`uncrustify.ts` - файлы перевода на русский
                 
`uncrustify.exe` - актуальная версия uncrustify

`uncrustify.cfg` - стандартный файл конфигурации (генерится вместе с uncrustify_ui.py,
можно удалить)


#Комманды панели

`process` - запустить `uncrustify` с указанными настройками и вывести в окно

`diff` - запустить и вывести в `meld`

```
uncrustify  -c conf.cfg -f in.cpp -o out1.cpp

uncrustify  -c conf1.cfg -f in.cpp -o out2.cpp
```
                                 
`reload` - перечитать `in.cpp`

`vertical` - переключение вида


#Временные файлы

`in.cpp` - входной файл

`out.cpp` - выходной файл `process`

`conf.cfg` - конфигурация для process и `diff`

`conf1.cfg` - вторая конфигурация для `diff`

`out1.cpp`
`out2.cpp` - выходные файлы `diff`

#Замечание касательно перевода

Если в переводе идет строка вида `code_<название опции>`, то ее перевод может 
вставляться в форму как пример кода, а при его отсутствии пропускается.

#Примечания к выпуску

Поскольку у меня на мыше `QToolBox` сжирал все пространство по вертикали, а разбираться было
лень, перевел интерфейс на `QTabWidget` в связке с `QScrollArea`. 
Появился косяк с шириной виджета на разных вкладках, но пока и так сойдет, будет время - поправлю 

Начинаю перевод с чтения конфига на просмотр исходников