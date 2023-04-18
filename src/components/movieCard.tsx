import React from "react"

type MovieProps = {
    Title: string;
    Year: string;
    Poster: string;
}

export const MovieCard = ({Title, Year, Poster}:MovieProps) => {
    return (
        <div>
            <img src={Poster} alt={Title} />
            <div>Titulo: {Title}</div>
            <div>Año: {Year}</div>
        </div>
    )
}