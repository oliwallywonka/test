import { Link, useParams } from "react-router-dom";
import { useMovieById } from "../api/useMovieById";
import { DetailCard } from "../components/detailCard";
import { useFavoriteStore } from "../store/favoritesStore";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const {isError, isLoading, data} = useMovieById(movieId);
    const { addFavorite } = useFavoriteStore();
    return(
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/movies/favorites'}>Favoritos</Link>
            {isError&&<div>{'A OCURRIDO UN ERROR'}</div>}
            {isLoading&&<div>{'... CARGANDO'}</div>}
            { 
                data && 
                <div>
                    <DetailCard
                        Poster={data.Poster}
                        Title={data.Title} 
                        Year={data.Year} 
                        Rated={data.Rated} 
                        Released={data.Released} 
                        Director={data.Director} 
                        Writer={data.Writer} 
                        Actors={data.Actors} 
                        imdbID={data.imdbID}                
                    />
                    <button onClick={() => addFavorite(data)}> Añadir a favoritos </button>
                </div>
            }
        </div>
    );
}