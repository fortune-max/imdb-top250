"use client"
import { Movie } from "@/types";
import { useState } from "react";
import Search from "./SearchBar";
import MovieListContainer from "./MovieListContainer";

const MovieListSearch = ({ movies }: {movies: Movie[]}) => {
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

    return (
        <>
            <Search movies={movies} setFilteredMovies={setFilteredMovies}/>
            <MovieListContainer movies={filteredMovies} />
        </>
    );
};

export default MovieListSearch;