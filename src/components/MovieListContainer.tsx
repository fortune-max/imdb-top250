import { Movie } from "@/types";
import styled from "styled-components";
import MovieListItem from "./MovieListItem";

export const MovieList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const MovieListContainer = ({movies} : {movies: Movie[]}) => {
    return (
        <MovieList>
            {movies.map((movie, idx) => (
                <MovieListItem key={idx} rank={idx + 1} movie={movie} />
            ))}
        </MovieList>
    );
};

export default MovieListContainer;