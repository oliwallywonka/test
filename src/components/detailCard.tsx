import { IMovieDetail } from "../api/useMovieById";

export const DetailCard = ({
    Poster,
    Title,
    Year,
    Director,
    Actors,
    Released,
}: IMovieDetail) => {
    return(
        <div className="bg-white py-5 rounded-2xl flex flex-col gap-3 items-center drop-shadow-lg text-center hover:translate-y-1 hover:scale-105">
            <img className="h-full rounded-2xl"  src={Poster} alt={Title} />
            <div className="text-sm md:text-xl text-gray-500 font-bold">Titulo: {Title}</div>
            <div className="text-sm md:text-xl text-gray-500 font-bold">Año: {Year}</div>
            <div className="text-sm md:text-xl text-gray-500 font-bold">Director: {Director}</div>
            <div className="text-sm md:text-xl text-gray-500 font-bold">Reparto: {Actors}</div>
            <div className="text-sm md:text-xl text-gray-500 font-bold">Estreno: {Released}</div>
        </div>
    );
}