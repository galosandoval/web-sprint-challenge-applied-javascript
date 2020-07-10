/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselMaker () {
  const carousel = document.createElement('div')
  carousel.classList.add('carousel')

  const leftbutton = document.createElement('div')
  leftbutton.classList.add('left-button')

  const mountainsImg = document.createElement('img')
  mountainsImg.src = '/assets/carousel/mountains.jpeg'

  const computerImg = document.createElement('img')
  computerImg.src = '/assets/carousel/computer.jpeg'

  const treesImg = document.createElement('img')
  treesImg.src = '/assets/carousel/trees.jpeg'

  const turntableImg = document.createElement('img')
  turntableImg.src = '/assets/carousel/turntable.jpeg'

  const rightbutton = document.createElement('div')
  rightbutton.classList.add('right-button')
  rightbutton.textContent = '>'

  carousel.appendChild(leftbutton)
  carousel.appendChild(mountainsImg)
  carousel.appendChild(computerImg)
  carousel.appendChild(treesImg)
  carousel.appendChild(turntableImg)
  carousel.appendChild(rightbutton)

  return carousel
}

const carouselContainer = document.querySelector('carousel-container')
// carouselContainer.appendChild(carouselMaker())
// console.log(carouselMaker())