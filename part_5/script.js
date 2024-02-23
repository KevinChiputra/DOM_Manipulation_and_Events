// const h1 = document.getElementById('judul')
// h1.innerHTML = 'Kevin Chiputra'

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = 'hello world'

// pakai .style
// const judul = document.querySelector('#judul')
// judul.style.color = 'lightblue'
// judul.style.backgroundColor = 'salmon'

// getAttribute
// const judul = document.getElementsByTagName('h1')[0]
// judul.setAttribute('name', 'kevin')

// const a = document.querySelector('section#a a')
// getAttribute return isi attribute tsb
// removeAttribute menghapus attribute


// mengelolah class menggunakan classList ada .add(), .remove(), .togle(), .item(), .contains(), .replace()
const p2 = document.querySelector('.p2')
// p2.classList.add('label')
// p2.classList.remove('label')
// p2.classList.toggle('label') // jika class blm ad di tambahkan, jika sudah ad di remove. bisa buat button
// .classList.item() -> berfungsi untuk mengecek index class pada element

// ganti value class
p2.classList.add('satu')
p2.classList.add('dua')
p2.classList.add('tiga')
p2.classList.replace('tiga', 'empat')
