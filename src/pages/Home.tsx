import { useMovies } from "../api/useMovies"
import { useQueryStore } from "../store/queryStore";

import { LinkWrapper } from "../components/linkWrapper";
import { MovieCard } from "../components/movieCard";
import { SearchForm } from "../components/SearchForm";
import { Link } from "react-router-dom";

export const Home = () => {
    const { query } = useQueryStore();
    const { isError, isLoading, data } = useMovies(query);
    return(
        
        <div className="flex flex-col items-center gap-5 w-full">
            
            <nav className="flex self-center gap-10  p-5 bg-gray-900 text-white rounded-lg">
                <Link to={'/movies/favorites'}>Favoritos</Link>
            </nav>
            { isError && <div>{ 'A OCURRIDO UN ERROR '}</div> }
            { isLoading && <div>{'... CARGANDO' } </div> }
            { data?.Error && <div>{ data.Error }</div> }
            <SearchForm/>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
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
        </div>
    )
}