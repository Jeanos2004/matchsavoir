"use client"

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Users, BookOpen, GraduationCap, Award } from 'lucide-react';

type StatItem = {
  value: string;
  endValue: number;
  label: string;
  icon: React.ReactNode;
}

const StatsModern = () => {
  // Utilisation de useMemo pour éviter de recréer le tableau à chaque rendu
  const initialStats: StatItem[] = useMemo(() => [
    {
      value: '0',
      endValue: 500,
      label: 'Apprenants actifs',
      icon: <Users className="w-8 h-8" />,
    },
    {
      value: '0',
      endValue: 20,
      label: 'Formations disponibles',
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      value: '0',
      endValue: 8,
      label: 'Formateurs certifiés',
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      value: '0',
      endValue: 95,
      label: 'Taux de satisfaction',
      icon: <Award className="w-8 h-8" />,
    },
  ], []);

  const [animatedStats, setAnimatedStats] = useState(initialStats);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);
  
  // Fonction d'easing pour une animation plus naturelle
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };
  
  // Animation des chiffres
  useEffect(() => {
    // Fonction d'animation définie à l'intérieur de l'effet pour éviter les références circulaires
    const animateStats = () => {
      const duration = 2000; // Durée de l'animation en ms
      const frameDuration = 1000 / 60; // Durée d'une frame à 60fps
      const totalFrames = Math.round(duration / frameDuration);
      
      let frame = 0;
      
      const timer = setInterval(() => {
        frame++;
        
        const progress = frame / totalFrames;
        const easedProgress = easeOutQuart(progress);
        
        setAnimatedStats(prevStats => 
          prevStats.map((stat, index) => {
            const currentValue = Math.round(initialStats[index].endValue * easedProgress);
            let displayValue = currentValue.toString();
            
            // Ajouter un "+" pour les grands nombres ou un "%" pour le taux
            if (index === 0) displayValue += '+';
            if (index === 3) displayValue += '%';
            
            return {
              ...stat,
              value: displayValue
            };
          })
        );
        
        if (frame === totalFrames) {
          clearInterval(timer);
        }
      }, frameDuration);
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateStats();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [initialStats]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Arrière-plan avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            MatchSavoir en <span className="text-primary">chiffres</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Des résultats concrets qui témoignent de notre impact sur l&apos;apprentissage et la formation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {animatedStats.map((stat, index) => (
            <StatCard 
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant de carte de statistique
const StatCard = ({ 
  value, 
  label, 
  icon,
  index
}: { 
  value: string; 
  label: string; 
  icon: React.ReactNode;
  index: number;
}) => {
  // Couleurs différentes selon l'index
  const getColor = () => {
    switch (index % 4) {
      case 0: return 'from-primary/20 to-primary/5';
      case 1: return 'from-secondary/20 to-secondary/5';
      case 2: return 'from-primary/20 to-secondary/5';
      case 3: return 'from-secondary/20 to-primary/5';
      default: return 'from-primary/20 to-primary/5';
    }
  };
  
  return (
    <div className="relative group">
      <div className={`absolute inset-0 bg-gradient-to-br ${getColor()} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative bg-background-card border border-background-border rounded-xl p-6 transition-transform duration-500 hover:transform hover:scale-105">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 rounded-lg bg-gradient-to-br from-background-dark to-background-card mb-4 text-primary">
            {icon}
          </div>
          
          <div className="text-4xl md:text-5xl font-bold text-white mb-2">
            {value}
          </div>
          
          <div className="text-white/60">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsModern;
