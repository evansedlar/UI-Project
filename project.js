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
//next buttons



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

// Planets Buttons 1-6
planetsButton.addEventListener('click', function() {
    function displayPlanets() {
        movieImg.innerHTML = ""
        pageContents.innerHTML = ""
        loadingScreen.style.display = "block"
        fetch("https://swapi.dev/api/planets/")
            .then(response => response.json())
            .then(planetsArr => {
                const nextPlanets2 = `<button onclick="planetsPage2()">Next Page</button>`
                const planets = planetsArr.results
                const planetsList = planets.map(function(planet) {
                    return `
                <ul>
                    <h1>${planet.name}</h1>
                    <li>Climate: ${planet.climate}</li>
                    <li>Terrain: ${planet.terrain}</li>
                    <li>Population: ${planet.population}</li>
                </ul>
                `

                })
                pageContents.innerHTML = planetsList.join("") 
                buttonContainer.innerHTML = nextPlanets2
                loadingScreen.style.display = "none"
            })
            
            .catch(error => {
                loadingScreen.style.display = "none"
                console.error(error)
            })
    }
    displayPlanets()
})

function planetsPage2() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/planets/?page=2")
    .then(response => response.json())
    .then(planetsArr => {
        const nextPlanets3 = `<button onclick="planetsPage3()">Next Page</button>`
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
        <ul>
            <h1>${planet.name}</h1>
            <li>Climate: ${planet.climate}</li>
            <li>Terrain: ${planet.terrain}</li>
            <li>Population: ${planet.population}</li>
        </ul>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        buttonContainer.innerHTML = nextPlanets3
        loadingScreen.style.display = "none"
    })
}

function planetsPage3() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/planets/?page=3")
    .then(response => response.json())
    .then(planetsArr => {
        const nextPlanets4 = `<button onclick="planetsPage4()">Next Page</button>`
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
        <ul>
            <h1>${planet.name}</h1>
            <li>Climate: ${planet.climate}</li>
            <li>Terrain: ${planet.terrain}</li>
            <li>Population: ${planet.population}</li>
        </ul>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        buttonContainer.innerHTML = nextPlanets4
        loadingScreen.style.display = "none"
    })
}

function planetsPage4() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/planets/?page=4")
    .then(response => response.json())
    .then(planetsArr => {
        const nextPlanets5 = `<button onclick="planetsPage5()">Next Page</button>`
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
        <ul>
            <h1>${planet.name}</h1>
            <li>Climate: ${planet.climate}</li>
            <li>Terrain: ${planet.terrain}</li>
            <li>Population: ${planet.population}</li>
        </ul>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        buttonContainer.innerHTML = nextPlanets5
        loadingScreen.style.display = "none"
    })
}

function planetsPage5() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/planets/?page=5")
    .then(response => response.json())
    .then(planetsArr => {
        const nextPlanets6 = `<button onclick="planetsPage6()">Next Page</button>`
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
        <ul>
            <h1>${planet.name}</h1>
            <li>Climate: ${planet.climate}</li>
            <li>Terrain: ${planet.terrain}</li>
            <li>Population: ${planet.population}</li>
        </ul>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        buttonContainer.innerHTML = nextPlanets6
        loadingScreen.style.display = "none"
    })
}

function planetsPage6() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/planets/?page=6")
    .then(response => response.json())
    .then(planetsArr => {
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
        <ul>
            <h1>${planet.name}</h1>
            <li>Climate: ${planet.climate}</li>
            <li>Terrain: ${planet.terrain}</li>
            <li>Population: ${planet.population}</li>
        </ul>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        loadingScreen.style.display = "none"
    })
}



//Species Buttons 1-4
speciesButton.addEventListener('click', function () {
    function displaySpecies() {
        movieImg.innerHTML = ""
        pageContents.innerHTML = ""
        loadingScreen.style.display = "block"
        fetch("https://swapi.dev/api/species")
            .then(response => response.json())
            .then(speciesArr => {
                const nextSpecies2 = `<button onclick="speciesPage2()">Next Page</button>`
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
                buttonContainer.innerHTML =  nextSpecies2
                loadingScreen.style.display = "none"
            })
            .catch(error => {
                loadingScreen.style.display = "none"
                console.error(error)
            })
    }
    displaySpecies()
})

function speciesPage2() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/species?page=2")
    .then(response => response.json())
    .then(planetsArr => {
        const nextSpecies3 = `<button onclick="speciesPage3()">Next Page</button>`
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
        <ul>
            <h1>${planet.name}</h1>
            <li>Climate: ${planet.climate}</li>
            <li>Terrain: ${planet.terrain}</li>
            <li>Population: ${planet.population}</li>
        </ul>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        buttonContainer.innerHTML = nextSpecies3
        loadingScreen.style.display = "none"
    })
}

function speciesPage3() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/species?page=3")
    .then(response => response.json())
    .then(planetsArr => {
        const nextSpecies4 = `<button onclick="speciesPage4()">Next Page</button>`
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
        <ul>
            <h1>${planet.name}</h1>
            <li>Climate: ${planet.climate}</li>
            <li>Terrain: ${planet.terrain}</li>
            <li>Population: ${planet.population}</li>
        </ul>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        buttonContainer.innerHTML = nextSpecies4
        loadingScreen.style.display = "none"
    })
}

function speciesPage4() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/species?page=4")
    .then(response => response.json())
    .then(planetsArr => {
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
        <ul>
            <h1>${planet.name}</h1>
            <li>Climate: ${planet.climate}</li>
            <li>Terrain: ${planet.terrain}</li>
            <li>Population: ${planet.population}</li>
        </ul>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        loadingScreen.style.display = "none"
    })
}

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
