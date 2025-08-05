"use client"

import React from 'react';
import Image from 'next/image';
import { CheckCircle, Target, Users, Award } from 'lucide-react';

const AboutModern = () => {
  const features = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Apprentissage personnalisé",
      description: "Des formations adaptées à vos objectifs et à votre rythme d'apprentissage."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Communauté engagée",
      description: "Rejoignez une communauté d'apprenants et de formateurs passionnés."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Expertise certifiée",
      description: "Des formateurs sélectionnés pour leur expertise et leurs compétences pédagogiques."
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Résultats garantis",
      description: "Un suivi personnalisé pour assurer votre progression et atteindre vos objectifs."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="about">
      {/* Arrière-plan avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-dark to-background-card/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
              <span>À propos de MatchSavoir</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Notre <span className="text-primary relative">Mission
                <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/20 -z-10 rounded-full"></span>
              </span>
            </h2>
            
            <p className="text-white/70 mb-6">
              Chez MatchSavoir, nous croyons que chaque personne mérite d&apos;accéder à une éducation de qualité, adaptée à ses besoins spécifiques. Notre mission est de démocratiser l&apos;accès au savoir en connectant les apprenants avec les formateurs qui correspondent parfaitement à leurs objectifs.
            </p>
            
            <p className="text-white/70 mb-8">
              Nous avons développé une plateforme intuitive qui utilise des algorithmes avancés pour créer des correspondances optimales, garantissant ainsi une expérience d&apos;apprentissage personnalisée et efficace.
            </p>
            
            {/* Caractéristiques */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image avec effets */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-background-border">
              {/* Overlay avec dégradé */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10" />
              
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image 
                  src="/images/purpose-image.jpeg" 
                  alt="À propos de MatchSavoir" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Carte flottante 1 */}
              <div className="absolute top-6 -left-6 bg-background-card p-4 rounded-lg shadow-lg border border-background-border z-20 max-w-[200px]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">Pour les apprenants</h4>
                </div>
                <p className="text-white/60 text-sm">
                  Trouvez le formateur idéal pour développer vos compétences à votre rythme.
                </p>
              </div>
              
              {/* Carte flottante 2 */}
              <div className="absolute -bottom-6 -right-6 bg-background-card p-4 rounded-lg shadow-lg border border-background-border z-20 max-w-[200px]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Award className="w-4 h-4 text-secondary" />
                  </div>
                  <h4 className="text-white font-medium">Pour les formateurs</h4>
                </div>
                <p className="text-white/60 text-sm">
                  Partagez votre expertise et développez votre activité avec des apprenants motivés.
                </p>
              </div>
              
              {/* Éléments décoratifs */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary/20 rounded-full z-0" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/10 rounded-full z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutModern;
