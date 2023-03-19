import { Movie } from "@/types";
import { getMovie } from "@/utils";

const favorites = new Map<string, Movie>();

export async function POST(request: Request) {
    const { imdb_id } = await request.json();
    const movie = await getMovie(imdb_id);
    if (movie) {
        favorites.set(imdb_id, movie);
        return new Response(JSON.stringify({ success: true }), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } else {
        return new Response(JSON.stringify({ error: 'Movie not found' }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 404,
        });
    }
}

export async function DELETE(request: Request) {
    const { imdb_id } = await request.json();
    favorites.delete(imdb_id);
    return new Response(JSON.stringify({ success: true }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function GET() {
    return new Response(JSON.stringify(Array.from(favorites.values())), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
