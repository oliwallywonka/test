import { useEffect, useState } from "react"
import { URLBASE } from "../constants/url";
import { useQuery } from "@tanstack/react-query";

export interface IMovieDetail {
    Title:      string;
    Year:       string;
    Rated:      string;
    Released:   string;
    Director:   string;
    Writer:     string;
    Actors:     string;
    Poster:     string;
    imdbID:     string;
}

const getMovieById = async(id: string): Promise<IMovieDetail> => {
    const response = await fetch(`${URLBASE}&i=${id}`);
    const data = await response.json() as IMovieDetail;
    return data;
}

export const useMovieById = (idMovie: string = 'marvel') => {
    return useQuery(['movies', idMovie], () => getMovieById(idMovie), {
        staleTime: Infinity
    });
}