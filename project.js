const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f7f6c1d57bmsh585d996ad37a94dp10319bjsna477fed8dbc3',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));