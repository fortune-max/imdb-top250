import { getFavorites } from "@/utils";
import MovieListSearch from '@/components/MovieListSearch';

const Favorites = async () => {
    const favorites = await getFavorites();
    return (
        <MovieListSearch movies={favorites} />
    );
};

export default Favorites;