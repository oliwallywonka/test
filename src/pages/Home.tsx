import { useState } from "react";
import { useMovies } from "../api/useMovies"
import { LinkWrapper } from "../components/linkWrapper";
import { MovieCard } from "../components/movieCard";

export const Home = () => {
    const [query, useQuery] = useState<string>('marvel');
    const {isError, isLoading, data} = useMovies(query);
    return(
        
        <div>
            {isError&&<div>{'A OCURRIDO UN ERROR'}</div>}
            {isLoading&&<div>{'... CARGANDO'}</div>}
            {data?.Error&&<div>{data.Error}</div>}
            {data?.Search.map(movie => (
                <LinkWrapper to={`/${movie.imdbID}`} key={movie.imdbID}>
                    <MovieCard 
                        Title={movie.Title}
                        Year={movie.Year}
                        Poster={movie.Poster}
                    />
                </LinkWrapper>
            ))}
        </div>
    )
}