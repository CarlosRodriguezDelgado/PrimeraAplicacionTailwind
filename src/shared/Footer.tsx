export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
          {/* Logo / About */}
          <div>
            <h2 className="text-amber-400 text-xl font-semibold mb-4">
              UCRMovies
            </h2>
            <p>
              Descubre las últimas películas, explora los títulos de moda y disfruta de una experiencia moderna de navegación de películas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/movies" className="hover:text-amber-400 transition-colors">
                  Peliculas
                </a>
              </li>
            </ul>
          </div>

          {/* Extra */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p>Email: support@UCRMovies.com</p>
            <p className="mt-2">© {new Date().getFullYear()} MovieApp</p>
          </div>

        </div>

        {/* Bottom line */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-xs text-gray-500">
          Creado con React y Tailwind CSS 🚀
        </div>

      </div>
    </footer>
  );
}
