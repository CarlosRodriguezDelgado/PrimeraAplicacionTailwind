import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import type { Movie } from "../../models/movie.model";
import { getMovies } from "../../Services/Movies.service";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-5">
       Cargando...
      </div>
    );

  
  }

    return(
      <div className="min-h-5">
        <MovieList movies={movies} {...movies} />
      </div>
    );
}
