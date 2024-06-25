const WatchedList = ({ watched, onDeleteWatched }) => {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.title} poster`} />
                    <h3>{movie.Title}</h3>
                    <div>
                        <p>
                            <span>⭐️</span>
                            <span>{movie.imdbRating}</span>
                        </p>
                        <p>
                            <span>🌟</span>
                            <span>{movie.userRating}</span>
                        </p>
                        <p>
                            <span>⏳</span>
                            <span>{movie.Runtime}</span>
                        </p>
                        <button className="btn-delete" onClick={() => onDeleteWatched(movie.imdbID)}>❌</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default WatchedList;