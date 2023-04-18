import React from "react"

type MovieProps = {
    Title: string;
    Year: string;
    Poster: string;
}

export const MovieCard = ({Title, Year, Poster}:MovieProps) => {
    return (
        <div className="bg-white py-5 rounded-2xl flex flex-col gap-3 items-center drop-shadow-lg text-center hover:translate-y-1 hover:scale-105">
            <img
                className="h-full rounded-2xl" 
                src={Poster} 
                alt={Title} />
            <div className="text-xl text-gray-500 font-bold">Titulo: {Title}</div>
            <div className="text-sm">Año: {Year}</div>
        </div>
    )
}