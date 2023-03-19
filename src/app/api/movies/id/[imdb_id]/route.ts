import { getMovie } from "@/utils";

export async function GET(request: Request, params: {params: {imdb_id: string}}) {
  const { imdb_id } = params.params;
  const movie = await getMovie(imdb_id);
  if (movie) {
    return new Response(JSON.stringify(movie), {
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