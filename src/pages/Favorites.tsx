import { Link } from "react-router-dom";
import { useFavoriteStore } from "../store/favoritesStore";
import { DetailCard } from "../components/detailCard";

export const Favorites = () => {
    const { favorites, removeFavorite } = useFavoriteStore();
    return(
        <div>
            <nav className="flex self-center gap-10  p-5 bg-gray-900 text-white rounded-lg">
                <Link className="w-full" to={'/'}>Home</Link>
            </nav>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                { favorites.map(movie => (
                    <div 
                        className="flex flex-col"
                        key={movie.imdbID}>
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
                        <button 
                            className="text-2xl text-white bg-gray-900 rounded-2xl py-5"
                            onClick={() => removeFavorite(movie.imdbID)}> Eliminar </button>
                    </div>
            
                ))}
            </div>
        </div>
    );
}