//DOM selection
// document.getElementById()
const judul = document.getElementById("judul")
judul.style.color = 'red'
judul.style.backgroundColor = "gray"
judul.innerHTML = "sadhika galih"


// document.getElementsByTagName()
const p = document.getElementsByTagName("p")
for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue'
}

// document.getElementsByClassName
const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = "diubah dari JS"