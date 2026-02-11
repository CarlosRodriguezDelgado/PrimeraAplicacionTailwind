export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
       
        <a 
          href="/" 
          className="text-2xl font-bold text-amber-400 tracking-wide hover:text-amber-300 transition-colors"
        >
          UCRMovies
        </a>


        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <a 
            href="/" 
            className="hover:text-amber-400 transition-colors duration-300"
          >
            Home
          </a>
          <a 
            href="/movies" 
            className="hover:text-amber-400 transition-colors duration-300 md: block"
          >
            Peliculas
          </a>
        </nav>


      </div>
    </header>
  );
}