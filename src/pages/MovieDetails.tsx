import { Link, useParams, redirect } from "react-router-dom";
import { IMovieDetail, useMovieById } from "../api/useMovieById";
import { DetailCard } from "../components/detailCard";
import { useFavoriteStore } from "../store/favoritesStore";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const { isError, isLoading, data } = useMovieById(movieId);
    const { addFavorite } = useFavoriteStore();

    const handleClick = (data: IMovieDetail) => {
        addFavorite(data);
        redirect('/movies/favorites');
    }
    return(
        <div className="flex flex-col">
            <nav className="flex self-center gap-10  p-5 bg-gray-900 text-white rounded-lg">
                <Link to={'/'}>Home</Link>
                <Link to={'/movies/favorites'}>Favoritos</Link>
            </nav>
            {isError&&<div>{'A OCURRIDO UN ERROR'}</div>}
            {isLoading&&<div>{'... CARGANDO'}</div>}
            { 
                data && 
                <div className="flex flex-col gap-5">
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
                    <button 
                        className="text-2xl text-white bg-gray-900 rounded-2xl py-5" 
                        onClick={() => handleClick(data) }> 
                        Añadir a favoritos </button>
                </div>
            }
        </div>
    );
}