import { getMovie } from "@/utils";

export default async function Page({params}: {params: {imdb_id: string}}) {
    const movie = await getMovie(params.imdb_id);

    if (!movie) {
        return <div>Movie not found</div>
    }

    return (
        <div>
            <h1>{movie.name}</h1>
            <p>{movie.desc}</p>
            <p>⭐️ {movie.rating}</p>
            <p>{movie.year}</p>
        </div>
    );
}
