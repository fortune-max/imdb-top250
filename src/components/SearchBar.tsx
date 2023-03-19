import { Movie } from "@/types";
import { useState } from "react";
import styled from "styled-components";

const SearchBar = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 16px;
    outline: none;
`;

type SearchProps = {
    movies: Movie[];
    setFilteredMovies: (movies: Movie[]) => void;
};

const Search = ({movies, setFilteredMovies}: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setFilteredMovies(
            movies.filter((movie) =>
                movie.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };

    return (
        <SearchBar
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
        />
    );
};

export default Search;