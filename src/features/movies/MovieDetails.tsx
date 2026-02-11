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
    <div className="min-h-screen bg-slate-900 text-white px-6 py-12">
      
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-amber-400">
          Movie Details
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          
          {/* Poster */}
          <div className="flex-shrink-0">
            <img
              src={movie.posteUrl}
              alt={movie.title}
              className="w-72 rounded-2xl shadow-2xl object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-6">
            
            <h2 className="text-3xl font-semibold">
              {movie?.title}
            </h2>

            <p className="text-gray-300 leading-relaxed">
              {movie.description}
            </p>

            <div className="flex flex-wrap gap-6 text-lg">
              <p className="bg-slate-800 px-4 py-2 rounded-lg">
                ⭐ Rating: {movie.rating}
              </p>

              <p className="bg-slate-800 px-4 py-2 rounded-lg">
                🎬 Director: {movie.director}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
