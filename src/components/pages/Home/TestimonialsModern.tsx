"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

// Données de témoignages
const testimonials = [
  {
    id: 1,
    name: "Sarah Koné",
    role: "Étudiante en informatique",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content:
      "MatchSavoir m'a permis de trouver un formateur expert en développement web qui a complètement transformé ma compréhension du code. Les cours personnalisés ont fait toute la différence dans mon parcours académique.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mohamed Diallo",
    role: "Professionnel en reconversion",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "En tant que professionnel en reconversion, j'avais besoin d'une formation flexible et efficace. Grâce à MatchSavoir, j'ai trouvé un formateur qui s'est adapté à mon emploi du temps et à mes besoins spécifiques.",
    rating: 5,
  },
  {
    id: 3,
    name: "Aminata Touré",
    role: "Formatrice en marketing digital",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "Devenir formatrice sur MatchSavoir a été une excellente décision pour ma carrière. La plateforme me met en relation avec des apprenants motivés et gère toute la partie administrative, me permettant de me concentrer sur l'enseignement.",
    rating: 4,
  },
];

const TestimonialsModern = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fonction pour passer au témoignage suivant
  const nextTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Fonction pour passer au témoignage précédent
  const prevTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Rotation automatique des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background-dark relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-primary" />
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-2 border-secondary" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[250px] h-[250px] rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Découvrez les expériences de nos apprenants et formateurs qui ont
            transformé leur parcours éducatif grâce à MatchSavoir.
          </p>
        </div>

        {/* Conteneur de témoignages */}
        <div className="max-w-4xl mx-auto relative">
          {/* Icône de citation */}
          <div className="absolute -top-10 left-0 text-primary/20">
            <Quote className="w-20 h-20" />
          </div>

          {/* Témoignage actif */}
          <div
            className={`bg-background-card rounded-2xl p-8 border border-background-border shadow-xl transition-opacity duration-500 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image et informations */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background-border mb-4">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-white font-semibold text-lg">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-white/60 text-sm mb-3">
                  {testimonials[activeIndex].role}
                </p>

                {/* Étoiles de notation */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonials[activeIndex].rating
                          ? "text-primary fill-primary"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Contenu du témoignage */}
              <div>
                <p className="text-white/80 text-lg italic leading-relaxed">
                  &quot;{testimonials[activeIndex].content}&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-background-card border border-background-border text-white/70 hover:text-white hover:border-primary transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicateurs */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-primary w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-background-card border border-background-border text-white/70 hover:text-white hover:border-primary transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsModern;
