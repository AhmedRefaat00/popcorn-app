const MoviesList = ({ movies, isLoading, error, movieId, setMovieId }) => {
    return (
        <>
            {isLoading && <p className="loader">Loading...</p>}
            {error === '' ?
                <ul className="list list-movies">
                    {movies?.map((movie) => (
                        <li key={movie.imdbID} onClick={() => movieId === movie.imdbID ? setMovieId('') : setMovieId(movie.imdbID)}>
                            <img src={movie.Poster} alt={`${movie.Title} poster`} />
                            <h3>{movie.Title}</h3>
                            <div>
                                <p>
                                    <span>🗓</span>
                                    <span>{movie.Year}</span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul >
                :
                <p className="error">{error} ⛔</p>
            }
        </>

    );
}

export default MoviesList;