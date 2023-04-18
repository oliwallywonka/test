import { useParams } from "react-router-dom";
import { useMovieById } from "../api/useMovieById";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const {isError, isLoading, data} = useMovieById(movieId)
    return(
        <div>
            {isError&&<div>{'A OCURRIDO UN ERROR'}</div>}
            {isLoading&&<div>{'... CARGANDO'}</div>}
            <img src={data?.Poster} alt={data?.Title} />
            <div>Titulo: {data?.Title}</div>
            <div>Año: {data?.Year}</div>
            <div>Director: {data?.Director}</div>
            <div>Reparto: {data?.Actors}</div>
            <div>Estreno: {data?.Released}</div>
        </div>
    );
}