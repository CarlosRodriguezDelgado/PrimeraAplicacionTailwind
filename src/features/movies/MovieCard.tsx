import { Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";

type Props = { movie: Movie };
export default function MovieCard({ movie }: Props) {
  return (

    
    <Link to={`/movies/${movie.id}`} className="group block">
      <article className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        
        {/* Imagen */}
        <div className="relative overflow-hidden">
          <img
            src={movie.posteUrl}
            alt={movie.title}
            className=" w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay al hacer hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm">
              View Details →
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg truncate">
            {movie.title}
          </h3>

          <p className="text-gray-400 text-sm mt-1">
             {movie.rating ?? "N/A"}
          </p>
        </div>

      </article>
    </Link>

  );
}
