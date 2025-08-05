"use client"

import React from 'react';
import { ButtonLink } from '../../ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  "Accès à des formateurs qualifiés",
  "Formations personnalisées selon vos besoins",
  "Flexibilité des horaires et des formats",
  "Suivi pédagogique personnalisé"
];

const CTAModern = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Arrière-plan avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-dark to-primary/10" />
      
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/20 via-transparent to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-background-card rounded-2xl overflow-hidden border border-background-border shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contenu textuel */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à transformer votre expérience d&apos;apprentissage ?
              </h2>
              
              <p className="text-white/70 text-lg mb-8">
                Rejoignez MatchSavoir dès aujourd&apos;hui et connectez-vous avec les meilleurs formateurs pour atteindre vos objectifs d&apos;apprentissage.
              </p>
              
              {/* Liste des avantages */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonLink 
                  href="/inscription" 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark group"
                >
                  <span>S&apos;inscrire gratuitement</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
                
                <ButtonLink 
                  href="/en-savoir-plus" 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  En savoir plus
                </ButtonLink>
              </div>
            </div>
            
            {/* Image ou graphique */}
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 hidden lg:block">
              {/* Cercles décoratifs */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full border-2 border-primary/30" />
              <div className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full border-2 border-secondary/30" />
              
              {/* Illustration ou image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 aspect-square relative">
                  <div className="absolute inset-0 bg-[url('/images/cta-illustration.svg')] bg-contain bg-center bg-no-repeat" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bannière de statistiques */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem value="500+" label="Formateurs" />
          <StatItem value="1200+" label="Formations" />
          <StatItem value="5000+" label="Apprenants" />
          <StatItem value="98%" label="Satisfaction" />
        </div>
      </div>
    </section>
  );
};

// Composant pour les statistiques
const StatItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-white/60">{label}</div>
    </div>
  );
};

export default CTAModern;
