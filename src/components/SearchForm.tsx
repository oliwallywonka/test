import { ChangeEvent, FormEvent } from "react";
import { useQueryStore } from "../store/queryStore"
import { useQuery } from "@tanstack/react-query";
import { useMovies } from "../api/useMovies";

export const SearchForm = () => {
    const { updateQuery, query } = useQueryStore();
    const { refetch, isLoading } = useMovies(query);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        refetch();
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateQuery(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                onChange={handleChange}
            />
            <button disabled={isLoading}>Buscar</button>
        </form>
    )
}