const movieDisplay = document.getElementById("movieDisplay")
const homeButton = document.getElementById("homeButton")
const planetsButton = document.getElementById("planetsButton")
const speciesButton = document.getElementById("speciesButton")
const charactersButton = document.getElementById("charactersButton")
const vehiclesButton = document.getElementById("vehiclesButton")
const starshipsButton = document.getElementById("starshipsButton")
const pageContents = document.getElementById('pageContents')
const imageList = document.getElementById('movieImg')
const loadingScreen = document.getElementById('loading-screen')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const images = Array.from(imageList.getElementsByTagName('img'))
let currentImageIndex = 0
const numImgToShow = 3

loadingScreen.style.display = "none"


//Home Button
homeButton.addEventListener('click', function () {
    window.location.href = "project.html";
})

const movie4 = document.getElementById('movie4')
const movie5 = document.getElementById('movie5')
const movie6 = document.getElementById('movie6')
const movie1 = document.getElementById('movie1')
const movie2 = document.getElementById('movie2')
const movie3 = document.getElementById('movie3')


movie4.onclick = function() {
    movieImg.innerHTML = ""
    fetch("https://swapi.dev/api/films/1/")
    .then(response => response.json())
    .then(movie4Arr => {
        const homePage = 
        const movieInfo = document.createElement('div')
        movieInfo.innerHTML = `
            <h1>${movie4Arr.title}</h1>
            <p>Director: ${movie4Arr.director}</p>
            <p>Release Date: ${movie4Arr.release_date}</p>
            <p>Opening Crawl: ${movie4Arr.opening_crawl}</p>
        `
    pageContents.appendChild(movieInfo)
    })
}
movie5.onclick = function() {
    movieImg.innerHTML = ""
    fetch("https://swapi.dev/api/films/2/")
    .then(response => response.json())
    .then(movie5Arr => {
        const movieInfo = document.createElement('div')
        movieInfo.innerHTML = `
            <h1>${movie5Arr.title}</h1>
            <p>Director: ${movie5Arr.director}</p>
            <p>Release Date: ${movie5Arr.release_date}</p>
            <p>Opening Crawl: ${movie5Arr.opening_crawl}</p>
        `
    pageContents.appendChild(movieInfo)
    })
}

movie6.onclick = function() {
    movieImg.innerHTML = ""
    fetch("https://swapi.dev/api/films/3/")
    .then(response => response.json())
    .then(movie6Arr => {
        const movieInfo = document.createElement('div')
        movieInfo.innerHTML = `
        <h1>${movie6Arr.title}</h1>
        <p>Director: ${movie6Arr.director}</p>
        <p>Release Date: ${movie6Arr.release_date}</p>
        <p>Opening Crawl: ${movie6Arr.opening_crawl}</p>
        `
    pageContents.appendChild(movieInfo)
    })
}

movie1.onclick = function() {
    fetch("https://swapi.dev/api/films/4/")
    .then(response => response.json())
    .then(movie1Arr => {
        const movieInfo = document.createElement('div')
        movieInfo.innerHTML = `
        <h1>${movie1Arr.title}</h1>
        <p>Director: ${movie1Arr.director}</p>
        <p>Release Date: ${movie1Arr.release_date}</p>
        <p>Opening Crawl: ${movie1Arr.opening_crawl}</p>
        `
    pageContents.appendChild(movieInfo)
    })
}

movie2.onclick = function() {
    fetch("https://swapi.dev/api/films/5/")
    .then(response => response.json())
    .then(movie2Arr => {
        const movieInfo = document.createElement('div')
        movieInfo.innerHTML = `
        <h1>${movie2Arr.title}</h1>
        <p>Director: ${movie2Arr.director}</p>
        <p>Release Date: ${movie2Arr.release_date}</p>
        <p>Opening Crawl: ${movie2Arr.opening_crawl}</p>
        `
    pageContents.appendChild(movieInfo)
    })
}

movie3.onclick = function() {
    fetch("https://swapi.dev/api/films/6/")
    .then(response => response.json())
    .then(movie3Arr => {
        const movieInfo = document.createElement('div')
        movieInfo.innerHTML = `
        <h1>${movie3Arr.title}</h1>
        <p>Director: ${movie3Arr.director}</p>
        <p>Release Date: ${movie3Arr.release_date}</p>
        <p>Opening Crawl: ${movie3Arr.opening_crawl}</p>
        `
        pageContents.appendChild(movieInfo)
    })
}

// Planets Button
planetsButton.addEventListener('click', function() {
    function displayPlanets() {
        movieImg.innerHTML = ""
        pageContents.innerHTML = ""
        loadingScreen.style.display = "block"
        fetch("https://swapi.dev/api/planets")
            .then(response => response.json())
            .then(planetsArr => {
                const planets = planetsArr.results
                const planetsList = planets.map(function (planet) {
                    return `
                <ul id="planetInfo">
                    <h1>${planet.name}</h1>
                    <li>Homeworld: ${planet.homeworld}</li>
                    <li>Language: ${planet.language}</li>
                    <a href="${planet.people}">Characters of this species</a>
                </ul>
                `
                })
                pageContents.innerHTML = planetsList.join("")

                loadingScreen.style.display = "none"
            })
            .catch(error => {
                loadingScreen.style.display = "none"
                console.error(error)
            })
    }
    displayPlanets()
})







//Species Button
speciesButton.addEventListener('click', function () {
    function displaySpecies() {
        movieImg.innerHTML = ""
        pageContents.innerHTML = ""
        loadingScreen.style.display = "block"
        fetch("https://swapi.dev/api/species")
            .then(response => response.json())
            .then(speciesArr => {
                const species = speciesArr.results
                const speciesList = species.map(function (specie) {
                    return `
                <ul id="planetInfo">
                    <h1>${specie.name}</h1>
                    <li>Homeworld: ${specie.homeworld}</li>
                    <li>Language: ${specie.language}</li>
                    <a href="${specie.people}">Characters of this species</a>
                </ul>
                `
                })
                pageContents.innerHTML = speciesList.join("")

                loadingScreen.style.display = "none"
            })
            .catch(error => {
                loadingScreen.style.display = "none"
                console.error(error)
            })
    }
    displaySpecies()
})


//Characters Button
charactersButton.addEventListener('click', function () {
    function displayCharacters() {
        movieImg.innerHTML = ""
        pageContents.innerHTML = ""
        loadingScreen.style.display = "block"
        fetch("https://swapi.dev/api/people/")
            .then(response => response.json())
            .then(charactersArr => {
                const characters = charactersArr.results
                const charactersList = characters.map(function (character) {
                    return `
                <ul id="planetInfo">
                    <h1>${character.name}</h1>
                    <li>Height: ${character.height}cm</li>
                    <li>Hair Color: ${character.hair_color}</li>
                    <li>Eye Color: ${character.eye_color}</li>
                    <li>Birth Year: ${character.birth_year}</li>
                    <li>Gender: ${character.gender}</li>
                </ul>
                `
                })
                pageContents.innerHTML = charactersList.join("")

                loadingScreen.style.display = "none"
            })
            .catch(error => {
                loadingScreen.style.display = "none"
                console.error(error)
            })
    }
    displayCharacters()
})


//Vehicles Button
vehiclesButton.addEventListener('click', function () {
    function displayVehicles() {
        movieImg.innerHTML = ""
        pageContents.innerHTML = ""
        loadingScreen.style.display = "block"
        fetch("https://swapi.dev/api/vehicles/")
            .then(response => response.json())
            .then(vehiclesArr => {
                const vehicles = vehiclesArr.results
                const vehiclesList = vehicles.map(function (vehicle) {
                    return `
                <ul id="planetInfo">
                    <h1>${vehicle.name}</h1>
                    <li>Model: ${vehicle.model}</li>
                    <li>Manufacturer: ${vehicle.manufacturer}</li>
                    <li>Cost in Credits: ${vehicle.cost_in_credits}</li>
                    <li>Vehicle Class: ${vehicle.vehicle_class}</li>
                    <li>Crew Size: ${vehicle.crew}</li>
                </ul>
                `
                })
                pageContents.innerHTML = vehiclesList.join("")

                loadingScreen.style.display = "none"
            })
            .catch(error => {
                loadingScreen.style.display = "none"
                console.error(error)
            })
    }
    displayVehicles()
})


//Starships Button
starshipsButton.addEventListener('click', function () {
    function displayStarships() {
        movieImg.innerHTML = ""
        pageContents.innerHTML = ""
        loadingScreen.style.display = "block"
        fetch("https://swapi.dev/api/starships/")
            .then(response => response.json())
            .then(starshipsArr => {
                const starships = starshipsArr.results
                const starshipsList = starships.map(function (starship) {
                    return `
                <ul id="planetInfo">
                    <h1>${starship.name}</h1>
                    <li>Model: ${starship.model}</li>
                    <li>Manufacturer: ${starship.manufacturer}</li>
                    <li>Cost in Credits: ${starship.cost_in_credits}</li>
                    <li>Vehicle Class: ${starship.starship_class}</li>
                    <li>Crew Size: ${starship.crew}</li>
                </ul>
                `
                })
                pageContents.innerHTML = starshipsList.join("")

                loadingScreen.style.display = "none"
            })
            .catch(error => {
                loadingScreen.style.display = "none"
                console.error(error)
            })
    }
    displayStarships()
})






for (let i = 0; i < images.length; i++) {
    if (i >= numImgToShow) {
        images[i].style.display = 'none'
    }
}



function showImages() {
    for(let i = 0; i < images.length; i++) {
        if (i >= numImgToShow) { 
            images[i].style.display = 'none'
        }
    }
    for (let i = currentImageIndex; i < currentImageIndex + numImgToShow; i++) {
        if (i >= images.length) {
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

showImages()
next.addEventListener('click', showImages)
prev.addEventListener('click', showImages)
