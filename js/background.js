const images = ['0.jpeg', '1.jpeg', '2.jpeg', '3.jpg', '4.jpg']

const chosenimage = images[Math.floor(Math.random() * images.length)]

const bgimage = document.createElement('img')

bgimage.src = `img/${chosenimage}`
bgimage.classList.add('bg')

document.body.appendChild(bgimage)
