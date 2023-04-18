import { useMovies } from "../api/useMovies"
import { useQueryStore } from "../store/queryStore";

import { LinkWrapper } from "../components/linkWrapper";
import { MovieCard } from "../components/movieCard";
import { SearchForm } from "../components/SearchForm";

export const Home = () => {
    const { query } = useQueryStore();
    const { isError, isLoading, data } = useMovies(query);
    return(
        
        <div>
            { isError && <div>{ 'A OCURRIDO UN ERROR '}</div> }
            { isLoading && <div>{'... CARGANDO' } </div> }
            { data?.Error && <div>{ data.Error }</div> }
            { query }
            <SearchForm/>
            {data?.Search?.map(movie => (
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