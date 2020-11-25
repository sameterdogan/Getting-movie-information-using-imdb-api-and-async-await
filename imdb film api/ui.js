class Ui {
    constructor() {
        this.selectors = {
            movies: document.querySelector("#movies"),
            search: document.querySelector("#search"),
            input: document.querySelector("#text")

        }
    };

    showMovie(movie) {
        this.selectors.movies.innerHTML +=
            `

   <div class="col-lg-3 col-md-3 col-12 mt-3">
   <a href="${movie.Poster}" >
   <img src="${movie.Poster}" alt="" class=" img-thumbnail card-img-top img-fluid img-responsive">
   </a>
   
</div>
<div class="col-lg-9 col-md-9 col-12 mt-3 ">
   <div class="card rounded shadow">
       <div class="card-body">
           <p class="font-weight-bold">${movie.Plot}</p>
           <p><span class="font-weight-light"> Vision date:</span> ${movie.Year}</p>
           <p><span class="font-weight-light">Director:</span>  ${movie.Director}</p>
           <p><span class="font-weight-light">Actors:</span> ${movie.Actors}</p>
           <p><span class="font-weight-light">Kind:</span>  ${movie.Genre}</p>

       </div>
   </div>

</div>
   
   
   `

    };

    clear() {
        this.selectors.movies.innerHTML = "";

    };

}