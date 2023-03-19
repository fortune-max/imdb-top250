"use client"
import useSWR from "swr";
import { Movie } from "@/types";
import { useState } from "react";
import Search from "./SearchBar";
import styled from "styled-components";
import MovieListContainer from "./MovieListContainer";
import { URL_PREFIX } from "@/utils";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px;
    align-items: center;
`;

const MovieListSearch = ({ movies }: {movies: Movie[]}) => {
    const [favorites, setFavorites] = useState<string[]>([]);
    
    const fetcher = (url: string) => fetch(url)
        .then(res => res.json()
            .then(movies => {
                setFavorites(movies.map((movie: Movie) => movie.imdb_id));
                return movies;
            })
        );

    useSWR(`${URL_PREFIX}/api/movies/favorites`, fetcher);

    const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

    return (
        <Container>
            <h1>IMDB&apos;s Top 250</h1>
            <Search movies={movies} filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/>
            <MovieListContainer movies={filteredMovies} favorites={favorites} />
        </Container>
    );
};

export default MovieListSearch;