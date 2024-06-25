import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Box from "./components/Box";
import MoviesList from "./components/MoviesList";
import Summary from "./components/Summary";
import WatchedList from "./components/WatchedList";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import MovieDetails from "./components/MovieDetails";
import useFetchMovies from "./hooks/useFetchMovies";
import useLocalStorageState from "./hooks/useLocalStorageState";


export default function App() {
  const [watched, setWatched] = useLocalStorageState([], 'watched')

  const [query, setQuery] = useState("");
  const [movieId, setMovieId] = useState('')

  const { movies, isLoading, error } = useFetchMovies(query, setMovieId);

  const handelAddWatched = (movie) => {
    setWatched(watched => [...watched, movie])


  }

  const handelDeleteWatched = (id) => {
    setWatched(watched => watched.filter((movie) => movie.imdbID !== id))
  }









  return (
    <>
      <NavBar element=<NumResults movies={movies} />>
        <Logo />
        <Search setQuery={setQuery} query={query} />
      </NavBar>

      <Main>
        <Box >
          <MoviesList movies={movies} isLoading={isLoading} error={error} movieId={movieId} setMovieId={setMovieId} />
        </Box>

        <Box>
          {movieId ? <MovieDetails movieId={movieId} setMovieId={setMovieId} onAddWatched={handelAddWatched} watched={watched} />
            :
            <>
              <Summary watched={watched} />
              <WatchedList watched={watched} onDeleteWatched={handelDeleteWatched} />
            </>
          }
        </Box>
      </Main>

    </>
  );
}