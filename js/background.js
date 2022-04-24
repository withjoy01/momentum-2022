const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const randomImage = document.createElement("img");

randomImage.src = `img/${chosenImage}`;
randomImage.classList.add("bgImage");

document.body.appendChild(randomImage);
