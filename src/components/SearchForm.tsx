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
        <form 
            className="w-full h-12 mx-5 flex justify-center rounded-2xl"
            onSubmit={handleSubmit}>
            <input 
                className="w-full px-5 rounded-tl-2xl rounded-bl-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text" 
                placeholder="Buscar Ej: batman"
                onChange={handleChange}
            />
            <button 
                className="w-36 text-white bg-gray-900 rounded-tr-2xl rounded-br-2xl"
                disabled={isLoading}>Buscar</button>
        </form>
    )
}