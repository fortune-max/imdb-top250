import { getFavorites } from "@/utils";

const Favorites = async () => {
    const favorites = await getFavorites();
    return (
        <div>
            <h1>{JSON.stringify(favorites)}</h1>
            <h1>Favorites</h1>
            <ul>
                {Array.from(favorites.values()).map((movie, idx) => (
                    <li key={idx}>{movie.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;