// // const closeButton = document.querySelector('.close')
// // const card = document.querySelector('.card')

// // closeButton.addEventListener('click', function(){
// //     card.style.display = 'none'
// // })

// // gunakan DOM traversal
// const closeButton = document.querySelectorAll('.close')
// // for(let i = 0; i < closeButton.length; i++){
// //     closeButton[i].addEventListener('click', function(e){
// //         // closeButton[i].parentElement.style.display = 'none'
// //         e.target.parentElement.style.display = 'none'
// //     })
// // }

// // cara penulisan lain

// closeButton.forEach(function(el){
    
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none'
//         e.preventDefault()
//         e.stopPropagation()
//     })
// })


// const cards = document.querySelectorAll('.card')
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok')
//     })
// })


// code lebih efektif dan efisien karena meminta JS mencari dalam container tombol mn yg ditekan dan validasi menggunakan if
const container = document.querySelector('.container')

container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none'
        e.preventDefault()
        e.stopPropagation()
    }
})