
$(document).ready(function() {
    function populateWatchlist(watchlist) {
    $('#watchlist').html("")
    for(let i = 0; i < watchlist.length; i++) {
        let currentMovie = 
        `
        <article class="movie_watchlist" 
        imdbid=${watchlist[i].imdbID}
        style="background-image: url('${watchlist[i].Poster}');">
        </article>

        `;
        
        $('#watchlist').append(currentMovie);
    }
}


$('#searchBtn').on('click', async function(event) {
    console.log('hi')
    let search = $('#searchText').val();
    let data = await movieSearch(search);
    console.log(data);
});
function movieSearch(searchString) {
    let queryURL = `http://omdbapi.com/?apikey=trilogy&t=${searchString}`;

    return new Promise((resolve, reject) => {
        $.ajax({
        url: queryURL
        }).then(function(response) {
        if (response !== null) {
            let movie = response;
            let title = movie.Title;
            let year = movie.Year;
            let runtime = movie.Runtime;
            let director = movie.Director;

            let searchResp = {
                Title: title,
                Year: year,
                Director: director,
                Runtime: runtime,
                Metascore: movie.Metascore,
                imdbVotes: movie.imdbVotes,
                imdbID: movie.imdbID,
                Poster: movie.Poster,
                BoxOffice: movie.BoxOffice,
                Plot: movie.Plot,
                Awards: movie.Awards,
                Actors: movie.Actors,
                Genre: movie.Genre               
            }
            
            resolve(searchResp);
        }
        })
    })
    function populateUnseen(watchlist) {
        $('#watchlist').html("")
        for(let i = 0; i < watchlist.length; i++) {
            let currentMovie = 
            `
            <article class="movie_watchlist" 
            imdbid=${watchlist[i].imdbID}
            style="background-image: url('${watchlist[i].Poster}');">
            </article>
    
            `;
            
            $('#watchlist').append(currentMovie);
        }
    }
    populateUnseen(watchlist);
}

function generateMovieListing(imdbID) {
    let queryURL = `http://omdbapi.com/?apikey=trilogy&i=${imdbID}`;

    return new Promise((resolve, reject) => {

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(resp) {
        let movie = resp;

        let title = movie.Title;
        let year = movie.Year;
        let runtime = movie.Runtime;
        let director = movie.Director;

        let searchResp = {
            Title: title,
            Year: year,
            Director: director,
            Runtime: runtime,
            Metascore: movie.Metascore,
            imdbVotes: movie.imdbVotes,
            imdbID: movie.imdbID,
            Poster: movie.Poster,
            BoxOffice: movie.BoxOffice,
            Plot: movie.Plot,
            Awards: movie.Awards,
            Actors: movie.Actors,
            Genre: movie.Genre               
        }
        console.log(searchResp);
        resolve(searchResp);

      })
    })
}
});

//prepend

//reference watchlisy array