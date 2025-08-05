import React from 'react';
import Image from 'next/image';
import { ButtonLink } from '../../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center bg-motif text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Overlay avec motif et gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Contenu textuel */}
          <div className="order-2 md:order-1 text-center md:text-left max-w-2xl mx-auto md:mx-0">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-fadeIn">
                Trouvez le <span className="text-[#e85d04] inline-block">Savoir</span> qui vous correspond
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Vous êtes à la recherche d&apos;un formateur pour une classe inversée ou vous êtes un expert dans votre domaine?{' '}
                <span className="text-secondary font-medium">MatchSavoir</span> vous aide en toute simplicité.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
                <ButtonLink 
                  href="/trouver-formateur" 
                  size="lg" 
                  variant="secondary"
                  className="bg-[#e85d04] hover:bg-[#f17a2b] hover:shadow-lg hover:shadow-[#e85d04]/20 transition-all duration-300"
                >
                  Trouver mon formateur
                </ButtonLink>
                <ButtonLink 
                  href="/devenir-formateur" 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-[#e85d04] hover:border-[#e85d04] hover:shadow-lg hover:shadow-[#e85d04]/20 backdrop-blur-sm transition-all duration-300"
                >
                  Devenir formateur
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-radial from-[#e85d04]/20 via-transparent to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
              <Image 
                src="/images/hero-image.png" 
                alt="MatchSavoir - Mise en relation formateurs et apprenants" 
                fill
                className="object-contain scale-110 animate-float"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;