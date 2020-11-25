let movie = new Movie();
let ui = new Ui();

//sayfa ilk açıldığında
window.onload = () => {

    getmovie("action");




}

//filmleri getirme fonksiyonu
function getmovie(text) {
    movie.getMovies(text)
        .then(res => res)
        .then(res => {

            res.result.forEach(id => {
                movie.getMovie(id.imdbID)
                    .then(res => {
                        ui.showMovie(res.result);
                    })
                    .catch(err => console.log(err));

            });
        })
        .catch(err => console.log(err));

}

loadEventListener();

function loadEventListener() {
    // arama butonuno basıldığında
    ui.selectors.search.addEventListener("click", () => {
        // filmelerin yükleneceği yeri temizleme
        ui.clear();

        //aranacak filmin ismini alma
        let text = ui.selectors.input.value;

        //aranacak isme göre filmleri getirme
        getmovie(text);


    });

    // tıklanan kategorinin text contentine göre fimleri getirme
    document.querySelectorAll(".categroy").forEach(x => {
        x.addEventListener("click", e => getmovie(e.target.textContent));
    });
};