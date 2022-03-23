<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru_RU">
<context>
    <name>MainWidget</name>
    <message>
        <location filename="main.py" line="39"/>
        <source>main</source>
        <translation>Главная</translation>
    </message>
    <message>
        <location filename="main.py" line="41"/>
        <source>process</source>
        <translation>Обработать</translation>
    </message>
    <message>
        <location filename="main.py" line="45"/>
        <source>diff</source>
        <translation>Сравнить</translation>
    </message>
    <message>
        <location filename="main.py" line="49"/>
        <source>reload</source>
        <translation>Обновить</translation>
    </message>
    <message>
        <location filename="main.py" line="53"/>
        <source>vertical</source>
        <translation>Разбиение</translation>
    </message>
</context>
<context>
    <name>Widget</name>
    <message>
        <location filename="uncrustify_ui.py" line="204"/>
        <source>General options</source>
        <translation>Общие параметры</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="2921"/>
        <source>Spacing options</source>
        <translation>Расстановка пробелов</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="4139"/>
        <source>Indenting options</source>
        <translation>Параметры отступов</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="6151"/>
        <source>Newline adding and removing options</source>
        <translation>Параметры добавления и удаления новых строк</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="6751"/>
        <source>Blank line options</source>
        <translation>Параметры пустых строк</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="6891"/>
        <source>Positioning options</source>
        <translation>Параметры позиционирования</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="6944"/>
        <source>Line splitting options</source>
        <translation>Параметры разбивки строк</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7756"/>
        <source>Code alignment options (not left column spaces/tabs)</source>
        <translation>Опции выравнивания кода (не левые пробелы)</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="35"/>
        <source>General options help</source>
        <translation>Параметры, не относящиеся к изменению текста</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="208"/>
        <source>Spacing options help</source>
        <translation>Позволяют добавить/удалить пробелы в отдельных позициях</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="2925"/>
        <source>Indenting options help</source>
        <translation>Отступы в начале строки</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="4143"/>
        <source>Newline adding and removing options help</source>
        <translation>Разрывы строк внутри конструкций</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="6155"/>
        <source>Blank line options help</source>
        <translation>Пустые строки вне конструкций</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="6755"/>
        <source>Positioning options help</source>
        <translation>Размещение знаков препинания при разрыве строки около этого знака
Хрен знает как все вместе  работает. В качестве примера
a=5+6-8+1*8+6;
code_width       |         |          |
ignore        a=5+   a=5+6-    a=5+6-
break         a=5+   a=5+6-    a=5+6-
force         a=5+   a=5+6-    a=5+6-
lead          a=5    a=5+6     a=5+6
trail         a=5+   a=5+6-    a=5+6-
join          a=5+   a=5+6-    a=5+6-
lead_break    a=5    a=5       a=5
lead_force    a=5    a=5       a=5
trail_break   a=5+   a=5+      a=5+
trail_force   a=5+   a=5+      a=5+


В общем получается примерно так:
ignore break force переносит по необходимости, знак в конце строки
lead переносит по необходимости, знак в начале строки
trail join переносит по необходимости, знак в конце строки
lead_break lead_force переменные в столбик, знак в начале строки
trail_break trail_force переменные в столбик, знак в начале строки</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="6895"/>
        <source>Line splitting options help</source>
        <translation>Параметры разбивки строк</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="6948"/>
        <source>Code alignment options (not left column spaces/tabs) help</source>
        <translation>Разные декоративные выравнивания, типа имена переменных в один столбец</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7760"/>
        <source>Comment modification options help</source>
        <translation>Сворачивание комментариев, конвертирование // в /*, расстановка звездочек и пробелов в начале строки</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The original size of tabs in the input.</source>
        <comment>input_tab_size</comment>
        <translation>Оригинальный размер табуляций во входном файле.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The size of tabs in the output (only used if align_with_tabs=true).</source>
        <comment>output_tab_size</comment>
        <translation>Размер табуляций для выходного файла (только при align_with_tabs=true).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The ASCII value of the string escape char, usually 92 (\) or (Pawn) 94 (^).</source>
        <comment>string_escape_char</comment>
        <translation>ASCII код символа экранирования, обычно 92 (\) или (для Pawn) 94 (^).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Alternate string escape char (usually only used for Pawn).
Only works right before the quote char.</source>
        <comment>string_escape_char2</comment>
        <translation>Альтернативный экранирующий символ (обычно используется только для Pawn).
Работает только непосредственно перед символом кавычки.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Replace tab characters found in string literals with the escape sequence \t
instead.</source>
        <comment>string_replace_tab_chars</comment>
        <translation>Заменить символы табуляции, встречающиеся в строковых литералах, на управляющую последовательность \t.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Allow interpreting &apos;&gt;=&apos; and &apos;&gt;&gt;=&apos; as part of a template in code like
&apos;void f(list&lt;list&lt;B&gt;&gt;=val);&apos;. If true, &apos;assert(x&lt;0 &amp;&amp; y&gt;=3)&apos; will be broken.
Improvements to template detection may make this option obsolete.</source>
        <comment>tok_split_gte</comment>
        <translation>Разрешить интерпретировать &apos;&amp;gt;=&apos; и &apos;&amp;gt;&amp;gt;=&apos; как часть шаблона в коде типа &apos;void f(list&amp;lt;list&amp;lt;B&amp;gt;&amp;gt;=val);&apos;. 
Если true, может сломать &apos;assert(x&amp;lt;0 &amp;&amp; y&amp;gt;=3)&apos; .
Усовершенствования в обнаружении шаблонов могут сделать эту опцию устаревшей.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Disable formatting of NL_CONT (&apos;\\n&apos;) ended lines (e.g. multi-line macros).</source>
        <comment>disable_processing_nl_cont</comment>
        <translation>Отключить форматирование строк, заканчивающихся NL_CONT (&apos;\n&apos;) (например, многострочные макросы).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Specify the marker used in comments to disable processing of part of the
file.</source>
        <comment>disable_processing_cmt</comment>
        <translation>Задать маркер, используемый в комментариях, чтобы запретить обработку части файла.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Specify the marker used in comments to (re)enable processing in a file.</source>
        <comment>enable_processing_cmt</comment>
        <translation>Задать маркер, используемый в комментариях для (повторного) включения обработки файла.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Enable parsing of digraphs.</source>
        <comment>enable_digraphs</comment>
        <translation>Включить разбор диграфов.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Option to allow both disable_processing_cmt and enable_processing_cmt
strings, if specified, to be interpreted as ECMAScript regular expressions.
If true, a regex search will be performed within comments according to the
specified patterns in order to disable/enable processing.</source>
        <comment>processing_cmt_as_regex</comment>
        <translation>Опция, позволяющая интерпретировать строки disable_processing_cmt и enable_processing_cmt, если они указаны, как регулярные выражения ECMAScript.
Если true, то для отключения/включения обработки в комментариях будет выполняться regex-поиск в соответствии с указанными шаблонами.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove the UTF-8 BOM (recommend &apos;remove&apos;).</source>
        <comment>utf8_bom</comment>
        <translation>Добавить или убрать маркер UTF-8 BOM (рекомендуется &apos;remove&apos;).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If the file contains bytes with values between 128 and 255, but is not
UTF-8, then output as UTF-8.</source>
        <comment>utf8_byte</comment>
        <translation>Если файл содержит байты со значениями от 128 до 255, но не UTF-8, то результат выводится как UTF-8.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Force the output encoding to UTF-8.</source>
        <comment>utf8_force</comment>
        <translation>Принудительная кодировка на выходе в UTF-8.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around non-assignment symbolic operators (&apos;+&apos;, &apos;/&apos;, &apos;%&apos;,
&apos;&lt;&lt;&apos;, and so forth).</source>
        <comment>sp_arith</comment>
        <translation>Добавить или убрать пробел вокруг символов операторов, не относящихся к присваиванию (&apos;+&apos;, &apos;/&apos;, &apos;%&apos;, &apos;&amp;lt;&amp;lt;&apos; и так далее).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around arithmetic operators &apos;+&apos; and &apos;-&apos;.</source>
        <comment>sp_arith_additive</comment>
        <translation>Добавить или убрать пробела вокруг символов арифметических операторов &apos;+&apos; и &apos;-&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_arith.</source>
        <comment>sp_arith_additive</comment>
        <translation>Переопределяет sp_arith.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around assignment operator &apos;=&apos;, &apos;+=&apos;, etc.</source>
        <comment>sp_assign</comment>
        <translation>Добавить или убрать пробела вокруг символов операторов c  присваиванием (&apos;=&apos;, +/=&apos;, и тому подобное).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around &apos;=&apos; in C++11 lambda capture specifications.</source>
        <comment>sp_cpp_lambda_assign</comment>
        <translation>Добавить или убрать пробел вокруг &apos;=&apos; в спецификации захвата лямбды в C++11.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_assign.</source>
        <comment>sp_cpp_lambda_assign</comment>
        <translation>Переопределяет sp_assign.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the capture specification of a C++11 lambda when
an argument list is present, as in &apos;[] &lt;here&gt; (int x){ ... }&apos;.</source>
        <comment>sp_cpp_lambda_square_paren</comment>
        <translation>Добавить или убрать пробел после спецификации захвата лямбды C++11, когда присутствует список аргументов, как в &apos;[] &amp;lt;здесь&amp;gt; (int x){ ... }&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the capture specification of a C++11 lambda with
no argument list is present, as in &apos;[] &lt;here&gt; { ... }&apos;.</source>
        <comment>sp_cpp_lambda_square_brace</comment>
        <translation>Добавить или убрать пробел после спецификации захвата лямбды C++11 без списка аргументов, как в &apos;[] &amp;lt;здесь&amp;gt; { ... }&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the opening parenthesis and before the closing
parenthesis of a argument list of a C++11 lambda, as in
&apos;[]( &lt;here&gt; int x &lt;here&gt; ){ ... }&apos;.</source>
        <comment>sp_cpp_lambda_argument_list</comment>
        <translation type="unfinished">Добавить или убрать пробел после открывающей скобки и перед закрывающей скобкой в списке аргументов лямбды C++11, как в &apos;[]( &amp;lt;here&amp;gt; int x &amp;lt;here&amp;gt; ){ .... }&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the argument list of a C++11 lambda, as in
&apos;[](int x) &lt;here&gt; { ... }&apos;.</source>
        <comment>sp_cpp_lambda_paren_brace</comment>
        <translation type="unfinished">Добавить или убрать пробел после списка аргументов лямбды C++11, как в &apos;[](int x) &amp;lt;здесь&amp;gt; { ... }&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between a lambda body and its call operator of an
immediately invoked lambda, as in &apos;[]( ... ){ ... } &lt;here&gt; ( ... )&apos;.</source>
        <comment>sp_cpp_lambda_fparen</comment>
        <translation type="unfinished">Добавить или убрать пробел между телом лямбды и ее оператором вызова немедленно вызываемой лямбды, как в &apos;[]( ... ){ ... } &amp;lt;здесь&amp;gt; ( ... )&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around assignment operator &apos;=&apos; in a prototype.</source>
        <comment>sp_assign_default</comment>
        <translation type="unfinished">Добавить или убрать пробел вокруг присваивания &apos;=&apos; в прототипе.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If set to ignore, use sp_assign.</source>
        <comment>sp_assign_default</comment>
        <translation type="unfinished">Если установлено ignore, использует sp_assign.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before assignment operator &apos;=&apos;, &apos;+=&apos;, etc.</source>
        <comment>sp_before_assign</comment>
        <translation type="unfinished">Добавить или убрать пробела перед символами операторов  присваивания (&apos;=&apos;, +/=&apos;, и тому подобное).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_assign.</source>
        <comment>sp_before_assign</comment>
        <translation type="unfinished">Переопределяет sp_assign.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after assignment operator &apos;=&apos;, &apos;+=&apos;, etc.</source>
        <comment>sp_after_assign</comment>
        <translation type="unfinished">Добавить или убрать пробела после символов операторов  присваивания (&apos;=&apos;, +/=&apos;, и тому подобное).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_assign.</source>
        <comment>sp_after_assign</comment>
        <translation type="unfinished">Переопределяет sp_assign.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space in &apos;NS_ENUM (&apos;.</source>
        <comment>sp_enum_paren</comment>
        <translation type="unfinished">(ObjC) Добавить или убрать пробел в &apos;NS_ENUM (&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around assignment &apos;=&apos; in enum.</source>
        <comment>sp_enum_assign</comment>
        <translation type="unfinished">Добавить или убрать пробел вокруг присваивания &apos;=&apos; в enum.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before assignment &apos;=&apos; in enum.</source>
        <comment>sp_enum_before_assign</comment>
        <translation type="unfinished">Добавить или убрать пробел перед присваивания &apos;=&apos; в enum.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_enum_assign.</source>
        <comment>sp_enum_before_assign</comment>
        <translation type="unfinished">Переопределяет sp_enum_assign.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after assignment &apos;=&apos; in enum.</source>
        <comment>sp_enum_after_assign</comment>
        <translation type="unfinished">Добавить или убрать пробел после присваивания &apos;=&apos; в enum.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_enum_assign.</source>
        <comment>sp_enum_after_assign</comment>
        <translation type="unfinished">Переопределяет sp_enum_assign.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around assignment &apos;:&apos; in enum.</source>
        <comment>sp_enum_colon</comment>
        <translation type="unfinished">Добавить или убрать пробел вокруг присваивания &apos;:&apos; в enum.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around preprocessor &apos;##&apos; concatenation operator.</source>
        <comment>sp_pp_concat</comment>
        <translation type="unfinished">Добавить или убрать пробел вокруг препроцессорной комманды конкатенации &apos;##&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after preprocessor &apos;#&apos; stringify operator.
Also affects the &apos;#@&apos; charizing operator.</source>
        <comment>sp_pp_stringify</comment>
        <translation type="unfinished">Добавить или убрать пробела после оператора строчной обработки препроцессора &apos;#&apos;.
Также влияет на оператор &apos;#@&apos; charizing.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before preprocessor &apos;#&apos; stringify operator
as in &apos;#define x(y) L#y&apos;.</source>
        <comment>sp_before_pp_stringify</comment>
        <translation type="unfinished">Добавить или убрать пробел перед строковым оператором препроцессора &apos;#&apos;, как в &apos;#define x(y) L#y&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around boolean operators &apos;&amp;&amp;&apos; and &apos;||&apos;.</source>
        <comment>sp_bool</comment>
        <translation type="unfinished">Добавить или убрать пробел вокруг логических операторов &apos;&amp;&amp;&apos; и &apos;||&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around compare operator &apos;&lt;&apos;, &apos;&gt;&apos;, &apos;==&apos;, etc.</source>
        <comment>sp_compare</comment>
        <translation type="unfinished">Добавить или убрать пробел вокруг операторов сравнения &apos;&amp;lt;&apos;, &apos;&amp;gt;&apos;, &apos;==&apos;, и т.д.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside &apos;(&apos; and &apos;)&apos;.</source>
        <comment>sp_inside_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри скобок &apos;(&apos; и &apos;)&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between nested parentheses, i.e. &apos;((&apos; vs. &apos;) )&apos;.</source>
        <comment>sp_paren_paren</comment>
        <translation>Добавить или убрать пробел между вложенными скобками, т.е &apos;(·(&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between back-to-back parentheses, i.e. &apos;)(&apos; vs. &apos;) (&apos;.</source>
        <comment>sp_cparen_oparen</comment>
        <translation>Добавить или убрать пробел между соседними скобками, т.е. &apos;)·(&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to balance spaces inside nested parentheses.</source>
        <comment>sp_balance_nested_parens</comment>
        <translation type="unfinished">Балансировать ли пробелы внутри вложенных скобок.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;)&apos; and &apos;{&apos;.</source>
        <comment>sp_paren_brace</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;)&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between nested braces, i.e. &apos;{{&apos; vs. &apos;{ {&apos;.</source>
        <comment>sp_brace_brace</comment>
        <translation type="unfinished">Добавить или убрать пробел между вложенными фигурными скобками, т.е. &apos;{{&apos; vs &apos;{·{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before pointer star &apos;*&apos;.</source>
        <comment>sp_before_ptr_star</comment>
        <translation type="unfinished">Добавить или убрать пробел перед символом указателя &apos;*&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before pointer star &apos;*&apos; that isn&apos;t followed by a
variable name. If set to ignore, sp_before_ptr_star is used instead.</source>
        <comment>sp_before_unnamed_ptr_star</comment>
        <translation type="unfinished">Добавляет или удаляет пробел перед звездочкой указателя &apos;*&apos;, за которой не следует имя переменной.
Если установлено значение ignore, вместо него используется sp_before_ptr_star.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between pointer stars &apos;*&apos;, as in &apos;int ***a;&apos;.</source>
        <comment>sp_between_ptr_star</comment>
        <translation type="unfinished">Добавить или убрать пробел перед символами указателя &apos;*&apos;, как в &apos;int ***a;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after pointer star &apos;*&apos;, if followed by a word.</source>
        <comment>sp_after_ptr_star</comment>
        <translation type="unfinished">Добавить или убрать пробел после символа указателя &apos;*&apos;, если за ним следует слово.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_type_func.</source>
        <comment>sp_after_ptr_star</comment>
        <translation type="unfinished">Переопределяет sp_type_func.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after pointer caret &apos;^&apos;, if followed by a word.</source>
        <comment>sp_after_ptr_block_caret</comment>
        <translation type="unfinished">(CLI.NET) Добавить или убрать пробел после символа указателя &apos;^&apos;, если за ним следует слово.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after pointer star &apos;*&apos;, if followed by a qualifier.</source>
        <comment>sp_after_ptr_star_qualifier</comment>
        <translation type="unfinished">Добавить или убрать пробел после символа указателя &apos;*&apos;, если за ним следует квалификатор.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after a pointer star &apos;*&apos;, if followed by a function
prototype or function definition.</source>
        <comment>sp_after_ptr_star_func</comment>
        <translation type="unfinished">Добавить или убрать пробел после звезды указателя &apos;*&apos;, если за ней следует прототип функции или определение функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_after_ptr_star and sp_type_func.</source>
        <comment>sp_after_ptr_star_func</comment>
        <translation type="unfinished">Переопределяет sp_after_ptr_star и sp_type_func.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after a pointer star &apos;*&apos; in the trailing return of a
function prototype or function definition.</source>
        <comment>sp_after_ptr_star_trailing</comment>
        <translation type="unfinished">Добавить или убрать пробел после указателя &apos;*&apos; в конце возврата прототипа функции или определения функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between the pointer star &apos;*&apos; and the name of the variable
in a function pointer definition.</source>
        <comment>sp_ptr_star_func_var</comment>
        <translation type="unfinished">Добавить или убрать пробел между звездочкой указателя &apos;*&apos; и именем переменной в определении указателя функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after a pointer star &apos;*&apos;, if followed by an open
parenthesis, as in &apos;void* (*)()&apos;.</source>
        <comment>sp_ptr_star_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел после звезды указателя &apos;*&apos;, если за ней следует открытая скобка, как в &apos;void* (*)()&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before a pointer star &apos;*&apos;, if followed by a function
prototype or function definition.</source>
        <comment>sp_before_ptr_star_func</comment>
        <translation type="unfinished">Добавить или убрать пробел перед звездой указателя &apos;*&apos;, если за ней следует прототип функции или определение функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before a pointer star &apos;*&apos; in the trailing return of a
function prototype or function definition.</source>
        <comment>sp_before_ptr_star_trailing</comment>
        <translation type="unfinished">Добавить или убрать пробел перед звездочкой указателя &apos;*&apos; в конце возврата прототипа функции или определения функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before a reference sign &apos;&amp;&apos;.</source>
        <comment>sp_before_byref</comment>
        <translation type="unfinished">Добавить или убрать пробел перед символом ссылки &apos;&amp;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before a reference sign &apos;&amp;&apos; that isn&apos;t followed by a
variable name. If set to ignore, sp_before_byref is used instead.</source>
        <comment>sp_before_unnamed_byref</comment>
        <translation type="unfinished">Добавляет или удаляет пробел перед знаком ссылки &apos;&amp;&apos;, за которым не следует имя переменной. 
Если установлено значение ignore, вместо него используется sp_before_byref.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after reference sign &apos;&amp;&apos;, if followed by a word.</source>
        <comment>sp_after_byref</comment>
        <translation type="unfinished">Добавить или убрать пробел после символа ссылки &apos;&amp;&apos;, если за ним следует слово.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_type_func.</source>
        <comment>sp_after_byref</comment>
        <translation type="unfinished">Переопределяет sp_type_func.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after a reference sign &apos;&amp;&apos;, if followed by a function
prototype or function definition.</source>
        <comment>sp_after_byref_func</comment>
        <translation type="unfinished">Добавить или убрать пробел после знака ссылки &apos;&amp;&apos;, если за ним следует прототип функции или определение функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_after_byref and sp_type_func.</source>
        <comment>sp_after_byref_func</comment>
        <translation type="unfinished">Переопределяет sp_after_byref и sp_type_func.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before a reference sign &apos;&amp;&apos;, if followed by a function
prototype or function definition.</source>
        <comment>sp_before_byref_func</comment>
        <translation type="unfinished">Добавить или убрать пробел перед ссылочным знаком &apos;&amp;&apos;, если за ним следует прототип функции или определение функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between type and word. In cases where total removal of
whitespace would be a syntax error, a value of &apos;remove&apos; is treated the same
as &apos;force&apos;.</source>
        <comment>sp_after_type</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>This also affects some other instances of space following a type that are
not covered by other options; for example, between the return type and
parenthesis of a function type template argument, between the type and
parenthesis of an array parameter, or between &apos;decltype(...)&apos; and the
following word.</source>
        <comment>sp_after_type</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;decltype(...)&apos; and word,
brace or function call.</source>
        <comment>sp_after_decltype</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;decltype(...)&apos; и словом, скобкой или вызовом функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove space before the parenthesis in the D constructs
&apos;template Foo(&apos; and &apos;class Foo(&apos;.</source>
        <comment>sp_before_template_paren</comment>
        <translation>(D) Добавить или убрать пробел перед скобкой ( в D-конструкторе &apos;template Foo·(&apos; и &apos;class Foo·(&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;template&apos; and &apos;&lt;&apos;.
If set to ignore, sp_before_angle is used.</source>
        <comment>sp_template_angle</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;template&apos; и &apos;&amp;lt;&apos;.
Если установлено значение ignore, используется sp_before_angle.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before &apos;&lt;&apos;.</source>
        <comment>sp_before_angle</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;&amp;lt;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside &apos;&lt;&apos; and &apos;&gt;&apos;.</source>
        <comment>sp_inside_angle</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри угловых скобок &apos;&amp;lt;&apos; и &apos;&amp;gt;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside &apos;&lt;&gt;&apos;.</source>
        <comment>sp_inside_angle_empty</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри &apos;&amp;lt;&amp;gt;&apos;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;&gt;&apos; and &apos;:&apos;.</source>
        <comment>sp_angle_colon</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;&amp;gt;&apos; и &apos;:&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;&gt;&apos;.</source>
        <comment>sp_after_angle</comment>
        <translation type="unfinished">Добавить или убрать пробел после &apos;&amp;lt;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;&gt;&apos; and &apos;(&apos; as found in &apos;new List&lt;byte&gt;(foo);&apos;.</source>
        <comment>sp_angle_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;&amp;gt;&apos; и &apos;(&apos; как  в `new List&amp;lt;byte&amp;gt;·(foo);`.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;&gt;&apos; and &apos;()&apos; as found in &apos;new List&lt;byte&gt;();&apos;.</source>
        <comment>sp_angle_paren_empty</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;&amp;gt;&apos; и &apos;()&apos; как в `new List&amp;lt;byte&amp;gt;·();`.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;&gt;&apos; and a word as in &apos;List&lt;byte&gt; m;&apos; or
&apos;template &lt;typename T&gt; static ...&apos;.</source>
        <comment>sp_angle_word</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;&amp;gt;&apos; и словом, как в &apos;List&amp;lt;byte&amp;gt; m;&apos; или
&apos;template &amp;lt;typename T&amp;gt; static ...&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;&gt;&apos; and &apos;&gt;&apos; in &apos;&gt;&gt;&apos; (template stuff).</source>
        <comment>sp_angle_shift</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;&amp;gt;&apos; и &apos;&amp;gt;&apos; в &apos;&amp;gt;&amp;gt;&apos; (вложенные шаблоны).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C++11) Permit removal of the space between &apos;&gt;&gt;&apos; in &apos;foo&lt;bar&lt;int&gt; &gt;&apos;. Note
that sp_angle_shift cannot remove the space without this option.</source>
        <comment>sp_permit_cpp11_shift</comment>
        <translation>(C++11) Разрешить удаление пробела между &apos;&amp;gt;&amp;gt;&apos; в &apos;foo&amp;lt;bar&amp;lt;int&amp;gt;·&amp;gt;&apos;.&lt;br&gt;
Обратите внимание что sp_angle_shift не может удалить пробел без этой опции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before &apos;(&apos; of control statements (&apos;if&apos;, &apos;for&apos;, &apos;switch&apos;,
&apos;while&apos;, etc.).</source>
        <comment>sp_before_sparen</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;(&apos; управляющих операторов (&apos;if&apos;, &apos;for&apos;, &apos;switch&apos;,
&apos;while&apos; и т.д.).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside &apos;(&apos; and &apos;)&apos; of control statements other than
&apos;for&apos;.</source>
        <comment>sp_inside_sparen</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри &apos;(&apos; и &apos;)&apos; управляющих операторов, кроме
&apos;for&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;(&apos; of control statements other than &apos;for&apos;.</source>
        <comment>sp_inside_sparen_open</comment>
        <translation type="unfinished">Добавить или убрать пробел после &apos;(&apos; в управляющих операторах, отличных от &apos;for&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_inside_sparen.</source>
        <comment>sp_inside_sparen_open</comment>
        <translation type="unfinished">Переопределяет sp_inside_sparen.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before &apos;)&apos; of control statements other than &apos;for&apos;.</source>
        <comment>sp_inside_sparen_close</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;)&apos; в управляющих операторах, отличных от &apos;for&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_inside_sparen.</source>
        <comment>sp_inside_sparen_close</comment>
        <translation type="unfinished">Переопределяет sp_inside_sparen.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside &apos;(&apos; and &apos;)&apos; of &apos;for&apos; statements.</source>
        <comment>sp_inside_for</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри &apos;(&apos; и &apos;)&apos; в операторах &apos;for&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;(&apos; of &apos;for&apos; statements.</source>
        <comment>sp_inside_for_open</comment>
        <translation type="unfinished">Добавить или убрать пробел после &apos;(&apos; в операторах &apos;for&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_inside_for.</source>
        <comment>sp_inside_for_open</comment>
        <translation type="unfinished">Переопределяет sp_inside_for.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before &apos;)&apos; of &apos;for&apos; statements.</source>
        <comment>sp_inside_for_close</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;)&apos; в операторах &apos;for&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_inside_for.</source>
        <comment>sp_inside_for_close</comment>
        <translation type="unfinished">Переопределяет sp_inside_for.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;((&apos; or &apos;))&apos; of control statements.</source>
        <comment>sp_sparen_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;((&apos; или &apos;))&apos; управляющих утверждений.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;)&apos; of control statements.</source>
        <comment>sp_after_sparen</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;)&apos; в управляющих конструкциях.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;)&apos; and &apos;{&apos; of control statements.</source>
        <comment>sp_sparen_brace</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;)&apos; и &apos;{&apos; в управляющих операторах.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;do&apos; and &apos;{&apos;.</source>
        <comment>sp_do_brace_open</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;do&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;}&apos; and &apos;while&apos;.</source>
        <comment>sp_brace_close_while</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;}&apos; и &apos;while&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;while&apos; and &apos;(&apos;. Overrides sp_before_sparen.</source>
        <comment>sp_while_paren_open</comment>
        <translation type="unfinished">Добавляет или удаляет пробел между &apos;while&apos; и &apos;(&apos;. Переопределяет sp_before_sparen.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove space between &apos;invariant&apos; and &apos;(&apos;.</source>
        <comment>sp_invariant_paren</comment>
        <translation>(D) Добавить или убрать пробел между &apos;invariant&apos; и &apos;(&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove space after the &apos;)&apos; in &apos;invariant (C) c&apos;.</source>
        <comment>sp_after_invariant_paren</comment>
        <translation>(D) Добавить или убрать пробел после &apos;)&apos; в &apos;invariant (C) c&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before empty statement &apos;;&apos; on &apos;if&apos;, &apos;for&apos; and &apos;while&apos;.</source>
        <comment>sp_special_semi</comment>
        <translation type="unfinished">Добавить или убрать пробел перед пустым оператором &apos;;&apos; в &apos;if&apos;, &apos;for&apos; и &apos;while&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before &apos;;&apos;.</source>
        <comment>sp_before_semi</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before &apos;;&apos; in non-empty &apos;for&apos; statements.</source>
        <comment>sp_before_semi_for</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;;&apos; в непустом выражении &apos;for&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before a semicolon of an empty left part of a for
statement, as in &apos;for ( &lt;here&gt; ; ; )&apos;.</source>
        <comment>sp_before_semi_for_empty</comment>
        <translation type="unfinished">Добавить или убрать пробел перед точкой с запятой пустой левой части оператора for, как в &apos;for ( &amp;lt;here&amp;gt; ; ; )&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between the semicolons of an empty middle part of a for
statement, as in &apos;for ( ; &lt;here&gt; ; )&apos;.</source>
        <comment>sp_between_semi_for_empty</comment>
        <translation type="unfinished">Добавить или убрать пробел между точками с запятой в пустой средней части оператора for, как в &apos;for ( ; &amp;lt;здесь&amp;gt; ; )&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;;&apos;, except when followed by a comment.</source>
        <comment>sp_after_semi</comment>
        <translation type="unfinished">Добавить или убрать пробел после &apos;;&apos;, за исключением случаев, когда после этого следует комментарий.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;;&apos; in non-empty &apos;for&apos; statements.</source>
        <comment>sp_after_semi_for</comment>
        <translation type="unfinished">Добавить или убрать пробел после &apos;;&apos; в непустых заявлениях &amp;quot;for&amp;quot;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the final semicolon of an empty part of a for
statement, as in &apos;for ( ; ; &lt;here&gt; )&apos;.</source>
        <comment>sp_after_semi_for_empty</comment>
        <translation type="unfinished">Добавить или убрать пробел после точки с запятой в пустой части оператора for, как в &apos;for ( ; ; &amp;lt;здесь&amp;gt; )&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before &apos;[&apos; (except &apos;[]&apos;).</source>
        <comment>sp_before_square</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;[&apos; (кроме &apos;[]&apos;).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before &apos;[&apos; for a variable definition.</source>
        <comment>sp_before_vardef_square</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;[&apos; в определении переменной.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before &apos;[&apos; for asm block.</source>
        <comment>sp_before_square_asm_block</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;[&apos; для ассемблерного блока.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before &apos;[]&apos;.</source>
        <comment>sp_before_squares</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;[]&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before C++17 structured bindings.</source>
        <comment>sp_cpp_before_struct_binding</comment>
        <translation type="unfinished">Добавить или убрать пробел перед распаковкой структуры C++17.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside a non-empty &apos;[&apos; and &apos;]&apos;.</source>
        <comment>sp_inside_square</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри непустого &apos;[&apos; и &apos;]&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside &apos;[]&apos;.</source>
        <comment>sp_inside_square_empty</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри &apos;[]&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space inside a non-empty Objective-C boxed array &apos;@[&apos; and
&apos;]&apos;. If set to ignore, sp_inside_square is used.</source>
        <comment>sp_inside_square_oc_array</comment>
        <translation>(OC) Добавить или убрать пробел внутри непустого боксового массива Objective-C &apos;@[&apos; и &apos;]&apos;. &lt;br&gt;
Если установлено значение ignore, используется sp_inside_square.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;,&apos;, i.e. &apos;a,b&apos; vs. &apos;a, b&apos;.</source>
        <comment>sp_after_comma</comment>
        <translation type="unfinished">Добавить или убрать пробел после запятой, т.е. &apos;a,b&apos; против &apos;a,b&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before &apos;,&apos;, i.e. &apos;a,b&apos; vs. &apos;a ,b&apos;.</source>
        <comment>sp_before_comma</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;,&apos;, т.е. &apos;a,b&apos; против &apos;a ,b&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) Add or remove space between &apos;,&apos; and &apos;]&apos; in multidimensional array type
like &apos;int[,,]&apos;.</source>
        <comment>sp_after_mdatype_commas</comment>
        <translation>(C#) Добавить или убрать пробел между &apos;,&apos; и &apos;]&apos; в многомерных массивах типа &apos;int[,,]&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) Add or remove space between &apos;[&apos; and &apos;,&apos; in multidimensional array type
like &apos;int[,,]&apos;.</source>
        <comment>sp_before_mdatype_commas</comment>
        <translation>Добавить или убрать пробел между &apos;[&apos; и &apos;,&apos; в многомерных массивах типа &apos;int[,,]&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) Add or remove space between &apos;,&apos; in multidimensional array type
like &apos;int[,,]&apos;.</source>
        <comment>sp_between_mdatype_commas</comment>
        <translation>(C#) Добавить или убрать пробел между &apos;,&apos; в многомерных массивах типа &apos;int[,,]&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between an open parenthesis and comma,
i.e. &apos;(,&apos; vs. &apos;( ,&apos;.</source>
        <comment>sp_paren_comma</comment>
        <translation type="unfinished">Добавить или убрать пробел между открытой скобкой и запятой, т.е. &apos;(,&apos; против &apos;( ,&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the variadic &apos;...&apos; when preceded by a
non-punctuator.
The value REMOVE will be overriden with FORCE</source>
        <comment>sp_after_ellipsis</comment>
        <translation type="unfinished">Добавить или убрать пробел после переменной &apos;...&apos;, если перед ней стоит непунктуатор.
Значение REMOVE будет отменено значением FORCE</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before the variadic &apos;...&apos; when preceded by a
non-punctuator.
The value REMOVE will be overriden with FORCE</source>
        <comment>sp_before_ellipsis</comment>
        <translation type="unfinished">Добавить или убрать пробел перед переменной &apos;...&apos;, если перед ней стоит непунктуатор.
Значение REMOVE будет отменено значением FORCE</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between a type and &apos;...&apos;.</source>
        <comment>sp_type_ellipsis</comment>
        <translation type="unfinished">Добавить или убрать пробел между типом и &amp;quot;...&amp;quot;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between a &apos;*&apos; and &apos;...&apos;.</source>
        <comment>sp_ptr_type_ellipsis</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;*&apos; и &apos;...&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove space between a type and &apos;?&apos;.</source>
        <comment>sp_type_question</comment>
        <translation>(D) Добавить или убрать пробел между типом и &apos;?&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;)&apos; and &apos;...&apos;.</source>
        <comment>sp_paren_ellipsis</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;)&apos; и &apos;...&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;&amp;&amp;&apos; and &apos;...&apos;.</source>
        <comment>sp_byref_ellipsis</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;&amp;&amp;&apos; и &apos;...&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;)&apos; and a qualifier such as &apos;const&apos;.</source>
        <comment>sp_paren_qualifier</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;)&apos; и классификатором, таким как &apos;const&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;)&apos; and &apos;noexcept&apos;.</source>
        <comment>sp_paren_noexcept</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;)&apos; и &apos;noexcept&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after class &apos;:&apos;.</source>
        <comment>sp_after_class_colon</comment>
        <translation type="unfinished">Добавлять или удалять пробел после двоеточия класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before class &apos;:&apos;.</source>
        <comment>sp_before_class_colon</comment>
        <translation type="unfinished">Добавлять или удалять пробел перед двоеточием класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after class constructor &apos;:&apos;.</source>
        <comment>sp_after_constr_colon</comment>
        <translation type="unfinished">Добавлять или удалять пробел после двоеточия конструктора класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before class constructor &apos;:&apos;.</source>
        <comment>sp_before_constr_colon</comment>
        <translation type="unfinished">Добавлять или удалять пробел перед двоеточием конструктора класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before case &apos;:&apos;.</source>
        <comment>sp_before_case_colon</comment>
        <translation type="unfinished">Добавлять или удалять пробел перед двоеточием в case.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;operator&apos; and operator sign.</source>
        <comment>sp_after_operator</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;operator&apos; и знаком оператора.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between the operator symbol and the open parenthesis, as
in &apos;operator ++(&apos;.</source>
        <comment>sp_after_operator_sym</comment>
        <translation type="unfinished">Добавить или убрать пробел между символом оператора и открытой скобкой, как в &apos;operator ++(&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_after_operator_sym when the operator has no arguments, as in
&apos;operator *()&apos;.</source>
        <comment>sp_after_operator_sym_empty</comment>
        <translation type="unfinished">Отменяет sp_after_operator_sym, когда оператор не имеет аргументов, как в &apos;operator *()&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after C/D cast, i.e. &apos;cast(int)a&apos; vs. &apos;cast(int) a&apos; or
&apos;(int)a&apos; vs. &apos;(int) a&apos;.</source>
        <comment>sp_after_cast</comment>
        <translation type="unfinished">Добавить или убрать пробел после C/D каста, т.е. &apos;cast(int)a&apos; против &apos;cast(int) a&apos; или &apos;(int)a&apos; против &apos;(int) a&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove spaces inside cast parentheses.</source>
        <comment>sp_inside_paren_cast</comment>
        <translation type="unfinished">Добавить или убрать пробелов внутри круглых скобок в преобразовнии типов.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between the type and open parenthesis in a C++ cast,
i.e. &apos;int(exp)&apos; vs. &apos;int (exp)&apos;.</source>
        <comment>sp_cpp_cast_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между типом и открытой круглой скобкой при приведении в C++, например, &apos;int(exp)&apos; против &apos;int (exp)&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;sizeof&apos; and &apos;(&apos;.</source>
        <comment>sp_sizeof_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;sizeof&apos; и &apos;(&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;sizeof&apos; and &apos;...&apos;.</source>
        <comment>sp_sizeof_ellipsis</comment>
        <translation type="unfinished">Добавить или убрать пробел между  &apos;sizeof&apos; и &apos;...&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;sizeof...&apos; and &apos;(&apos;.</source>
        <comment>sp_sizeof_ellipsis_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между  &apos;sizeof...&apos; и &apos;(&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;...&apos; and a parameter pack.</source>
        <comment>sp_ellipsis_parameter_pack</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;...&apos; и упаковкой параметров.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between a parameter pack and &apos;...&apos;.</source>
        <comment>sp_parameter_pack_ellipsis</comment>
        <translation type="unfinished">Добавить или убрать пробел между упаковкой параметров и &apos;...&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;decltype&apos; and &apos;(&apos;.</source>
        <comment>sp_decltype_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между  &apos;decltype&apos; и &apos;(&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(Pawn) Add or remove space after the tag keyword.</source>
        <comment>sp_after_tag</comment>
        <translation>(Pawn) Добавить или убрать пробел после ключевого слова tag.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside enum &apos;{&apos; and &apos;}&apos;.</source>
        <comment>sp_inside_braces_enum</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри enum &apos;{&apos; и &apos;}&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside struct/union &apos;{&apos; and &apos;}&apos;.</source>
        <comment>sp_inside_braces_struct</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри struct/union &apos;{&apos; и &apos;}&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space inside Objective-C boxed dictionary &apos;{&apos; and &apos;}&apos;</source>
        <comment>sp_inside_braces_oc_dict</comment>
        <translation>(OC) Добавить или убрать пробел в словаре &apos;{&apos; и &apos;}&apos;</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after open brace in an unnamed temporary
direct-list-initialization
if statement is a brace_init_lst
works only if sp_brace_brace is set to ignore.</source>
        <comment>sp_after_type_brace_init_lst_open</comment>
        <translation type="unfinished">Добавить или убрать пробел после открывающей скобки в безымянном временном прямом списке-инициализации, если оператор является инициализатором списком 
Работает только если sp_brace_brace имеет значение ignore.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before close brace in an unnamed temporary
direct-list-initialization
if statement is a brace_init_lst
works only if sp_brace_brace is set to ignore.</source>
        <comment>sp_before_type_brace_init_lst_close</comment>
        <translation type="unfinished">Добавить или убрать пробел перед закрывающей скобкой в безымянном временном прямом списке-инициализации, если оператор является инициализатором списком 
Работает только если sp_brace_brace имеет значение ignore.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside an unnamed temporary direct-list-initialization
if statement is a brace_init_lst
works only if sp_brace_brace is set to ignore
works only if sp_before_type_brace_init_lst_close is set to ignore.</source>
        <comment>sp_inside_type_brace_init_lst</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри безымянного временного прямого списка-инициализации, если оператор является инициализацией списком
работает только если sp_brace_brace имеет значение ignore
работает только если sp_before_type_brace_init_lst_close имеет значение ignore.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside &apos;{&apos; and &apos;}&apos;.</source>
        <comment>sp_inside_braces</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри &apos;{&apos; и &apos;}&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside &apos;{}&apos;.</source>
        <comment>sp_inside_braces_empty</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри &apos;{}&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around trailing return operator &apos;-&gt;&apos;.</source>
        <comment>sp_trailing_return</comment>
        <translation type="unfinished">Добавить или убрать пробел вокруг оператора &apos;-&amp;gt;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between return type and function name. A minimum of 1
is forced except for pointer return types.</source>
        <comment>sp_type_func</comment>
        <translation type="unfinished">Добавить или убрать пробел между возвращаемым типом и именем функции. 
Минимум 1 обязателен, за исключением типов возврата указателей.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between type and open brace of an unnamed temporary
direct-list-initialization.</source>
        <comment>sp_type_brace_init_lst</comment>
        <translation type="unfinished">Добавить или убрать пробел между типом и открытой скобкой безымянного временного прямого списка-инициализации.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between function name and &apos;(&apos; on function declaration.</source>
        <comment>sp_func_proto_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между именем функции и &apos;(&apos; в объявлении функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between function name and &apos;()&apos; on function declaration
without parameters.</source>
        <comment>sp_func_proto_paren_empty</comment>
        <translation type="unfinished">Добавить или убрать пробел между именем функции и &apos;()&apos; при объявлении функции без параметров.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between function name and &apos;(&apos; with a typedef specifier.</source>
        <comment>sp_func_type_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между именем функции и &apos;(&apos; при использовании спецификатора typedef.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between alias name and &apos;(&apos; of a non-pointer function type typedef.</source>
        <comment>sp_func_def_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между именем псевдонима и &apos;(&apos; типа не указателя функции typedef.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between function name and &apos;()&apos; on function definition
without parameters.</source>
        <comment>sp_func_def_paren_empty</comment>
        <translation type="unfinished">Добавить или убрать пробел между именем функции и &apos;()&apos; в определении функции без параметров.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside empty function &apos;()&apos;.
Overrides sp_after_angle unless use_sp_after_angle_always is set to true.</source>
        <comment>sp_inside_fparens</comment>
        <translation type="unfinished">Добавляет или удаляет пробел внутри пустой функции &apos;()&apos;.
Переопределяет sp_after_angle, если для use_sp_after_angle_always не установлено значение true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside function &apos;(&apos; and &apos;)&apos;.</source>
        <comment>sp_inside_fparen</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри скобок функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside the first parentheses in a function type, as in
&apos;void (*x)(...)&apos;.</source>
        <comment>sp_inside_tparen</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри первых круглых скобок в типе функции, как в примере &apos;void (*x)(...)&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between the &apos;)&apos; and &apos;(&apos; in a function type, as in
&apos;void (*x)(...)&apos;.</source>
        <comment>sp_after_tparen_close</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;)&apos; и &apos;(&apos; в типе функции, как в &apos;void (*x)(...)&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;]&apos; and &apos;(&apos; when part of a function call.</source>
        <comment>sp_square_fparen</comment>
        <translation type="unfinished">Добавлять или удалять пробел между &apos;]&apos; и &apos;(&apos; при вызове функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;)&apos; and &apos;{&apos; of function.</source>
        <comment>sp_fparen_brace</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;)&apos; и &apos;{&apos; в функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;)&apos; and &apos;{&apos; of a function call in object
initialization.</source>
        <comment>sp_fparen_brace_initializer</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;)&apos; и &apos;{&apos; вызова функции при инициализации объекта.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_fparen_brace.</source>
        <comment>sp_fparen_brace_initializer</comment>
        <translation type="unfinished">Переопределяет sp_fparen_brace.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(Java) Add or remove space between &apos;)&apos; and &apos;{{&apos; of double brace initializer.</source>
        <comment>sp_fparen_dbrace</comment>
        <translation>(Java) Добавить или убрать пробел между &apos;)&apos; и &apos;{{&apos; инициализатора двойной скобки.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between function name and &apos;(&apos; on function calls.</source>
        <comment>sp_func_call_paren</comment>
        <translation type="unfinished">Добавить или убрать пробела между именем функции и &apos;(&apos; при вызове функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between function name and &apos;()&apos; on function calls without
parameters. If set to ignore (the default), sp_func_call_paren is used.</source>
        <comment>sp_func_call_paren_empty</comment>
        <translation type="unfinished">Добавить или убрать пробела между именем функции и &apos;()&apos; при вызове функции без параметров. 
Если установлено значение ignore (по умолчанию), используется sp_func_call_paren.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between the user function name and &apos;(&apos; on function
calls. You need to set a keyword to be a user function in the config file,
like:
  set func_call_user tr _ i18n</source>
        <comment>sp_func_call_user_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между именем пользовательской функции и &apos;(&apos; при вызове функции. 
Вам нужно установить ключевое слово в качестве пользовательской функции в конфигурационном файле, например:
  set func_call_user tr _ i18n</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside user function &apos;(&apos; and &apos;)&apos;.</source>
        <comment>sp_func_call_user_inside_fparen</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри скобок пользовательской функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between nested parentheses with user functions,
i.e. &apos;((&apos; vs. &apos;( (&apos;.</source>
        <comment>sp_func_call_user_paren_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между вложенными круглыми скобками в пользовательских функциях, т.е. &apos;((&apos; против &apos;((&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between a constructor/destructor and the open
parenthesis.</source>
        <comment>sp_func_class_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между конструктором/деструктором и открытой скобкой.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between a constructor without parameters or destructor
and &apos;()&apos;.</source>
        <comment>sp_func_class_paren_empty</comment>
        <translation type="unfinished">Добавить или убрать пробел между конструктором без параметров или деструктором и &apos;()&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;return&apos;.</source>
        <comment>sp_return</comment>
        <translation type="unfinished">Добавить или убрать пробел после &apos;return&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;return&apos; and &apos;(&apos;.</source>
        <comment>sp_return_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;return&apos; и &apos;(&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;return&apos; and &apos;{&apos;.</source>
        <comment>sp_return_brace</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;return&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;__attribute__&apos; and &apos;(&apos;.</source>
        <comment>sp_attribute_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;__attribute__&apos; и &apos;(&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;defined&apos; and &apos;(&apos; in &apos;#if defined (FOO)&apos;.</source>
        <comment>sp_defined_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;defined&apos; и &apos;(&apos; в &apos;#if defined (FOO)&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;throw&apos; and &apos;(&apos; in &apos;throw (something)&apos;.</source>
        <comment>sp_throw_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;throw&apos; и &apos;(&apos; в &apos;throw (что-то)&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;throw&apos; and anything other than &apos;(&apos; as in
&apos;@throw [...];&apos;.</source>
        <comment>sp_after_throw</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;throw&apos; и любым другим словом, кроме &apos;(&apos;, как в примере &apos;@throw [...];&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;catch&apos; and &apos;(&apos; in &apos;catch (something) { }&apos;.
If set to ignore, sp_before_sparen is used.</source>
        <comment>sp_catch_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;catch&apos; и &apos;(&apos; в &apos;catch (something) { }&apos;.
Если установлено значение ignore, используется sp_before_sparen.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space between &apos;@catch&apos; and &apos;(&apos;
in &apos;@catch (something) { }&apos;. If set to ignore, sp_catch_paren is used.</source>
        <comment>sp_oc_catch_paren</comment>
        <translation>(OC) Добавить или убрать пробел между &apos;@catch&apos; и &apos;(&apos; в &apos;@catch (something) { }&apos;.&lt;br&gt;
Если установлено значение ignore, используется sp_catch_paren.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space before Objective-C protocol list
as in &apos;@protocol Protocol&lt;here&gt;&lt;Protocol_A&gt;&apos; or &apos;@interface MyClass : NSObject&lt;here&gt;&lt;MyProtocol&gt;&apos;.</source>
        <comment>sp_before_oc_proto_list</comment>
        <translation>(OC) Добавить или убрать пробел перед списком протоколов Objective-C, как в &apos;@protocol Protocol&amp;lt;here&amp;gt;&amp;lt;Protocol_A&amp;gt;&apos; или &apos;@interface MyClass : NSObject&amp;lt;here&amp;gt;&amp;lt;MyProtocol&amp;gt;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space between class name and &apos;(&apos;
in &apos;@interface className(categoryName)&lt;ProtocolName&gt;:BaseClass&apos;</source>
        <comment>sp_oc_classname_paren</comment>
        <translation>(OC) Добавить или убрать пробел между именем класса и &apos;(&apos; в &apos;@interface className(categoryName)&amp;lt;ProtocolName&amp;gt;:BaseClass&apos;</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove space between &apos;version&apos; and &apos;(&apos;
in &apos;version (something) { }&apos;. If set to ignore, sp_before_sparen is used.</source>
        <comment>sp_version_paren</comment>
        <translation>(D) Добавить или убрать пробел между &apos;version&apos; и &apos;(&apos; в &apos;version (something) { }&apos;.&lt;br&gt;
Если установлено значение ignore, используется sp_before_sparen.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove space between &apos;scope&apos; and &apos;(&apos;
in &apos;scope (something) { }&apos;. If set to ignore, sp_before_sparen is used.</source>
        <comment>sp_scope_paren</comment>
        <translation>(D) Добавить или уберать пробел между &apos;scope&apos; и &apos;(&apos; в &apos;scope (something) { }&apos;.&lt;br&gt;
Если установлено значение ignore, используется sp_before_sparen.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;super&apos; and &apos;(&apos; in &apos;super (something)&apos;.</source>
        <comment>sp_super_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;super&apos; и &apos;(&apos; в &apos;super (something)&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;this&apos; and &apos;(&apos; in &apos;this (something)&apos;.</source>
        <comment>sp_this_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;this&apos; и &apos;(&apos; в &apos;this (что-то)&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between a macro name and its definition.</source>
        <comment>sp_macro</comment>
        <translation type="unfinished">Добавить или убрать пробела между именем макроса и его определением.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between a macro function &apos;)&apos; and its definition.</source>
        <comment>sp_macro_func</comment>
        <translation type="unfinished">Добавить или убрать пробела между скобкой макрофункции &apos;)&apos; и ее определением.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;else&apos; and &apos;{&apos; if on the same line.</source>
        <comment>sp_else_brace</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;else&apos; и &apos;{&apos;, если на той же строке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;}&apos; and &apos;else&apos; if on the same line.</source>
        <comment>sp_brace_else</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;}&apos; и &apos;else&apos;, если на той же строке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;}&apos; and the name of a typedef on the same line.</source>
        <comment>sp_brace_typedef</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;}&apos; и именем набранного текста в той же строке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before the &apos;{&apos; of a &apos;catch&apos; statement, if the &apos;{&apos; and
&apos;catch&apos; are on the same line, as in &apos;catch (decl) &lt;here&gt; {&apos;.</source>
        <comment>sp_catch_brace</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;{&apos; оператора &apos;catch&apos;, если &apos;{&apos; и &apos;catch&apos; находятся на одной строке, как в &apos;catch (decl) &amp;lt;здесь&amp;gt; {&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space before the &apos;{&apos; of a &apos;@catch&apos; statement, if the &apos;{&apos;
and &apos;@catch&apos; are on the same line, as in &apos;@catch (decl) &lt;here&gt; {&apos;.
If set to ignore, sp_catch_brace is used.</source>
        <comment>sp_oc_catch_brace</comment>
        <translation>(OC) Добавить или убрать пробел перед &apos;{&apos; оператора &apos;@catch&apos;, если &apos;{&apos; и &apos;@catch&apos; находятся на одной строке, как в &apos;@catch (decl) &amp;lt;here&amp;gt; {&apos;.&lt;br&gt;
Если установлено значение ignore, используется sp_catch_brace.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;}&apos; and &apos;catch&apos; if on the same line.</source>
        <comment>sp_brace_catch</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;}&apos; и &apos;catch&apos;, если на той же строке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space between &apos;}&apos; and &apos;@catch&apos; if on the same line.
If set to ignore, sp_brace_catch is used.</source>
        <comment>sp_oc_brace_catch</comment>
        <translation>(OC) Добавить или убрать пробел между &apos;}&apos; и &apos;@catch&apos;, если они находятся на одной строке.&lt;br&gt;
Если установлено значение ignore, используется sp_brace_catch.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;finally&apos; and &apos;{&apos; if on the same line.</source>
        <comment>sp_finally_brace</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;finally&apos; и &apos;{&apos;, если на той же строке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;}&apos; and &apos;finally&apos; if on the same line.</source>
        <comment>sp_brace_finally</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;}&apos; и &apos;finally&apos;, если на той же строке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;try&apos; and &apos;{&apos; if on the same line.</source>
        <comment>sp_try_brace</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;try&apos; и &apos;{&apos;, если на той же строке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between get/set and &apos;{&apos; if on the same line.</source>
        <comment>sp_getset_brace</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;get/set&apos; и &apos;{&apos;, если на той же строке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between a variable and &apos;{&apos; for C++ uniform
initialization.</source>
        <comment>sp_word_brace_init_lst</comment>
        <translation type="unfinished">Добавить или убрать пробел между переменной и &apos;{&apos; для унифицированной инициализации в C++.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between a variable and &apos;{&apos; for a namespace.</source>
        <comment>sp_word_brace_ns</comment>
        <translation type="unfinished">Добавить или убрать пробела между переменной и &apos;{&apos; для пространства имен.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before the &apos;::&apos; operator.</source>
        <comment>sp_before_dc</comment>
        <translation type="unfinished">Добавить или убрать пробел перед оператором &amp;quot;::&amp;quot;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the &apos;::&apos; operator.</source>
        <comment>sp_after_dc</comment>
        <translation type="unfinished">Добавлять или удалять пробел после оператора &amp;quot;::&amp;quot;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove around the D named array initializer &apos;:&apos; operator.</source>
        <comment>sp_d_array_colon</comment>
        <translation>(D) Добавить или убрать вокруг оператора инициализатора имаенованого массива в D &apos;:&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the &apos;!&apos; (not) unary operator.</source>
        <comment>sp_not</comment>
        <translation type="unfinished">Добавлять или удалять пробел после оператора &amp;quot;!&amp;quot; (не).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the &apos;~&apos; (invert) unary operator.</source>
        <comment>sp_inv</comment>
        <translation type="unfinished">Добавлять или удалять пробел после оператора &amp;quot;~&amp;quot; (инвертор).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the &apos;&amp;&apos; (address-of) unary operator. This does not
affect the spacing after a &apos;&amp;&apos; that is part of a type.</source>
        <comment>sp_addr</comment>
        <translation type="unfinished">Добавить или убрать пробела после унарного оператора &apos;&amp;&apos; (адрес). 
Это не влияет на пробел после &apos;&amp;&apos;, который является частью типа.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around the &apos;.&apos; or &apos;-&gt;&apos; operators.</source>
        <comment>sp_member</comment>
        <translation type="unfinished">Добавлять или удалять пробелы вокруг операторов &amp;quot;.&amp;quot; или &apos;-&amp;gt;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the &apos;*&apos; (dereference) unary operator. This does
not affect the spacing after a &apos;*&apos; that is part of a type.</source>
        <comment>sp_deref</comment>
        <translation type="unfinished">Добавить или убрать пробел после унарного оператора &apos;*&apos; (разыменование). 
Это не влияет на пробел после &apos;*&apos;, который является частью типа.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;+&apos; or &apos;-&apos;, as in &apos;x = -5&apos; or &apos;y = +7&apos;.</source>
        <comment>sp_sign</comment>
        <translation type="unfinished">Добавить или убрать пробел после &apos;+&apos; или &apos;-&apos;, как в &apos;x = -5&apos; или &apos;y = +7&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;++&apos; and &apos;--&apos; the word to which it is being
applied, as in &apos;(--x)&apos; or &apos;y++;&apos;.</source>
        <comment>sp_incdec</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;++&apos; и &apos;--&apos; слова, к которому он применяется, как в &apos;(--x)&apos; или &apos;y++;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before a backslash-newline at the end of a line.</source>
        <comment>sp_before_nl_cont</comment>
        <translation type="unfinished">Добавить или убрать пробел перед обратным слешем в конце строки.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space after the scope &apos;+&apos; or &apos;-&apos;, as in &apos;-(void) foo;&apos;
or &apos;+(int) bar;&apos;.</source>
        <comment>sp_after_oc_scope</comment>
        <translation>(OC) Добавить или убрать пробел после области видимости &apos;+&apos; или &apos;-&apos;, как в &apos;-(void) foo;&apos; или &apos;+(int) bar;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space after the colon in message specs,
i.e. &apos;-(int) f:(int) x;&apos; vs. &apos;-(int) f: (int) x;&apos;.</source>
        <comment>sp_after_oc_colon</comment>
        <translation>(OC) Добавить или убрать пробел после двоеточия в спецификациях сообщений, т.е. &apos;-(int) f:(int) x;&apos; против &apos;-(int) f:(int) x;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space before the colon in message specs,
i.e. &apos;-(int) f: (int) x;&apos; vs. &apos;-(int) f : (int) x;&apos;.</source>
        <comment>sp_before_oc_colon</comment>
        <translation>(OC) Добавить или убрать пробел перед двоеточием в спецификациях сообщений, т.е. &apos;-(int) f: (int) x;&apos; против &apos;-(int) f : (int) x;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space after the colon in immutable dictionary expression
&apos;NSDictionary *test = @{@&quot;foo&quot; :@&quot;bar&quot;};&apos;.</source>
        <comment>sp_after_oc_dict_colon</comment>
        <translation>(OC) Добавить или убрать пробел после двоеточия в неизменяемом словарном выражении &apos;NSDictionary *test = @{@&amp;quot;foo&amp;quot; :@&amp;quot;bar&amp;quot;};&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space before the colon in immutable dictionary expression
&apos;NSDictionary *test = @{@&quot;foo&quot; :@&quot;bar&quot;};&apos;.</source>
        <comment>sp_before_oc_dict_colon</comment>
        <translation>(OC) Добавить или убрать пробел перед двоеточием в неизменяемом словарном выражении &apos;NSDictionary *test = @{@&amp;quot;foo&amp;quot; :@&amp;quot;bar&amp;quot;};&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space after the colon in message specs,
i.e. &apos;[object setValue:1];&apos; vs. &apos;[object setValue: 1];&apos;.</source>
        <comment>sp_after_send_oc_colon</comment>
        <translation>(OC) Добавить или убрать пробел после двоеточия в спецификациях сообщений, т.е. &apos;[object setValue:1];&apos; против &apos;[object setValue: 1];&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space before the colon in message specs,
i.e. &apos;[object setValue:1];&apos; vs. &apos;[object setValue :1];&apos;.</source>
        <comment>sp_before_send_oc_colon</comment>
        <translation>(OC) Добавить или убрать пробел перед двоеточием в спецификациях сообщений, т.е. &apos;[object setValue:1];&apos; против &apos;[object setValue :1];&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space after the (type) in message specs,
i.e. &apos;-(int)f: (int) x;&apos; vs. &apos;-(int)f: (int)x;&apos;.</source>
        <comment>sp_after_oc_type</comment>
        <translation>(OC) Добавить или убрать пробела после (типа) в спецификациях сообщения, т.е. &apos;-(int)f: (int) x;&apos; против &apos;-(int)f: (int)x;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space after the first (type) in message specs,
i.e. &apos;-(int) f:(int)x;&apos; vs. &apos;-(int)f:(int)x;&apos;.</source>
        <comment>sp_after_oc_return_type</comment>
        <translation>(OC) Добавить или убрать пробел после первого (тип) в спецификациях сообщений, т.е. &apos;-(int) f:(int)x;&apos; против &apos;-(int)f:(int)x;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space between &apos;@selector&apos; and &apos;(&apos;,
i.e. &apos;@selector(msgName)&apos; vs. &apos;@selector (msgName)&apos;.
Also applies to &apos;@protocol()&apos; constructs.</source>
        <comment>sp_after_oc_at_sel</comment>
        <translation>(OC) Добавить или убрать пробел между &apos;@selector&apos; и &apos;(&apos;, т.е. &apos;@selector(msgName)&apos; против &apos;@selector (msgName)&apos;.&lt;br&gt;
Также относится к конструкциям &apos;@protocol()&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space between &apos;@selector(x)&apos; and the following word,
i.e. &apos;@selector(foo) a:&apos; vs. &apos;@selector(foo)a:&apos;.</source>
        <comment>sp_after_oc_at_sel_parens</comment>
        <translation>(OC) Добавить или убрать пробел между &apos;@selector(x)&apos; и следующим словом, т.е. &apos;@selector(foo) a:&apos; против &apos;@selector(foo)a:&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space inside &apos;@selector&apos; parentheses,
i.e. &apos;@selector(foo)&apos; vs. &apos;@selector( foo )&apos;.
Also applies to &apos;@protocol()&apos; constructs.</source>
        <comment>sp_inside_oc_at_sel_parens</comment>
        <translation>(OC) Добавить или убрать пробел внутри скобок &apos;@selector&apos;, т.е. &apos;@selector(foo)&apos; против &apos;@selector( foo )&apos;.&lt;br&gt;
Также применяется к конструкциям &apos;@protocol()&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space before a block pointer caret,
i.e. &apos;^int (int arg){...}&apos; vs. &apos; ^int (int arg){...}&apos;.</source>
        <comment>sp_before_oc_block_caret</comment>
        <translation>(OC) Добавить или убрать пробел перед кареткой указателя блока, т.е. &apos;^int (int arg){...}&apos; против &apos; ^int (int arg){...}&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space after a block pointer caret,
i.e. &apos;^int (int arg){...}&apos; vs. &apos;^ int (int arg){...}&apos;.</source>
        <comment>sp_after_oc_block_caret</comment>
        <translation>(OC) Добавить или убрать пробел после каретты указателя блока, т.е. &apos;^int (int arg){...}&apos; против &apos;^ int (int arg){...}&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space between the receiver and selector in a message,
as in &apos;[receiver selector ...]&apos;.</source>
        <comment>sp_after_oc_msg_receiver</comment>
        <translation>(OC) Добавить или убрать пробел между приемником и селектором в сообщении, как в &apos;[receiver selector ...]&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space after &apos;@property&apos;.</source>
        <comment>sp_after_oc_property</comment>
        <translation>(OC) Добавить или убрать пробел после &apos;@property&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove space between &apos;@synchronized&apos; and the open parenthesis,
i.e. &apos;@synchronized(foo)&apos; vs. &apos;@synchronized (foo)&apos;.</source>
        <comment>sp_after_oc_synchronized</comment>
        <translation>(OC) Добавить или убрать пробел между &apos;@synchronized&apos; и открытой скобкой, т.е. &apos;@synchronized(foo)&apos; против &apos;@synchronized (foo)&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around the &apos;:&apos; in &apos;b ? t : f&apos;.</source>
        <comment>sp_cond_colon</comment>
        <translation type="unfinished">Добавить или убрать пробел вокруг &apos;:&apos; в &apos;b ? t : f&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before the &apos;:&apos; in &apos;b ? t : f&apos;.</source>
        <comment>sp_cond_colon_before</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;:&apos; в &apos;b ? t : f&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_cond_colon.</source>
        <comment>sp_cond_colon_before</comment>
        <translation type="unfinished">Переопределяет sp_cond_colon.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the &apos;:&apos; in &apos;b ? t : f&apos;.</source>
        <comment>sp_cond_colon_after</comment>
        <translation type="unfinished">Добавить или убрать пробел после &apos;:&apos; в &apos;b ? t : f&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_cond_colon.</source>
        <comment>sp_cond_colon_after</comment>
        <translation type="unfinished">Переопределяет sp_cond_colon.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space around the &apos;?&apos; in &apos;b ? t : f&apos;.</source>
        <comment>sp_cond_question</comment>
        <translation type="unfinished">Добавить или убрать место вокруг &apos;?&apos; в &apos;b? t : f&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before the &apos;?&apos; in &apos;b ? t : f&apos;.</source>
        <comment>sp_cond_question_before</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;?&apos; в &apos;b ? t : f&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_cond_question.</source>
        <comment>sp_cond_question_before</comment>
        <translation type="unfinished">Переопределяет sp_cond_question.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the &apos;?&apos; in &apos;b ? t : f&apos;.</source>
        <comment>sp_cond_question_after</comment>
        <translation type="unfinished">Добавить или убрать пробел после &apos;?&apos; в &apos;b ? t : f&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_cond_question.</source>
        <comment>sp_cond_question_after</comment>
        <translation type="unfinished">Переопределяет sp_cond_question.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>In the abbreviated ternary form &apos;(a ?: b)&apos;, add or remove space between &apos;?&apos;
and &apos;:&apos;.</source>
        <comment>sp_cond_ternary_short</comment>
        <translation type="unfinished">В сокращенной тернарной форме &apos;(a?: b)&apos; добавить или удалить пробел между &apos;?&apos; и &apos;:&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides all other sp_cond_* options.</source>
        <comment>sp_cond_ternary_short</comment>
        <translation type="unfinished">Переопределяет все опции sp_cond_*</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Fix the spacing between &apos;case&apos; and the label. Only &apos;ignore&apos; and &apos;force&apos; make
sense here.</source>
        <comment>sp_case_label</comment>
        <translation type="unfinished">Исправить интервал между &apos;case&apos; и меткой. 
Здесь имеют смысл только &apos;ignore&apos; и &apos;force&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove space around the D &apos;..&apos; operator.</source>
        <comment>sp_range</comment>
        <translation>(D) Добавить или убрать пробел вокруг оператора D &apos;..&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;:&apos; in a Java/C++11 range-based &apos;for&apos;,
as in &apos;for (Type var : &lt;here&gt; expr)&apos;.</source>
        <comment>sp_after_for_colon</comment>
        <translation type="unfinished">Добавить или убрать пробел после &apos;:&apos; в основанном на диапазоне &apos;for&apos; в Java/C++11, как в &apos;for (Type var : &amp;lt;here&amp;gt; expr)&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before &apos;:&apos; in a Java/C++11 range-based &apos;for&apos;,
as in &apos;for (Type var &lt;here&gt; : expr)&apos;.</source>
        <comment>sp_before_for_colon</comment>
        <translation type="unfinished">Добавить или убрать пробел перед &apos;:&apos; в основанном на диапазоне &apos;for&apos; в Java/C++11, как в &apos;for (Type var &amp;lt;here&amp;gt; : expr)&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove space between &apos;extern&apos; and &apos;(&apos; as in &apos;extern &lt;here&gt; (C)&apos;.</source>
        <comment>sp_extern_paren</comment>
        <translation>(D) Добавить или убрать пробел между &apos;extern&apos; и &apos;(&apos;, как в &apos;extern·(C)&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the opening of a C++ comment, as in &apos;// &lt;here&gt; A&apos;.</source>
        <comment>sp_cmt_cpp_start</comment>
        <translation type="unfinished">Добавлять или удалять пробел после открытия комментария C++, т.е. &apos;//·A&apos; против &apos;//A&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space in a C++ region marker comment, as in &apos;// &lt;here&gt; BEGIN&apos;.
A region marker is defined as a comment which is not preceded by other text
(i.e. the comment is the first non-whitespace on the line), and which starts
with either &apos;BEGIN&apos; or &apos;END&apos;.</source>
        <comment>sp_cmt_cpp_region</comment>
        <translation type="unfinished">Добавить или убрать пробел в комментарии маркера региона C++, как в &apos;// &amp;lt;here&amp;gt; BEGIN&apos;.
Маркер региона определяется как комментарий, которому не предшествует другой текст (т.е. комментарий является первым не пробелом в строке), и который начинается либо с &apos;BEGIN&apos;, либо с &apos;END&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_cmt_cpp_start.</source>
        <comment>sp_cmt_cpp_region</comment>
        <translation type="unfinished">Переопределяет sp_cmt_cpp_start.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If true, space added with sp_cmt_cpp_start will be added after Doxygen
sequences like &apos;///&apos;, &apos;///&lt;&apos;, &apos;//!&apos; and &apos;//!&lt;&apos;.</source>
        <comment>sp_cmt_cpp_doxygen</comment>
        <translation type="unfinished">Если переменная имеет значение true, sp_cmt_cpp_start добавляет пробел после таких последовательностей, как &apos;///&apos;, &apos;///&amp;lt;&apos;, &apos;//!&apos; и &apos;//!&amp;lt;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If true, space added with sp_cmt_cpp_start will be added after Qt translator
or meta-data comments like &apos;//:&apos;, &apos;//=&apos;, and &apos;//~&apos;.</source>
        <comment>sp_cmt_cpp_qttr</comment>
        <translation type="unfinished">Если переменная имеет значение true, sp_cmt_cpp_start добавляет пробел после таких последовательностей, как &apos;//:&apos;, &apos;//=&apos;, и &apos;//~&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between #else or #endif and a trailing comment.</source>
        <comment>sp_endif_cmt</comment>
        <translation type="unfinished">Добавить или убрать пробел между #else или #endif и замыкающим комментарием.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;new&apos;, &apos;delete&apos; and &apos;delete[]&apos;.</source>
        <comment>sp_after_new</comment>
        <translation type="unfinished">Добавлять или удалять пробел после &apos;new&apos;, &apos;delete&apos; и &apos;delete[]&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;new&apos; and &apos;(&apos; in &apos;new()&apos;.</source>
        <comment>sp_between_new_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;new&apos; и &apos;(&apos; в &apos;new()&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space between &apos;)&apos; and type in &apos;new(foo) BAR&apos;.</source>
        <comment>sp_after_newop_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;)&apos; и типом в &apos;new(foo) BAR&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space inside parenthesis of the new operator
as in &apos;new(foo) BAR&apos;.</source>
        <comment>sp_inside_newop_paren</comment>
        <translation type="unfinished">Добавить или убрать пробел внутри скобки оператора new, как в &apos;new(foo) BAR&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after the open parenthesis of the new operator,
as in &apos;new(foo) BAR&apos;.</source>
        <comment>sp_inside_newop_paren_open</comment>
        <translation type="unfinished">Добавить или убрать пробел после открытой скобки оператора new, как в &apos;new(foo) BAR&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_inside_newop_paren.</source>
        <comment>sp_inside_newop_paren_open</comment>
        <translation type="unfinished">Переопределяет sp_inside_newop_paren.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before the close parenthesis of the new operator,
as in &apos;new(foo) BAR&apos;.</source>
        <comment>sp_inside_newop_paren_close</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides sp_inside_newop_paren.</source>
        <comment>sp_inside_newop_paren_close</comment>
        <translation type="unfinished">Переопределяет sp_inside_newop_paren.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before a trailing comment.</source>
        <comment>sp_before_tr_cmt</comment>
        <translation type="unfinished">Добавить или убрать пробел перед заключительным комментарием.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Number of spaces before a trailing comment.</source>
        <comment>sp_num_before_tr_cmt</comment>
        <translation type="unfinished">Количество пробелов перед завершающим комментарием.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space before an embedded comment.</source>
        <comment>sp_before_emb_cmt</comment>
        <translation type="unfinished">Добавить или убрать пробел перед встроенным комментарием.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Number of spaces before an embedded comment.</source>
        <comment>sp_num_before_emb_cmt</comment>
        <translation type="unfinished">Количество пробелов перед встроенным комментарием.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after an embedded comment.</source>
        <comment>sp_after_emb_cmt</comment>
        <translation type="unfinished">Добавить или убрать пробел после встроенного комментария.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Number of spaces after an embedded comment.</source>
        <comment>sp_num_after_emb_cmt</comment>
        <translation type="unfinished">Количество пробелов после встроенного комментария.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(Java) Add or remove space between an annotation and the open parenthesis.</source>
        <comment>sp_annotation_paren</comment>
        <translation>(Java) Добавить или убрать пробел между аннотацией и открытой круглой скобкой.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If true, vbrace tokens are dropped to the previous token and skipped.</source>
        <comment>sp_skip_vbrace_tokens</comment>
        <translation type="unfinished">Если true, виртуальные фигурные скобки сбрасываются на предыдущий токен и пропускаются.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;noexcept&apos;.</source>
        <comment>sp_after_noexcept</comment>
        <translation type="unfinished">Добавить или убрать пробел после &apos;noexcept&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after &apos;_&apos;.</source>
        <comment>sp_vala_after_translation</comment>
        <translation type="unfinished">Добавить или убрать пробел после &apos;_&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If true, a &lt;TAB&gt; is inserted after #define.</source>
        <comment>force_tab_after_define</comment>
        <translation type="unfinished">Если переменная имеет значение true, то после #define вставляется &amp;lt;TAB&amp;gt;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of columns to indent per level. Usually 2, 3, 4, or 8.</source>
        <comment>indent_columns</comment>
        <translation type="unfinished">Количество столбцов для отступа на один уровень. Обычно 2, 3, 4 или 8.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The continuation indent. If non-zero, this overrides the indent of &apos;(&apos;, &apos;[&apos;
and &apos;=&apos; continuation indents. Negative values are OK; negative value is
absolute and not increased for each &apos;(&apos; or &apos;[&apos; level.</source>
        <comment>indent_continue</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>For FreeBSD, this is set to 4.</source>
        <comment>indent_continue</comment>
        <translation type="unfinished">Для FreeBSD установлено значение 4.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The continuation indent, only for class header line(s). If non-zero, this
overrides the indent of &apos;class&apos; continuation indents.</source>
        <comment>indent_continue_class_head</comment>
        <translation type="unfinished">Отступ продолжения, только для строки (строк) заголовка класса. 
Если значение ненулевое, оно переопределяет отступ продолжения &apos;class&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent empty lines (i.e. lines which contain only spaces before
the newline character).</source>
        <comment>indent_single_newlines</comment>
        <translation type="unfinished">Делать ли отступ для пустых строк (т.е. строк, содержащих только пробелы до символа новой строки).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The continuation indent for func_*_param if they are true. If non-zero, this
overrides the indent.</source>
        <comment>indent_param</comment>
        <translation type="unfinished">Отступ продолжения для func_*_param, если они истинны. Если значение ненулевое, оно переопределяет отступ.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to use tabs when indenting code.</source>
        <comment>indent_with_tabs</comment>
        <translation type="unfinished">Как использовать табуляции при создании отступов.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Spaces only
1: Indent with tabs to brace level, align with spaces (default)
2: Indent and align with tabs, using spaces when not on a tabstop</source>
        <comment>indent_with_tabs</comment>
        <translation>0: Только пробелы&lt;br&gt;
1: Отступ табуляцией до уровня скобки, выравнивание пробелами (по умолчанию)&lt;br&gt;
2: Отступ и выравнивание с помощью табуляции, использование пробелов, если нет позиции табуляции</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent comments that are not at a brace level with tabs on a
tabstop. Requires indent_with_tabs=2. If false, will use spaces.</source>
        <comment>indent_cmt_with_tabs</comment>
        <translation type="unfinished">Должен ли отступ комментариев, которые не находятся на уровне скобок, отделяться табуляцией на tabstop. 
Требуется indent_with_tabs=2. 
Если false, будут использоваться пробелы.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent strings broken by &apos;\&apos; so that they line up.</source>
        <comment>indent_align_string</comment>
        <translation type="unfinished">Делать отступы для строк, разорванных &apos;\&apos;, чтобы они выстраивались в одну линию.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of spaces to indent multi-line XML strings.
Requires indent_align_string=true.</source>
        <comment>indent_xml_string</comment>
        <translation type="unfinished">Количество пробелов для отступа многострочных XML-строк.
Требуется indent_align_string=true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Spaces to indent &apos;{&apos; from level.</source>
        <comment>indent_brace</comment>
        <translation type="unfinished">Отступ для скобки &apos;{&apos; от уровня блока.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether braces are indented to the body level.</source>
        <comment>indent_braces</comment>
        <translation type="unfinished">Раместить скоюки на уровне блока кода.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to disable indenting function braces if indent_braces=true.</source>
        <comment>indent_braces_no_func</comment>
        <translation type="unfinished">Отключить code_indent_braces для функций (если indent_braces=true).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to disable indenting class braces if indent_braces=true.</source>
        <comment>indent_braces_no_class</comment>
        <translation type="unfinished">Отключить code_indent_braces для классов (если indent_braces=true).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to disable indenting struct braces if indent_braces=true.</source>
        <comment>indent_braces_no_struct</comment>
        <translation type="unfinished">Отключить code_indent_braces для структур (если indent_braces=true).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent based on the size of the brace parent,
i.e. &apos;if&apos; =&gt; 3 spaces, &apos;for&apos; =&gt; 4 spaces, etc.</source>
        <comment>indent_brace_parent</comment>
        <translation type="unfinished">Должен ли отступ основываться на размере родительской скобки, т.е. &apos;if&apos; =&amp;gt; 3 пробела, &apos;for&apos; =&amp;gt; 4 пробела и т.д.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent based on the open parenthesis instead of the open brace
in &apos;({\n&apos;.</source>
        <comment>indent_paren_open_brace</comment>
        <translation type="unfinished">Нужно ли делать отступ на основе открытой круглой скобки вместо открытой фигурной скобки в &apos;({\n&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) Whether to indent the brace of a C# delegate by another level.</source>
        <comment>indent_cs_delegate_brace</comment>
        <translation>(C#) Добавлять отступы от скобки блока &apos;delegate&apos; на следующий уровень.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) Whether to indent a C# delegate (to handle delegates with no brace) by
another level.</source>
        <comment>indent_cs_delegate_body</comment>
        <translation>(C#) Добавлять отступы от блока &apos;delegate&apos;, если не используются скобки.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent the body of a &apos;namespace&apos;.</source>
        <comment>indent_namespace</comment>
        <translation type="unfinished">Добавлять отступы в тело &amp;quot;namespace&amp;quot;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent only the first namespace, and not any nested namespaces.
Requires indent_namespace=true.</source>
        <comment>indent_namespace_single_indent</comment>
        <translation type="unfinished">Делать ли отступ только для первого пространства имен, а не для всех вложенных пространств имен.
Требуется indent_namespace=true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of spaces to indent a namespace block.
If set to zero, use the value indent_columns</source>
        <comment>indent_namespace_level</comment>
        <translation type="unfinished">Количество пробелов для отступа блока пространства имен.
Если установлено в ноль, используется значение indent_columns</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If the body of the namespace is longer than this number, it won&apos;t be
indented. Requires indent_namespace=true. 0 means no limit.</source>
        <comment>indent_namespace_limit</comment>
        <translation type="unfinished">Если тело пространства имен длиннее этого числа, то отступов не будет.
Requires indent_namespace=true. 0 means no limit.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether the &apos;extern &quot;C&quot;&apos; body is indented.</source>
        <comment>indent_extern</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether the &apos;class&apos; body is indented.</source>
        <comment>indent_class</comment>
        <translation type="unfinished">Отступы в теле класса</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Additional indent before the leading base class colon.
Negative values decrease indent down to the first column.
Requires a newline break before colon (see pos_class_colon
and nl_class_colon)</source>
        <comment>indent_before_class_colon</comment>
        <translation type="unfinished">Дополнительный отступ перед ведущим двоеточием базового класса.
Отрицательные значения уменьшают отступ до первого столбца.
Требуется перенос новой строки перед двоеточием (см. pos_class_colon и nl_class_colon).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent the stuff after a leading base class colon.</source>
        <comment>indent_class_colon</comment>
        <translation type="unfinished">Добавлять отступы после ведущего двоеточия базового класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent based on a class colon instead of the stuff after the
colon. Requires indent_class_colon=true.</source>
        <comment>indent_class_on_colon</comment>
        <translation type="unfinished">Должен ли отступ основываться на двоеточии класса, а не на том, что находится после двоеточия. 
Требуется, чтобы indent_class_colon=true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent the stuff after a leading class initializer colon.</source>
        <comment>indent_constr_colon</comment>
        <translation type="unfinished">Добавлять отступы после двоеточия инициализатора ведущего класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Virtual indent from the &apos;:&apos; for leading member initializers.</source>
        <comment>indent_ctor_init_leading</comment>
        <translation type="unfinished">Виртуальный отступ от &apos;:&apos; для ведущих инициализаторов членов.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Virtual indent from the &apos;:&apos; for following member initializers.</source>
        <comment>indent_ctor_init_following</comment>
        <translation type="unfinished">Виртуальный отступ от &apos;:&apos; для следующих инициализаторов членов.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Additional indent for constructor initializer list.
Negative values decrease indent down to the first column.</source>
        <comment>indent_ctor_init</comment>
        <translation type="unfinished">Дополнительный отступ для списка инициализаторов конструктора.
Отрицательные значения уменьшают отступ до первого столбца.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent &apos;if&apos; following &apos;else&apos; as a new block under the &apos;else&apos;.
If false, &apos;else\nif&apos; is treated as &apos;else if&apos; for indenting purposes.</source>
        <comment>indent_else_if</comment>
        <translation type="unfinished">Должен ли отступ &apos;if&apos; после &apos;else&apos; быть новым блоком под &apos;else&apos;.
Если false, то &apos;else\nif&apos; рассматривается как &apos;else if&apos; для целей отступа.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Amount to indent variable declarations after a open brace.</source>
        <comment>indent_var_def_blk</comment>
        <translation type="unfinished">Сумма отступов объявлений переменных после открытой скобки.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source> &lt;0: Relative
&gt;=0: Absolute</source>
        <comment>indent_var_def_blk</comment>
        <translation>&amp;nbsp;&amp;lt;0: Относительный&lt;br&gt;
&amp;gt;=0: Абсолютный</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent continued variable declarations instead of aligning.</source>
        <comment>indent_var_def_cont</comment>
        <translation type="unfinished">Добавлять отступы от продолжающихся деклараций переменных вместо выравнивания.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent continued shift expressions (&apos;&lt;&lt;&apos; and &apos;&gt;&gt;&apos;) instead of
aligning. Set align_left_shift=false when enabling this.</source>
        <comment>indent_shift</comment>
        <translation type="unfinished">Нужно ли делать отступ для выражений с продолженным сдвигом (&apos;&amp;lt;&amp;lt;&apos; и &apos;&amp;gt;&amp;gt;&apos;) вместо выравнивания. 
При включении этого параметра установите align_left_shift=false.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to force indentation of function definitions to start in column 1.</source>
        <comment>indent_func_def_force_col1</comment>
        <translation type="unfinished">Заставить ли отступы от определений функций начинаться в колонке 1.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent continued function call parameters one indent level,
rather than aligning parameters under the open parenthesis.</source>
        <comment>indent_func_call_param</comment>
        <translation type="unfinished">Добавлять отступы параметры продолженного вызова функции на один уровень отступа, а не выравнивать параметры под открытой круглой скобкой.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent continued function definition parameters one indent level,
rather than aligning parameters under the open parenthesis.</source>
        <comment>indent_func_def_param</comment>
        <translation type="unfinished">Добавлять отступы параметры определения продолженной функции на один уровень отступа, а не выравнивать параметры под открытой круглой скобкой.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>for function definitions, only if indent_func_def_param is false
Allows to align params when appropriate and indent them when not
behave as if it was true if paren position is more than this value
if paren position is more than the option value</source>
        <comment>indent_func_def_param_paren_pos_threshold</comment>
        <translation type="unfinished">Для определений функции при indent_func_def_param=false позволяет выравнивать параметры или делать отступы при необходимости. Если скобка расположена на позиции больше данного числа, то делается отступ, иначе выравнивание.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent continued function call prototype one indent level,
rather than aligning parameters under the open parenthesis.</source>
        <comment>indent_func_proto_param</comment>
        <translation type="unfinished">Добавлять отступы от прототипа продолженного вызова функции на один уровень отступа, а не выравнивать параметры под открытой круглой скобкой.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent continued function call declaration one indent level,
rather than aligning parameters under the open parenthesis.</source>
        <comment>indent_func_class_param</comment>
        <translation type="unfinished">Добавлять отступы от продолжения объявления вызова функции на один уровень отступа, а не выравнивать параметры под открытой круглой скобкой.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent continued class variable constructors one indent level,
rather than aligning parameters under the open parenthesis.</source>
        <comment>indent_func_ctor_var_param</comment>
        <translation type="unfinished">Отступать ли конструкторы переменных продолженного класса на один уровень отступа, вместо того чтобы выравнивать параметры под открытой круглой скобкой.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent continued template parameter list one indent level,
rather than aligning parameters under the open parenthesis.</source>
        <comment>indent_template_param</comment>
        <translation type="unfinished">Добавлять отступы от продолжения списка параметров шаблона на один уровень отступа, а не выравнивать параметры под открытой круглой скобкой.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Double the indent for indent_func_xxx_param options.
Use both values of the options indent_columns and indent_param.</source>
        <comment>indent_func_param_double</comment>
        <translation type="unfinished">Удвоить отступ для опций indent_func_xxx_param.
Использет оба значения опций indent_columns и indent_param.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Indentation column for standalone &apos;const&apos; qualifier on a function
prototype.</source>
        <comment>indent_func_const</comment>
        <translation type="unfinished">Колонка отступов для отдельного квалификатора &apos;const&apos; в прототипе функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Indentation column for standalone &apos;throw&apos; qualifier on a function
prototype.</source>
        <comment>indent_func_throw</comment>
        <translation type="unfinished">Колонка отступов для отдельного квалификатора &apos;throw&apos; в прототипе функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to indent within a macro followed by a brace on the same line
This allows reducing the indent in macros that have (for example)
`do { ... } while (0)` blocks bracketing them.</source>
        <comment>indent_macro_brace</comment>
        <translation type="unfinished">Как сделать отступ внутри макроса с последующей скобкой на той же строке 
Это позволяет уменьшить отступ в макросах, которые содержат,например, `do { ... } while (0)`.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>true:  add an indent for the brace on the same line as the macro
false: do not add an indent for the brace on the same line as the macro</source>
        <comment>indent_macro_brace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of spaces to indent a continued &apos;-&gt;&apos; or &apos;.&apos;.
Usually set to 0, 1, or indent_columns.</source>
        <comment>indent_member</comment>
        <translation type="unfinished">Количество пробелов для отступа от продолжения &apos;-&amp;gt;&apos; или &apos;.&apos;.
Обычно устанавливается в 0, 1 или indent_columns.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether lines broken at &apos;.&apos; or &apos;-&gt;&apos; should be indented by a single indent.
The indent_member option will not be effective if this is set to true.</source>
        <comment>indent_member_single</comment>
        <translation type="unfinished">Должны ли строки, разорванные на &apos;.&apos; или &apos;-&amp;gt;&apos;, отступать на один отступ.
Опция indent_member не будет действовать, если установлено значение true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Spaces to indent single line (&apos;//&apos;) comments on lines before code.</source>
        <comment>indent_single_line_comments_before</comment>
        <translation type="unfinished">Пробелы для отступов однострочных (&apos;//&apos;) комментариев.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Spaces to indent single line (&apos;//&apos;) comments on lines after code.</source>
        <comment>indent_single_line_comments_after</comment>
        <translation type="unfinished">Пробелы для отступа однострочных (&apos;//&apos;) комментариев на строках после кода.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>When opening a paren for a control statement (if, for, while, etc), increase
the indent level by this value. Negative values decrease the indent level.</source>
        <comment>indent_sparen_extra</comment>
        <translation type="unfinished">При открытии круглой скобки для управляющего оператора (if, for, while и т.д.) увеличить уровень отступа на это значение. Отрицательные значения уменьшают уровень отступа.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent trailing single line (&apos;//&apos;) comments relative to the code
instead of trying to keep the same absolute column.</source>
        <comment>indent_relative_single_line_comments</comment>
        <translation type="unfinished">Нужно ли делать отступ для комментариев в одну строку (&apos;//&apos;) относительно кода вместо того, чтобы пытаться сохранить тот же абсолютный столбец.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Spaces to indent &apos;case&apos; from &apos;switch&apos;. Usually 0 or indent_columns.
It might be wise to choose the same value for the option indent_case_brace.</source>
        <comment>indent_switch_case</comment>
        <translation type="unfinished">Пробелы для отступа &apos;case&apos; от &apos;switch&apos;. Обычно 0 или indent_columns.
Возможно, будет разумно выбрать такое же значение для параметра indent_case_brace.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Spaces to indent the body of a &apos;switch&apos; before any &apos;case&apos;.
Usually the same as indent_columns or indent_switch_case.</source>
        <comment>indent_switch_body</comment>
        <translation type="unfinished">Пробелы для отступа тела &amp;quot;переключателя&amp;quot; перед любым &amp;quot;регистром&amp;quot;.
Обычно то же самое, что и indent_columns или indent_switch_case.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Spaces to indent &apos;{&apos; from &apos;case&apos;. By default, the brace will appear under
the &apos;c&apos; in case. Usually set to 0 or indent_columns. Negative values are OK.
It might be wise to choose the same value for the option indent_switch_case.</source>
        <comment>indent_case_brace</comment>
        <translation type="unfinished">Пробел для отступа &apos;{&apos; от &apos;case&apos;. По умолчанию скобка будет отображаться под буквой &amp;quot;c&amp;quot; в case. 
Обычно устанавливается равным 0 или indent_columns. 
Отрицательные значения допустимы.
Возможно, имеет смысл выбрать такое же значение для параметра indent_switch_case.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>indent &apos;break&apos; with &apos;case&apos; from &apos;switch&apos;.</source>
        <comment>indent_switch_break_with_case</comment>
        <translation type="unfinished">Отступ &apos;break&apos; от &apos;switch&apos;</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent preprocessor statements inside of switch statements.</source>
        <comment>indent_switch_pp</comment>
        <translation type="unfinished">Добавлять отступы для препроцессорных утверждений внутри утверждений switch.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Spaces to shift the &apos;case&apos; line, without affecting any other lines.
Usually 0.</source>
        <comment>indent_case_shift</comment>
        <translation type="unfinished">Пробел для сдвига строки &apos;case&apos;, не затрагивая другие строки.
Обычно 0.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align comments before &apos;case&apos; with the &apos;case&apos;.</source>
        <comment>indent_case_comment</comment>
        <translation type="unfinished">Выравнивать комментарии перед &apos;case&apos; по &apos;case&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent comments not found in first column.</source>
        <comment>indent_comment</comment>
        <translation type="unfinished">Делать отступ для комментариев, не найденных в первой колонке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent comments found in first column.</source>
        <comment>indent_col1_comment</comment>
        <translation type="unfinished">Отступы для  комментариев, найденных в первой колонке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent multi string literal in first column.</source>
        <comment>indent_col1_multi_string_literal</comment>
        <translation type="unfinished">Отступать ли в первой колонке в многострочном литерале.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Align comments on adjacent lines that are this many columns apart or less.</source>
        <comment>indent_comment_align_thresh</comment>
        <translation type="unfinished">Лимит столбцов для выравнивания комментариев на соседних строках</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to ignore indent for goto labels.</source>
        <comment>indent_ignore_label</comment>
        <translation type="unfinished">Игнорировать отступ для меток goto.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to indent goto labels. Requires indent_ignore_label=false.</source>
        <comment>indent_label</comment>
        <translation type="unfinished">Как размещать метки goto.
Требуется indent_ignore_label=false.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source> &gt;0: Absolute column where 1 is the leftmost column
&lt;=0: Subtract from brace indent</source>
        <comment>indent_label</comment>
        <translation> &amp;gt;0: Абсолютный столбец, где 1 - самый левый столбец&lt;br&gt;
&amp;lt;=0: Вычитание из отступа скобки</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to indent access specifiers that are followed by a
colon.</source>
        <comment>indent_access_spec</comment>
        <translation type="unfinished">Отступы для спецификаторов доступа, за которыми следует двоеточие.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source> &gt;0: Absolute column where 1 is the leftmost column
&lt;=0: Subtract from brace indent</source>
        <comment>indent_access_spec</comment>
        <translation> &amp;gt;0: Абсолютный столбец, где 1 - самый левый столбец&lt;br&gt;
&amp;lt;=0: Вычитание из отступа скобки</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent the code after an access specifier by one level.
If true, this option forces &apos;indent_access_spec=0&apos;.</source>
        <comment>indent_access_spec_body</comment>
        <translation type="unfinished">Добавить отступ кода после спецификатора доступа на один уровень.
Если true, эта опция заставляет &apos;indent_access_spec=0&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If an open parenthesis is followed by a newline, whether to indent the next
line so that it lines up after the open parenthesis (not recommended).</source>
        <comment>indent_paren_nl</comment>
        <translation type="unfinished">Если за открытой круглой скобкой следует новая строка, следует ли добавлять отступ на следующей строке так, чтобы она начиналась после открытой круглой скобки (не рекомендуется).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to indent a close parenthesis after a newline.</source>
        <comment>indent_paren_close</comment>
        <translation type="unfinished">Как отступить от ближайшей скобки после новой строки.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Indent to body level (default)
1: Align under the open parenthesis
2: Indent to the brace level</source>
        <comment>indent_paren_close</comment>
        <translation>0: Отступ до уровня тела (по умолчанию)&lt;br&gt;
1: Выравнивание по открытой скобке&lt;br&gt;
2: Отступ до уровня скобки</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent the open parenthesis of a function definition,
if the parenthesis is on its own line.</source>
        <comment>indent_paren_after_func_def</comment>
        <translation type="unfinished">Нужно ли делать отступ от открытой скобки определения функции, если скобка находится на отдельной строке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent the open parenthesis of a function declaration,
if the parenthesis is on its own line.</source>
        <comment>indent_paren_after_func_decl</comment>
        <translation type="unfinished">Нужно ли делать отступ от открытой скобки объявления функции, если скобка находится на отдельной строке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent the open parenthesis of a function call,
if the parenthesis is on its own line.</source>
        <comment>indent_paren_after_func_call</comment>
        <translation type="unfinished">Нужно ли делать отступ от открытой скобки вызова функции, если скобка находится на отдельной строке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent a comma when inside a brace.
If true, aligns under the open brace.</source>
        <comment>indent_comma_brace</comment>
        <translation type="unfinished">Нужно ли делать отступ для запятой, когда она находится внутри скобки.
Если true, то выравнивается по открытой скобке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent a comma when inside a parenthesis.
If true, aligns under the open parenthesis.</source>
        <comment>indent_comma_paren</comment>
        <translation type="unfinished">Нужно ли делать отступ для запятой, когда она находится внутри круглой скобки.
Если true, то выравнивается по открытой скобке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent a Boolean operator when inside a parenthesis.
If true, aligns under the open parenthesis.</source>
        <comment>indent_bool_paren</comment>
        <translation type="unfinished">Нужно ли делать отступ для булева оператора, когда он находится внутри круглой скобки.
Если true, то выравнивание производится под открытой скобкой.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent a semicolon when inside a for parenthesis.
If true, aligns under the open for parenthesis.</source>
        <comment>indent_semicolon_for_paren</comment>
        <translation type="unfinished">Нужно ли делать отступ для точки с запятой внутри скобки for.
Если true, то выравнивается под открытой круглой скобкой.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align the first expression to following ones
if indent_bool_paren=true.</source>
        <comment>indent_first_bool_expr</comment>
        <translation type="unfinished">Нужно ли выравнивать первое выражение по отношению к последующим если indent_bool_paren=true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align the first expression to following ones
if indent_semicolon_for_paren=true.</source>
        <comment>indent_first_for_expr</comment>
        <translation type="unfinished">Выравнивать ли первое выражение по последующим, если indent_semicolon_for_paren=true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If an open square is followed by a newline, whether to indent the next line
so that it lines up after the open square (not recommended).</source>
        <comment>indent_square_nl</comment>
        <translation type="unfinished">Если за открытой фигурной скобкой следует новая строка, следует ли добавлять отступ на следующей строке так, чтобы она начиналась после открытой фигурной скобки (не рекомендуется).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(ESQL/C) Whether to preserve the relative indent of &apos;EXEC SQL&apos; bodies.</source>
        <comment>indent_preserve_sql</comment>
        <translation>(ESQL/C) Сохранить ли относительный отступ &apos;EXEC SQL&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align continued statements at the &apos;=&apos;. If false or if the &apos;=&apos; is
followed by a newline, the next line is indent one tab.</source>
        <comment>indent_align_assign</comment>
        <translation type="unfinished">Выравнивать ли продолженные утверждения по &apos;=&apos;. 
Если false или если за &apos;=&apos; следует новая строка, следующая строка отступает на одну табуляцию.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If true, the indentation of the chunks after a &apos;=&apos; sequence will be set at
LHS token indentation column before &apos;=&apos;.</source>
        <comment>indent_off_after_assign</comment>
        <translation type="unfinished">Если переменная имеет значение &apos;=&apos;, то отступ фрагментов после последовательности &apos;=&apos; будет установлен в столбце LHS перед &apos;=&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align continued statements at the &apos;(&apos;. If false or the &apos;(&apos; is
followed by a newline, the next line indent is one tab.</source>
        <comment>indent_align_paren</comment>
        <translation type="unfinished">Выравнивать ли продолженные утверждения по &apos;(&apos;.
Если false или за &apos;(&apos; следует новая строка, отступ следующей строки составляет одну табуляцию.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to indent Objective-C code inside message selectors.</source>
        <comment>indent_oc_inside_msg_sel</comment>
        <translation>(OC) Отступы от кода Objective-C внутри селекторов сообщений.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to indent Objective-C blocks at brace level instead of usual
rules.</source>
        <comment>indent_oc_block</comment>
        <translation>(OC) Отступы в блоках Objective-C на уровне скобок вместо обычных правил.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Indent for Objective-C blocks in a message relative to the parameter
name.</source>
        <comment>indent_oc_block_msg</comment>
        <translation>(OC) Отступ для блоков Objective-C в сообщении относительно имени параметра.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>=0: Use indent_oc_block rules
&gt;0: Use specified number of spaces to indent</source>
        <comment>indent_oc_block_msg</comment>
        <translation>=0: Использовать правила indent_oc_block&lt;br&gt;
&gt;0: Использовать заданное количество пробелов для отступа</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Minimum indent for subsequent parameters</source>
        <comment>indent_oc_msg_colon</comment>
        <translation>(OC) Минимальный отступ для последующих параметров</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to prioritize aligning with initial colon (and stripping spaces
from lines, if necessary).</source>
        <comment>indent_oc_msg_prioritize_first_colon</comment>
        <translation>(OC) Приоритетно ли выравнивание по начальному двоеточию (и удаление пробелов из строк, если необходимо).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to indent blocks the way that Xcode does by default
(from the keyword if the parameter is on its own line; otherwise, from the
previous indentation level). Requires indent_oc_block_msg=true.</source>
        <comment>indent_oc_block_msg_xcode_style</comment>
        <translation>(OC) Отступ для блоков так, как это делает Xcode по умолчанию (от ключевого слова, если параметр находится на своей строке; в противном случае - от предыдущего уровня отступа). &lt;br&gt;
Требуется, чтобы indent_oc_block_msg=true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to indent blocks from where the brace is, relative to a
message keyword. Requires indent_oc_block_msg=true.</source>
        <comment>indent_oc_block_msg_from_keyword</comment>
        <translation>(OC) Отступ блоков от места расположения скобки относительно ключевого слова сообщения. &lt;br&gt;
Требуется, чтобы indent_oc_block_msg=true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to indent blocks from where the brace is, relative to a message
colon. Requires indent_oc_block_msg=true.</source>
        <comment>indent_oc_block_msg_from_colon</comment>
        <translation>(OC) Отступ блоков от места скобки относительно двоеточия сообщения. &lt;br&gt;
Требуется, чтобы indent_oc_block_msg=true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to indent blocks from where the block caret is.
Requires indent_oc_block_msg=true.</source>
        <comment>indent_oc_block_msg_from_caret</comment>
        <translation>(OC) Отступ блока от места, где находится обводка блока.&lt;br&gt;
Требуется, чтобы indent_oc_block_msg=true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to indent blocks from where the brace caret is.
Requires indent_oc_block_msg=true.</source>
        <comment>indent_oc_block_msg_from_brace</comment>
        <translation>(OC) Отступ блока от места, где находится скобка.&lt;br&gt;
Требуется, чтобы indent_oc_block_msg=true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>When indenting after virtual brace open and newline add further spaces to
reach this minimum indent.</source>
        <comment>indent_min_vbrace_open</comment>
        <translation type="unfinished">При отступе после открытой виртуальной скобки и новой строки добавить дополнительные пробелы, чтобы достичь этого минимального отступа.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add further spaces after regular indent to reach next tabstop
when indenting after virtual brace open and newline.</source>
        <comment>indent_vbrace_open_on_tabstop</comment>
        <translation type="unfinished">Добавлять ли дополнительные пробелы после обычного отступа для достижения следующего tabstop при отступе после открытой виртуальной скобки и новой строки.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to indent after a brace followed by another token (not a newline).
true:  indent all contained lines to match the token
false: indent all contained lines to match the brace</source>
        <comment>indent_token_after_brace</comment>
        <translation type="unfinished">Как сделать отступ после скобки, за которой следует другой маркер (не новая строка). 
true: отступ от всех содержащихся строк, чтобы соответствовать маркеру 
false: отступ от всех содержащихся строк, чтобы соответствовать скобке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent the body of a C++11 lambda.</source>
        <comment>indent_cpp_lambda_body</comment>
        <translation type="unfinished">Добавлять отступы в теле лямбды C++11.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to indent compound literals that are being returned.
true: add both the indent from return &amp; the compound literal open brace
      (i.e. 2 indent levels)
false: only indent 1 level, don&apos;t add the indent for the open brace, only
       add the indent for the return.</source>
        <comment>indent_compound_literal_return</comment>
        <translation type="unfinished">Как делать отступ для составных литералов, которые возвращаются. 
true: добавить отступ от возврата и открытой скобки составного литерала (т.е. 2 уровня отступа) 
false: только 1 уровень отступа, не добавлять отступ для открытой скобки, добавить отступ только для возврата.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) Whether to indent a &apos;using&apos; block if no braces are used.</source>
        <comment>indent_using_block</comment>
        <translation>(C#) Добавлять отступы от блока &apos;using&apos;, если не используются скобки.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to indent the continuation of ternary operator.</source>
        <comment>indent_ternary_operator</comment>
        <translation type="unfinished">Отступы для разбитого тернарного оператора.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Off (default)
1: When the `if_false` is a continuation, indent it under `if_false`
2: When the `:` is a continuation, indent it under `?`</source>
        <comment>indent_ternary_operator</comment>
        <translation>0: Выключено (по умолчанию)&lt;br&gt;
1: Когда `if_false` является продолжением, отступ под `if_false`.&lt;br&gt;
2: Если `:` является продолжением, отступ под `?`.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent the statements inside ternary operator.</source>
        <comment>indent_inside_ternary_operator</comment>
        <translation type="unfinished">Делать отступы для утверждений внутри тернарного оператора.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If true, the indentation of the chunks after a `return` sequence will be set at return indentation column.</source>
        <comment>indent_off_after_return</comment>
        <translation type="unfinished">Если переменная имеет значение true, то строке после выражения `return` будет установлен отступ как у return.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If true, the indentation of the chunks after a `return new` sequence will be set at return indentation column.</source>
        <comment>indent_off_after_return_new</comment>
        <translation type="unfinished">Если переменная имеет значение true, то строке после выражения `return new` будет установлен отступ как у return.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If true, the tokens after return are indented with regular single indentation. By default (false) the indentation is after the return token.</source>
        <comment>indent_single_after_return</comment>
        <translation type="unfinished">Если true, то лексемы после return будут иметь обычный одинарный отступ. 
По умолчанию (false) отступ делается относительно лексемы return.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to ignore indent and alignment for &apos;asm&apos; blocks (i.e. assume they
have their own indentation).</source>
        <comment>indent_ignore_asm_block</comment>
        <translation type="unfinished">Игнорировать отступ и выравнивание для блоков &apos;asm&apos; (т.е. считать, что они имеют свой собственный отступ).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t indent the close parenthesis of a function definition,
if the parenthesis is on its own line.</source>
        <comment>donot_indent_func_def_close_paren</comment>
        <translation type="unfinished">Не делать отступ от закрывающей скобки определения функции, если скобка находится на отдельной строке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to collapse empty blocks between &apos;{&apos; and &apos;}&apos;.
If true, overrides nl_inside_empty_func</source>
        <comment>nl_collapse_empty_body</comment>
        <translation type="unfinished">Нужно ли сворачивать пустые блоки между &apos;{&apos; и &apos;}&apos;.
Если true, то отменяет действие nl_inside_empty_func</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t split one-line braced assignments, as in &apos;foo_t f = { 1, 2 };&apos;.</source>
        <comment>nl_assign_leave_one_liners</comment>
        <translation type="unfinished">Не разбивать однострочные фигурные скобки в присваивании, как в &apos;foo_t f = { 1, 2 };&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t split one-line braced statements inside a &apos;class xx { }&apos; body.</source>
        <comment>nl_class_leave_one_liners</comment>
        <translation type="unfinished">Не разбивать однострочные скобки внутри тела &amp;quot;class xxx{}&amp;quot;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t split one-line enums, as in &apos;enum foo { BAR = 15 };&apos;</source>
        <comment>nl_enum_leave_one_liners</comment>
        <translation type="unfinished">Не разбивать однострочные перечисления, как в &apos;enum foo { BAR = 15 };&apos;</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t split one-line get or set functions.</source>
        <comment>nl_getset_leave_one_liners</comment>
        <translation type="unfinished">Не разбивать однострочные get/set функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) Don&apos;t split one-line property get or set functions.</source>
        <comment>nl_cs_property_leave_one_liners</comment>
        <translation>(C#) Не разбивать однострочный функции свойств get и set.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t split one-line function definitions, as in &apos;int foo() { return 0; }&apos;.
might modify nl_func_type_name</source>
        <comment>nl_func_leave_one_liners</comment>
        <translation type="unfinished">Не разбивать определения однострочных функций, как в &apos;int foo() { return 0; }&apos;. 
Может модифицировать  nl_func_type_name</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t split one-line C++11 lambdas, as in &apos;[]() { return 0; }&apos;.</source>
        <comment>nl_cpp_lambda_leave_one_liners</comment>
        <translation type="unfinished">Не разбивать однострочные лямбды C++11, как в &apos;[]() { вернуть 0; }&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t split one-line if/else statements, as in &apos;if(...) b++;&apos;.</source>
        <comment>nl_if_leave_one_liners</comment>
        <translation type="unfinished">Не разбивать однострочные операторы if/else, как в &apos;if(...) b++;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t split one-line while statements, as in &apos;while(...) b++;&apos;.</source>
        <comment>nl_while_leave_one_liners</comment>
        <translation type="unfinished">Не разбивать однострочные операторы while, как в &apos;while(...) b++;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t split one-line do statements, as in &apos;do { b++; } while(...);&apos;.</source>
        <comment>nl_do_leave_one_liners</comment>
        <translation type="unfinished">Не разбивать однострочные операторы do, как в &apos;do { b++; } while(...);&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t split one-line for statements, as in &apos;for(...) b++;&apos;.</source>
        <comment>nl_for_leave_one_liners</comment>
        <translation type="unfinished">Не разбивать однострочные операторы for, как в &apos;for(...) b++;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Don&apos;t split one-line Objective-C messages.</source>
        <comment>nl_oc_msg_leave_one_liner</comment>
        <translation>(OC) Не разбивать однострочные сообщения Objective-C.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove newline between method declaration and &apos;{&apos;.</source>
        <comment>nl_oc_mdef_brace</comment>
        <translation>(OC) Добавить или убрать новую строку между объявлением метода и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove newline between Objective-C block signature and &apos;{&apos;.</source>
        <comment>nl_oc_block_brace</comment>
        <translation>(OC) Добавить или убрать новую строку между сигнатурой блока Objective-C и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove blank line before &apos;@interface&apos; statement.</source>
        <comment>nl_oc_before_interface</comment>
        <translation>(OC) Добавить или убрать пустую строку перед оператором &apos;@interface&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove blank line before &apos;@implementation&apos; statement.</source>
        <comment>nl_oc_before_implementation</comment>
        <translation>(OC) Добавить или убрать пустую строку перед оператором &apos;@implementation&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove blank line before &apos;@end&apos; statement.</source>
        <comment>nl_oc_before_end</comment>
        <translation>(OC) Добавить или убрать пустую строку перед оператором &apos;@end&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove newline between &apos;@interface&apos; and &apos;{&apos;.</source>
        <comment>nl_oc_interface_brace</comment>
        <translation>(OC) Добавить или убрать новую строку между &apos;@interface&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove newline between &apos;@implementation&apos; and &apos;{&apos;.</source>
        <comment>nl_oc_implementation_brace</comment>
        <translation>(OC) Добавить или убрать новую строку между &apos;@implementation&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newlines at the start of the file.</source>
        <comment>nl_start_of_file</comment>
        <translation type="unfinished">Добавить или убрать новых строк в начале файла.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The minimum number of newlines at the start of the file (only used if
nl_start_of_file is &apos;add&apos; or &apos;force&apos;).</source>
        <comment>nl_start_of_file_min</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline at the end of the file.</source>
        <comment>nl_end_of_file</comment>
        <translation type="unfinished">Добавить или убрать новой строки в конце файла.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The minimum number of newlines at the end of the file (only used if
nl_end_of_file is &apos;add&apos; or &apos;force&apos;).</source>
        <comment>nl_end_of_file_min</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;=&apos; and &apos;{&apos;.</source>
        <comment>nl_assign_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;=&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove newline between &apos;=&apos; and &apos;[&apos;.</source>
        <comment>nl_assign_square</comment>
        <translation>(D) Добавить или убрать новую строку между &apos;=&apos; и &apos;[&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;[]&apos; and &apos;{&apos;.</source>
        <comment>nl_tsquare_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;[]&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove newline after &apos;= [&apos;. Will also affect the newline before
the &apos;]&apos;.</source>
        <comment>nl_after_square_assign</comment>
        <translation>(D) Добавить или убрать новую строку после &apos;= [&apos;. Это также влияет на новую строку перед &apos;]&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between a function call&apos;s &apos;)&apos; and &apos;{&apos;, as in
&apos;list_for_each(item, &amp;list) { }&apos;.</source>
        <comment>nl_fcall_brace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;enum&apos; and &apos;{&apos;.</source>
        <comment>nl_enum_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;enum&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;enum&apos; and &apos;class&apos;.</source>
        <comment>nl_enum_class</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;enum&apos; и &apos;class&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;enum class&apos; and the identifier.</source>
        <comment>nl_enum_class_identifier</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;enum class&apos; и идентификатором.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;enum class&apos; type and &apos;:&apos;.</source>
        <comment>nl_enum_identifier_colon</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;enum class&apos; и двоеточием перед типом.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;enum class identifier :&apos; and type.</source>
        <comment>nl_enum_colon_type</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;enum class identifier :&apos; и типом.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;struct and &apos;{&apos;.</source>
        <comment>nl_struct_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;struct&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;union&apos; and &apos;{&apos;.</source>
        <comment>nl_union_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;union&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;if&apos; and &apos;{&apos;.</source>
        <comment>nl_if_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;if&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;}&apos; and &apos;else&apos;.</source>
        <comment>nl_brace_else</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;}&apos; и &apos;else&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;else if&apos; and &apos;{&apos;. If set to ignore,
nl_if_brace is used instead.</source>
        <comment>nl_elseif_brace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;else&apos; and &apos;{&apos;.</source>
        <comment>nl_else_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;else&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;else&apos; and &apos;if&apos;.</source>
        <comment>nl_else_if</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;else&apos; и &apos;if&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline before &apos;{&apos; opening brace</source>
        <comment>nl_before_opening_brace_func_class_def</comment>
        <translation type="unfinished">Добавить или убрать новую строку перед открывающейся фигурной скобкой &apos;{&apos;</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline before &apos;if&apos;/&apos;else if&apos; closing parenthesis.</source>
        <comment>nl_before_if_closing_paren</comment>
        <translation type="unfinished">Добавить или убрать новую строку перед закрывающей круглой скобкой &apos;if&apos;/&apos;else if&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;}&apos; and &apos;finally&apos;.</source>
        <comment>nl_brace_finally</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;}&apos; и &apos;finally&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;finally&apos; and &apos;{&apos;.</source>
        <comment>nl_finally_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;finally&apos; и &apos;}&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;try&apos; and &apos;{&apos;.</source>
        <comment>nl_try_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;try&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between get/set and &apos;{&apos;.</source>
        <comment>nl_getset_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между get/set и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;for&apos; and &apos;{&apos;.</source>
        <comment>nl_for_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;for&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline before the &apos;{&apos; of a &apos;catch&apos; statement, as in
&apos;catch (decl) &lt;here&gt; {&apos;.</source>
        <comment>nl_catch_brace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove newline before the &apos;{&apos; of a &apos;@catch&apos; statement, as in
&apos;@catch (decl) &lt;here&gt; {&apos;. If set to ignore, nl_catch_brace is used.</source>
        <comment>nl_oc_catch_brace</comment>
        <translation>(OC) Добавить или убрать пробел перед &apos;{&apos; в выражении &apos;@catch&apos;, если &apos;{&apos; и &apos;@catch&apos; находятся на одной строке, как в выражении &apos;@catch (decl) · {&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;}&apos; and &apos;catch&apos;.</source>
        <comment>nl_brace_catch</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;}&apos; и &apos;catch&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Add or remove newline between &apos;}&apos; and &apos;@catch&apos;. If set to ignore,
nl_brace_catch is used.</source>
        <comment>nl_oc_brace_catch</comment>
        <translation>(OC) Добавить или убрать новую строку между &apos;}&apos; и &apos;@catch&apos;.  &lt;br&gt;
Если установлено ignore, используется nl_brace_catch.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;}&apos; and &apos;]&apos;.</source>
        <comment>nl_brace_square</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;}&apos; и &apos;]&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;}&apos; and &apos;)&apos; in a function invocation.</source>
        <comment>nl_brace_fparen</comment>
        <translation type="unfinished">Добавить или убрать новой строки между &apos;}&apos; и &apos;)&apos; при вызове функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;while&apos; and &apos;{&apos;.</source>
        <comment>nl_while_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;while&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove newline between &apos;scope (x)&apos; and &apos;{&apos;.</source>
        <comment>nl_scope_brace</comment>
        <translation>(D) Добавить или убрать новую строку между &apos;scope (x)&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove newline between &apos;unittest&apos; and &apos;{&apos;.</source>
        <comment>nl_unittest_brace</comment>
        <translation>(D) Добавить или убрать новую строку между &apos;unittest&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(D) Add or remove newline between &apos;version (x)&apos; and &apos;{&apos;.</source>
        <comment>nl_version_brace</comment>
        <translation>(D) Добавить или убрать новую строку между &apos;version (x)&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) Add or remove newline between &apos;using&apos; and &apos;{&apos;.</source>
        <comment>nl_using_brace</comment>
        <translation>(C#) Добавить или убрать конец строки между &apos;using&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between two open or close braces. Due to general
newline/brace handling, REMOVE may not work.</source>
        <comment>nl_brace_brace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;do&apos; and &apos;{&apos;.</source>
        <comment>nl_do_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;do&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;}&apos; and &apos;while&apos; of &apos;do&apos; statement.</source>
        <comment>nl_brace_while</comment>
        <translation type="unfinished">Добавить или убрать пробел между &apos;}&apos; и &apos;while&apos; в конструкции do.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;switch&apos; and &apos;{&apos;.</source>
        <comment>nl_switch_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;switch&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;synchronized&apos; and &apos;{&apos;.</source>
        <comment>nl_synchronized_brace</comment>
        <translation type="unfinished">(D) Добавить или убрать новую строку между &apos;synchronized&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add a newline between &apos;)&apos; and &apos;{&apos; if the &apos;)&apos; is on a different line than the
if/for/etc.</source>
        <comment>nl_multi_line_cond</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_for_brace, nl_if_brace, nl_switch_brace, nl_while_switch and
nl_catch_brace.</source>
        <comment>nl_multi_line_cond</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add a newline after &apos;(&apos; if an if/for/while/switch condition spans multiple
lines</source>
        <comment>nl_multi_line_sparen_open</comment>
        <translation type="unfinished">Добавьте новую строку после &apos;(&apos;, если условие if/for/while/switch охватывает несколько строк
&lt;pre&gt;if (¶x==y
&amp;&amp; x==z)
&lt;/pre&gt;</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add a newline before &apos;)&apos; if an if/for/while/switch condition spans multiple
lines. Overrides nl_before_if_closing_paren if both are specified.</source>
        <comment>nl_multi_line_sparen_close</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Force a newline in a define after the macro name for multi-line defines.</source>
        <comment>nl_multi_line_define</comment>
        <translation type="unfinished">Принудительное включение новой строки в определение после определения макроса для многострочного определения.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline before &apos;case&apos;, and a blank line before a &apos;case&apos;
statement that follows a &apos;;&apos; or &apos;}&apos;.</source>
        <comment>nl_before_case</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after a &apos;case&apos; statement.</source>
        <comment>nl_after_case</comment>
        <translation type="unfinished">Добавить или убрать пустую строку после оператора &apos;case&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between a case &apos;:&apos; and &apos;{&apos;.</source>
        <comment>nl_case_colon_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;:&apos; и &apos;{&apos; в case.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_after_case.</source>
        <comment>nl_case_colon_brace</comment>
        <translation type="unfinished">Переопределяет nl_after_case.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;)&apos; and &apos;throw&apos;.</source>
        <comment>nl_before_throw</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;)&apos; и &apos;throw&apos;</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;namespace&apos; and &apos;{&apos;.</source>
        <comment>nl_namespace_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;namespace&apos; и &apos;}&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;template&lt;...&gt;&apos; of a template class.</source>
        <comment>nl_template_class</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;template&amp;lt;...&amp;gt;&apos; в шаблоне класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;template&lt;...&gt;&apos; of a template class declaration.</source>
        <comment>nl_template_class_decl</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;template&amp;lt;...&amp;gt;&apos; в объявлении класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_template_class.</source>
        <comment>nl_template_class_decl</comment>
        <translation type="unfinished">Переопределяет nl_template_class.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;template&lt;&gt;&apos; of a specialized class declaration.</source>
        <comment>nl_template_class_decl_special</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;template&amp;lt;...&amp;gt;&apos; в объявлении специализации класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_template_class_decl.</source>
        <comment>nl_template_class_decl_special</comment>
        <translation type="unfinished">Переопределяет nl_template_class_decl.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;template&lt;...&gt;&apos; of a template class definition.</source>
        <comment>nl_template_class_def</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;template&amp;lt;...&amp;gt;&apos; в определении класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_template_class.</source>
        <comment>nl_template_class_def</comment>
        <translation type="unfinished">Переопределяет nl_template_class.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;template&lt;&gt;&apos; of a specialized class definition.</source>
        <comment>nl_template_class_def_special</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;template&amp;lt;...&amp;gt;&apos; в определении специализации класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_template_class_def.</source>
        <comment>nl_template_class_def_special</comment>
        <translation type="unfinished">Переопределяет nl_template_class_def.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;template&lt;...&gt;&apos; of a template function.</source>
        <comment>nl_template_func</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;template&amp;lt;...&amp;gt;&apos; в шаблоне функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;template&lt;...&gt;&apos; of a template function
declaration.</source>
        <comment>nl_template_func_decl</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;template&amp;lt;...&amp;gt;&apos; в объявлении шаблоной функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_template_func.</source>
        <comment>nl_template_func_decl</comment>
        <translation type="unfinished">Переопределяет nl_template_func.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;template&lt;&gt;&apos; of a specialized function
declaration.</source>
        <comment>nl_template_func_decl_special</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;template&amp;lt;...&amp;gt;&apos; в специализированном определении шаблоной функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_template_func_decl.</source>
        <comment>nl_template_func_decl_special</comment>
        <translation type="unfinished">Переопределяет nl_template_func_decl.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;template&lt;...&gt;&apos; of a template function
definition.</source>
        <comment>nl_template_func_def</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;template&amp;lt;...&amp;gt;&apos; в реализации шаблоной функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_template_func.</source>
        <comment>nl_template_func_def</comment>
        <translation type="unfinished">Переопределяет nl_template_func.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;template&lt;&gt;&apos; of a specialized function
definition.</source>
        <comment>nl_template_func_def_special</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;template&amp;lt;...&amp;gt;&apos; в специализированной реализации шаблоной функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_template_func_def.</source>
        <comment>nl_template_func_def_special</comment>
        <translation type="unfinished">Переопределяет nl_template_func_def.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;template&lt;...&gt;&apos; of a template variable.</source>
        <comment>nl_template_var</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;template&amp;lt;...&amp;gt;&apos; переменной шаблона.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;template&lt;...&gt;&apos; and &apos;using&apos; of a templated
type alias.</source>
        <comment>nl_template_using</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;template&amp;lt;...&amp;gt;&apos; и using в алиасе типа.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;class&apos; and &apos;{&apos;.</source>
        <comment>nl_class_brace</comment>
        <translation type="unfinished">Добавить или убрать новую строку между &apos;class&apos; и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline before or after (depending on pos_class_comma,
may not be IGNORE) each&apos;,&apos; in the base class list.</source>
        <comment>nl_class_init_args</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after each &apos;,&apos; in the constructor member
initialization. Related to nl_constr_colon, pos_constr_colon and
pos_constr_comma.</source>
        <comment>nl_constr_init_args</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline before first element, after comma, and after last
element, in &apos;enum&apos;.</source>
        <comment>nl_enum_own_lines</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between return type and function name in a function
definition.
might be modified by nl_func_leave_one_liners</source>
        <comment>nl_func_type_name</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between return type and function name inside a class
definition. If set to ignore, nl_func_type_name or nl_func_proto_type_name
is used instead.</source>
        <comment>nl_func_type_name_class</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between class specification and &apos;::&apos;
in &apos;void A::f() { }&apos;. Only appears in separate member implementation (does
not appear with in-line implementation).</source>
        <comment>nl_func_class_scope</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between function scope and name, as in
&apos;void A :: &lt;here&gt; f() { }&apos;.</source>
        <comment>nl_func_scope_name</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between return type and function name in a prototype.</source>
        <comment>nl_func_proto_type_name</comment>
        <translation type="unfinished">Добавить или убрать новой строки между типом возврата и именем функции в прототипе.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between a function name and the opening &apos;(&apos; in the
declaration.</source>
        <comment>nl_func_paren</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_func_paren for functions with no parameters.</source>
        <comment>nl_func_paren_empty</comment>
        <translation type="unfinished">Переопределяет nl_func_paren для функций без параметров.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between a function name and the opening &apos;(&apos; in the
definition.</source>
        <comment>nl_func_def_paren</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_func_def_paren for functions with no parameters.</source>
        <comment>nl_func_def_paren_empty</comment>
        <translation type="unfinished">Переопределяет nl_func_def_paren для функций без параметров.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between a function name and the opening &apos;(&apos; in the
call.</source>
        <comment>nl_func_call_paren</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_func_call_paren for functions with no parameters.</source>
        <comment>nl_func_call_paren_empty</comment>
        <translation type="unfinished">Переопределяет nl_func_call_paren для функций без параметров.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;(&apos; in a function declaration.</source>
        <comment>nl_func_decl_start</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;(&apos; в объявлении функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after &apos;(&apos; in a function definition.</source>
        <comment>nl_func_def_start</comment>
        <translation type="unfinished">Добавить или убрать новой строки после &apos;(&apos; в определении функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_func_decl_start when there is only one parameter.</source>
        <comment>nl_func_decl_start_single</comment>
        <translation type="unfinished">Переопределяет nl_func_decl_start при наличии только одного параметра.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_func_def_start when there is only one parameter.</source>
        <comment>nl_func_def_start_single</comment>
        <translation type="unfinished">Переопределяет nl_func_def_start при наличии только одного параметра.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after &apos;(&apos; in a function declaration if &apos;(&apos; and &apos;)&apos;
are in different lines. If false, nl_func_decl_start is used instead.</source>
        <comment>nl_func_decl_start_multi_line</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after &apos;(&apos; in a function definition if &apos;(&apos; and &apos;)&apos;
are in different lines. If false, nl_func_def_start is used instead.</source>
        <comment>nl_func_def_start_multi_line</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after each &apos;,&apos; in a function declaration.</source>
        <comment>nl_func_decl_args</comment>
        <translation type="unfinished">Добавить или убрать новой строки после каждой &apos;,&apos; в объявлении функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after each &apos;,&apos; in a function definition.</source>
        <comment>nl_func_def_args</comment>
        <translation type="unfinished">Добавить или убрать новой строки после каждой &apos;,&apos; в определении функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline after each &apos;,&apos; in a function call.</source>
        <comment>nl_func_call_args</comment>
        <translation type="unfinished">Добавить или убрать новой строки после каждой &apos;,&apos; в вызове функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after each &apos;,&apos; in a function declaration if &apos;(&apos;
and &apos;)&apos; are in different lines. If false, nl_func_decl_args is used instead.</source>
        <comment>nl_func_decl_args_multi_line</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after each &apos;,&apos; in a function definition if &apos;(&apos;
and &apos;)&apos; are in different lines. If false, nl_func_def_args is used instead.</source>
        <comment>nl_func_def_args_multi_line</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline before the &apos;)&apos; in a function declaration.</source>
        <comment>nl_func_decl_end</comment>
        <translation type="unfinished">Добавить или убрать новой строки перед символом &apos;)&apos; в объявлении функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline before the &apos;)&apos; in a function definition.</source>
        <comment>nl_func_def_end</comment>
        <translation type="unfinished">Добавить или убрать новой строки перед символом &apos;)&apos; в определении функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_func_decl_end when there is only one parameter.</source>
        <comment>nl_func_decl_end_single</comment>
        <translation type="unfinished">Переопределяет nl_func_decl_end при наличии только одного параметра.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_func_def_end when there is only one parameter.</source>
        <comment>nl_func_def_end_single</comment>
        <translation type="unfinished">Переопределяет nl_func_def_end при наличии только одного параметра.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline before &apos;)&apos; in a function declaration if &apos;(&apos; and &apos;)&apos;
are in different lines. If false, nl_func_decl_end is used instead.</source>
        <comment>nl_func_decl_end_multi_line</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline before &apos;)&apos; in a function definition if &apos;(&apos; and &apos;)&apos;
are in different lines. If false, nl_func_def_end is used instead.</source>
        <comment>nl_func_def_end_multi_line</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;()&apos; in a function declaration.</source>
        <comment>nl_func_decl_empty</comment>
        <translation type="unfinished">Добавить или убрать новой строки между &apos;()&apos; в объявлении функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;()&apos; in a function definition.</source>
        <comment>nl_func_def_empty</comment>
        <translation type="unfinished">Добавить или убрать новой строки между &apos;()&apos; в определении функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;()&apos; in a function call.</source>
        <comment>nl_func_call_empty</comment>
        <translation type="unfinished">Добавить или убрать новой строки между &apos;()&apos; при вызове функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after &apos;(&apos; in a function call,
has preference over nl_func_call_start_multi_line.</source>
        <comment>nl_func_call_start</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline before &apos;)&apos; in a function call.</source>
        <comment>nl_func_call_end</comment>
        <translation type="unfinished">Добавлять новую строку до &apos;)&apos; при вызове функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after &apos;(&apos; in a function call if &apos;(&apos; and &apos;)&apos; are in
different lines.</source>
        <comment>nl_func_call_start_multi_line</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after each &apos;,&apos; in a function call if &apos;(&apos; and &apos;)&apos;
are in different lines.</source>
        <comment>nl_func_call_args_multi_line</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline before &apos;)&apos; in a function call if &apos;(&apos; and &apos;)&apos; are in
different lines.</source>
        <comment>nl_func_call_end_multi_line</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to respect nl_func_call_XXX option in case of closure args.</source>
        <comment>nl_func_call_args_multi_line_ignore_closures</comment>
        <translation type="unfinished">Соблюдать опцию nl_func_call_XXX в случае закрывающих аргументов.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after &apos;&lt;&apos; of a template parameter list.</source>
        <comment>nl_template_start</comment>
        <translation type="unfinished">Добавлять новую строку после &apos;&amp;lt;&apos; в списке параметров шаблона.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after each &apos;,&apos; in a template parameter list.</source>
        <comment>nl_template_args</comment>
        <translation type="unfinished">Добавлять новую строку после каждой &apos;,&apos; в списке параметров шаблона.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline before &apos;&gt;&apos; of a template parameter list.</source>
        <comment>nl_template_end</comment>
        <translation type="unfinished">Добавлять новую строку перед &apos;&amp;gt;&apos; в списке параметров шаблона.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to put each Objective-C message parameter on a separate line.
See nl_oc_msg_leave_one_liner.</source>
        <comment>nl_oc_msg_args</comment>
        <translation>(OC) Помещать каждый параметр сообщения Objective-C в отдельную строку.&lt;br&gt;
См. nl_oc_msg_leave_one_liner.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between function signature and &apos;{&apos;.</source>
        <comment>nl_fdef_brace</comment>
        <translation type="unfinished">Добавить или убрать новой строки между сигнатурой функции и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between function signature and &apos;{&apos;,
if signature ends with &apos;)&apos;. Overrides nl_fdef_brace.</source>
        <comment>nl_fdef_brace_cond</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between C++11 lambda signature and &apos;{&apos;.</source>
        <comment>nl_cpp_ldef_brace</comment>
        <translation type="unfinished">Добавить или убрать новой строки между лямбда-сигнатурой C++11 и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between &apos;return&apos; and the return expression.</source>
        <comment>nl_return_expr</comment>
        <translation type="unfinished">Добавить или убрать новой строки между &apos;return&apos; и выражением return.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after semicolons, except in &apos;for&apos; statements.</source>
        <comment>nl_after_semicolon</comment>
        <translation type="unfinished">Добавлять новую строку после точки с запятой, кроме как в утверждении &amp;quot;for&amp;quot;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(Java) Add or remove newline between the &apos;)&apos; and &apos;{{&apos; of the double brace
initializer.</source>
        <comment>nl_paren_dbrace_open</comment>
        <translation>(Java) Добавить или убрать новую строку между &apos;)&apos; и &apos;{{&apos; в инициализаторе.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after the type in an unnamed temporary
direct-list-initialization.</source>
        <comment>nl_type_brace_init_lst</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after the open brace in an unnamed temporary
direct-list-initialization.</source>
        <comment>nl_type_brace_init_lst_open</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline before the close brace in an unnamed temporary
direct-list-initialization.</source>
        <comment>nl_type_brace_init_lst_close</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline before &apos;{&apos;.</source>
        <comment>nl_before_brace_open</comment>
        <translation type="unfinished">Добавить ли новую строку перед &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after &apos;{&apos;.</source>
        <comment>nl_after_brace_open</comment>
        <translation type="unfinished">Добавить ли новую строку после &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline between the open brace and a trailing single-line
comment. Requires nl_after_brace_open=true.</source>
        <comment>nl_after_brace_open_cmt</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after a virtual brace open with a non-empty body.
These occur in un-braced if/while/do/for statement bodies.</source>
        <comment>nl_after_vbrace_open</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after a virtual brace open with an empty body.
These occur in un-braced if/while/do/for statement bodies.</source>
        <comment>nl_after_vbrace_open_empty</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after &apos;}&apos;. Does not apply if followed by a
necessary &apos;;&apos;.</source>
        <comment>nl_after_brace_close</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline after a virtual brace close,
as in &apos;if (foo) a++; &lt;here&gt; return;&apos;.</source>
        <comment>nl_after_vbrace_close</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline between the close brace and identifier,
as in &apos;struct { int a; } &lt;here&gt; b;&apos;. Affects enumerations, unions and
structures. If set to ignore, uses nl_after_brace_close.</source>
        <comment>nl_brace_struct_var</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to alter newlines in &apos;#define&apos; macros.</source>
        <comment>nl_define_macro</comment>
        <translation type="unfinished">Вставлять новые строки в тело макроса #define</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to alter newlines between consecutive parenthesis closes. The number
of closing parentheses in a line will depend on respective open parenthesis
lines.</source>
        <comment>nl_squeeze_paren_close</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to remove blanks after &apos;#ifxx&apos; and &apos;#elxx&apos;, or before &apos;#elxx&apos; and
&apos;#endif&apos;. Does not affect top-level #ifdefs.</source>
        <comment>nl_squeeze_ifdef</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Makes the nl_squeeze_ifdef option affect the top-level #ifdefs as well.</source>
        <comment>nl_squeeze_ifdef_top_level</comment>
        <translation type="unfinished">Заставляет опцию nl_squeeze_ifdef влиять и на верхний уровень #ifdefs.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove blank line before &apos;if&apos;.</source>
        <comment>nl_before_if</comment>
        <translation type="unfinished">Добавить или убрать пустую строку перед &apos;if&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove blank line after &apos;if&apos; statement. Add/Force work only if the
next token is not a closing brace.</source>
        <comment>nl_after_if</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove blank line before &apos;for&apos;.</source>
        <comment>nl_before_for</comment>
        <translation type="unfinished">Добавить или убрать пустую строку перед &apos;for&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove blank line after &apos;for&apos; statement.</source>
        <comment>nl_after_for</comment>
        <translation type="unfinished">Добавить или убрать пустую строку после оператора &apos;for&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove blank line before &apos;while&apos;.</source>
        <comment>nl_before_while</comment>
        <translation type="unfinished">Добавить или убрать пустую строку перед &apos;while&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove blank line after &apos;while&apos; statement.</source>
        <comment>nl_after_while</comment>
        <translation type="unfinished">Добавить или убрать пустую строку после оператора &apos;while&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove blank line before &apos;switch&apos;.</source>
        <comment>nl_before_switch</comment>
        <translation type="unfinished">Добавить или убрать пустую строку перед &apos;switch&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove blank line after &apos;switch&apos; statement.</source>
        <comment>nl_after_switch</comment>
        <translation type="unfinished">Добавить или убрать пустую строку после оператора &apos;switch&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove blank line before &apos;synchronized&apos;.</source>
        <comment>nl_before_synchronized</comment>
        <translation type="unfinished">Добавить или убрать пустую строку перед &apos;synchronized&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove blank line after &apos;synchronized&apos; statement.</source>
        <comment>nl_after_synchronized</comment>
        <translation type="unfinished">Добавить или убрать пустую строку после оператора &apos;synchronized&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove blank line before &apos;do&apos;.</source>
        <comment>nl_before_do</comment>
        <translation type="unfinished">Добавить или убрать пустую строку перед &apos;do&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove blank line after &apos;do/while&apos; statement.</source>
        <comment>nl_after_do</comment>
        <translation type="unfinished">Добавить или убрать пустую строку после оператора &apos;do/while&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Ignore nl_before_{if,for,switch,do,synchronized} if the control
statement is immediately after a case statement.
if nl_before_{if,for,switch,do} is set to remove, this option
does nothing.</source>
        <comment>nl_before_ignore_after_case</comment>
        <translation type="unfinished">Игнорировать nl_before_{if,for,switch,do,synchronized}, если управляющий оператор находится сразу после оператора case.
Если для параметра nl_before_{if,for,switch,do} установлено значение remove, этот параметр ничего не делает.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to put a blank line before &apos;return&apos; statements, unless after an open
brace.</source>
        <comment>nl_before_return</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to put a blank line after &apos;return&apos; statements, unless followed by a
close brace.</source>
        <comment>nl_after_return</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to put a blank line before a member &apos;.&apos; or &apos;-&gt;&apos; operators.</source>
        <comment>nl_before_member</comment>
        <translation type="unfinished">Ставить ли пустую строку перед операторами &amp;quot;.&amp;quot; или &amp;quot; -&amp;gt;&amp;quot;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(Java) Whether to put a blank line after a member &apos;.&apos; or &apos;-&gt;&apos; operators.</source>
        <comment>nl_after_member</comment>
        <translation>(Java) Добавлять пустую строку после операторов &apos;.&apos; или &apos;-&amp;gt;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to double-space commented-entries in &apos;struct&apos;/&apos;union&apos;/&apos;enum&apos;.</source>
        <comment>nl_ds_struct_enum_cmt</comment>
        <translation type="unfinished">Две новые строки перед комментарием в &amp;quot;struct&amp;quot;/&amp;quot;union&amp;quot;/&amp;quot;enum&amp;quot;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to force a newline before &apos;}&apos; of a &apos;struct&apos;/&apos;union&apos;/&apos;enum&apos;.
(Lower priority than eat_blanks_before_close_brace.)</source>
        <comment>nl_ds_struct_enum_close_brace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline before or after (depending on pos_class_colon) a class
colon, as in &apos;class Foo &lt;here&gt; : &lt;or here&gt; public Bar&apos;.</source>
        <comment>nl_class_colon</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove newline around a class constructor colon. The exact position
depends on nl_constr_init_args, pos_constr_colon and pos_constr_comma.</source>
        <comment>nl_constr_colon</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to collapse a two-line namespace, like &apos;namespace foo\n{ decl; }&apos;
into a single line. If true, prevents other brace newline rules from turning
such code into four lines. If true, it also preserves one-liner namespaces.</source>
        <comment>nl_namespace_two_to_one_liner</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to remove a newline in simple unbraced if statements, turning them
into one-liners, as in &apos;if(b)\n i++;&apos; =&gt; &apos;if(b) i++;&apos;.</source>
        <comment>nl_create_if_one_liner</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to remove a newline in simple unbraced for statements, turning them
into one-liners, as in &apos;for (...)\n stmt;&apos; =&gt; &apos;for (...) stmt;&apos;.</source>
        <comment>nl_create_for_one_liner</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to remove a newline in simple unbraced while statements, turning
them into one-liners, as in &apos;while (expr)\n stmt;&apos; =&gt; &apos;while (expr) stmt;&apos;.</source>
        <comment>nl_create_while_one_liner</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to collapse a function definition whose body (not counting braces)
is only one line so that the entire definition (prototype, braces, body) is
a single line.</source>
        <comment>nl_create_func_def_one_liner</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to split one-line simple list definitions into three lines by
adding newlines, as in &apos;int a[12] = { &lt;here&gt; 0 &lt;here&gt; };&apos;.</source>
        <comment>nl_create_list_one_liner</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to split one-line simple unbraced if statements into two lines by
adding a newline, as in &apos;if(b) &lt;here&gt; i++;&apos;.</source>
        <comment>nl_split_if_one_liner</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to split one-line simple unbraced for statements into two lines by
adding a newline, as in &apos;for (...) &lt;here&gt; stmt;&apos;.</source>
        <comment>nl_split_for_one_liner</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to split one-line simple unbraced while statements into two lines by
adding a newline, as in &apos;while (expr) &lt;here&gt; stmt;&apos;.</source>
        <comment>nl_split_while_one_liner</comment>
        <translation type="unfinished">Разбивать однострочные простые операторы без скобок в то время как операторы разбиваются на две строки путем добавления новой строки, как в &apos;while (expr) &amp;lt;here&amp;gt; stmt;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t add a newline before a cpp-comment in a parameter list of a function
call.</source>
        <comment>donot_add_nl_before_cpp_comment</comment>
        <translation type="unfinished">Не добавлять новую строку перед cpp-комментарием в списке параметров вызова функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The maximum number of consecutive newlines (3 = 2 blank lines).</source>
        <comment>nl_max</comment>
        <translation type="unfinished">Максимальное количество последовательных новых строк (3 = 2 пустые строки).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The maximum number of consecutive newlines in a function.</source>
        <comment>nl_max_blank_in_func</comment>
        <translation type="unfinished">Максимальное количество последовательных новых строк в функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines inside an empty function body.
This option overrides eat_blanks_after_open_brace and
eat_blanks_before_close_brace, but is ignored when
nl_collapse_empty_body=true</source>
        <comment>nl_inside_empty_func</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines before a function prototype.</source>
        <comment>nl_before_func_body_proto</comment>
        <translation type="unfinished">Количество новых строк перед прототипом функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines before a multi-line function definition. Where
applicable, this option is overridden with eat_blanks_after_open_brace=true</source>
        <comment>nl_before_func_body_def</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines before a class constructor/destructor prototype.</source>
        <comment>nl_before_func_class_proto</comment>
        <translation type="unfinished">Количество новых строк перед прототипом конструктора/деструктора.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines before a class constructor/destructor definition.</source>
        <comment>nl_before_func_class_def</comment>
        <translation type="unfinished">Количество новых строк перед определением конструктора/деструктора класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after a function prototype.</source>
        <comment>nl_after_func_proto</comment>
        <translation type="unfinished">Количество новых строк после прототипа функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after a function prototype, if not followed by
another function prototype.</source>
        <comment>nl_after_func_proto_group</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after a class constructor/destructor prototype.</source>
        <comment>nl_after_func_class_proto</comment>
        <translation type="unfinished">Количество новых строк после прототипа конструктора/деструктора класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after a class constructor/destructor prototype,
if not followed by another constructor/destructor prototype.</source>
        <comment>nl_after_func_class_proto_group</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether one-line method definitions inside a class body should be treated
as if they were prototypes for the purposes of adding newlines.</source>
        <comment>nl_class_leave_one_liner_groups</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Requires nl_class_leave_one_liners=true. Overrides nl_before_func_body_def
and nl_before_func_class_def for one-liners.</source>
        <comment>nl_class_leave_one_liner_groups</comment>
        <translation type="unfinished">Требуется nl_class_leave_one_liners=true.
Отменяет nl_before_func_body_def и nl_before_func_class_def для однострочных символов.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after &apos;}&apos; of a multi-line function body.</source>
        <comment>nl_after_func_body</comment>
        <translation type="unfinished">Количество новых строк после &apos;}&apos; многострочного тела функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after &apos;}&apos; of a multi-line function body in a class
declaration. Also affects class constructors/destructors.</source>
        <comment>nl_after_func_body_class</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_after_func_body.</source>
        <comment>nl_after_func_body_class</comment>
        <translation type="unfinished">Переопределяет nl_after_func_body.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after &apos;}&apos; of a single line function body. Also
affects class constructors/destructors.</source>
        <comment>nl_after_func_body_one_liner</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_after_func_body and nl_after_func_body_class.</source>
        <comment>nl_after_func_body_one_liner</comment>
        <translation type="unfinished">Переопределяет nl_after_func_body и nl_after_func_body_class.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of blank lines after a block of variable definitions at the top
of a function body.</source>
        <comment>nl_func_var_def_blk</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_func_var_def_blk</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines before a block of typedefs. If nl_after_access_spec
is non-zero, that option takes precedence.</source>
        <comment>nl_typedef_blk_start</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_typedef_blk_start</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after a block of typedefs.</source>
        <comment>nl_typedef_blk_end</comment>
        <translation type="unfinished">Количество новых строк после блока typedefs.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_typedef_blk_end</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The maximum number of consecutive newlines within a block of typedefs.</source>
        <comment>nl_typedef_blk_in</comment>
        <translation type="unfinished">Максимальное количество последовательных новых строк в блоке typedef.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_typedef_blk_in</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines before a block of variable definitions not at the top
of a function body. If nl_after_access_spec is non-zero, that option takes
precedence.</source>
        <comment>nl_var_def_blk_start</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_var_def_blk_start</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after a block of variable definitions not at the top
of a function body.</source>
        <comment>nl_var_def_blk_end</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_var_def_blk_end</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The maximum number of consecutive newlines within a block of variable
definitions.</source>
        <comment>nl_var_def_blk_in</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_var_def_blk_in</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The minimum number of newlines before a multi-line comment.
Doesn&apos;t apply if after a brace open or another multi-line comment.</source>
        <comment>nl_before_block_comment</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The minimum number of newlines before a single-line C comment.
Doesn&apos;t apply if after a brace open or other single-line C comments.</source>
        <comment>nl_before_c_comment</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The minimum number of newlines before a CPP comment.
Doesn&apos;t apply if after a brace open or other CPP comments.</source>
        <comment>nl_before_cpp_comment</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to force a newline after a multi-line comment.</source>
        <comment>nl_after_multiline_comment</comment>
        <translation type="unfinished">Добавлять новую строку после многострочного комментария.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to force a newline after a label&apos;s colon.</source>
        <comment>nl_after_label_colon</comment>
        <translation type="unfinished">Добавлять новую строку после двоеточия метки.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines before a struct definition.</source>
        <comment>nl_before_struct</comment>
        <translation type="unfinished">Количество новых линий до определения структуры.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after &apos;}&apos; or &apos;;&apos; of a struct/enum/union definition.</source>
        <comment>nl_after_struct</comment>
        <translation type="unfinished">Количество новых строк после &apos;}&apos; или &apos;;&apos; определения struct/enum/union.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines before a class definition.</source>
        <comment>nl_before_class</comment>
        <translation type="unfinished">Количество новых линий до определения класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after &apos;}&apos; or &apos;;&apos; of a class definition.</source>
        <comment>nl_after_class</comment>
        <translation type="unfinished">Количество новых строк после &apos;}&apos; или &apos;;&apos; определения класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines before a namespace.</source>
        <comment>nl_before_namespace</comment>
        <translation type="unfinished">Количество новых линий перед областью имён.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after &apos;{&apos; of a namespace. This also adds newlines
before the matching &apos;}&apos;.</source>
        <comment>nl_inside_namespace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Apply eat_blanks_after_open_brace or eat_blanks_before_close_brace if
    applicable, otherwise no change.</source>
        <comment>nl_inside_namespace</comment>
        <translation>0: Применить eat_blanks_after_open_brace или eat_blanks_before_close_brace, если применимо, иначе никаких изменений.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides eat_blanks_after_open_brace and eat_blanks_before_close_brace.</source>
        <comment>nl_inside_namespace</comment>
        <translation type="unfinished">Переопределяет eat_blanks_after_open_brace и eat_blanks_before_close_brace.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after &apos;}&apos; of a namespace.</source>
        <comment>nl_after_namespace</comment>
        <translation type="unfinished">Количество новых строк после &apos;}&apos; пространства имён.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines before an access specifier label. This also includes
the Qt-specific &apos;signals:&apos; and &apos;slots:&apos;. Will not change the newline count
if after a brace open.</source>
        <comment>nl_before_access_spec</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_before_access_spec</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after an access specifier label. This also includes
the Qt-specific &apos;signals:&apos; and &apos;slots:&apos;. Will not change the newline count
if after a brace open.</source>
        <comment>nl_after_access_spec</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_after_access_spec</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides nl_typedef_blk_start and nl_var_def_blk_start.</source>
        <comment>nl_after_access_spec</comment>
        <translation type="unfinished">Переопределяет nl_typedef_blk_start и nl_var_def_blk_start.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines between a function definition and the function
comment, as in &apos;// comment\n &lt;here&gt; void foo() {...}&apos;.</source>
        <comment>nl_comment_func_def</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_comment_func_def</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after a try-catch-finally block that isn&apos;t followed
by a brace close.</source>
        <comment>nl_after_try_catch_finally</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_after_try_catch_finally</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) The number of newlines before and after a property, indexer or event
declaration.</source>
        <comment>nl_around_cs_property</comment>
        <translation>(C#) Количество новых строк до и после объявления свойства, индексатора или события.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_around_cs_property</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) The number of newlines between the get/set/add/remove handlers.</source>
        <comment>nl_between_get_set</comment>
        <translation>(C#) Количество новых строк между обработчиками get/set/add/remove.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_between_get_set</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) Add or remove newline between property and the &apos;{&apos;.</source>
        <comment>nl_property_brace</comment>
        <translation>(C#) Добавить или убрать конец строки между свойством (property) и &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to remove blank lines after &apos;{&apos;.</source>
        <comment>eat_blanks_after_open_brace</comment>
        <translation type="unfinished">Удалить ли пустые строки после &apos;{&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to remove blank lines before &apos;}&apos;.</source>
        <comment>eat_blanks_before_close_brace</comment>
        <translation type="unfinished">Удалить ли пустые строки перед &amp;quot;}&apos;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How aggressively to remove extra newlines not in preprocessor.</source>
        <comment>nl_remove_extra_newlines</comment>
        <translation type="unfinished">Как агрессивно удалять лишние строки не в препроцессоре.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default)
1: Remove most newlines not handled by other config
2: Remove all newlines and reformat completely by config</source>
        <comment>nl_remove_extra_newlines</comment>
        <translation>0: Без изменений (по умолчанию) &lt;br&gt;
1: Удалить большинство новых строк, не обрабатываемых другими конфигурациями &lt;br&gt;
2: Удалить все новые строки и полностью переформатировать с помощью конфигурации</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(Java) Add or remove newline after an annotation statement. Only affects
annotations that are after a newline.</source>
        <comment>nl_after_annotation</comment>
        <translation>(Java) Добавить или убрать новую строку после оператора аннотации.&lt;br&gt;
Влияет только на аннотации, которые находятся после новой строки.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(Java) Add or remove newline between two annotations.</source>
        <comment>nl_between_annotation</comment>
        <translation>(Java) Добавить или убрать новую строку между двумя аннотациями.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines before a whole-file #ifdef.</source>
        <comment>nl_before_whole_file_ifdef</comment>
        <translation type="unfinished">Количество новых строк перед #ifdef файла.
См. include guards</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_before_whole_file_ifdef</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after a whole-file #ifdef.</source>
        <comment>nl_after_whole_file_ifdef</comment>
        <translation type="unfinished">Количество новых строк после #ifdef файла.
См. include guards</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_after_whole_file_ifdef</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines before a whole-file #endif.</source>
        <comment>nl_before_whole_file_endif</comment>
        <translation type="unfinished">Количество новых строк перед #endif файла.
См. include guards</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_before_whole_file_endif</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of newlines after a whole-file #endif.</source>
        <comment>nl_after_whole_file_endif</comment>
        <translation type="unfinished">Количество новых строк после #endif файла.
См. include guards</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No change (default).</source>
        <comment>nl_after_whole_file_endif</comment>
        <translation>0: не изменять (по умолчанию). </translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The position of arithmetic operators in wrapped expressions.</source>
        <comment>pos_arith</comment>
        <translation type="unfinished">Положение арифметических операторов при свертке выражаний.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The position of assignment in wrapped expressions. Do not affect &apos;=&apos;
followed by &apos;{&apos;.</source>
        <comment>pos_assign</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The position of Boolean operators in wrapped expressions.</source>
        <comment>pos_bool</comment>
        <translation type="unfinished">Положение логических операторов при свертке выражаний.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The position of comparison operators in wrapped expressions.</source>
        <comment>pos_compare</comment>
        <translation type="unfinished">Положение операторов сравнения при свертке выражаний.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The position of conditional operators, as in the &apos;?&apos; and &apos;:&apos; of
&apos;expr ? stmt : stmt&apos;, in wrapped expressions.</source>
        <comment>pos_conditional</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The position of the comma in wrapped expressions.</source>
        <comment>pos_comma</comment>
        <translation type="unfinished">Положение запятой при свертке выражаний.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The position of the comma in enum entries.</source>
        <comment>pos_enum_comma</comment>
        <translation type="unfinished">Положение запятой в элементах перечисления.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The position of the comma in the base class list if there is more than one
line. Affects nl_class_init_args.</source>
        <comment>pos_class_comma</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The position of the comma in the constructor initialization list.
Related to nl_constr_colon, nl_constr_init_args and pos_constr_colon.</source>
        <comment>pos_constr_comma</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The position of trailing/leading class colon, between class and base class
list. Affects nl_class_colon.</source>
        <comment>pos_class_colon</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The position of colons between constructor and member initialization.
Related to nl_constr_colon, nl_constr_init_args and pos_constr_comma.</source>
        <comment>pos_constr_colon</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The position of shift operators in wrapped expressions.</source>
        <comment>pos_shift</comment>
        <translation type="unfinished">Положение операторов сдвига в свернутых выражениях.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Try to limit code width to N columns.</source>
        <comment>code_width</comment>
        <translation type="unfinished">Пытаться ограничить ширину кода N столбцами.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to fully split long &apos;for&apos; statements at semi-colons.</source>
        <comment>ls_for_split_full</comment>
        <translation type="unfinished">Разделять длинные выражения &apos;for&apos; полностью (на три строки)</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to fully split long function prototypes/calls at commas.
The option ls_code_width has priority over the option ls_func_split_full.</source>
        <comment>ls_func_split_full</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to split lines as close to code_width as possible and ignore some
groupings.
The option ls_code_width has priority over the option ls_func_split_full.</source>
        <comment>ls_code_width</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to keep non-indenting tabs.</source>
        <comment>align_keep_tabs</comment>
        <translation type="unfinished">Сохранять тыбуляции, не относящиеся с отступам.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to use tabs for aligning.</source>
        <comment>align_with_tabs</comment>
        <translation type="unfinished">Использовать табуляцию для выравнивания.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to bump out to the next tab when aligning.</source>
        <comment>align_on_tabstop</comment>
        <translation type="unfinished">Нужно ли при выравнивании переходить на следующую позицию табуляции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to right-align numbers.</source>
        <comment>align_number_right</comment>
        <translation type="unfinished">Выравнивать ли цифры по правому краю.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to keep whitespace not required for alignment.</source>
        <comment>align_keep_extra_space</comment>
        <translation type="unfinished">Сохранять ли пробелы ненужные для выравнивания.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align variable definitions in prototypes and functions.</source>
        <comment>align_func_params</comment>
        <translation type="unfinished">Выравнивать ли определения переменных в прототипах и функциях.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning parameter definitions in function on parameter name.</source>
        <comment>align_func_params_span</comment>
        <translation type="unfinished">Размах для выравнивания определений параметров в функции по имени параметра.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_func_params_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The threshold for aligning function parameter definitions.
Use a negative number for absolute thresholds.</source>
        <comment>align_func_params_thresh</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No limit (default).</source>
        <comment>align_func_params_thresh</comment>
        <translation>0: без ограничений (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The gap for aligning function parameter definitions.</source>
        <comment>align_func_params_gap</comment>
        <translation type="unfinished">Зазор в выравнивании параметров функций в определении.
Не особо понятно, но &amp;gt;1 делает дополнительные отступы перед именем</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning constructor value.</source>
        <comment>align_constr_value_span</comment>
        <translation type="unfinished">Размах для выравнивания значений конструктора.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_constr_value_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The threshold for aligning constructor value.
Use a negative number for absolute thresholds.</source>
        <comment>align_constr_value_thresh</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No limit (default).</source>
        <comment>align_constr_value_thresh</comment>
        <translation>0: без ограничений (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The gap for aligning constructor value.</source>
        <comment>align_constr_value_gap</comment>
        <translation type="unfinished">Зазор для выравнивания значений в конструкторе.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align parameters in single-line functions that have the same
name. The function names must already be aligned with each other.</source>
        <comment>align_same_func_call_params</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning function-call parameters for single line functions.</source>
        <comment>align_same_func_call_params_span</comment>
        <translation type="unfinished">Размах для выравнивания параметров вызова функции для однострочных функций.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_same_func_call_params_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The threshold for aligning function-call parameters for single line
functions.
Use a negative number for absolute thresholds.</source>
        <comment>align_same_func_call_params_thresh</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No limit (default).</source>
        <comment>align_same_func_call_params_thresh</comment>
        <translation>0: без ограничений (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning variable definitions.</source>
        <comment>align_var_def_span</comment>
        <translation type="unfinished">Размах для выравнивания определений переменных.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_var_def_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to consider (or treat) the &apos;*&apos; in the alignment of variable definitions.</source>
        <comment>align_var_def_star_style</comment>
        <translation type="unfinished">Как учитывать  &apos;*&apos; при выравнивании определений переменных.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Part of the type     &apos;void *   foo;&apos; (default)
1: Part of the variable &apos;void     *foo;&apos;
2: Dangling             &apos;void    *foo;&apos;
Dangling: the &apos;*&apos; will not be taken into account when aligning.</source>
        <comment>align_var_def_star_style</comment>
        <translation>0: Часть типа &apos;long *·······foo;&apos; (по умолчанию)&lt;br&gt;
1: Часть переменной &apos;long·······* foo;&apos;&lt;br&gt;
2: Висячая &apos;long * foo;&apos;.&lt;br&gt;
Висячая: &apos;*&apos; не будет учитываться при выравнивании.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to consider (or treat) the &apos;&amp;&apos; in the alignment of variable definitions.</source>
        <comment>align_var_def_amp_style</comment>
        <translation type="unfinished">Как учитывать &apos;&amp;&apos; при выравнивании определений переменных.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Part of the type     &apos;long &amp;   foo;&apos; (default)
1: Part of the variable &apos;long     &amp;foo;&apos;
2: Dangling             &apos;long    &amp;foo;&apos;
Dangling: the &apos;&amp;&apos; will not be taken into account when aligning.</source>
        <comment>align_var_def_amp_style</comment>
        <translation>0: Часть типа &apos;long &amp;amp;·······foo;&apos; (по умолчанию)&lt;br&gt;
1: Часть переменной &apos;long·······&amp;amp; foo;&apos;&lt;br&gt;
2: Висячая &apos;long &amp;amp; foo;&apos;.&lt;br&gt;
Висячая: &apos;&amp;amp;&apos; не будет учитываться при выравнивании.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The threshold for aligning variable definitions.
Use a negative number for absolute thresholds.</source>
        <comment>align_var_def_thresh</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No limit (default).</source>
        <comment>align_var_def_thresh</comment>
        <translation>0: без ограничений (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The gap for aligning variable definitions.</source>
        <comment>align_var_def_gap</comment>
        <translation type="unfinished">Зазор для выравнивания определений переменных.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align the colon in struct bit fields.</source>
        <comment>align_var_def_colon</comment>
        <translation type="unfinished">Выравнивать ли двоеточие битовых полей.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The gap for aligning the colon in struct bit fields.</source>
        <comment>align_var_def_colon_gap</comment>
        <translation type="unfinished">Зазор при выравнивании двоеточия битовых полей.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align any attribute after the variable name.</source>
        <comment>align_var_def_attribute</comment>
        <translation type="unfinished">Выравнивать ли любой атрибут после имени переменной.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align inline struct/enum/union variable definitions.</source>
        <comment>align_var_def_inline</comment>
        <translation type="unfinished">Выравнивать ли определения встроенных в struct/enum/union определений переменных.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning on &apos;=&apos; in assignments.</source>
        <comment>align_assign_span</comment>
        <translation type="unfinished">Размах для выравнивания по &apos;=&apos; в присваивании.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_assign_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning on &apos;=&apos; in function prototype modifier.</source>
        <comment>align_assign_func_proto_span</comment>
        <translation type="unfinished">Размах для выравнивания по &apos;=&apos; в модификаторе прототипа функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_assign_func_proto_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The threshold for aligning on &apos;=&apos; in assignments.
Use a negative number for absolute thresholds.</source>
        <comment>align_assign_thresh</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No limit (default).</source>
        <comment>align_assign_thresh</comment>
        <translation>0: без ограничений (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to apply align_assign_span to function declaration &quot;assignments&quot;, i.e.
&apos;virtual void foo() = 0&apos; or &apos;~foo() = {default|delete}&apos;.</source>
        <comment>align_assign_decl_func</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Align with other assignments (default)
1: Align with each other, ignoring regular assignments
2: Don&apos;t align</source>
        <comment>align_assign_decl_func</comment>
        <translation>0: Выравнивание по другим присваиваниям (по умолчанию)&lt;br&gt;
1: Выравнивать друг относительно друга, игнорируя обычные присваивания&lt;/br&gt;
2: Не выравнивать</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning on &apos;=&apos; in enums.</source>
        <comment>align_enum_equ_span</comment>
        <translation type="unfinished">Размах для выравнивания по &apos;=&apos; в перечислениях.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_enum_equ_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The threshold for aligning on &apos;=&apos; in enums.
Use a negative number for absolute thresholds.</source>
        <comment>align_enum_equ_thresh</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: no limit (default).</source>
        <comment>align_enum_equ_thresh</comment>
        <translation>0: без ограничений (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning class member definitions.</source>
        <comment>align_var_class_span</comment>
        <translation type="unfinished">Размах для выравнивания определений членов класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_var_class_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The threshold for aligning class member definitions.
Use a negative number for absolute thresholds.</source>
        <comment>align_var_class_thresh</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No limit (default).</source>
        <comment>align_var_class_thresh</comment>
        <translation>0: без ограничений (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The gap for aligning class member definitions.</source>
        <comment>align_var_class_gap</comment>
        <translation type="unfinished">Зазор для выравнивания определений членов класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning struct/union member definitions.</source>
        <comment>align_var_struct_span</comment>
        <translation type="unfinished">Размах для выравнивания определений членов структуры/объединения.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_var_struct_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The threshold for aligning struct/union member definitions.
Use a negative number for absolute thresholds.</source>
        <comment>align_var_struct_thresh</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No limit (default).</source>
        <comment>align_var_struct_thresh</comment>
        <translation>0: без ограничений (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The gap for aligning struct/union member definitions.</source>
        <comment>align_var_struct_gap</comment>
        <translation type="unfinished">Зазор для выравнивания определения полей структур/объединений.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning struct initializer values.</source>
        <comment>align_struct_init_span</comment>
        <translation type="unfinished">Размах для выравнивания значений инициализатора структуры.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_struct_init_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning single-line typedefs.</source>
        <comment>align_typedef_span</comment>
        <translation type="unfinished">Размах для выравнивания однострочных typedefs.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_typedef_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The minimum space between the type and the synonym of a typedef.</source>
        <comment>align_typedef_gap</comment>
        <translation type="unfinished">Минимальное расстояние между типом и синонимом в typedef.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to align typedef&apos;d functions with other typedefs.</source>
        <comment>align_typedef_func</comment>
        <translation type="unfinished">Как выровнять typedef функции с другими типами.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t mix them at all (default)
1: Align the open parenthesis with the types
2: Align the function type name with the other type names</source>
        <comment>align_typedef_func</comment>
        <translation>0: Не смешивать их вообще (по умолчанию)&lt;br&gt;
1: Выравнивание открытой скобки по типам&lt;br&gt;
2: Выравнивание имени типа функции по отношению к другим именам типов&lt;br&gt;</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to consider (or treat) the &apos;*&apos; in the alignment of typedefs.</source>
        <comment>align_typedef_star_style</comment>
        <translation type="unfinished">Как учитывать  &apos;*&apos; при выравнивании typedefs.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Part of the typedef type, &apos;typedef int * pint;&apos; (default)
1: Part of type name:        &apos;typedef int   *pint;&apos;
2: Dangling:                 &apos;typedef int  *pint;&apos;
Dangling: the &apos;*&apos; will not be taken into account when aligning.</source>
        <comment>align_typedef_star_style</comment>
        <translation>0: Часть типа typedef, &apos;typedef int *········intref;&apos; (по умолчанию)&lt;br&gt;
1: Часть имени типа: &apos;typedef int········*intref;&apos;&lt;br&gt;
2: Висячий: &apos;typedef int *intref;&apos;&lt;br&gt;
Висячий: &apos;*&apos; не будет учитываться при выравнивании.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to consider (or treat) the &apos;&amp;&apos; in the alignment of typedefs.</source>
        <comment>align_typedef_amp_style</comment>
        <translation type="unfinished">Как учитывать  &apos;&amp;&apos; при выравнивании typedefs.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Part of the typedef type, &apos;typedef int &amp; intref;&apos; (default)
1: Part of type name:        &apos;typedef int   &amp;intref;&apos;
2: Dangling:                 &apos;typedef int  &amp;intref;&apos;
Dangling: the &apos;&amp;&apos; will not be taken into account when aligning.</source>
        <comment>align_typedef_amp_style</comment>
        <translation>0: Часть типа typedef, &apos;typedef int &amp;amp;········intref;&apos; (по умолчанию)&lt;br&gt;
1: Часть имени типа: &apos;typedef int········&amp;amp;intref;&apos;&lt;br&gt;
2: Висячий: &apos;typedef int &amp;amp;intref;&apos;&lt;br&gt;
Висячий: &apos;&amp;&apos; не будет учитываться при выравнивании.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning comments that end lines.</source>
        <comment>align_right_cmt_span</comment>
        <translation type="unfinished">Размах для выравнивания комментариев, завершающих строки.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_right_cmt_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Minimum number of columns between preceding text and a trailing comment in
order for the comment to qualify for being aligned. Must be non-zero to have
an effect.</source>
        <comment>align_right_cmt_gap</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If aligning comments, whether to mix with comments after &apos;}&apos; and #endif with
less than three spaces before the comment.</source>
        <comment>align_right_cmt_mix</comment>
        <translation type="unfinished">При выравнивании комментариев, следует ли смешивать комментарии менее чем с тремя пробелами с комментариями после &apos;}&apos; и #endif.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to only align trailing comments that are at the same brace level.</source>
        <comment>align_right_cmt_same_level</comment>
        <translation type="unfinished">Выравнивать ли только те замыкающие комментарии, которые находятся на одном и том же уровне скобки.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Minimum column at which to align trailing comments. Comments which are
aligned beyond this column, but which can be aligned in a lesser column,
may be &quot;pulled in&quot;.</source>
        <comment>align_right_cmt_at_col</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Ignore (default).</source>
        <comment>align_right_cmt_at_col</comment>
        <translation>0: игнорировать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning function prototypes.</source>
        <comment>align_func_proto_span</comment>
        <translation type="unfinished">Размах для выравнивания прототипов функций.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_func_proto_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to consider (or treat) the &apos;*&apos; in the alignment of function prototypes.</source>
        <comment>align_func_proto_star_style</comment>
        <translation type="unfinished">Как учитывать &apos;*&apos; при выравнивании прототипов функций.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Part of the type     &apos;void *   foo();&apos; (default)
1: Part of the function &apos;void     *foo();&apos;
2: Dangling             &apos;void    *foo();&apos;
Dangling: the &apos;*&apos; will not be taken into account when aligning.</source>
        <comment>align_func_proto_star_style</comment>
        <translation>0: Часть типа &apos;long *·····foo();&apos; (по умолчанию)&lt;br&gt;
1: Часть функции &apos;long·····*foo();&apos;&lt;br&gt;
2: Висячий &apos;long *foo();&apos;&lt;br&gt;
Висячий: &apos;*&apos; не будет учитываться при выравнивании.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to consider (or treat) the &apos;&amp;&apos; in the alignment of function prototypes.</source>
        <comment>align_func_proto_amp_style</comment>
        <translation type="unfinished">Как учитывать &apos;&amp;&apos; при выравнивании прототипов функций.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Part of the type     &apos;long &amp;   foo();&apos; (default)
1: Part of the function &apos;long     &amp;foo();&apos;
2: Dangling             &apos;long    &amp;foo();&apos;
Dangling: the &apos;&amp;&apos; will not be taken into account when aligning.</source>
        <comment>align_func_proto_amp_style</comment>
        <translation>0: Часть типа &apos;long &amp;amp;·····foo();&apos; (по умолчанию)&lt;br&gt;
1: Часть функции &apos;long·····&amp;amp;foo();&apos;&lt;br&gt;
2: Висячий &apos;long &amp;amp;foo();&apos;&lt;br&gt;
Висячий: &apos;&amp;amp;&apos; не будет учитываться при выравнивании.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The threshold for aligning function prototypes.
Use a negative number for absolute thresholds.</source>
        <comment>align_func_proto_thresh</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No limit (default).</source>
        <comment>align_func_proto_thresh</comment>
        <translation>0: без ограничений (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Minimum gap between the return type and the function name.</source>
        <comment>align_func_proto_gap</comment>
        <translation type="unfinished">Минимальный разрыв между типом возврата и именем функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align function prototypes on the &apos;operator&apos; keyword instead of
what follows.</source>
        <comment>align_on_operator</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to mix aligning prototype and variable declarations. If true,
align_var_def_XXX options are used instead of align_func_proto_XXX options.</source>
        <comment>align_mix_var_proto</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align single-line functions with function prototypes.
Uses align_func_proto_span.</source>
        <comment>align_single_line_func</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align the open brace of single-line functions.
Requires align_single_line_func=true. Uses align_func_proto_span.</source>
        <comment>align_single_line_brace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Gap for align_single_line_brace.</source>
        <comment>align_single_line_brace_gap</comment>
        <translation type="unfinished">Зазор для align_single_line_brace.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) The span for aligning Objective-C message specifications.</source>
        <comment>align_oc_msg_spec_span</comment>
        <translation>(OC) Размах для выравнивания спецификаций сообщений Objective-C.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align (default).</source>
        <comment>align_oc_msg_spec_span</comment>
        <translation>0: не выравнивать (по умолчанию).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align macros wrapped with a backslash and a newline. This will
not work right if the macro contains a multi-line comment.</source>
        <comment>align_nl_cont</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align macro functions and variables together.</source>
        <comment>align_pp_define_together</comment>
        <translation type="unfinished">Выравнивать ли макрофункции и переменные вместе.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The span for aligning on &apos;#define&apos; bodies.</source>
        <comment>align_pp_define_span</comment>
        <translation type="unfinished">Размах для выравнивания тела макросов #define.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>=0: Don&apos;t align (default)
&gt;0: Number of lines (including comments) between blocks</source>
        <comment>align_pp_define_span</comment>
        <translation>=0: Не выравнивать (по умолчанию)&lt;br&gt;
&gt;0: Количество строк (включая комментарии) между блоками</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The minimum space between label and value of a preprocessor define.</source>
        <comment>align_pp_define_gap</comment>
        <translation type="unfinished">Определяется минимальное расстояние между меткой и значением препроцессора.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align lines that start with &apos;&lt;&lt;&apos; with previous &apos;&lt;&lt;&apos;.</source>
        <comment>align_left_shift</comment>
        <translation type="unfinished">Выравнивать строки, начинающиеся с &apos;&amp;lt;&amp;lt;&apos; с предыдущим &apos;&amp;lt;&amp;lt;&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align comma-separated statements following &apos;&lt;&lt;&apos; (as used to
initialize Eigen matrices).</source>
        <comment>align_eigen_comma_init</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align text after &apos;asm volatile ()&apos; colons.</source>
        <comment>align_asm_colon</comment>
        <translation type="unfinished">Выравнивать текст после двоеточия &amp;quot;asm volatile ()&amp;quot;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Span for aligning parameters in an Objective-C message call
on the &apos;:&apos;.</source>
        <comment>align_oc_msg_colon_span</comment>
        <translation>(OC) Размах для выравнивания параметров в вызове сообщения Objective-C по &apos;:&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: Don&apos;t align.</source>
        <comment>align_oc_msg_colon_span</comment>
        <translation>0: не выравнивать.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to always align with the first parameter, even if it is too
short.</source>
        <comment>align_oc_msg_colon_first</comment>
        <translation>(OC) Всегда выравнивать по первому параметру, даже если он слишком короткий.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to align parameters in an Objective-C &apos;+&apos; or &apos;-&apos; declaration
on the &apos;:&apos;.</source>
        <comment>align_oc_decl_colon</comment>
        <translation>(OC) Выравнивать параметры в объявлении Objective-C &apos;+&apos; или &apos;-&apos; по &apos;:&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to not align parameters in an Objectve-C message call if first
colon is not on next line of the message call (the same way Xcode does
aligment)</source>
        <comment>align_oc_msg_colon_xcode_like</comment>
        <translation>(OC) Выравнивать параметры в вызове сообщения Objectve-C, если первое двоеточие не находится в следующей строке вызова сообщения (так же, как это делает Xcode)</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Try to wrap comments at N columns.</source>
        <comment>cmt_width</comment>
        <translation type="unfinished">Пататься свернуть комментарии на колонке N.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>How to reflow comments.</source>
        <comment>cmt_reflow_mode</comment>
        <translation type="unfinished">Как переформатировать комментарии.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>0: No reflowing (apart from the line wrapping due to cmt_width) (default)
1: No touching at all
2: Full reflow (enable cmt_indent_multi for indent with line wrapping due to cmt_width)</source>
        <comment>cmt_reflow_mode</comment>
        <translation>0: Без переоформления (кроме сворачивания строки из-за cmt_width) (по умолчанию)
1: Не трогать вообще
2: Полная перебивка (включите cmt_indent_multi для отступа со сверткой строки из-за cmt_width)</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Path to a file that contains regular expressions describing patterns for
which the end of one line and the beginning of the next will be folded into
the same sentence or paragraph during full comment reflow. The regular
expressions are described using ECMAScript syntax. The syntax for this
specification is as follows, where &quot;...&quot; indicates the custom regular
expression and &quot;n&quot; indicates the nth end_of_prev_line_regex and
beg_of_next_line_regex regular expression pair:</source>
        <comment>cmt_reflow_fold_regex_file</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>end_of_prev_line_regex[1] = &quot;...$&quot;
beg_of_next_line_regex[1] = &quot;^...&quot;
end_of_prev_line_regex[2] = &quot;...$&quot;
beg_of_next_line_regex[2] = &quot;^...&quot;
            .
            .
            .
end_of_prev_line_regex[n] = &quot;...$&quot;
beg_of_next_line_regex[n] = &quot;^...&quot;</source>
        <comment>cmt_reflow_fold_regex_file</comment>
        <translation type="unfinished">end_of_prev_line_regex[1] = &amp;quot;...$&amp;quot;
beg_of_next_line_regex[1] = &amp;quot;^...&amp;quot;
end_of_prev_line_regex[2] = &amp;quot;...$&amp;quot;
beg_of_next_line_regex[2] = &amp;quot;^...&amp;quot;
            .
            .
            .
end_of_prev_line_regex[n] = &amp;quot;...$&amp;quot;
beg_of_next_line_regex[n] = &amp;quot;^...&amp;quot;</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Note that use of this option overrides the default reflow fold regular
expressions, which are internally defined as follows:</source>
        <comment>cmt_reflow_fold_regex_file</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>end_of_prev_line_regex[1] = &quot;[\w,\]\)]$&quot;
beg_of_next_line_regex[1] = &quot;^[\w,\[\(]&quot;
end_of_prev_line_regex[2] = &quot;\.$&quot;
beg_of_next_line_regex[2] = &quot;^[A-Z]&quot;</source>
        <comment>cmt_reflow_fold_regex_file</comment>
        <translation type="unfinished">end_of_prev_line_regex[1] = &amp;quot;[\w,\]\)]$&amp;quot;
beg_of_next_line_regex[1] = &amp;quot;^[\w,\[\(]&amp;quot;
end_of_prev_line_regex[2] = &amp;quot;\.$&amp;quot;
beg_of_next_line_regex[2] = &amp;quot;^[A-Z]&amp;quot;</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent wrapped lines to the start of the encompassing paragraph
during full comment reflow (cmt_reflow_mode = 2). Overrides the value
specified by cmt_sp_after_star_cont.</source>
        <comment>cmt_reflow_indent_to_paragraph_start</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Note that cmt_align_doxygen_javadoc_tags overrides this option for
paragraphs associated with javadoc tags</source>
        <comment>cmt_reflow_indent_to_paragraph_start</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to convert all tabs to spaces in comments. If false, tabs in
comments are left alone, unless used for indenting.</source>
        <comment>cmt_convert_tab_to_spaces</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to apply changes to multi-line comments, including cmt_width,
keyword substitution and leading chars.</source>
        <comment>cmt_indent_multi</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to align doxygen javadoc-style tags (&apos;@param&apos;, &apos;@return&apos;, etc.)
and corresponding fields such that groups of consecutive block tags,
parameter names, and descriptions align with one another. Overrides that
which is specified by the cmt_sp_after_star_cont. If cmt_width &gt; 0, it may
be necessary to enable cmt_indent_multi and set cmt_reflow_mode = 2
in order to achieve the desired alignment for line-wrapping.</source>
        <comment>cmt_align_doxygen_javadoc_tags</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of spaces to insert after the star and before doxygen
javadoc-style tags (@param, @return, etc). Requires enabling
cmt_align_doxygen_javadoc_tags. Overrides that which is specified by the
cmt_sp_after_star_cont.</source>
        <comment>cmt_sp_before_doxygen_javadoc_tags</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to change trailing, single-line c-comments into cpp-comments.</source>
        <comment>cmt_trailing_single_line_c_to_cpp</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to group c-comments that look like they are in a block.</source>
        <comment>cmt_c_group</comment>
        <translation type="unfinished">Группировать c-комментарии, которые выглядят так, как будто они находятся в блоке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to put an empty &apos;/*&apos; on the first line of the combined c-comment.</source>
        <comment>cmt_c_nl_start</comment>
        <translation type="unfinished">Ставить пустое &apos;/*&apos; в первой строке комбинированного c-комментария.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline before the closing &apos;*/&apos; of the combined c-comment.</source>
        <comment>cmt_c_nl_end</comment>
        <translation type="unfinished">Добавлять новую строку перед закрывающим &apos;*/&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to change cpp-comments into c-comments.</source>
        <comment>cmt_cpp_to_c</comment>
        <translation type="unfinished">Изменять cpp-комментарии (//) на c-комментарии(/**/).</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to group cpp-comments that look like they are in a block. Only
meaningful if cmt_cpp_to_c=true.</source>
        <comment>cmt_cpp_group</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to put an empty &apos;/*&apos; on the first line of the combined cpp-comment
when converting to a c-comment.</source>
        <comment>cmt_cpp_nl_start</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Requires cmt_cpp_to_c=true and cmt_cpp_group=true.</source>
        <comment>cmt_cpp_nl_start</comment>
        <translation type="unfinished">Требуется cmt_cpp_to_c=true и cmt_cpp_group=true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add a newline before the closing &apos;*/&apos; of the combined cpp-comment
when converting to a c-comment.</source>
        <comment>cmt_cpp_nl_end</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Requires cmt_cpp_to_c=true and cmt_cpp_group=true.</source>
        <comment>cmt_cpp_nl_end</comment>
        <translation type="unfinished">Требуется cmt_cpp_to_c=true и cmt_cpp_group=true.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to put a star on subsequent comment lines.</source>
        <comment>cmt_star_cont</comment>
        <translation type="unfinished">Ставить * на последующие строки комментариев.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of spaces to insert at the start of subsequent comment lines.</source>
        <comment>cmt_sp_before_star_cont</comment>
        <translation type="unfinished">Количество пробелов для вставки в начале последующих строк комментария.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The number of spaces to insert after the star on subsequent comment lines.</source>
        <comment>cmt_sp_after_star_cont</comment>
        <translation type="unfinished">Количество пробелов, которое необходимо вставить после * в последующих строках комментариев.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>For multi-line comments with a &apos;*&apos; lead, remove leading spaces if the first
and last lines of the comment are the same length.</source>
        <comment>cmt_multi_check_last</comment>
        <translation type="unfinished">Для многострочных комментариев со знаком &apos;*&apos; удалять лидирующие пробелы, если первая и последняя строки комментария имеют одинаковую длину.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>For multi-line comments with a &apos;*&apos; lead, remove leading spaces if the first
and last lines of the comment are the same length AND if the length is
bigger as the first_len minimum.</source>
        <comment>cmt_multi_first_len_minimum</comment>
        <translation type="unfinished">Для многострочных комментариев со знаком &apos;*&apos; удалять лидирующие пробелы, если первая и последняя строки комментария имеют одинаковую длину И если длина больше минимума first_len.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Path to a file that contains text to insert at the beginning of a file if
the file doesn&apos;t start with a C/C++ comment. If the inserted text contains
&apos;$(filename)&apos;, that will be replaced with the current file&apos;s name.</source>
        <comment>cmt_insert_file_header</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Path to a file that contains text to insert at the end of a file if the
file doesn&apos;t end with a C/C++ comment. If the inserted text contains
&apos;$(filename)&apos;, that will be replaced with the current file&apos;s name.</source>
        <comment>cmt_insert_file_footer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Path to a file that contains text to insert before a function definition if
the function isn&apos;t preceded by a C/C++ comment. If the inserted text
contains &apos;$(function)&apos;, &apos;$(javaparam)&apos; or &apos;$(fclass)&apos;, these will be
replaced with, respectively, the name of the function, the javadoc &apos;@param&apos;
and &apos;@return&apos; stuff, or the name of the class to which the member function
belongs.</source>
        <comment>cmt_insert_func_header</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Path to a file that contains text to insert before a class if the class
isn&apos;t preceded by a C/C++ comment. If the inserted text contains &apos;$(class)&apos;,
that will be replaced with the class name.</source>
        <comment>cmt_insert_class_header</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Path to a file that contains text to insert before an Objective-C message
specification, if the method isn&apos;t preceded by a C/C++ comment. If the
inserted text contains &apos;$(message)&apos; or &apos;$(javaparam)&apos;, these will be
replaced with, respectively, the name of the function, or the javadoc
&apos;@param&apos; and &apos;@return&apos; stuff.</source>
        <comment>cmt_insert_oc_msg_header</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether a comment should be inserted if a preprocessor is encountered when
stepping backwards from a function name.</source>
        <comment>cmt_insert_before_preproc</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Applies to cmt_insert_oc_msg_header, cmt_insert_func_header and
cmt_insert_class_header.</source>
        <comment>cmt_insert_before_preproc</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether a comment should be inserted if a function is declared inline to a
class definition.</source>
        <comment>cmt_insert_before_inlines</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Applies to cmt_insert_func_header.</source>
        <comment>cmt_insert_before_inlines</comment>
        <translation type="unfinished">Применяется к cmt_insert_func_header.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether a comment should be inserted if the function is a class constructor
or destructor.</source>
        <comment>cmt_insert_before_ctor_dtor</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Applies to cmt_insert_func_header.</source>
        <comment>cmt_insert_before_ctor_dtor</comment>
        <translation type="unfinished">Применяется к cmt_insert_func_header.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove braces on a single-line &apos;do&apos; statement.</source>
        <comment>mod_full_brace_do</comment>
        <translation type="unfinished">Добавить или убрать фигурные скобки вокруг однострочного блока &apos;do&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove braces on a single-line &apos;for&apos; statement.</source>
        <comment>mod_full_brace_for</comment>
        <translation type="unfinished">Добавить или убрать фигурные скобки вокруг однострочного блока &apos;for&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(Pawn) Add or remove braces on a single-line function definition.</source>
        <comment>mod_full_brace_function</comment>
        <translation>(Pawn) Добавить или убрать скобки в определении однострочной функции.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove braces on a single-line &apos;if&apos; statement. Braces will not be
removed if the braced statement contains an &apos;else&apos;.</source>
        <comment>mod_full_brace_if</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to enforce that all blocks of an &apos;if&apos;/&apos;else if&apos;/&apos;else&apos; chain either
have, or do not have, braces. If true, braces will be added if any block
needs braces, and will only be removed if they can be removed from all
blocks.</source>
        <comment>mod_full_brace_if_chain</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Overrides mod_full_brace_if.</source>
        <comment>mod_full_brace_if_chain</comment>
        <translation type="unfinished">Переопределяет mod_full_brace_if.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to add braces to all blocks of an &apos;if&apos;/&apos;else if&apos;/&apos;else&apos; chain.
If true, mod_full_brace_if_chain will only remove braces from an &apos;if&apos; that
does not have an &apos;else if&apos; or &apos;else&apos;.</source>
        <comment>mod_full_brace_if_chain_only</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove braces on single-line &apos;while&apos; statement.</source>
        <comment>mod_full_brace_while</comment>
        <translation type="unfinished">Добавить или убрать фигурные скобки вокруг однострочного блока &apos;while&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove braces on single-line &apos;using ()&apos; statement.</source>
        <comment>mod_full_brace_using</comment>
        <translation type="unfinished">Добавить или убрать фигурные скобки вокруг однострочного блока &apos;using ()&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Don&apos;t remove braces around statements that span N newlines</source>
        <comment>mod_full_brace_nl</comment>
        <translation type="unfinished">Не удалять скобки вокруг выражений, которые охватывают N новых строк.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to prevent removal of braces from &apos;if&apos;/&apos;for&apos;/&apos;while&apos;/etc. blocks
which span multiple lines.</source>
        <comment>mod_full_brace_nl_block_rem_mlcond</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Affects:
  mod_full_brace_for
  mod_full_brace_if
  mod_full_brace_if_chain
  mod_full_brace_if_chain_only
  mod_full_brace_while
  mod_full_brace_using</source>
        <comment>mod_full_brace_nl_block_rem_mlcond</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Does not affect:
  mod_full_brace_do
  mod_full_brace_function</source>
        <comment>mod_full_brace_nl_block_rem_mlcond</comment>
        <translation type="unfinished">Не влияет: 
  mod_full_brace_do 
  mod_full_brace_function</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove unnecessary parenthesis on &apos;return&apos; statement.</source>
        <comment>mod_paren_on_return</comment>
        <translation type="unfinished">Добавить или убрать ненужные круглые скобки на операторе &apos;return&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(Pawn) Whether to change optional semicolons to real semicolons.</source>
        <comment>mod_pawn_semicolon</comment>
        <translation>(Pawn) Заменять опциональные точки с запятой на настоящие точки с запятой.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to fully parenthesize Boolean expressions in &apos;while&apos; and &apos;if&apos;
statement, as in &apos;if (a &amp;&amp; b &gt; c)&apos; =&gt; &apos;if (a &amp;&amp; (b &gt; c))&apos;.</source>
        <comment>mod_full_paren_if_bool</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to remove superfluous semicolons.</source>
        <comment>mod_remove_extra_semicolon</comment>
        <translation type="unfinished">Удалить лишние точки с запятой.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to remove duplicate include.</source>
        <comment>mod_remove_duplicate_include</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If a function body exceeds the specified number of newlines and doesn&apos;t have
a comment after the close brace, a comment will be added.</source>
        <comment>mod_add_long_function_closebrace_comment</comment>
        <translation type="unfinished">Если тело функции превышает указанное количество строк и не имеет комментария после закрытой скобки, то комментарий будет добавлен.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If a namespace body exceeds the specified number of newlines and doesn&apos;t
have a comment after the close brace, a comment will be added.</source>
        <comment>mod_add_long_namespace_closebrace_comment</comment>
        <translation type="unfinished">Если тело пространства имён превышает указанное количество строк и не имеет комментария после закрытой скобки, комментарий будет добавлен.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If a class body exceeds the specified number of newlines and doesn&apos;t have a
comment after the close brace, a comment will be added.</source>
        <comment>mod_add_long_class_closebrace_comment</comment>
        <translation type="unfinished">Если тело класса превышает указанное количество строк и не имеет комментария после закрытой скобки, то комментарий будет добавлен.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If a switch body exceeds the specified number of newlines and doesn&apos;t have a
comment after the close brace, a comment will be added.</source>
        <comment>mod_add_long_switch_closebrace_comment</comment>
        <translation type="unfinished">Если тело switch превышает указанное количество строк и не имеет комментария после закрытой скобки, то комментарий будет добавлен.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If an #ifdef body exceeds the specified number of newlines and doesn&apos;t have
a comment after the #endif, a comment will be added.</source>
        <comment>mod_add_long_ifdef_endif_comment</comment>
        <translation type="unfinished">Если тело #ifdef превышает указанное количество строк и не имеет комментария после #endif, то комментарий будет добавлен.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If an #ifdef or #else body exceeds the specified number of newlines and
doesn&apos;t have a comment after the #else, a comment will be added.</source>
        <comment>mod_add_long_ifdef_else_comment</comment>
        <translation type="unfinished">Если тело #ifdef или #else превышает указанное количество строк и не имеет комментария после #else, то комментарий будет добавлен.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to take care of the case by the mod_sort_xx options.</source>
        <comment>mod_sort_case_sensitive</comment>
        <translation type="unfinished">Должен ли случай быть решен с помощью опций mod_sort_xx.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to sort consecutive single-line &apos;import&apos; statements.</source>
        <comment>mod_sort_import</comment>
        <translation type="unfinished">Сортировать последовательные однострочные утверждения &amp;quot;import&amp;quot;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) Whether to sort consecutive single-line &apos;using&apos; statements.</source>
        <comment>mod_sort_using</comment>
        <translation>(C#) Сортировать последовательные однострочные выражения &apos;using&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to sort consecutive single-line &apos;#include&apos; statements (C/C++) and
&apos;#import&apos; statements (Objective-C). Be aware that this has the potential to
break your code if your includes/imports have ordering dependencies.</source>
        <comment>mod_sort_include</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to prioritize &apos;#include&apos; and &apos;#import&apos; statements that contain
filename without extension when sorting is enabled.</source>
        <comment>mod_sort_incl_import_prioritize_filename</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to prioritize &apos;#include&apos; and &apos;#import&apos; statements that does not
contain extensions when sorting is enabled.</source>
        <comment>mod_sort_incl_import_prioritize_extensionless</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to prioritize &apos;#include&apos; and &apos;#import&apos; statements that contain
angle over quotes when sorting is enabled.</source>
        <comment>mod_sort_incl_import_prioritize_angle_over_quotes</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to ignore file extension in &apos;#include&apos; and &apos;#import&apos; statements
for sorting comparison.</source>
        <comment>mod_sort_incl_import_ignore_extension</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to group &apos;#include&apos; and &apos;#import&apos; statements when sorting is enabled.</source>
        <comment>mod_sort_incl_import_grouping_enabled</comment>
        <translation type="unfinished">Группировать операторы &apos;#include&apos; и &apos;#import&apos; при включенной сортировке.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to move a &apos;break&apos; that appears after a fully braced &apos;case&apos; before
the close brace, as in &apos;case X: { ... } break;&apos; =&gt; &apos;case X: { ... break; }&apos;.</source>
        <comment>mod_move_case_break</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove braces around a fully braced case statement. Will only remove
braces if there are no variable declarations in the block.</source>
        <comment>mod_case_brace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to remove a void &apos;return;&apos; that appears as the last statement in a
function.</source>
        <comment>mod_remove_empty_return</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove the comma after the last value of an enumeration.</source>
        <comment>mod_enum_last_comma</comment>
        <translation type="unfinished">Добавить или убрать запятую после последнего значения перечисления.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Whether to organize the properties. If true, properties will be
rearranged according to the mod_sort_oc_property_*_weight factors.</source>
        <comment>mod_sort_oc_properties</comment>
        <translation>(OC) Упорядочивать свойства. 
Если true, свойства будут упорядочены в соответствии с коэффициентами mod_sort_oc_property_*_weight.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Weight of a class property modifier.</source>
        <comment>mod_sort_oc_property_class_weight</comment>
        <translation>(OC) Вес модификатора свойств класса.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Weight of &apos;atomic&apos; and &apos;nonatomic&apos;.</source>
        <comment>mod_sort_oc_property_thread_safe_weight</comment>
        <translation>(OC) Вес &apos;atomic&apos; и &apos;nonatomic&apos;.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Weight of &apos;readwrite&apos; when organizing properties.</source>
        <comment>mod_sort_oc_property_readwrite_weight</comment>
        <translation>(OC) Вес &apos;readwrite&apos; при организации свойств.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Weight of a reference type specifier (&apos;retain&apos;, &apos;copy&apos;, &apos;assign&apos;,
&apos;weak&apos;, &apos;strong&apos;) when organizing properties.</source>
        <comment>mod_sort_oc_property_reference_weight</comment>
        <translation>(OC) Вес спецификатора типа ссылки (&apos;retain&apos;, &apos;copy&apos;, &apos;assign&apos;, &apos;weak&apos;, &apos;strong&apos;) при организации свойств.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Weight of getter type (&apos;getter=&apos;) when organizing properties.</source>
        <comment>mod_sort_oc_property_getter_weight</comment>
        <translation>(OC) Вес типа getter (&apos;getter=&apos;) при организации свойств.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Weight of setter type (&apos;setter=&apos;) when organizing properties.</source>
        <comment>mod_sort_oc_property_setter_weight</comment>
        <translation>(OC) Вес типа setter (&apos;setter=&apos;) при организации свойств.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(OC) Weight of nullability type (&apos;nullable&apos;, &apos;nonnull&apos;, &apos;null_unspecified&apos;,
&apos;null_resettable&apos;) when organizing properties.</source>
        <comment>mod_sort_oc_property_nullability_weight</comment>
        <translation>(OC) Вес типа недействительности (&apos;nullable&apos;, &apos;nonnull&apos;, &apos;null_unspecified&apos;, &apos;null_resettable&apos;) при организации свойств.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove indentation of preprocessor directives inside #if blocks
at brace level 0 (file-level).</source>
        <comment>pp_indent</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent #if/#else/#endif at the brace level. If false, these are
indented from column 1.</source>
        <comment>pp_indent_at_level</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Specifies the number of columns to indent preprocessors per level
at brace level 0 (file-level). If pp_indent_at_level=false, also specifies
the number of columns to indent preprocessors per level
at brace level &gt; 0 (function-level).</source>
        <comment>pp_indent_count</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Add or remove space after # based on pp_level of #if blocks.</source>
        <comment>pp_space</comment>
        <translation type="unfinished">Добавить или убрать пробелов после # на основе уровня блоков #if.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Sets the number of spaces per level added with pp_space.</source>
        <comment>pp_space_count</comment>
        <translation type="unfinished">Устанавливает количество пробелов на уровне, добавленных с помощью pp_space.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The indent for &apos;#region&apos; and &apos;#endregion&apos; in C# and &apos;#pragma region&apos; in
C/C++. Negative values decrease indent down to the first column.</source>
        <comment>pp_indent_region</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent the code between #region and #endregion.</source>
        <comment>pp_region_indent_code</comment>
        <translation type="unfinished">Добавлять отступ кода между #region и #endregion.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If pp_indent_at_level=true, sets the indent for #if, #else and #endif when
not at file-level. Negative values decrease indent down to the first column.</source>
        <comment>pp_indent_if</comment>
        <translation type="unfinished">Если pp_indent_at_level=true, определяет отступ для #if, #else и #endif, когда они не на уровне файла. 
Отрицательные значения уменьшают отступ до первого столбца.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>=0: Indent preprocessors using output_tab_size
&gt;0: Column at which all preprocessors will be indented</source>
        <comment>pp_indent_if</comment>
        <translation>=0: Отступ препроцессоров с использованием output_tab_size&lt;br&gt;
&gt;0: Столбец, на уровне которого будут отступать все препроцессоры</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent the code between #if, #else and #endif.</source>
        <comment>pp_if_indent_code</comment>
        <translation type="unfinished">Можно ли сделать отступ между #if, #else и #endif.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent the body of an #if that encompasses all the code in the file.</source>
        <comment>pp_indent_in_guard</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent &apos;#define&apos; at the brace level. If false, these are
indented from column 1.</source>
        <comment>pp_define_at_level</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent &apos;#include&apos; at the brace level.</source>
        <comment>pp_include_at_level</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to ignore the &apos;#define&apos; body while formatting.</source>
        <comment>pp_ignore_define_body</comment>
        <translation type="unfinished">Игнорировать тело &apos;#define&apos; во время форматирования.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent case statements between #if, #else, and #endif.
Only applies to the indent of the preprocesser that the case statements
directly inside of.</source>
        <comment>pp_indent_case</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent whole function definitions between #if, #else, and #endif.
Only applies to the indent of the preprocesser that the function definition
is directly inside of.</source>
        <comment>pp_indent_func_def</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent extern C blocks between #if, #else, and #endif.
Only applies to the indent of the preprocesser that the extern block is
directly inside of.</source>
        <comment>pp_indent_extern</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to indent braces directly inside #if, #else, and #endif.
Only applies to the indent of the preprocesser that the braces are directly
inside of.</source>
        <comment>pp_indent_brace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The regex for include category with priority 0.</source>
        <comment>include_category_0</comment>
        <translation type="unfinished">Регекс для категории включений с приоритетом 0.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The regex for include category with priority 1.</source>
        <comment>include_category_1</comment>
        <translation type="unfinished">Регекс для категории включений с приоритетом 1.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The regex for include category with priority 2.</source>
        <comment>include_category_2</comment>
        <translation type="unfinished">Регекс для категории включений с приоритетом 2.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>true:  indent_func_call_param will be used (default)
false: indent_func_call_param will NOT be used</source>
        <comment>use_indent_func_call_param</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The value of the indentation for a continuation line is calculated
differently if the statement is:
- a declaration: your case with QString fileName ...
- an assignment: your case with pSettings = new QSettings( ...</source>
        <comment>use_indent_continue_only_once</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>At the second case the indentation value might be used twice:
- at the assignment
- at the function call (if present)</source>
        <comment>use_indent_continue_only_once</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>To prevent the double use of the indentation value, use this option with the
value &apos;true&apos;.</source>
        <comment>use_indent_continue_only_once</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>true:  indent_continue will be used only once
false: indent_continue will be used every time (default)</source>
        <comment>use_indent_continue_only_once</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>The value might be used twice:
- at the assignment
- at the opening brace</source>
        <comment>indent_cpp_lambda_only_once</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>To prevent the double use of the indentation value, use this option with the
value &apos;true&apos;.</source>
        <comment>indent_cpp_lambda_only_once</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>true:  indentation will be used only once
false: indentation will be used every time (default)</source>
        <comment>indent_cpp_lambda_only_once</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether sp_after_angle takes precedence over sp_inside_fparen. This was the
historic behavior, but is probably not the desired behavior, so this is off
by default.</source>
        <comment>use_sp_after_angle_always</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Whether to apply special formatting for Qt SIGNAL/SLOT macros. Essentially,
this tries to format these so that they match Qt&apos;s normalized form (i.e. the
result of QMetaObject::normalizedSignature), which can slightly improve the
performance of the QObject::connect call, rather than how they would
otherwise be formatted.</source>
        <comment>use_options_overriding_for_qt_macros</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>See options_for_QT.cpp for details.</source>
        <comment>use_options_overriding_for_qt_macros</comment>
        <translation type="unfinished">Подробности см. в разделе options_for_QT.cpp.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>If true: the form feed character is removed from the list of whitespace
characters. See https://en.cppreference.com/w/cpp/string/byte/isspace.</source>
        <comment>use_form_feed_no_more_as_whitespace_character</comment>
        <translation type="unfinished">Если true: символ подачи формы удаляется из списка пробельных символов. 
См. https://en.cppreference.com/w/cpp/string/byte/isspace.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>(C#) Warning is given if doing tab-to-\t replacement and we have found one
in a C# verbatim string literal.</source>
        <comment>warn_level_tabs_found_in_verbatim_string_literals</comment>
        <translation>(C#) Выдавать предупреждение при замене tab на \t, найденых в строковом литерале на C#.</translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Limit the number of loops.
Used by uncrustify.cpp to exit from infinite loop.
0: no limit.</source>
        <comment>debug_max_number_of_loops</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Set the number of the line to protocol;
Used in the function prot_the_line if the 2. parameter is zero.
0: nothing protocol.</source>
        <comment>debug_line_number_to_protocol</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Set the number of second(s) before terminating formatting the current file,
0: no timeout.
only for linux</source>
        <comment>debug_timeout</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="7792"/>
        <source>Set the number of characters to be printed if the text is too long,
0: do not truncate.</source>
        <comment>debug_truncate</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="uncrustify_ui.py" line="37"/>
        <source>The type of line endings.</source>
        <comment>newlines</comment>
        <translation type="unfinished">Тип окончания строки.</translation>
    </message>
</context>
</TS>
