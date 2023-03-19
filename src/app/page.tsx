import { getMovies } from '@/utils'
import MovieListSearch from '@/components/MovieListSearch';

export default async function Home() {
  const movies = await getMovies();

  return (
    <main>
      <MovieListSearch movies={movies} />
    </main>
  )
}
