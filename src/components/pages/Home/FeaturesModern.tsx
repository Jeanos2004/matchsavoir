"use client"

import React from 'react';
import { Search, Calendar, Users, BookOpen, Award, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Recherche intelligente",
    description: "Trouvez le formateur idéal grâce à notre système de recherche avancé qui prend en compte vos besoins spécifiques et vos préférences d'apprentissage."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Gestion des disponibilités",
    description: "Planifiez vos sessions de formation selon votre emploi du temps grâce à notre calendrier intégré qui synchronise les disponibilités des formateurs."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Mise en relation directe",
    description: "Entrez en contact directement avec les formateurs pour discuter de vos besoins spécifiques avant de vous engager dans une formation."
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Formations personnalisées",
    description: "Accédez à des formations sur mesure adaptées à votre niveau et à vos objectifs d'apprentissage pour maximiser votre progression."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Formateurs certifiés",
    description: "Tous nos formateurs sont soigneusement sélectionnés et évalués pour garantir la qualité des enseignements dispensés sur notre plateforme."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Suivi et feedback",
    description: "Bénéficiez d'un suivi personnalisé et d'un système de feedback qui vous permet d'évaluer et d'améliorer continuellement votre expérience d'apprentissage."
  }
];

const FeaturesModern = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Arrière-plan */}
      <div className="absolute inset-0 bg-background-dark z-0">
        {/* Motif de fond */}
        <div className="absolute inset-0 opacity-5 bg-[url('/images/grid-pattern.svg')] bg-repeat" />
        
        {/* Effets lumineux */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
            <span>Pourquoi choisir MatchSavoir</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Une plateforme complète pour votre apprentissage
          </h2>
          
          <p className="text-white/60">
            Découvrez comment MatchSavoir révolutionne l&apos;apprentissage en connectant les apprenants avec les meilleurs formateurs et en offrant des outils puissants pour une expérience éducative optimale.
          </p>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant de carte de fonctionnalité avec animation au survol
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  index: number;
}) => {
  // Délai d'animation basé sur l'index
  const animationDelay = `${index * 100}ms`;
  
  return (
    <div 
      className="group bg-background-card border border-background-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
      style={{ 
        animationDelay,
        opacity: 0,
        animation: `fadeInUp 0.5s ease forwards ${animationDelay}`
      }}
    >
      {/* Icône */}
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      
      {/* Titre */}
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-white/60 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeaturesModern;

// Note: Les animations sont maintenant définies dans le fichier globals.css
