// const a = document.querySelector('h1')
const tombol = document.getElementById('tombolUbah')
const body = document.querySelector('body')
tombol.addEventListener('click', function(){
//   body.style.backgroundColor = 'salmon'  
    body.classList.toggle('salmon')
})

const tombolBaru = document.createElement('button')
const isiTombolBaru = document.createTextNode('Random color')
tombolBaru.appendChild(isiTombolBaru)
tombolBaru.setAttribute('type', 'button')

tombol.after(tombolBaru)

tombolBaru.addEventListener('click', function(){
    let r = Math.round(Math.random() * 255 + 1)
    let g = Math.round(Math.random() * 255 + 1)
    let b = Math.round(Math.random() * 255 + 1)
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})



const sMerah = document.querySelector('input[name=S-r]')
sMerah.addEventListener('input', function(){
    let r = sMerah.value
    let g = sHijau.value
    let b = sBiru.value
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

const sHijau = document.querySelector('input[name=S-g]')
sHijau.addEventListener('input', function(){
    let r = sMerah.value
    let g = sHijau.value
    let b = sBiru.value
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

const sBiru = document.querySelector('input[name=S-b]')
sBiru.addEventListener('input', function(){
    let r = sMerah.value
    let g = sHijau.value
    let b = sBiru.value
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})



body.addEventListener('mousemove', function(event){
    // temukan posisi mouse
    // event.clientX dan y
    //ukuran browser
    // console.log(innerWidth)
    const xPos = Math.round((event.clientX / window.innerWidth) * 255)
    const yPos = Math.round((event.clientY / window.innerHeight) * 255)
    // console.log(window.innerWidth)
    body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`
})