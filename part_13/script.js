// const container = document.querySelector('.container')
// const jumbo = document.querySelector('.jumbo')
// const thumbs = document.querySelectorAll('.thumb')

// container.addEventListener('click', function(e){
//     if(e.target.className == 'thumb'){
//         jumbo.src = e.target.src
//         jumbo.classList.add('fade')

//         setTimeout(function(){
//             jumbo.classList.remove('fade')
//         }, 500)

//         thumbs.forEach(function(thumb){
//             thumb.classList.remove('active')
//         })
//         e.target.classList.add('active')
//     }

// })

// const tagA = document.getElementById('RandomLink')

// tagA.innerHTML = 'I change this'

// tagA.classList.add('makeRed')

// function peringatan(){
//     alert("Hello from the DOM! 🚀");
// }

// const tombolTest = document.getElementById('tombolTest')

// tombolTest.addEventListener('click', peringatan)

const sBtn = document.getElementById('sBtn')

sBtn.addEventListener('click', function(e){
    e.preventDefault()
    e.stopPropagation()
})




