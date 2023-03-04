
const movieDisplay = document.getElementById("movieDisplay")


function displayMovies() {
    fetch("https://swapi.dev/api/films/")
    .then(response => response.json())
    .then(movies => {
        const x = movies.results
        const movieList = x.map(function(movie) {
            return `
                <h1>${movie.title}</h1>
                <a href="https://m.media-amazon.com/images/I/81P3lDJbjCL.jpg"><img src="https://m.media-amazon.com/images/I/81P3lDJbjCL.jpg" width="200px"></img></a>
            `
            
        })
        movieDisplay.innerHTML = movieList.join("")
    })

}
displayMovies()

