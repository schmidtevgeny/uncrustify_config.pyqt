from lxml import etree
with open('uncrustify.ts', 'rb') as fobj:
    xml = fobj.read()
root = etree.fromstring(xml)

for appt in root.getchildren():
    if appt.tag == 'context':
        name = appt.find('name')
        childs = []
        for rec in appt.findall('message'):
            childs.append(rec)
        childs.sort(key=lambda rec: int(rec.find('location').get('line')))
        appt.clear()
        appt.append(name)
        for ch in childs:
            appt.append(ch)

handle = etree.tostring(root, pretty_print = True, encoding = 'utf-8', xml_declaration = True)
applic = open("uncrustify2.ts", "wb")
applic.write(handle)
applic.close()
