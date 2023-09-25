import textwrap
import re
import html
import platform

import iuliia, markdown
s = '''Отступ должен основываться на размере родительской скобки, т.е. `if` - 3 пробела, `for` - 4 пробела и т.д.
if (x = 0)              |        if (x = 0)
{                       |           {
    x++;                |           x++;
    y *= x;             |           y *= x;
}                       |           }
for (auto x : y)        |        for (auto x : y)
{                       |            {
    print(x);           |            print(x);
}                       |            }

Type: true/false
Default: false '''
def wrap(s):
    if s == "\n": return "\n#"
    my_wrap = textwrap.TextWrapper(width=80, drop_whitespace=False)
    so = ""
    for si in s.split("\n"):
        wrap_list = my_wrap.wrap(html.unescape(si))
        for line in wrap_list:
            so += "\n# " + line
    return so
print(wrap(s))