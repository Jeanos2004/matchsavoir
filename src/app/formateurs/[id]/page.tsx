"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Star, 
  MessageCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  BookOpen, 
  Users, 
  Award,
  ChevronRight,
  Share2,
  Heart,
  GraduationCap
} from 'lucide-react';

// Simuler la récupération des données du formateur
const getFormateur = (id: string) => {
  // Dans une application réelle, ces données viendraient d'une API
  return {
    id,
    name: "Dr. Mamadou Diallo",
    title: "Expert en Développement Web & Data Science",
    rating: 4.9,
    reviewCount: 128,
    studentCount: 1240,
    courseCount: 8,
    hourlyRate: 75,
    location: "Paris, France",
    languages: ["Français", "Anglais", "Espagnol"],
    bio: "Docteur en informatique avec plus de 10 ans d'expérience dans l'enseignement et le développement logiciel. Spécialisé en développement web moderne (React, Node.js) et en science des données (Python, Machine Learning). J'adapte mon approche pédagogique à chaque apprenant pour garantir une progression optimale.",
    expertise: ["JavaScript", "React", "Node.js", "Python", "Machine Learning", "Data Science", "TypeScript", "MongoDB"],
    education: [
      { degree: "Doctorat en Informatique", institution: "Université Paris-Saclay", year: "2015" },
      { degree: "Master en Intelligence Artificielle", institution: "École Polytechnique", year: "2012" },
    ],
    experience: [
      { position: "Lead Developer", company: "TechInnovate", period: "2018 - Présent" },
      { position: "Data Scientist", company: "DataCorp", period: "2015 - 2018" },
      { position: "Enseignant-Chercheur", company: "Université Paris-Saclay", period: "2012 - 2015" },
    ],
    certifications: [
      "AWS Certified Solutions Architect",
      "Google Professional Data Engineer",
      "MongoDB Certified Developer",
      "TensorFlow Developer Certificate"
    ],
    courses: [
      {
        id: 1,
        title: "Formation Python Avancé",
        price: 1000,
        duration: "30 heures",
        level: "Intermédiaire",
        format: "En ligne",
        nextSession: "21 juin 2025",
        image: "/images/course-python.jpg",
        students: 245
      },
      {
        id: 2,
        title: "JavaScript Moderne avec React",
        price: 1200,
        duration: "40 heures",
        level: "Tous niveaux",
        format: "Hybride",
        nextSession: "15 juillet 2025",
        image: "/images/course-js.jpg",
        students: 189
      },
      {
        id: 3,
        title: "Introduction au Machine Learning",
        price: 1500,
        duration: "45 heures",
        level: "Avancé",
        format: "Présentiel",
        nextSession: "10 août 2025",
        image: "/images/course-ml.jpg",
        students: 132
      }
    ],
    reviews: [
      {
        id: 1,
        name: "Sophie Martin",
        date: "12 mars 2025",
        rating: 5,
        comment: "Excellente formation ! Dr. Diallo explique des concepts complexes de manière claire et accessible. J'ai beaucoup appris et je me sens maintenant confiante pour appliquer ces connaissances dans mon travail.",
        course: "Formation Python Avancé",
        avatar: "/images/avatar-1.jpg"
      },
      {
        id: 2,
        name: "Thomas Dubois",
        date: "28 février 2025",
        rating: 5,
        comment: "Un formateur exceptionnel qui prend le temps de s'assurer que chaque étudiant comprend bien. Les exercices pratiques sont particulièrement utiles et bien conçus.",
        course: "JavaScript Moderne avec React",
        avatar: "/images/avatar-2.jpg"
      },
      {
        id: 3,
        name: "Emma Leclerc",
        date: "15 février 2025",
        rating: 4,
        comment: "Formation très complète et bien structurée. J'aurais aimé plus d'exercices pratiques, mais globalement très satisfaite de ce que j'ai appris.",
        course: "Introduction au Machine Learning",
        avatar: "/images/avatar-3.jpg"
      }
    ],
    availability: [
      { day: "Lundi", slots: ["9:00 - 12:00", "14:00 - 17:00"] },
      { day: "Mardi", slots: ["9:00 - 12:00"] },
      { day: "Mercredi", slots: ["14:00 - 18:00"] },
      { day: "Jeudi", slots: ["9:00 - 12:00", "14:00 - 17:00"] },
      { day: "Vendredi", slots: ["9:00 - 13:00"] }
    ],
    image: "/images/instructor-1.svg"
  };
};

// Définir le type correct pour les props de page dans Next.js 15.2.4
type PageProps = {
  params: Promise<{ id: string }>
};

export default function FormateurDetailPage({ params }: PageProps) {
  // Utiliser React.use pour unwrapper les params qui sont maintenant une Promise
  const unwrappedParams = React.use(params);
  const formateur = getFormateur(unwrappedParams.id);
  const [activeTab, setActiveTab] = useState('courses');
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const displayedReviews = showAllReviews ? formateur.reviews : formateur.reviews.slice(0, 2);

  return (
    <div className="min-h-screen bg-background-dark text-white pb-20">
      {/* Header avec photo et informations principales */}
      <div className="bg-background-card/30 border-b border-background-border">
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/formateurs" 
            className="inline-flex items-center text-white/60 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Retour aux formateurs
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Photo et actions */}
            <div className="md:w-1/3 lg:w-1/4">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                <Image 
                  src={formateur.image} 
                  alt={formateur.name} 
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col space-y-3">
                <button className="w-full py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors flex items-center justify-center">
                  <MessageCircle size={18} className="mr-2" />
                  Contacter
                </button>
                
                <button className="w-full py-3 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors flex items-center justify-center">
                  <Calendar size={18} className="mr-2" />
                  Réserver une session
                </button>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`flex-1 py-3 rounded-lg transition-colors flex items-center justify-center ${
                      isFavorite 
                        ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                        : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white'
                    }`}
                  >
                    <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
                  </button>
                  
                  <button className="flex-1 py-3 bg-white/10 hover:bg-white/15 text-white/80 hover:text-white rounded-lg transition-colors flex items-center justify-center">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Informations principales */}
            <div className="md:w-2/3 lg:w-3/4">
              <h1 className="text-3xl font-bold mb-2">{formateur.name}</h1>
              <p className="text-white/80 text-lg mb-4">{formateur.title}</p>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-4">
                  <Star size={18} className="text-yellow-400 mr-1" fill="currentColor" />
                  <span className="font-medium">{formateur.rating}</span>
                  <span className="text-white/60 ml-1">({formateur.reviewCount} avis)</span>
                </div>
                
                <div className="flex items-center text-white/80 mr-4">
                  <Users size={16} className="mr-1" />
                  <span>{formateur.studentCount} apprenants</span>
                </div>
                
                <div className="flex items-center text-white/80">
                  <BookOpen size={16} className="mr-1" />
                  <span>{formateur.courseCount} formations</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-background-card rounded-lg p-4">
                  <div className="flex items-center text-white/60 mb-1">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">Tarif horaire</span>
                  </div>
                  <p className="text-xl font-bold">{formateur.hourlyRate}€ / heure</p>
                </div>
                
                <div className="bg-background-card rounded-lg p-4">
                  <div className="flex items-center text-white/60 mb-1">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">Localisation</span>
                  </div>
                  <p className="font-medium">{formateur.location}</p>
                </div>
                
                <div className="bg-background-card rounded-lg p-4">
                  <div className="flex items-center text-white/60 mb-1">
                    <Globe size={16} className="mr-2" />
                    <span className="text-sm">Langues</span>
                  </div>
                  <p className="font-medium">{formateur.languages.join(", ")}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-3">À propos</h2>
                <p className="text-white/80 leading-relaxed">{formateur.bio}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {formateur.expertise.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs de navigation */}
      <div className="border-b border-background-border sticky top-20 md:top-24 bg-background-dark z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar space-x-8">
            <TabButton 
              active={activeTab === 'courses'} 
              onClick={() => setActiveTab('courses')}
              label="Formations"
              icon={<BookOpen size={16} />}
            />
            <TabButton 
              active={activeTab === 'reviews'} 
              onClick={() => setActiveTab('reviews')}
              label="Avis"
              icon={<Star size={16} />}
            />
            <TabButton 
              active={activeTab === 'experience'} 
              onClick={() => setActiveTab('experience')}
              label="Expérience"
              icon={<Briefcase size={16} />}
            />
            <TabButton 
              active={activeTab === 'availability'} 
              onClick={() => setActiveTab('availability')}
              label="Disponibilités"
              icon={<Calendar size={16} />}
            />
          </div>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        {/* Formations */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Formations proposées</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formateur.courses.map(course => (
                <div key={course.id} className="bg-background-card rounded-xl border border-background-border overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="relative aspect-video">
                    <Image 
                      src={course.image} 
                      alt={course.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-white/60">
                        <Users size={14} className="mr-1" />
                        <span className="text-sm">{course.students} apprenants</span>
                      </div>
                      <div className="text-primary font-bold">{course.price}€</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-background-dark rounded-md p-2">
                        <div className="text-white/60 text-xs mb-1">Durée</div>
                        <div className="font-medium text-sm">{course.duration}</div>
                      </div>
                      
                      <div className="bg-background-dark rounded-md p-2">
                        <div className="text-white/60 text-xs mb-1">Niveau</div>
                        <div className="font-medium text-sm">{course.level}</div>
                      </div>
                      
                      <div className="bg-background-dark rounded-md p-2">
                        <div className="text-white/60 text-xs mb-1">Format</div>
                        <div className="font-medium text-sm">{course.format}</div>
                      </div>
                      
                      <div className="bg-background-dark rounded-md p-2">
                        <div className="text-white/60 text-xs mb-1">Prochaine session</div>
                        <div className="font-medium text-sm">{course.nextSession}</div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/formations/${course.id}`}
                      className="w-full py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors flex items-center justify-center"
                    >
                      Voir les détails
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Avis */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Avis des apprenants</h2>
              <div className="flex items-center">
                <Star size={20} className="text-yellow-400 mr-1" fill="currentColor" />
                <span className="text-xl font-bold">{formateur.rating}</span>
                <span className="text-white/60 ml-1">({formateur.reviewCount} avis)</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {displayedReviews.map(review => (
                <div key={review.id} className="bg-background-card rounded-xl border border-background-border p-6">
                  <div className="flex items-start mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={review.avatar} 
                        alt={review.name} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < review.rating ? "text-yellow-400" : "text-white/20"} 
                              fill="currentColor" 
                            />
                          ))}
                        </div>
                        <span className="text-white/60 text-sm">{review.date}</span>
                      </div>
                      <p className="text-white/60 text-sm mt-1">Formation : {review.course}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80">{review.comment}</p>
                </div>
              ))}
              
              {formateur.reviews.length > 2 && (
                <button 
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="w-full py-3 bg-background-card hover:bg-background-border text-white rounded-lg transition-colors"
                >
                  {showAllReviews ? "Voir moins d'avis" : "Voir tous les avis"}
                </button>
              )}
            </div>
          </div>
        )}
        
        {/* Expérience */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {/* Formation */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Formation académique</h2>
              
              <div className="space-y-4">
                {formateur.education.map((edu, index) => (
                  <div key={index} className="bg-background-card rounded-xl border border-background-border p-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-primary/10 rounded-full mr-4">
                        <GraduationCap size={20} className="text-primary" />
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg">{edu.degree}</h3>
                        <p className="text-white/80">{edu.institution}</p>
                        <p className="text-white/60 text-sm">{edu.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Expérience professionnelle */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Expérience professionnelle</h2>
              
              <div className="space-y-4">
                {formateur.experience.map((exp, index) => (
                  <div key={index} className="bg-background-card rounded-xl border border-background-border p-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-background-dark rounded-full mr-4">
                        <Briefcase size={20} className="text-white/80" />
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg">{exp.position}</h3>
                        <p className="text-white/80">{exp.company}</p>
                        <p className="text-white/60 text-sm">{exp.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Certifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formateur.certifications.map((cert, index) => (
                  <div key={index} className="bg-background-card rounded-xl border border-background-border p-4 flex items-center">
                    <div className="p-2 bg-green-500/10 rounded-full mr-3">
                      <Award size={16} className="text-green-400" />
                    </div>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Disponibilités */}
        {activeTab === 'availability' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Disponibilités</h2>
            
            <div className="bg-background-card rounded-xl border border-background-border overflow-hidden">
              <div className="p-6 border-b border-background-border">
                <p className="text-white/80">Voici les créneaux horaires habituels de disponibilité du formateur. Pour réserver une session, veuillez contacter le formateur ou utiliser le bouton de réservation.</p>
              </div>
              
              <div className="divide-y divide-background-border">
                {formateur.availability.map((day, index) => (
                  <div key={index} className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="font-medium mb-2 md:mb-0">{day.day}</div>
                    <div className="flex flex-wrap gap-2">
                      {day.slots.map((slot, i) => (
                        <div key={i} className="px-3 py-1.5 bg-background-dark rounded-lg text-white/80 text-sm">
                          {slot}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-primary/5 border-t border-background-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-bold mb-1">Besoin d&apos;un créneau personnalisé ?</h3>
                    <p className="text-white/60 text-sm">Le formateur peut s&apos;adapter à votre emploi du temps</p>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors flex items-center">
                    Demander un créneau
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Composant pour les boutons de navigation
const TabButton = ({ 
  active, 
  onClick, 
  label,
  icon
}: { 
  active: boolean; 
  onClick: () => void; 
  label: string;
  icon: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-4 px-1 font-medium whitespace-nowrap border-b-2 transition-colors flex items-center ${
        active 
          ? 'border-primary text-primary' 
          : 'border-transparent text-white/60 hover:text-white hover:border-white/20'
      }`}
    >
      <span className="mr-2">{icon}</span>
      {label}
    </button>
  );
};

// Composant pour l'icône Globe
const Globe = ({ size = 24, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
};

// Composant pour l'icône Briefcase
const Briefcase = ({ size = 24, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
};
