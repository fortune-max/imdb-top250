import Link from "next/link";
import Image from 'next/image';
import { Movie } from "@/types";
import styled from 'styled-components';
import { addMovieToFavorites } from "@/utils";

export const MovieListItemContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const MovieListItem = ({ rank, movie }: { rank: number; movie: Movie }) => {
    return (
        <MovieListItemContainer>
            <span>{rank}</span>
            <Image src={movie.thumb_url} alt={movie.name} width={200} height={300} />
            <Link href={`/movie/${movie.imdb_id}`}>{movie.name}</Link>
            <span>⭐️ {movie.rating}</span>
            <span>{movie.year}</span>
            <button onClick={()=>addMovieToFavorites(movie.imdb_id)}>Add to Favorites</button>
        </MovieListItemContainer>
    );
};

export default MovieListItem;