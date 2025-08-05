"use client"

import React from 'react';
import Image from 'next/image';
import { ButtonLink } from '../../ui/Button';
import { ArrowRight, Sparkles, Users, BookOpen } from 'lucide-react';

const HeroModern = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16">
      {/* Arrière-plan avec dégradé */}
      <div className="absolute inset-0 bg-background-dark z-0">
        {/* Motif de fond */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')] bg-repeat" />
        
        {/* Cercles lumineux */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[250px] h-[250px] rounded-full bg-secondary/20 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>La plateforme qui révolutionne l&apos;apprentissage</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
              Trouvez le <span className="text-primary relative">Savoir
                <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/20 -z-10 rounded-full"></span>
              </span> qui vous correspond
            </h1>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Vous êtes à la recherche d&apos;un formateur pour une classe inversée ou vous êtes un expert dans votre domaine?{' '}
              <span className="text-secondary font-medium">MatchSavoir</span> vous aide en toute simplicité.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
              <ButtonLink 
                href="/trouver-formateur" 
                size="lg" 
                className="bg-primary hover:bg-primary-dark group"
              >
                <span>Trouver mon formateur</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              
              <ButtonLink 
                href="/devenir-formateur" 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/5"
              >
                Devenir formateur
              </ButtonLink>
            </div>
            
            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-6 sm:gap-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start text-primary mb-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-white/60 text-sm">Formateurs qualifiés</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start text-primary mb-2">
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span className="text-2xl font-bold">1200+</span>
                </div>
                <p className="text-white/60 text-sm">Formations disponibles</p>
              </div>
            </div>
          </div>

          {/* Image flottante */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Effet de halo */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-3xl" />
              
              {/* Cercles décoratifs */}
              <div className="absolute top-0 right-0 w-20 h-20 border-4 border-primary/30 rounded-full" />
              <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-secondary/30 rounded-full" />
              
              {/* Image principale */}
              <div className="relative bg-gradient-to-br from-background-card to-background-dark rounded-2xl p-2 shadow-xl shadow-black/30 border border-background-border">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <Image 
                    src="/images/hero-image.png" 
                    alt="MatchSavoir - Mise en relation formateurs et apprenants" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                
                {/* Carte flottante */}
                <div className="absolute -bottom-6 -right-6 bg-background-card p-4 rounded-lg shadow-lg border border-background-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Trouvez l&apos;expert</p>
                      <p className="text-white/60 text-sm">qui vous correspond</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroModern;
