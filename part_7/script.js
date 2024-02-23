// const p3 = document.getElementsByClassName('p3')[0]

// function ubahWarna(){
//     p3.style.backgroundColor = 'lightblue'
// }

// const p2 = document.querySelector('section#a .p2')

// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue'
// }
// p2.onclick = ubahWarnaP2





// const p4 = document.querySelector('section#b p')
// p4.addEventListener('click', function(){
//     const ul = document.querySelector('section#b ul')
//     const liBaru = document.createElement('li')
//     const textli = document.createTextNode('text li baru')
//     liBaru.appendChild(textli)
//     ul.appendChild(liBaru)
// })

// contoh perbedaan
const p3 = document.querySelector('section#a .p3')
//hanya perintah terakhir yang dibaca, karena menimpa
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue'
// }
// p3.onclick = function(){
//     p3.style.color = 'red'
// }

//sedangkan addEventListner menambahkan
p3.addEventListener('click', function(){
    p3.style.backgroundColor = 'lightblue'
})
p3.addEventListener('click', function(){
    p3.style.color = 'red'
})