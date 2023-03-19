import { Movie } from "./types";

export const URL_PREFIX = 'http://localhost:3000';
const API_KEY = ''; // removed for security reasons (and github revoking my access to the API)
const MOVIES_URL = 'https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json';

export async function getBackdropUrl(imdb_id: string) {
    const response = await fetch(`https://api.themoviedb.org/3/find/${imdb_id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`);
    const data = await response.json();
    return `https://image.tmdb.org/t/p/original/${data.movie_results[0].backdrop_path}`;
}

export async function getOverview(imdb_id: string) {
    const response = await fetch(`https://api.themoviedb.org/3/find/${imdb_id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`);
    const data = await response.json();
    return data.movie_results[0].overview;
}

export async function getMovies() {
    const response = await fetch(MOVIES_URL);
    const movies: Movie[] = await response.json();
    movies.forEach((movie) => {
        movie.imdb_id = movie.imdb_url.slice(7, -1);
    })
    return movies.sort((a, b) => a.rating - b.rating);
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
