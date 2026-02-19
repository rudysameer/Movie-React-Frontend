function MovieCard({ movie }) {

    function onFavoriteClick() {
        //console.log("Favorite button clicked for movie:", movie.title);
        alert("clciked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src="" alt={movie.title} />
            <div className="movieOverlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    <i className="fa-solid fa-heart"></i>
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate}</p>
        </div>
        </div>

}
export default MovieCard