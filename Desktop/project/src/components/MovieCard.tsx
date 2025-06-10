import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Play, Calendar, Clock } from 'lucide-react';
import { Movie } from '../data/movies';

interface MovieCardProps {
  movie: Movie;
  featured?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, featured = false }) => {
  if (featured) {
    return (
      <Link
        to={`/movie/${movie.id}`}
        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black"
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-yellow-400 font-medium">{movie.rating}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-300">{movie.year}</span>
            </div>
            
            <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-200">
              {movie.title}
            </h3>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{movie.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{movie.year}</span>
              </div>
            </div>
          </div>

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-3 bg-red-500 rounded-full">
              <Play className="w-5 h-5 text-white fill-current" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black hover:scale-105 transition-all duration-300"
    >
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-yellow-400 text-sm font-medium">{movie.rating}</span>
          </div>
          
          <h3 className="text-white font-semibold text-sm leading-tight">
            {movie.title}
          </h3>
          
          <div className="flex flex-wrap gap-1">
            {movie.genre.slice(0, 2).map((g) => (
              <span
                key={g}
                className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded-full border border-red-500/30"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full">
          <Play className="w-4 h-4 text-white fill-current" />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;