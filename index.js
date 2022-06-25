
// Select some elements...

let header = document.querySelector('#page-header')
header.style.textAlign = "left"

//Gave all images a border radius of 50px
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = "50px"
}

//aligned dog names to the left
let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = "left"
}

//change footer color
let footerColor = document.querySelector('.footer')
footerColor.style.color = 'red'

