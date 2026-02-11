import type { Movie } from "../../models/movie.model";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <section className="mx=auto max-w-6xl px-4 py-6">
    <div
      className="grid gap-6
              grid-cols-2
              sm:grid-cols-subgrid
              md:grid-cols-4
              lg:grid-cols-4"
    >
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
    </section>
  );
}
