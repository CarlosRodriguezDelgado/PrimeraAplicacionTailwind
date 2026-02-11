import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Movie } from "../../models/movie.model";
import { getMoviesById } from "../../Services/Movies.service";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    if (!id) return;

    getMoviesById(id)
      .then((movie) => setMovie(movie))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-200 text-white p-6">
        Cargando....
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-amber-200 text-white p-6">
        Pelicula no encontrada
      </div>
    );
  }

  return (

    <div className="flex-wrap mt-grid bg-teal-300  text-white text-4xl" >
        <h1 className="text-5xl pl-3">Movie Details</h1>
      <img src={movie.posteUrl} alt="" className=" h-100 w-50"/>
      <div >{movie ?.title}</div>
         <p>Descripcion: {movie.description}</p>
            <p>{movie.rating}</p>
            <p>Autor: {movie.director}</p>
    </div>
  );
}
