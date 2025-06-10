import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, Star, Calendar } from 'lucide-react';
import { movies, genres } from '../data/movies';
import MovieCard from '../components/MovieCard';

const Movies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('year');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredAndSortedMovies = useMemo(() => {
    let filtered = movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           movie.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = !selectedGenre || movie.genre.includes(selectedGenre);
      return matchesSearch && matchesGenre;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'year':
          return b.year - a.year;
        case 'rating':
          return b.rating - a.rating;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [searchTerm, selectedGenre, sortBy]);

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Barcha filmlar
            </h1>
            <p className="text-xl text-gray-400">
              {filteredAndSortedMovies.length} ta ajoyib film kashf eting
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-900 sticky top-16 z-40 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Film qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-200"
              />
            </div>

            <div className="flex items-center space-x-4">
              {/* Genre Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="">Barcha janrlar</option>
                  {genres.map(genre => (
                    <option key={genre.name} value={genre.name}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200 cursor-pointer"
              >
                <option value="year">Yil bo'yicha</option>
                <option value="rating">Reyting bo'yicha</option>
                <option value="title">Nom bo'yicha</option>
              </select>

              {/* View Mode */}
              <div className="flex items-center space-x-2 p-1 bg-gray-800 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-red-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-red-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredAndSortedMovies.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-white mb-2">Film topilmadi</h3>
              <p className="text-gray-400">Qidiruv so'zini o'zgartiring yoki filtrlarni tozalang</p>
            </div>
          ) : (
            <>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filteredAndSortedMovies.map((movie, index) => (
                    <div
                      key={movie.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <MovieCard movie={movie} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredAndSortedMovies.map((movie, index) => (
                    <div
                      key={movie.id}
                      className="flex flex-col md:flex-row bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="md:w-48 aspect-[2/3] md:aspect-auto">
                        <img
                          src={movie.poster}
                          alt={movie.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <h3 className="text-xl md:text-2xl font-bold text-white hover:text-red-400 transition-colors duration-200">
                              {movie.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{movie.year}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-yellow-400">{movie.rating}</span>
                              </div>
                              <span>{movie.duration}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed line-clamp-3">
                          {movie.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {movie.genre.map((g) => (
                            <span
                              key={g}
                              className="px-3 py-1 text-sm bg-red-500/20 text-red-400 rounded-full border border-red-500/30"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Movies;