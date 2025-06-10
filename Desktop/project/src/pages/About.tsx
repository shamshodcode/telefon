import React from 'react';
import { Film, Users, Award, Globe, Heart, Star, Calendar, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Film, label: 'Filmlar', value: '500+', color: 'from-red-500 to-orange-500' },
    { icon: Users, label: 'Foydalanuvchilar', value: '1M+', color: 'from-blue-500 to-purple-500' },
    { icon: Award, label: 'Mukofotlar', value: '25+', color: 'from-yellow-500 to-orange-500' },
    { icon: Globe, label: 'Mamlakatlar', value: '10+', color: 'from-green-500 to-teal-500' }
  ];

  const team = [
    {
      name: 'Ahmad Abdullayev',
      position: 'Bosh direktor',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'O\'zbekiston kino san\'atini rivojlantirishga 15 yildan ortiq vaqt bag\'ishlagan.'
    },
    {
      name: 'Malika Rajabova',
      position: 'Kreativ direktor',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Zamonaviy va an\'anaviy kino san\'atini birlashtirishda katta tajribaga ega.'
    },
    {
      name: 'Nosir Safarov',
      position: 'Texnik direktor',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Raqamli platformalar va kino texnologiyalari bo\'yicha mutaxassis.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Madaniyat',
      description: 'O\'zbekiston boy madaniy merosini saqlash va rivojlantirish'
    },
    {
      icon: Star,
      title: 'Sifat',
      description: 'Yuqori sifatli kino asarlarini taqdim etish'
    },
    {
      icon: Users,
      title: 'Hamjamiyat',
      description: 'Kino sevuvchilar hamjamiyatini rivojlantirish'
    },
    {
      icon: Target,
      title: 'Innovatsiya',
      description: 'Zamonaviy texnologiyalar yordamida kino san\'atini yangilash'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-8">
              <Film className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Biz haqimizda
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              UzCinema - O'zbekiston kino san'atini rivojlantirish va xalqimizning boy madaniy 
              merosini saqlash maqsadida yaratilgan zamonaviy onlayn platforma.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center space-y-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-1">
                    <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Bizning maqsadimiz
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    O'zbekiston kino san'atini dunyo miqyosida tanishtirib, milliy 
                    qadriyatlarimizni saqlash va rivojlantirish bizning asosiy maqsadimizdir.
                  </p>
                  <p>
                    Biz har bir kino sevuvchiga sifatli va qiziqarli kontentni yetkazib 
                    berishga intilamiz. Zamonaviy texnologiyalar yordamida an'anaviy 
                    va zamonaviy kino san'atini birlashtirmoqdamiz.
                  </p>
                  <p>
                    UzCinema platformasi orqali yosh rejissyorlar va aktyorlarni 
                    qo'llab-quvvatlash, ularning ijodiy faoliyatini rag'batlantirishga 
                    katta e'tibor beramiz.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="O'zbek kinosi"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-20" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bizning qadriyatlarimiz
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Biz ushbu qadriyatlar asosida faoliyat yuritamiz va rivojlanamiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center space-y-4 p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bizning jamoa
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional va tajribali mutaxassislar bilan birga ishlaymiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative inline-block">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-red-500 to-orange-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-red-400 font-medium">{member.position}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bizning yo'limiz
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              UzCinema platformasining rivojlanish tarixi
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: '2020',
                  title: 'Loyiha boshlanishi',
                  description: 'O\'zbekiston kino san\'atini rivojlantirish g\'oyasi tug\'ilgan yil'
                },
                {
                  year: '2021',
                  title: 'Birinchi filmlar',
                  description: 'Platformaga birinchi o\'zbek filmlari qo\'shildi'
                },
                {
                  year: '2022',
                  title: 'Kengayish',
                  description: 'Yangi funksiyalar va ko\'proq filmlar qo\'shildi'
                },
                {
                  year: '2023',
                  title: 'Milliy platforma',
                  description: 'O\'zbekistonning eng yirik kino platformasiga aylandi'
                },
                {
                  year: '2024',
                  title: 'Xalqaro hamkorlik',
                  description: 'Xalqaro kino festivallar va loyihalar bilan hamkorlik'
                }
              ].map((item, index) => (
                <div
                  key={item.year}
                  className="flex items-center space-x-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-white">{item.year}</span>
                      <div className="h-px bg-gradient-to-r from-red-500 to-transparent flex-1" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;