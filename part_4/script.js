// // document.querySelector()

// const p4 = document.querySelector('#b p')

// p4.style.color = "green"

// const li2 = document.querySelector("section#b ul li:nth-child(2)")
// li2.style.backgroundColor = "orange"

// // document.querySelectorAll()

// const p = document.querySelectorAll('p')
// p[2].style.backgroundColor = 'lightblue'
// // kalau mau semua pakai looping saja



// cara ngubah default root
// misal terdapat kasus kita ingin mengedit "paragraf 4". Tentu bisa menggunakan tag name, tapi kan perlu cek index dan querrySelectorAll. Salah satu solusinya adalah mengubah node root.

const sectionB = document.getElementById('b') // bisa pakai querySelector
const p4 = sectionB.querySelector('p') // bisa pakai getElementsByTagName
p4.style.backgroundColor = 'orange'

// sehingga kita memiliki opsi yang banyak.