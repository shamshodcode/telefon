import React from 'react';
import { DivideIcon as LucideIcon, Heart, Zap, Smile, Eye, Crown, Compass, Users } from 'lucide-react';

interface GenreCardProps {
  name: string;
  count: number;
  color: string;
  icon: string;
  delay?: number;
}

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Zap,
  Smile,
  Eye,
  Crown,
  Compass,
  Users
};

const GenreCard: React.FC<GenreCardProps> = ({ name, count, color, icon, delay = 0 }) => {
  const IconComponent = iconMap[icon];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-500 bg-gradient-to-br ${color} animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
            {name}
          </h3>
          <p className="text-white/80 text-sm">
            {count} ta film
          </p>
        </div>
        
        <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 group-hover:rotate-12 transition-all duration-300">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
      </div>
      
      {/* Animated background pattern */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700" />
    </div>
  );
};

export default GenreCard;