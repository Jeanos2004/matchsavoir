"use client"

import React from 'react';
import Image from 'next/image';
import SignupForm from '@/components/pages/SignUp/SignupForm';

export default function InscriptionPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Section de gauche - Formulaire */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16">
        <div className="w-full max-w-md">
          {/* En-tête */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Inscription</h1>
            <p className="text-white/60">
              Créez votre compte pour rejoindre notre communauté d&apos;apprentissage
            </p>
          </div>

          {/* Formulaire */}
          <SignupForm />
        </div>
      </div>

      {/* Section de droite - Image */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-10" />
        
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-md">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/signup-img.png"
                alt="Inscription à MatchSavoir"
                fill
                className="contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Rejoignez MatchSavoir
                </h2>
                <p className="text-white/80">
                  Créez votre compte pour accéder à des formations personnalisées et connectez-vous avec des experts dans votre domaine.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-background-card/30 backdrop-blur-md rounded-lg p-6 border border-white/10">
              <div className="flex items-start mb-4">
                <div className="mr-4 p-2 bg-primary/20 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Formations personnalisées</h3>
                  <p className="text-white/60 text-sm">adaptées à votre niveau et à vos objectifs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/20 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Communauté d&apos;experts</h3>
                  <p className="text-white/60 text-sm">accédez à un réseau de formateurs qualifiés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
