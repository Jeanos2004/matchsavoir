'use client';

import React, { useState, useEffect } from 'react';
import SearchBar from './_components/SearchBar';
import FilterPanel from './_components/FilterPanel';
import FormateurCard from './_components/FormateurCard';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';

interface Formateur {
  id: number;
  name: string;
  title: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  courseCount: number;
  expertise: string[];
  avatar: string;
}

export default function FormateursPage() {
  const [formateurs] = useState<Formateur[]>([
    {
      id: 1,
      name: 'Dr. Mamadou Diallo',
      title: 'Expert en Développement Web & Data Science',
      rating: 4.9,
      reviewCount: 128,
      studentCount: 1240,
      courseCount: 8,
      expertise: ['JavaScript', 'React', 'Node.js', 'Python', 'Machine Learning'],
      avatar: '/images/instructor-1.svg'
    },
    {
      id: 2,
      name: 'Aminata Touré',
      title: 'Spécialiste UX/UI Design & Frontend',
      rating: 4.7,
      reviewCount: 95,
      studentCount: 870,
      courseCount: 5,
      expertise: ['UX/UI Design', 'HTML/CSS', 'JavaScript', 'Figma', 'Adobe XD'],
      avatar: '/images/instructor-2.svg'
    },
    {
      id: 3,
      name: 'Ibrahim Camara',
      title: 'Expert DevOps & Cloud Computing',
      rating: 4.8,
      reviewCount: 112,
      studentCount: 950,
      courseCount: 6,
      expertise: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
      avatar: '/images/instructor-3.svg'
    },
    {
      id: 4,
      name: 'Fatou Sylla',
      title: 'Experte en Data Science & IA',
      rating: 4.9,
      reviewCount: 145,
      studentCount: 1320,
      courseCount: 7,
      expertise: ['Python', 'Machine Learning', 'Deep Learning', 'Data Analysis', 'TensorFlow'],
      avatar: '/images/instructor-4.svg'
    },
    {
      id: 5,
      name: 'Ousmane Bah',
      title: 'Développeur Mobile & Web',
      rating: 4.6,
      reviewCount: 87,
      studentCount: 760,
      courseCount: 4,
      expertise: ['React Native', 'Flutter', 'iOS', 'Android', 'JavaScript'],
      avatar: '/images/instructor-5.svg'
    },
    {
      id: 6,
      name: 'Aïssatou Barry',
      title: 'Experte en Cybersécurité',
      rating: 4.8,
      reviewCount: 103,
      studentCount: 890,
      courseCount: 5,
      expertise: ['Cybersécurité', 'Ethical Hacking', 'Cryptographie', 'Sécurité réseau', 'Pentest'],
      avatar: '/images/instructor-6.svg'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filtrer les formateurs en fonction des critères de recherche et de filtrage
  const filteredFormateurs = formateurs.filter(formateur => {
    // Filtre par terme de recherche
    const matchesSearch = searchTerm === '' || 
      formateur.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formateur.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formateur.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Filtre par expertise
    const matchesExpertise = selectedExpertise.length === 0 || 
      selectedExpertise.some(expertise => formateur.expertise.includes(expertise));
    
    // Filtre par note
    const matchesRating = selectedRating === null || formateur.rating >= selectedRating;
    
    return matchesSearch && matchesExpertise && matchesRating;
  });

  // Pagination
  const totalPages = Math.ceil(filteredFormateurs.length / itemsPerPage);
  const paginatedFormateurs = filteredFormateurs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Réinitialiser la page courante lorsque les filtres changent
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedExpertise, selectedRating]);

  return (
    <div className="min-h-screen bg-background-dark text-white pb-20">
      {/* En-tête */}
      <div className="bg-gradient-to-b from-background-card to-background-dark pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Trouvez votre formateur idéal</h1>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-8">
            Découvrez nos formateurs experts dans divers domaines et trouvez celui qui correspond le mieux à vos besoins d&apos;apprentissage.
          </p>
          
          {/* Barre de recherche */}
          <div className="max-w-xl mx-auto">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Panneau de filtres - 1/4 de la largeur */}
          <div className="lg:col-span-1">
            <FilterPanel 
              selectedExpertise={selectedExpertise}
              setSelectedExpertise={setSelectedExpertise}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />
          </div>
          
          {/* Liste des formateurs - 3/4 de la largeur */}
          <div className="lg:col-span-3">
            {/* Résultats et tri */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-white/70">
                {filteredFormateurs.length} formateur{filteredFormateurs.length !== 1 ? 's' : ''} trouvé{filteredFormateurs.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            {/* Grille de formateurs */}
            {paginatedFormateurs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {paginatedFormateurs.map(formateur => (
                  <FormateurCard key={formateur.id} formateur={formateur} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-background-card rounded-lg border border-background-border">
                <GraduationCap className="w-12 h-12 text-white/20 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">Aucun formateur trouvé</h3>
                <p className="text-white/60 mb-6">Essayez de modifier vos critères de recherche</p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedExpertise([]);
                    setSelectedRating(null);
                  }}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="border-white/20 text-white hover:bg-white/5 disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page 
                        ? "bg-primary hover:bg-primary-dark text-white" 
                        : "border-white/20 text-white hover:bg-white/5"
                      }
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="border-white/20 text-white hover:bg-white/5 disabled:opacity-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
