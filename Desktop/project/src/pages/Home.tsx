import React from 'react';
import { Link } from 'react-router-dom';
import { Play, TrendingUp, Star, Calendar, ArrowRight } from 'lucide-react';
import { movies, genres } from '../data/movies';
import MovieCard from '../components/MovieCard';
import GenreCard from '../components/GenreCard';

const Home: React.FC = () => {
  const featuredMovies = movies.filter(movie => movie.featured);
  const recentMovies = movies.slice(0, 6);
  const topGenres = genres.slice(0, 6);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-red-400">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide">Eng mashhur</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                O'zbek
                <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Kinolari
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Milliy madaniyatimizni aks ettiruvchi eng yaxshi filmlar bilan tanishing. 
                O'zbekiston kino san'atining eng so'nggi asarlari sizni kutmoqda.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105">
                <Play className="w-5 h-5 fill-current" />
                <span>Hoziroq tomosha qiling</span>
              </button>
              
              <Link
                to="/movies"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <span>Barcha filmlar</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Movies */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Tavsiya etilgan filmlar</h2>
              <p className="text-gray-400">Eng yaxshi va mashhur filmlar to'plami</p>
            </div>
            <Link
              to="/movies"
              className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-200"
            >
              <span>Hammasi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMovies.map((movie, index) => (
              <div
                key={movie.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <MovieCard movie={movie} featured />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Janrlar bo'yicha</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Har xil janrdagi filmlarni kashf eting va o'zingizga yoqqanini toping
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topGenres.map((genre, index) => (
              <GenreCard
                key={genre.name}
                name={genre.name}
                count={genre.count}
                color={genre.color}
                icon={genre.icon}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/genres"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
            >
              <span>Barcha janrlar</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Movies */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">So'nggi filmlar</h2>
              <p className="text-gray-400">Yangi chiqgan va mashhur bo'lgan filmlar</p>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-medium">Yuqori baholangan</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {recentMovies.map((movie, index) => (
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
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Filmlar' },
              { number: '50+', label: 'Rejissyorlar' },
              { number: '1M+', label: 'Tomoshabinlar' },
              { number: '4.8', label: 'Reyting' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center space-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;