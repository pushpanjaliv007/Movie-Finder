//http://www.ombapi.com/?apikey=7fbc13a8&s=${movieName}


document.addEventListener("DOMContentLoaded", ()=> {
    const movieForm = document.getElementById("movieForm");
    const movieResults = document.getElementById('movieResults');
    movieForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const movieName = document.getElementById('movieInput').value.trim();
        if (!movieName) return;
        searchMovies(movieName);
    });
        
        // search for movies
        async function searchMovies(movieName) {
            try {
                movieResults.innerHTML = '<div class="loading">Searching Movies...</div>';
                const response = await fetch(`https://www.omdbapi.com/?apikey=7fbc13a8&s=${encodeURIComponent(movieName)}`);
                const data = await response.json();
                if (data.Response === 'False') {
                    throw new Error(data.Error || "No movies found");
                }
                displayMovies(data.Search);
            } catch (error) {
                movieResults.innerHTML = `
                    <div class='error-message'>
                        Error searching movies: ${error.message}
                    </div>`;
            }
        }

    // display all the movies

    function displayMovies(movies) {
        movieResults.innerHTML = `
            <div class="movies-grid">
                ${movies.map((movie) => `
                    <div class="movie-card">
                        <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"}"
                             alt="${movie.Title}"
                             class="movie-poster">
                        <div class='movie-info'>
                            <h3 class='movie-title'>${movie.Title}</h3>
                            <div class='movie-year'>${movie.Year}</div>
                        </div>
                    </div>`).join('')}
            </div>
        `;
    }
});