import { useState } from "react";
import { useMovies } from "../api/useMovies"

export const Home = () => {
    const [query, useQuery] = useState<string>('marvel');
    const {isError, isLoading, data} = useMovies(query);
    return(
        
        <div>
            {isError&&<div>{'A OCURRIDO UN ERROR'}</div>}
            {isLoading&&<div>{'... CARGANDO'}</div>}
            {data?.Error&&<div>{data.Error}</div>}
            {data?.Search.map(movie => (
                <div key={movie.imdbID}>
                    {movie.Title}
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            ))}
        </div>
    )
}