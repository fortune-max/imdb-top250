import { Movie } from "./types";

export const URL_PREFIX = 'http://localhost:3000';
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

export async function addMovieToFavorites(imdb_id: string) {
    const res = await fetch(`${URL_PREFIX}/api/movies/favorites`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imdb_id }),
    });
    console.log("addMovieToFavorites", imdb_id, res.ok);
    return res.ok;
}

export async function removeMovieFromFavorites(imdb_id: string) {
    const res = await fetch(`${URL_PREFIX}/api/movies/favorites`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imdb_id }),
    });
    return res.ok;
}

export async function getFavorites() {
    const res = await fetch(`${URL_PREFIX}/api/movies/favorites`, { cache: 'no-store' });
    return await res.json() as Movie[];
}
