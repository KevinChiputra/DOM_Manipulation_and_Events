// membuat element baru.
const pBaru = document.createElement('p')
const textPBaru = document.createTextNode('paragraf baru')
// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru)
// simpan pBaru ke section A
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)

// insertBefore
const liBaru = document.createElement('li')
const isiLiBaru = document.createTextNode('Item baru')
liBaru.append(isiLiBaru)

const ul = document.querySelector('section#b ul')
const li2 = document.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, li2)

// remove child
const linkA = document.querySelector('section#a a')

sectionA.removeChild(linkA)

// replace child
const sectioB = document.getElementById('b')
const p4 = sectioB.querySelector('p')

const h2Baru = document.createElement('h2')
const textH2 = document.createTextNode('judul baru')
h2Baru.appendChild(textH2)

sectioB.replaceChild(h2Baru, p4)