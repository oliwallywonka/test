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
        <div>
            <img src={Poster} alt={Title} />
            <div>Titulo: {Title}</div>
            <div>Año: {Year}</div>
            <div>Director: {Director}</div>
            <div>Reparto: {Actors}</div>
            <div>Estreno: {Released}</div>
        </div>
    );
}