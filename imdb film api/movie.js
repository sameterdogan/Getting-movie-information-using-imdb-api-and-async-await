class Movie {
    constructor() {
        this.urlName = "https://api.collectapi.com/imdb/imdbSearchByName?query="
        this.urlId = "https://api.collectapi.com/imdb/imdbSearchById?movieId="
        this.headers = {
            "Content-type": "application/json",
            "authorization": "apikey 6sEx6pBEaPaBXFgbTp1952:2WBPtjMArpiouexMudF0qj" //api token
        }
    };

    async getMovies(text) {
        let movies = await fetch(this.urlName + text, {
            method: "GET",
            headers: this.headers
        });

        let moviesJson = await movies.json();

        return moviesJson;
    };
    async getMovie(id) {
        let movie = await fetch(this.urlId + id, {
            method: "GET",
            headers: this.headers
        });

        let movieJson = await movie.json();

        return movieJson;
    };


};

// let movies = new Movie();


// movies.getMovies("action").then(res => res).then(res1 => {
//     res1.result.forEach(element => {
//         movies.getMovie(element.imdbID)
//             .then(res => console.log(res))
//             .catch(err => console.log(err));
//     });

// });