import { Movie } from "@/types";
import { useState } from "react";
import styled from "styled-components";

const SearchBar = styled.input`
    width: 296px;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 56px;
    padding: 0 10px;
    font-size: 16px;
    outline: none;
`;

type SearchProps = {
    movies: Movie[];
    filteredMovies: Movie[];
    setFilteredMovies: (movies: Movie[]) => void;
};

const Search = ({movies, filteredMovies, setFilteredMovies}: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    const sortMovies = () => {
        setFilteredMovies([...filteredMovies].reverse());
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setFilteredMovies(
            movies.filter((movie) =>
                movie.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };

    return (
        <>
            <SearchBar
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
            />
            <button onClick={sortMovies}>Reverse Order</button>
        </>
    );
};

export default Search;