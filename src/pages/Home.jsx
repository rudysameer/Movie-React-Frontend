import MovieCard from "../components/MoiveCard";

function Home() {

    const movies = [
        {
            id: 1,
            title: "The Shawshank Redemption",
            releaseYear: 1994,},
        {
            id: 2,
            title: "The Godfather",
            releaseYear: 1972,
        },
        {
            id: 3,
            title: "The Dark Knight",
            releaseYear: 2008,
        },
    ];
    
    const handleSearch = () => {};
    return (
        <div className="home">
            <h1>Welcome to Movie App</h1>
            <p>Discover and explore your favorite movies!</p>

            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search movies..." className="search-input" />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
                </div>

        </div>
    );


}

export default Home