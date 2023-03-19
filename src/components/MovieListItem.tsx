import Link from "next/link";
import { mutate } from "swr";
import Image from 'next/image';
import { Movie } from "@/types";
import styled from 'styled-components';
import { URL_PREFIX, addMovieToFavorites, removeMovieFromFavorites } from "@/utils";

export const MovieListItemContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;

    span {
        font-size: 1.2rem;
    }

    button {
        margin-left: auto;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 8px;
        background-color: #ccc;
        cursor: pointer;
    }

    button:hover {
        background-color: #aaa;
    }
`;

const TitleWrapper = styled.div`
    width: 512px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    font-size: 1.2rem;
`;

const MovieListItem = ({ rank, movie, isFav }: { rank: number; movie: Movie; isFav: boolean; }) => {
    const toggleFavorite = () => {
        if (isFav)
            removeMovieFromFavorites(movie.imdb_id);
        else
            addMovieToFavorites(movie.imdb_id);
        mutate(`${URL_PREFIX}/api/movies/favorites`);
    };

    return (
        <MovieListItemContainer>
            <span>{rank}</span>
            <Image src={movie.thumb_url} alt={movie.name} width={60} height={96} />
            <Link href={`/movie/${movie.imdb_id}`}>
                <TitleWrapper>{movie.name}</TitleWrapper>
            </Link>
            <span>⭐️ {movie.rating}</span>
            <span>{movie.year}</span>
            <button onClick={toggleFavorite}>{isFav ? "Remove from Favorites" : "Add to Favorites"}</button>
        </MovieListItemContainer>
    );
};

export default MovieListItem;