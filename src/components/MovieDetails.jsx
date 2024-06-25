import { useEffect, useRef, useState } from "react";
import StarsRating from './../RatingStars';

const KEY = "9d0bc3d0";

const MovieDetails = ({ movieId, setMovieId, onAddWatched, watched }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState({})
    const [userRating, setUserRating] = useState(0)
    const isWatched = watched.some(ele => ele.imdbID === movie.imdbID)
    const {
        imdbID,
        Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movie;

    function handelAdd() {
        onAddWatched({ ...movie, userRating })
        setMovieId('')
    }

    const handleUserRating = (i) => {
        setUserRating(i)

    }

    const starsClicks = useRef(0)

    useEffect(()=>{
        if(userRating)
            starsClicks.current++


    },[userRating])



    useEffect(() => {
        const fetchData = async () => {

            setIsLoading(true)
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${movieId}`)
            const data = await res.json();
            setMovie(data)
            setIsLoading(false)
        }
        fetchData();
    }, [movieId])

    useEffect(() => {
        if (!title)
            return;
        document.title = title;

        return () => {
            document.title = 'Popcorn'
        }
    }, [title])

    useEffect(() => {
        const esc = (e) => {
            if (e.code === 'Escape')
                setMovieId('')
        }
        document.addEventListener('keydown', esc)
    }, [setMovieId])


    return <>
        {isLoading ? <p className="loader">Loading...</p> :
            <div className="details">
                <header>
                    <button className="btn-back" onClick={() => setMovieId('')}>
                        &larr;
                    </button>
                    <img src={poster} alt={`Poster of ${movie} movie`} />
                    <div className="details-overview">
                        <h2>{title}</h2>
                        <p>
                            {released} &bull; {runtime}
                        </p>
                        <p>{genre}</p>
                        <p>
                            <span>⭐️</span>
                            {imdbRating} IMDb rating
                        </p>
                    </div>
                </header>
                <section>
                    <div className="rating">
                        {isWatched ? <p>This movie is already in your list</p>
                            :
                            <>
                                <StarsRating starsNum={10} size="29" onSetRating={(i) => handleUserRating(i)} />
                                {userRating ? <button className="btn-add" onClick={handelAdd}>add to your list</button> : null}
                            </>
                        }
                    </div>
                    <p>
                        <em>{plot}</em>
                    </p>
                    <p>Starring {actors}</p>
                    <p>Directed by {director}</p>
                </section>

            </div>}
    </>;

}

export default MovieDetails;