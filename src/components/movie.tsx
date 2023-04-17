import React from "react"

type MovieProps = {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
}

export const MovieComponent = ({Title, Year, imdbID, Poster}:MovieProps) => {
    return (
        <div>
            <div>{Title}</div>
            <div>{Year}</div>
            <div>{imdbID}</div>
            <div>{Poster}</div>
        </div>
    )
}