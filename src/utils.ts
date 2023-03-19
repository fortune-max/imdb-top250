import { Movie } from "./types";

const MOVIES_URL = 'https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json';

export async function getMovies() {
    const response = await fetch(MOVIES_URL);
    const movies: Movie[] = await response.json();
    movies.forEach((movie) => {
        movie.imdb_id = movie.imdb_url.slice(7, -1);
    });
    return movies;
}

export async function getMovie(imdb_id: string) {
    const movies = await getMovies();
    return movies.find((movie) => movie.imdb_id === imdb_id);
}