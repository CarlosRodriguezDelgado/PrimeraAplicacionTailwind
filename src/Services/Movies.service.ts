
import type { Movie } from "../models/movie.model";

const MOVIES_URL = "../../Data/Movies.json";

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(MOVIES_URL);

  if (!response.ok) {
    throw new Error(
      `No se puede cargar movies.json (status  ${response.status})`,
    );
  }
  console.log(response);
  const data = await response.json();
  console.log("Peliculas cargadas:", data);
  return data as Movie[];
}

export async function getMoviesById(id: string): Promise<Movie | null> {
  const movies = await getMovies();
  const found = movies.find((m) => String(m.id) === String(id));

  return found ?? null;
}
