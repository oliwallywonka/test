import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IMovieDetail } from "../api/useMovieById";

interface FavoriteState {
    favorites: IMovieDetail[];
    addFavorite: (movie: IMovieDetail) => void;
    removeFavorite: (id: string) => void;
}

export const useFavoriteStore = create(persist<FavoriteState>(
    (set) => ({
        favorites: [],
        addFavorite: (movie: IMovieDetail) => set((state) => ({
            favorites: [...state.favorites, movie],
        })),
        removeFavorite: (id: string) => set((state) => {
            const favoritesFiltered = state.favorites.filter((movie) => {
                return movie.imdbID !== id
            });
            return {
                favorites: favoritesFiltered,
            }
        })
    }),
    {
        name: 'Favorites_Store'
    }
));