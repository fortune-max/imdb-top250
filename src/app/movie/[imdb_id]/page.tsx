import Image from "next/image";
import { getMovie, getBackdropUrl, getOverview } from "@/utils";

const styles = {
    wrapper: {
        backgroundImage: "url('https://image.tmdb.org/t/p/original/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 52px)",
        width: "100vw",
        display: "flex",
        gap: "2rem",
        padding: "4rem",
    },

    details: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        color: "white",
    }
}


export default async function Page({params}: {params: {imdb_id: string}}) {
    const movie = await getMovie(params.imdb_id);
    const {imdb_id} = params;
    const backDropUrl = await getBackdropUrl(imdb_id);
    const overview = await getOverview(imdb_id);
    styles.wrapper.backgroundImage = `url(${backDropUrl})`;

    if (!movie) {
        return <div>Movie not found</div>
    }

    return (
        <div style={styles.wrapper}>
            <Image
                src={movie.image_url}
                alt={movie.name}
                width={300}
                height={450}
            />
            <div style={styles.details}>
                <h1>{movie.name}</h1>
                <p>{overview}</p>
                <p>Starring:&nbsp;
                    {movie.actors.map(actor => (
                        <span key={actor}>{actor}, </span>
                    ))}
                </p>
                <p>⭐️ {movie.rating}</p>
                <p>{movie.year}</p>
            </div>
        </div>
    );
}
