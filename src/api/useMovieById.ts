import { useEffect, useState } from "react"
import { URLBASE } from "../constants/url";
import { useQuery } from "@tanstack/react-query";

export interface IMovieDetail {
    Title:      string;
    Year:       string;
    Rated:      string;
    Released:   string;
    Genre:      string;
    Director:   string;
    Writer:     string;
    Actors:     string;
    Poster:     string;
    imdbID:     string;
    Type:       string;
    Response:   string;
}

export interface IRating {
    Source: string;
    Value:  string;
}

const getMovieById = async(id: string): Promise<IMovieDetail> => {
    const response = await fetch(`${URLBASE}&i=${id}`);
    const data = await response.json() as IMovieDetail;
    return data;
}

export const useMovieById = (query: string = 'marvel') => {
    return useQuery(['movies'], () => getMovieById(query), {
        staleTime: Infinity
    });
}