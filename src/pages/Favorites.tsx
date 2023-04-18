import { Link } from "react-router-dom";
import { useFavoriteStore } from "../store/favoritesStore";
import { DetailCard } from "../components/detailCard";

export const Favorites = () => {
    const { favorites, removeFavorite } = useFavoriteStore();
    return(
        <div>
            <Link to={'/'}>Home</Link>
            { favorites.map(movie => (
                <div key={movie.imdbID}>
                    <DetailCard
                        Poster={movie.Poster}
                        Title={movie.Title} 
                        Year={movie.Year} 
                        Rated={movie.Rated} 
                        Released={movie.Released} 
                        Director={movie.Director} 
                        Writer={movie.Writer} 
                        Actors={movie.Actors} 
                        imdbID={movie.imdbID}                
                    />
                    <button onClick={() => removeFavorite(movie.imdbID)}> Eliminar </button>
                </div>
           
            ))}
        </div>
    );
}