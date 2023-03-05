const movieDisplay = document.getElementById("movieDisplay")
const imageList = document.getElementById('movieImg')
const images = Array.from(imageList.getElementsByTagName('img'))
let currentImageIndex = 0
const numImgToShow = 3

for(let i = 0; i < images.length; i++) {
    if (i >= numImgToShow) { 
        images[i].style.display = 'none'
    }
}

showImages()

function showImages() {
    for (let i = currentImageIndex; i < currentImageIndex + numImgToShow; i++) {
        if( i >= images.length) {
            currentImageIndex = 0;
            i = currentImageIndex;
        }
        images[i].style.display = 'inline-block';
    }
    for (let i = currentImageIndex - numImgToShow; i < currentImageIndex; i++) {
        if (i < 0) {
            i = images.length - numImgToShow;
        }
        images[i].style.display = 'none';
    }
    currentImageIndex += numImgToShow;
    setTimeout(showImages, 5000);
}

