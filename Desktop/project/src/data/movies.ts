export interface Movie {
  id: number;
  title: string;
  originalTitle: string;
  year: number;
  genre: string[];
  rating: number;
  duration: string;
  poster: string;
  backdrop: string;
  description: string;
  director: string;
  cast: string[];
  trailer?: string;
  featured?: boolean;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "O'tgan Kunlar",
    originalTitle: "Bygone Days",
    year: 2023,
    genre: ["Drama", "Tarixiy"],
    rating: 8.5,
    duration: "2s 15min",
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "O'zbekiston tarixining muhim davrlarini aks ettiruvchi ajoyib drama filmi. Ota-bobolarimizning qiyinchilik va g'alaba kunlari haqida.",
    director: "Ahmad Abdullayev",
    cast: ["Shohruh Mirzo", "Malika Rajabova", "Akmal Husanov"],
    featured: true
  },
  {
    id: 2,
    title: "Toshkent Tong Otguncha",
    originalTitle: "Tashkent Until Dawn",
    year: 2023,
    genre: ["Jangari", "Thriller"],
    rating: 7.8,
    duration: "1s 45min",
    poster: "https://images.pexels.com/photos/7991224/pexels-photo-7991224.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991224/pexels-photo-7991224.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Zamonaviy Toshkent shahrida sodir bo'lgan qiziqarli voqealar haqidagi thriller film.",
    director: "Nosir Safarov",
    cast: ["Jahongir Ayubov", "Nilufar Usmonova", "Rustam Sagdullayev"],
    featured: true
  },
  {
    id: 3,
    title: "Yulduzlar Ostida",
    originalTitle: "Under the Stars",
    year: 2022,
    genre: ["Romantik", "Drama"],
    rating: 8.2,
    duration: "2s 05min",
    poster: "https://images.pexels.com/photos/7991228/pexels-photo-7991228.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991228/pexels-photo-7991228.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Sevgi va hayotning ma'nosi haqidagi chuqur romantik drama.",
    director: "Gulnora Karimova",
    cast: ["Farrux Xamrayev", "Yulduz Rajabova", "Bekzod Murodov"]
  },
  {
    id: 4,
    title: "Samarqand Siri",
    originalTitle: "Secret of Samarkand",
    year: 2023,
    genre: ["Sarguzasht", "Tarixiy"],
    rating: 8.7,
    duration: "2s 30min",
    poster: "https://images.pexels.com/photos/7991433/pexels-photo-7991433.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991433/pexels-photo-7991433.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Samarqandning qadimiy sirlarini ochish uchun sayohat qilgan tadqiqotchilar haqida.",
    director: "Timur Beknazarov",
    cast: ["Odil Ergashev", "Sevara Nazarova", "Bobur Yusupov"],
    featured: true
  },
  {
    id: 5,
    title: "Jangovar",
    originalTitle: "The Warrior",
    year: 2023,
    genre: ["Jangari", "Tarixiy"],
    rating: 8.0,
    duration: "2s 10min",
    poster: "https://images.pexels.com/photos/7991456/pexels-photo-7991456.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991456/pexels-photo-7991456.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "O'rta asrlarda yashagan mard jangchining hikoyasi.",
    director: "Jasur Hamidov",
    cast: ["Sardor Rahimov", "Munisa Rizayeva", "Aziz Nematov"]
  },
  {
    id: 6,
    title: "Kulgili Oila",
    originalTitle: "Funny Family",
    year: 2023,
    genre: ["Komediya", "Oilaviy"],
    rating: 7.5,
    duration: "1s 30min",
    poster: "https://images.pexels.com/photos/7991240/pexels-photo-7991240.jpeg?auto=compress&cs=tinysrgb&w=400",
    backdrop: "https://images.pexels.com/photos/7991240/pexels-photo-7991240.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Oilaviy qiymatlar va kulgili vaziyatlar haqidagi komediya.",
    director: "Komil Yormatov",
    cast: ["Abror Zufarov", "Feruza Jurayeva", "Botir Kodirova"]
  }
];

export const genres = [
  { name: "Drama", count: 25, color: "from-purple-500 to-pink-500", icon: "Heart" },
  { name: "Jangari", count: 18, color: "from-red-500 to-orange-500", icon: "Zap" },
  { name: "Komediya", count: 22, color: "from-yellow-400 to-orange-500", icon: "Smile" },
  { name: "Romantik", count: 15, color: "from-pink-500 to-rose-500", icon: "Heart" },
  { name: "Thriller", count: 12, color: "from-gray-600 to-gray-800", icon: "Eye" },
  { name: "Tarixiy", count: 10, color: "from-amber-600 to-yellow-600", icon: "Crown" },
  { name: "Sarguzasht", count: 14, color: "from-green-500 to-teal-500", icon: "Compass" },
  { name: "Oilaviy", count: 20, color: "from-blue-500 to-indigo-500", icon: "Users" }
];