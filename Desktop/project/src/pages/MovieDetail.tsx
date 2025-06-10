import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Star, Calendar, Clock, User, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find(m => m.id === parseInt(id || '0'));
  
  if (!movie) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🎬</div>
          <h2 className="text-2xl font-bold text-white">Film topilmadi</h2>
          <Link
            to="/movies"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Orqaga qaytish</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedMovies = movies
    .filter(m => m.id !== movie.id && m.genre.some(g => movie.genre.includes(g)))
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-20 left-4 z-50">
          <Link
            to="/movies"
            className="flex items-center space-x-2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-lg hover:bg-black/70 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Orqaga</span>
          </Link>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl space-y-8">
            {/* Movie Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 font-bold text-lg">{movie.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>{movie.year}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{movie.duration}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  {movie.title}
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                  {movie.description}
                </p>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-3">
                {movie.genre.map((genre) => (
                  <span
                    key={genre}
                    className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full border border-red-500/30 font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105">
                  <Play className="w-6 h-6 fill-current" />
                  <span>Tomosha qilish</span>
                </button>

                <div className="flex space-x-3">
                  <button className="p-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors duration-200">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="p-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors duration-200">
                    <Bookmark className="w-6 h-6" />
                  </button>
                  <button className="p-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors duration-200">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Details */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Synopsis */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Film haqida</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {movie.description}
                </p>
              </div>

              {/* Cast & Crew */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Aktyorlar va jamoa</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">Rejissyor:</span>
                    <span className="text-white font-medium">{movie.director}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Bosh aktyorlar:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {movie.cast.map((actor, index) => (
                        <div
                          key={actor}
                          className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                            {actor.charAt(0)}
                          </div>
                          <span className="text-white">{actor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Movie Poster */}
              <div className="sticky top-24">
                <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Movie Stats */}
                <div className="mt-6 p-6 bg-gray-800 rounded-xl space-y-4">
                  <h3 className="text-lg font-semibold text-white">Film ma'lumotlari</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Chiqgan yili:</span>
                      <span className="text-white">{movie.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Davomiyligi:</span>
                      <span className="text-white">{movie.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Reyting:</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 font-medium">{movie.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rejissyor:</span>
                      <span className="text-white">{movie.director}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Movies */}
      {relatedMovies.length > 0 && (
        <section className="py-20 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-white">O'xshash filmlar</h2>
                <p className="text-gray-400">Sizga yoqqan filmlar</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedMovies.map((movie, index) => (
                  <div
                    key={movie.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MovieDetail;