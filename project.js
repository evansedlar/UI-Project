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
const titleContainer = document.getElementById('titleContainer')
const buttonContainer = document.getElementById('buttonContainer')
//next buttons


// const images = Array.from(imageList.getElementsByTagName('img'))
let currentImageIndex = 0
const numImgToShow = 3

loadingScreen.style.display = "none"


//Home Button
homeButton.addEventListener('click', function () {
    window.location.href = "project.html";
})

function homePage() {
    window.location.href = "project.html";
}

const movie1 = document.getElementById('movie1')
const movie2 = document.getElementById('movie2')
const movie3 = document.getElementById('movie3')
const movie4 = document.getElementById('movie4')
const movie5 = document.getElementById('movie5')
const movie6 = document.getElementById('movie6')


movie4.onclick = function () {
    movieImg.innerHTML = ""
    fetch("https://swapi.dev/api/films/1/")
        .then(response => response.json())
        .then(movieArr => {
            const homeButton = `<button onclick="homePage()">Back</button>`
            const movieInfo = document.createElement('div')
            movieInfo.innerHTML = `
            <h1>EPISODE ${movieArr.episode_id}: ${movieArr.title}</h1>
            <p>Director: ${movieArr.director}</p>
            <p>Release Date: ${movieArr.release_date}</p>
            <p>Opening Crawl: ${movieArr.opening_crawl}</p>
            <div class="card mb-3">
            <img src="https://www.themoviedb.org/t/p/original/iPnH51khswDrYij6XIBHKlAznW.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Plot</h5>
                    <p class="card-text">Part IV in George Lucas' epic, this movie opens with a rebel ship being boarded by the tyrannical Darth Vader. The plot then follows the life of a simple farm boy, Luke Skywalker, as he and his newly met allies (Han Solo, Chewbacca, Obi-wan Kenobi, C-3PO, R2-D2) attempt to rescue a rebel leader, Princess Leia, from the clutches of the Empire. The conclusion is culminated as the rebels, including Skywalker and flying ace Wedge Antilles make an attack on the Empire's most powerful and ominous weapon, the Death Star.</p>
                    <p class="card-text"><small class="text-muted"></small></p>
                </div>
                </div>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-851725728-1556902127.jpg?crop=1xw:1xh;center,top&resize=980:*" class="card-img-top" alt=>
                    <div class="card-body">
                        <h5 class="card-title">Notable Cast</h5>
                        <p class="card-text">Harrison Ford: Han Solo, Mark Hamill: Luke Skywalker, Carrie Fisher: Princess Leia, Anthony Daniels: C-3PO, Peter Mayhew: Chewbacca, and Kenny Baker: R2-D2</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                <div class="card">
                <img src="https://preview.redd.it/3cwanjjg8n801.jpg?auto=webp&s=986b8b13bcbd23af0045e446ab21685e66c4fb82" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Trivia</h5>
                    <p class="card-text">George Lucas was so sure this movie would flop that instead of attending the premiere, he went on vacation to Hawaii with his good friend Steven Spielberg, where they came up with the idea for Indiana Jones and the Raiders of the Lost Ark (1981).</p>
                    <p class="card-text">In early drafts of the script, R2-D2 could speak standard English, and he had a rather foul vocabulary. Although all of R2's English speech was removed, many of C-3PO's reactions to it were left in.</p>
                    <p class="card-text">To make the lightsaber sound, Ben Burtt mixed the humming of an old 35mm projector at the university where he worked with the sound of interference from a television set. The sound of the lightsabers clashing was a mix of carbon arc noises and the pressing of metal against dry ice.</p>
                </div>
                </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                </div>
            `
            pageContents.appendChild(movieInfo)
            buttonContainer.innerHTML = homeButton
        })
}

movie5.onclick = function() {
    movieImg.innerHTML = ""
    fetch("https://swapi.dev/api/films/2/")
    .then(response => response.json())
    .then(movieArr => {
        const homeButton = `<button onclick="homePage()">Back</button>`

        const movieInfo = document.createElement('div')
        movieInfo.innerHTML = `
            <h1>EPISODE ${movieArr.episode_id}: ${movieArr.title}</h1>
            <p>Director: ${movieArr.director}</p>
            <p>Release Date: ${movieArr.release_date}</p>
            <p>Opening Crawl: ${movieArr.opening_crawl}</p>
        `
    pageContents.appendChild(movieInfo)
    buttonContainer.innerHTML = homeButton
    })
}
movie6.onclick = function() {
    movieImg.innerHTML = ""
    fetch("https://swapi.dev/api/films/3/")
    .then(response => response.json())
    .then(movieArr => {
        const homeButton = `<button onclick="homePage()">Back</button>`
        const movieInfo = document.createElement('div')
        movieInfo.innerHTML = `
            <h1>EPISODE ${movieArr.episode_id}: ${movieArr.title}</h1>
            <p>Director: ${movieArr.director}</p>
            <p>Release Date: ${movieArr.release_date}</p>
            <p>Opening Crawl: ${movieArr.opening_crawl}</p>
        `
    pageContents.appendChild(movieInfo)
    buttonContainer.innerHTML = homeButton
    })
}
movie1.onclick = function() {
    movieImg.innerHTML = ""
    fetch("https://swapi.dev/api/films/4/")
    .then(response => response.json())
    .then(movieArr => {
        const homeButton = `<button onclick="homePage()">Back</button>`
        const movieInfo = document.createElement('div')
        movieInfo.innerHTML = `
            <h1>EPISODE ${movieArr.episode_id}: ${movieArr.title}</h1>
            <p>Director: ${movieArr.director}</p>
            <p>Release Date: ${movieArr.release_date}</p>
            <p>Opening Crawl: ${movieArr.opening_crawl}</p>
        `
    pageContents.appendChild(movieInfo)
    buttonContainer.innerHTML = homeButton
    })
}
movie2.onclick = function() {
    movieImg.innerHTML = ""
    fetch("https://swapi.dev/api/films/5/")
    .then(response => response.json())
    .then(movieArr => {
        const homeButton = `<button onclick="homePage()">Back</button>`
        const movieInfo = document.createElement('div')
        movieInfo.innerHTML = `
            <h1>EPISODE ${movieArr.episode_id}: ${movieArr.title}</h1>
            <p>Director: ${movieArr.director}</p>
            <p>Release Date: ${movieArr.release_date}</p>
            <p>Opening Crawl: ${movieArr.opening_crawl}</p>
            <p> </p>
        `
    pageContents.appendChild(movieInfo)
    buttonContainer.innerHTML = homeButton
    })
}
movie3.onclick = function() {
    movieImg.innerHTML = ""
    fetch("https://swapi.dev/api/films/6/")
    .then(response => response.json())
    .then(movieArr => {
        const homeButton = `<button onclick="homePage()">Back</button>`
        const nextMovie = `<button onclick="">Next</button>`
        const movieInfo = document.createElement('div')
        movieInfo.innerHTML = `
            <h1>EPISODE ${movieArr.episode_id}: ${movieArr.title}</h1>
            <p>Director: ${movieArr.director}</p>
            <p>Release Date: ${movieArr.release_date}</p>
            <p>Opening Crawl: ${movieArr.opening_crawl}</p>
        `
    pageContents.appendChild(movieInfo)
    buttonContainer.innerHTML = homeButton
    })
}

// Planets Button
planetsButton.addEventListener('click', displayPlanets)

function displayPlanets() {
    movieImg.innerHTML = ""
    pageContents.innerHTML = ""
    titleContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/planets/")
        .then(response => response.json())
        .then(planetsArr => {
            const planetTitle = `<h1>Planets</h1>`
            const nextPlanets2 = `<button onclick="planetsPage2()">Next Page</button>`
            const planets = planetsArr.results
            const planetsList = planets.map(function(planet) {
                return `
            <div class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1>${planet.name}</h1>
                    <li>Climate: ${planet.climate}</li>
                    <li>Terrain: ${planet.terrain}</li>
                    <li>Population: ${planet.population}</li>
                </div>
            </div>
            `
            })
            pageContents.innerHTML = planetsList.join("")
            titleContainer.innerHTML = planetTitle 
            buttonContainer.innerHTML = nextPlanets2
            loadingScreen.style.display = "none"
        })
        
        .catch(error => {
            loadingScreen.style.display = "none"
            console.error(error)
        })
}

function planetsPage2() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/planets/?page=2")
    .then(response => response.json())
    .then(planetsArr => {
        const prevPlanets = `<button onclick="displayPlanets()">Previous Page</button>`
        const nextPlanets3 = `<button onclick="planetsPage3()">Next Page</button>`
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
            <div class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${planet.name}</h1>
                    <li>Climate: ${planet.climate}</li>
                    <li>Terrain: ${planet.terrain}</li>
                    <li>Population: ${planet.population}</li>
                </div>
            </div>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        buttonContainer.innerHTML = ` ${prevPlanets} ${nextPlanets3}`
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
        const prevPlanets2 = `<button onclick="planetsPage2()">Previous Page</button>`
        const nextPlanets4 = `<button onclick="planetsPage4()">Next Page</button>`
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
            <div class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${planet.name}</h1>
                    <li>Climate: ${planet.climate}</li>
                    <li>Terrain: ${planet.terrain}</li>
                    <li>Population: ${planet.population}</li>
                </div>
            </div>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        buttonContainer.innerHTML = `${prevPlanets2} ${nextPlanets4}`
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
        const prevPlanets3 = `<button onclick="planetsPage3()">Previous Page</button>`
        const nextPlanets5 = `<button onclick="planetsPage5()">Next Page</button>`
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
            <div class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${planet.name}</h1>
                    <li>Climate: ${planet.climate}</li>
                    <li>Terrain: ${planet.terrain}</li>
                    <li>Population: ${planet.population}</li>
                </div>
            </div>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        buttonContainer.innerHTML = `${prevPlanets3} ${nextPlanets5}`
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
        const prevPlanets4 = `<button onclick="planetsPage4()">Previous Page</button>`
        const nextPlanets6 = `<button onclick="planetsPage6()">Next Page</button>`
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
            <div class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${planet.name}</h1>
                    <li>Climate: ${planet.climate}</li>
                    <li>Terrain: ${planet.terrain}</li>
                    <li>Population: ${planet.population}</li>
                </div>
            </div>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        buttonContainer.innerHTML = `${prevPlanets4} ${nextPlanets6}`
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
        const prevPlanets5 = `<button onclick="planetsPage5()">Previous Page</button>`
        const planets = planetsArr.results
        const planetsList = planets.map(function (planet) {
            return `
            <div class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${planet.name}</h1>
                    <li>Climate: ${planet.climate}</li>
                    <li>Terrain: ${planet.terrain}</li>
                    <li>Population: ${planet.population}</li>
                </div>
            </div>
            `
        })
        pageContents.innerHTML = planetsList.join("")
        buttonContainer.innerHTML = prevPlanets5
        loadingScreen.style.display = "none"
    })
}



//Species Buttons 1-4
speciesButton.addEventListener('click', displaySpecies)

function displaySpecies() {
    movieImg.innerHTML = ""
    pageContents.innerHTML = ""
    titleContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/species")
        .then(response => response.json())
        .then(speciesArr => {
            const speciesTitle = `<h1>Species</h1>`
            const nextSpecies2 = `<button onclick="speciesPage2()">Next Page</button>`
            const species = speciesArr.results
            const speciesList = species.map(function (specie) {
                return `
            <div class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${specie.name}</h1>
                    <li>Language: ${specie.language}</li>
                    <li>Designation: ${specie.designation}</li>
                    <li>Classification: ${specie.classification}</li>
                    <li>Hair Colors: ${specie.hair_colors}</li>
                    <li>Eye Colors: ${specie.eye_colors}</li>
                    <li>Average Lifespan: ${specie.average_lifespan}</li>
                </div>
            </div>
            `
            })
            pageContents.innerHTML = speciesList.join("")
            buttonContainer.innerHTML = nextSpecies2
            titleContainer.innerHTML = speciesTitle
            loadingScreen.style.display = "none"
        })
        .catch(error => {
            loadingScreen.style.display = "none"
            console.error(error)
        })
}

function speciesPage2() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/species/?page=2")
    .then(response => response.json())
    .then(speciesArr => {
        const prevSpecies = `<button onclick="displaySpecies()">Previous Page</button>`
        const nextSpecies3 = `<button onclick="speciesPage3()">Next Page</button>`
        const species = speciesArr.results
        const speciesList = species.map(function (specie) {
            return `
            <div class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${specie.name}</h1>
                    <li>Language: ${specie.language}</li>
                    <li>Designation: ${specie.designation}</li>
                    <li>Classification: ${specie.classification}</li>
                    <li>Hair Colors: ${specie.hair_colors}</li>
                    <li>Eye Colors: ${specie.eye_colors}</li>
                    <li>Average Lifespan: ${specie.average_lifespan}</li>
                </div>
            </div>
            `
        })
        pageContents.innerHTML = speciesList.join("")
        buttonContainer.innerHTML = `${prevSpecies} ${nextSpecies3}`
        loadingScreen.style.display = "none"
    })
}

function speciesPage3() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/species/?page=3")
    .then(response => response.json())
    .then(speciesArr => {
        const prevSpecies2 = `<button onclick="speciesPage2()">Previous Page</button>`
        const nextSpecies4 = `<button onclick="speciesPage4()">Next Page</button>`
        const species = speciesArr.results
        const speciesList = species.map(function (specie) {
            return `
            <div class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${specie.name}</h1>
                    <li>Language: ${specie.language}</li>
                    <li>Designation: ${specie.designation}</li>
                    <li>Classification: ${specie.classification}</li>
                    <li>Hair Colors: ${specie.hair_colors}</li>
                    <li>Eye Colors: ${specie.eye_colors}</li>
                    <li>Average Lifespan: ${specie.average_lifespan}</li>
                </div>
            </div>
            `
        })
        pageContents.innerHTML = speciesList.join("")
        buttonContainer.innerHTML = `${prevSpecies2} ${nextSpecies4}`
        loadingScreen.style.display = "none"
    })
}

function speciesPage4() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/species/?page=4")
    .then(response => response.json())
    .then(speciesArr => {
        const prevSpecies3 = `<button onclick="speciesPage3()">Previous Page</button>`
        const species = speciesArr.results
        const speciesList = species.map(function (specie) {
            return `
            <div class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${specie.name}</h1>
                    <li>Language: ${specie.language}</li>
                    <li>Designation: ${specie.designation}</li>
                    <li>Classification: ${specie.classification}</li>
                    <li>Hair Colors: ${specie.hair_colors}</li>
                    <li>Eye Colors: ${specie.eye_colors}</li>
                    <li>Average Lifespan: ${specie.average_lifespan}</li>
                </div>
            </div>
            `
        })
        pageContents.innerHTML = speciesList.join("")
        buttonContainer.innerHTML = prevSpecies3
        loadingScreen.style.display = "none"
    })
}

//Characters Button 1-9
charactersButton.addEventListener('click', displayCharacters)

function displayCharacters() {
    movieImg.innerHTML = ""
    pageContents.innerHTML = ""
    titleContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/people/")
        .then(response => response.json())
        .then(charactersArr => {
            const charactersTitle = `<h1>Characters</h1>`
            const nextCharacters2 = `<button onclick="charactersPage2()">Next Page</button>`
            const characters = charactersArr.results
            const charactersList = characters.map(function (character) {
                return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${character.name}</h1>
                    <li>Height: ${character.height}cm</li>
                    <li>Hair Color: ${character.hair_color}</li>
                    <li>Eye Color: ${character.eye_color}</li>
                    <li>Birth Year: ${character.birth_year}</li>
                    <li>Gender: ${character.gender}</li>
                </div>
            </ul>
            `
            })
            pageContents.innerHTML = charactersList.join("")
            buttonContainer.innerHTML = nextCharacters2
            titleContainer.innerHTML = charactersTitle
            loadingScreen.style.display = "none"
        })
        .catch(error => {
            loadingScreen.style.display = "none"
            console.error(error)
        })
}

function charactersPage2() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/people/?page=2")
    .then(response => response.json())
    .then(charactersArr => {
        const prevCharacters = `<button onclick="displayCharacters()">Previous Page</button>`
        const nextCharacters3 = `<button onclick="charactersPage3()">Next Page</button>`
        const characters = charactersArr.results
        const charactersList = characters.map(function (character) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${character.name}</h1>
                    <li>Height: ${character.height}cm</li>
                    <li>Hair Color: ${character.hair_color}</li>
                    <li>Eye Color: ${character.eye_color}</li>
                    <li>Birth Year: ${character.birth_year}</li>
                    <li>Gender: ${character.gender}</li>
                </div>
            </ul>
            `  
        })
        pageContents.innerHTML = charactersList.join("")
        buttonContainer.innerHTML = `${prevCharacters} ${nextCharacters3}`
        loadingScreen.style.display = "none"
    })
}

function charactersPage3() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/people/?page=3")
    .then(response => response.json())
    .then(charactersArr => {
        const prevCharacters2 = `<button onclick="charactersPage2()">Previous Page</button>`
        const nextCharacters4 = `<button onclick="charactersPage4()">Next Page</button>`
        const characters = charactersArr.results
        const charactersList = characters.map(function (character) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${character.name}</h1>
                    <li>Height: ${character.height}cm</li>
                    <li>Hair Color: ${character.hair_color}</li>
                    <li>Eye Color: ${character.eye_color}</li>
                    <li>Birth Year: ${character.birth_year}</li>
                    <li>Gender: ${character.gender}</li>
                </div>
            </ul>
            `  
        })
        pageContents.innerHTML = charactersList.join("")
        buttonContainer.innerHTML = `${prevCharacters2} ${nextCharacters4}`
        loadingScreen.style.display = "none"
    })
}

function charactersPage4() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/people/?page=4")
    .then(response => response.json())
    .then(charactersArr => {
        const prevCharacters3 = `<button onclick="charactersPage3()">Previous Page</button>`
        const nextCharacters5 = `<button onclick="charactersPage5()">Next Page</button>`
        const characters = charactersArr.results
        const charactersList = characters.map(function (character) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${character.name}</h1>
                    <li>Height: ${character.height}cm</li>
                    <li>Hair Color: ${character.hair_color}</li>
                    <li>Eye Color: ${character.eye_color}</li>
                    <li>Birth Year: ${character.birth_year}</li>
                    <li>Gender: ${character.gender}</li>
                </div>
            </ul>
            `  
        })
        pageContents.innerHTML = charactersList.join("")
        buttonContainer.innerHTML = `${prevCharacters3} ${nextCharacters5}`
        loadingScreen.style.display = "none"
    })
}

function charactersPage5() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/people/?page=5")
    .then(response => response.json())
    .then(charactersArr => {
        const prevCharacters4 = `<button onclick="charactersPage4()">Previous Page</button>`
        const nextCharacters6 = `<button onclick="charactersPage6()">Next Page</button>`
        const characters = charactersArr.results
        const charactersList = characters.map(function (character) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${character.name}</h1>
                    <li>Height: ${character.height}cm</li>
                    <li>Hair Color: ${character.hair_color}</li>
                    <li>Eye Color: ${character.eye_color}</li>
                    <li>Birth Year: ${character.birth_year}</li>
                    <li>Gender: ${character.gender}</li>
                </div>
            </ul>
            `  
        })
        pageContents.innerHTML = charactersList.join("")
        buttonContainer.innerHTML = `${prevCharacters4} ${nextCharacters6}`
        loadingScreen.style.display = "none"
    })
}

function charactersPage6() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/people/?page=6")
    .then(response => response.json())
    .then(charactersArr => {
        const prevCharacters5 = `<button onclick="charactersPage5()">Previous Page</button>`
        const nextCharacters7 = `<button onclick="charactersPage7()">Next Page</button>`
        const characters = charactersArr.results
        const charactersList = characters.map(function (character) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${character.name}</h1>
                    <li>Height: ${character.height}cm</li>
                    <li>Hair Color: ${character.hair_color}</li>
                    <li>Eye Color: ${character.eye_color}</li>
                    <li>Birth Year: ${character.birth_year}</li>
                    <li>Gender: ${character.gender}</li>
                </div>
            </ul>
            `  
        })
        pageContents.innerHTML = charactersList.join("")
        buttonContainer.innerHTML = `${prevCharacters5} ${nextCharacters7}`
        loadingScreen.style.display = "none"
    })
}

function charactersPage7() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/people/?page=7")
    .then(response => response.json())
    .then(charactersArr => {
        const prevCharacters6 = `<button onclick="charactersPage6()">Previous Page</button>`
        const nextCharacters8 = `<button onclick="charactersPage8()">Next Page</button>`
        const characters = charactersArr.results
        const charactersList = characters.map(function (character) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${character.name}</h1>
                    <li>Height: ${character.height}cm</li>
                    <li>Hair Color: ${character.hair_color}</li>
                    <li>Eye Color: ${character.eye_color}</li>
                    <li>Birth Year: ${character.birth_year}</li>
                    <li>Gender: ${character.gender}</li>
                </div>
            </ul>
            `  
        })
        pageContents.innerHTML = charactersList.join("")
        buttonContainer.innerHTML = `${prevCharacters6} ${nextCharacters8}`
        loadingScreen.style.display = "none"
    })
}

function charactersPage8() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/people/?page=8")
    .then(response => response.json())
    .then(charactersArr => {
        const prevCharacters7 = `<button onclick="charactersPage7()">Previous Page</button>`
        const nextCharacters9 = `<button onclick="charactersPage9()">Next Page</button>`
        const characters = charactersArr.results
        const charactersList = characters.map(function (character) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${character.name}</h1>
                    <li>Height: ${character.height}cm</li>
                    <li>Hair Color: ${character.hair_color}</li>
                    <li>Eye Color: ${character.eye_color}</li>
                    <li>Birth Year: ${character.birth_year}</li>
                    <li>Gender: ${character.gender}</li>
                </div>
            </ul>
            `  
        })
        pageContents.innerHTML = charactersList.join("")
        buttonContainer.innerHTML = `${prevCharacters7} ${nextCharacters9}`
        loadingScreen.style.display = "none"
    })
}

function charactersPage9() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/people/?page=9")
    .then(response => response.json())
    .then(charactersArr => {
        const prevCharacters8 = `<button onclick="charactersPage8()">Previous Page</button>`
        const characters = charactersArr.results
        const charactersList = characters.map(function (character) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${character.name}</h1>
                    <li>Height: ${character.height}cm</li>
                    <li>Hair Color: ${character.hair_color}</li>
                    <li>Eye Color: ${character.eye_color}</li>
                    <li>Birth Year: ${character.birth_year}</li>
                    <li>Gender: ${character.gender}</li>
                </div>
            </ul>
            `  
        })
        pageContents.innerHTML = charactersList.join("")
        buttonContainer.innerHTML = prevCharacters8
        loadingScreen.style.display = "none"
    })
}


//Vehicles Button
vehiclesButton.addEventListener('click', displayVehicles)

function displayVehicles() {
    movieImg.innerHTML = ""
    pageContents.innerHTML = ""
    titleContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/vehicles/")
        .then(response => response.json())
        .then(vehiclesArr => {
            const vehiclesTitle = `<h1>Vehicles</h1>`
            const nextVehicles2 = `<button onclick="vehiclesPage2()">Next Page</button>`
            const vehicles = vehiclesArr.results
            const vehiclesList = vehicles.map(function (vehicle) {
                return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${vehicle.name}</h1>
                    <li>Model: ${vehicle.model}</li>
                    <li>Manufacturer: ${vehicle.manufacturer}</li>
                    <li>Cost in Credits: ${vehicle.cost_in_credits}</li>
                    <li>Vehicle Class: ${vehicle.vehicle_class}</li>
                    <li>Crew Size: ${vehicle.crew}</li>
                </div>
            </ul>
            `
            })
            pageContents.innerHTML = vehiclesList.join("")
            buttonContainer.innerHTML = nextVehicles2
            titleContainer.innerHTML = vehiclesTitle
            loadingScreen.style.display = "none"
        })
        .catch(error => {
            loadingScreen.style.display = "none"
            console.error(error)
        })
}

function vehiclesPage2() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/vehicles/?page=2")
    .then(response => response.json())
    .then(vehiclesArr => {
        const prevVehicles = `<button onclick="displayVehicles()">Previous Page</button>`
        const nextVehicles3 = `<button onclick="vehiclesPage3()">Next Page</button>`
        const vehicles = vehiclesArr.results
        const vehiclesList = vehicles.map(function (vehicle) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${vehicle.name}</h1>
                    <li>Model: ${vehicle.model}</li>
                    <li>Manufacturer: ${vehicle.manufacturer}</li>
                    <li>Cost in Credits: ${vehicle.cost_in_credits}</li>
                    <li>Vehicle Class: ${vehicle.vehicle_class}</li>
                    <li>Crew Size: ${vehicle.crew}</li>
                </div>
            </ul>
            ` 
        })
        pageContents.innerHTML = vehiclesList.join("")
        buttonContainer.innerHTML = `${prevVehicles} ${nextVehicles3}`
        loadingScreen.style.display = "none"
    })

}

function vehiclesPage3() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/vehicles/?page=3")
    .then(response => response.json())
    .then(vehiclesArr => {
        const prevVehicles2 = `<button onclick="vehiclesPage2()">Previous Page</button>`
        const nextVehicles4 = `<button onclick="vehiclesPage4()">Next Page</button>`
        const vehicles = vehiclesArr.results
        const vehiclesList = vehicles.map(function (vehicle) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${vehicle.name}</h1>
                    <li>Model: ${vehicle.model}</li>
                    <li>Manufacturer: ${vehicle.manufacturer}</li>
                    <li>Cost in Credits: ${vehicle.cost_in_credits}</li>
                    <li>Vehicle Class: ${vehicle.vehicle_class}</li>
                    <li>Crew Size: ${vehicle.crew}</li>
                </div>
            </ul>
            ` 
        })
        pageContents.innerHTML = vehiclesList.join("")
        buttonContainer.innerHTML = `${prevVehicles2} ${nextVehicles4}`
        loadingScreen.style.display = "none"
    })
}

function vehiclesPage4() {
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/vehicles/?page=4")
    .then(response => response.json())
    .then(vehiclesArr => {
        const prevVehicles3 = `<button onclick="vehiclesPage3()">Previous Page</button>`
        const vehicles = vehiclesArr.results
        const vehiclesList = vehicles.map(function (vehicle) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1 class="card-title">${vehicle.name}</h1>
                    <li>Model: ${vehicle.model}</li>
                    <li>Manufacturer: ${vehicle.manufacturer}</li>
                    <li>Cost in Credits: ${vehicle.cost_in_credits}</li>
                    <li>Vehicle Class: ${vehicle.vehicle_class}</li>
                    <li>Crew Size: ${vehicle.crew}</li>
                </div>
            </ul>
            ` 
        })
        pageContents.innerHTML = vehiclesList.join("")
        buttonContainer.innerHTML = prevVehicles3
        loadingScreen.style.display = "none"
    })
}


//Starships Button
starshipsButton.addEventListener('click', displayStarships)

function displayStarships() {
    movieImg.innerHTML = ""
    pageContents.innerHTML = ""
    titleContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/starships/")
        .then(response => response.json())
        .then(starshipsArr => {
            const starshipsTitle = `<h1>Starships</h1>`
            const nextStarships2 = `<button onclick="starshipsPage2()">Next Page</button>`
            const starships = starshipsArr.results
            const starshipsList = starships.map(function (starship) {
                return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1>${starship.name}</h1>
                    <li>Model: ${starship.model}</li>
                    <li>Manufacturer: ${starship.manufacturer}</li>
                    <li>Cost in Credits: ${starship.cost_in_credits}</li>
                    <li>Vehicle Class: ${starship.starship_class}</li>
                    <li>Crew Size: ${starship.crew}</li>
                </div>
            </ul>
            `
            })
            pageContents.innerHTML = starshipsList.join("")
            titleContainer.innerHTML = starshipsTitle
            buttonContainer.innerHTML = nextStarships2
            loadingScreen.style.display = "none"
        })
        .catch(error => {
            loadingScreen.style.display = "none"
            console.error(error)
        })
}

function starshipsPage2() {
    movieImg.innerHTML = ""
    pageContents.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/starships/?page=2")
    .then(response => response.json())
    .then(starshipsArr => {
        const prevStarships = `<button onclick="displayStarships()">Previous Page</button>`
        const nextStarships3 = `<button onclick="starshipsPage3()">Next Page</button>`
        const starships = starshipsArr.results
        const starshipsList = starships.map(function (starship) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1>${starship.name}</h1>
                    <li>Model: ${starship.model}</li>
                    <li>Manufacturer: ${starship.manufacturer}</li>
                    <li>Cost in Credits: ${starship.cost_in_credits}</li>
                    <li>Vehicle Class: ${starship.starship_class}</li>
                    <li>Crew Size: ${starship.crew}</li>
                </div>
            </ul>
            `
        })
        pageContents.innerHTML = starshipsList.join("")
        buttonContainer.innerHTML = `${prevStarships} ${nextStarships3}`
        loadingScreen.style.display = "none"
    })
}

function starshipsPage3() {
    movieImg.innerHTML = ""
    pageContents.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/starships/?page=3")
    .then(response => response.json())
    .then(starshipsArr => {
        const prevStarships2 = `<button onclick="starshipsPage2()">Previous Page</button>`
        const nextStarships4 = `<button onclick="starshipsPage4()">Next Page</button>`
        const starships = starshipsArr.results
        const starshipsList = starships.map(function (starship) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1>${starship.name}</h1>
                    <li>Model: ${starship.model}</li>
                    <li>Manufacturer: ${starship.manufacturer}</li>
                    <li>Cost in Credits: ${starship.cost_in_credits}</li>
                    <li>Vehicle Class: ${starship.starship_class}</li>
                    <li>Crew Size: ${starship.crew}</li>
                </div>
            </ul>
            `
        })
        pageContents.innerHTML = starshipsList.join("")
        buttonContainer.innerHTML = `${prevStarships2} ${nextStarships4}`
        loadingScreen.style.display = "none"
    })
}

function starshipsPage4() {
    movieImg.innerHTML = ""
    pageContents.innerHTML = ""
    buttonContainer.innerHTML = ""
    loadingScreen.style.display = "block"
    fetch("https://swapi.dev/api/starships/?page=4")
    .then(response => response.json())
    .then(starshipsArr => {
        const prevStarships3 = `<button onclick="starshipsPage3()">Previous Page</button>`
        const starships = starshipsArr.results
        const starshipsList = starships.map(function (starship) {
            return `
            <ul class="card", "bg-card-secondary", "text-white", "mb-3", "ms-3", "me-3", "w-25">
                <div class="card-body">
                    <h1>${starship.name}</h1>
                    <li>Model: ${starship.model}</li>
                    <li>Manufacturer: ${starship.manufacturer}</li>
                    <li>Cost in Credits: ${starship.cost_in_credits}</li>
                    <li>Vehicle Class: ${starship.starship_class}</li>
                    <li>Crew Size: ${starship.crew}</li>
                </div>
            </ul>
            `
        })
        pageContents.innerHTML = starshipsList.join("")
        buttonContainer.innerHTML = prevStarships3
        loadingScreen.style.display = "none"
    })
}

const showMore = document.getElementById("showMore");
const images = document.getElementsByTagName('img')



  
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
showMore.addEventListener('click', showImages)


  
  
