import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { genres, movies } from '../data/movies';
import GenreCard from '../components/GenreCard';
import MovieCard from '../components/MovieCard';

const Genres: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGenres = genres.filter(genre =>
    genre.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const genreMovies = selectedGenre
    ? movies.filter(movie => movie.genre.includes(selectedGenre))
    : [];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Film janrlari
            </h1>
            <p className="text-xl text-gray-400">
              O'zingizga yoqqan janrni tanlang va filmlarni kashf eting
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-gray-900 sticky top-16 z-40 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Janr qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {selectedGenre ? (
        /* Selected Genre Movies */
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-white">{selectedGenre} filmlari</h2>
                  <p className="text-gray-400">{genreMovies.length} ta film topildi</p>
                </div>
                <button
                  onClick={() => setSelectedGenre(null)}
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  Orqaga qaytish
                </button>
              </div>

              {/* Movies Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {genreMovies.map((movie, index) => (
                  <div
                    key={movie.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Genres Grid */
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {filteredGenres.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🎭</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Janr topilmadi</h3>
                  <p className="text-gray-400">Qidiruv so'zini o'zgartiring</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredGenres.map((genre, index) => (
                    <div
                      key={genre.name}
                      onClick={() => setSelectedGenre(genre.name)}
                      className="cursor-pointer"
                    >
                      <GenreCard
                        name={genre.name}
                        count={genre.count}
                        color={genre.color}
                        icon={genre.icon}
                        delay={index * 100}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Featured Genres */}
      {!selectedGenre && (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl font-bold text-white">Mashhur janrlar</h2>
              <p className="text-gray-400">Eng ko'p tomosha qilingan janrlar</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {genres.slice(0, 3).map((genre, index) => (
                <div
                  key={genre.name}
                  onClick={() => setSelectedGenre(genre.name)}
                  className="cursor-pointer group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br hover:scale-105 transition-all duration-500"
                  style={{ background: `linear-gradient(135deg, ${genre.color.replace('from-', '').replace('to-', ', ')})` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  <div className="relative z-10 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🎬</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">
                        {genre.name}
                      </h3>
                      <p className="text-white/80">
                        {genre.count} ta film
                      </p>
                    </div>
                    
                    <div className="pt-4">
                      <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium group-hover:bg-white/30 transition-colors duration-300">
                        <span>Ko'rish</span>
                        <Filter className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Genres;