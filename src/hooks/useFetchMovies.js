import { useEffect, useState } from "react";
const KEY = "9d0bc3d0";

const useFetchMovies = (query, setMovieId) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState("");


    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            if (query.length <= 1) {
                setMovies([]);
                setError('')
                return;
            }

            try {
                setIsLoading(true);
                const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
                if (!res.ok)
                    throw new Error("Something went wrong with fetching movies");

                const data = await res.json();

                if (data.Response === 'False') {
                    throw new Error('Movie Not Found')
                }

                setMovies(data.Search)
                setError('')
            }
            catch (err) {

                setError(err.message)
                setMovies([]);

            }
            finally {
                setIsLoading(false)

            }

        }
        setMovieId('')
        fetchData()
        return function () {
            controller.abort();
        };

    }, [query, setMovieId])


    return{movies, isLoading, error}
}

export default useFetchMovies;