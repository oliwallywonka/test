import { useEffect, useState } from "react"
import { URLBASE } from "../constants/url";
import { useQuery } from "@tanstack/react-query";

export interface IMoviesResponse {
    Search:       IMovie[];
    totalResults: string;
    Response:     string;
    Error?:       string;
}

export interface IMovie {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   Type;
    Poster: string;
}

export enum Type {
    Movie = "movie",
}

const getMovies = async(query: string): Promise<IMoviesResponse> => {
    const response = await fetch(`${URLBASE}&s=${query}`);
    const data = await response.json() as IMoviesResponse;
    return data;
}

export const useMovies = (query: string = 'marvel') => {
    return useQuery(['movies'], () => getMovies(query), {
        staleTime: Infinity
    });
}