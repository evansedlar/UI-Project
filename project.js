const movieDisplay = document.getElementById("movieDisplay")
const homeButton = document.getElementById("homeButton")
const planetsButton = document.getElementById("planetsButton")
const speciesButton = document.getElementById("speciesButton")
const charactersButton = document.getElementById("charactersButton")
const vehiclesButton = document.getElementById("vehiclesButton")
const starshipsButton = document.getElementById("starshipsButton")
const pageContents = document.getElementById('pageContents')
const imageList = document.getElementById('movieImg')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const images = Array.from(imageList.getElementsByTagName('img'))
let currentImageIndex = 0
const numImgToShow = 3

homeButton.addEventListener('click', function() {
    window.location.href = "project.html";
})
planetsButton.addEventListener('click', function() {
    function displayPlanets() {
        movieImg.innerHTML = ""
        pageContents.innerHTML = ""
        fetch("https://swapi.dev/api/planets/")
        .then(response => response.json())
        .then(planetsArr => {
            const planets = planetsArr.results
            const planetsList = planets.map(function(planet) {
                return `
                <ul id="planetInfo">
                    <h1>Planet: ${planet.name}</h1>
                    <li>Climate: ${planet.climate}</li>
                    <li>Terrain: ${planet.terrain}</li>
                    <li>Population: ${planet.population}</li>
                </ul>
                `
            })
            pageContents.innerHTML = planetsList.join("")
        })
    }
    displayPlanets()
})


for(let i = 0; i < images.length; i++) {
    if (i >= numImgToShow) { 
        images[i].style.display = 'none'
    }
}

showImages()

function showImages() {
    for(let i = 0; i < images.length; i++) {
        if (i >= numImgToShow) { 
            images[i].style.display = 'none'
        }
    }
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
}

next.addEventListener('click', showImages)
prev.addEventListener('click', showImages)
