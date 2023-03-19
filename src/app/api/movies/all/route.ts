import { getMovies } from "@/utils";

export async function GET(request: Request) {
    const movies = await getMovies();
    return new Response(JSON.stringify(movies), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}