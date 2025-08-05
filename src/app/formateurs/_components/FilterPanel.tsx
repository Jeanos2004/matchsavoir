'use client';

import React from 'react';
import { Check, ChevronDown } from 'lucide-react';

interface FilterPanelProps {
  selectedExpertise: string[];
  setSelectedExpertise: (expertise: string[]) => void;
  selectedRating: number | null;
  setSelectedRating: (rating: number | null) => void;
}

const expertiseOptions = [
  'JavaScript', 'Python', 'React', 'Node.js', 'Data Science', 
  'Machine Learning', 'UX/UI Design', 'DevOps', 'Mobile', 'Cloud'
];

const FilterPanel = ({ 
  selectedExpertise, 
  setSelectedExpertise,
  selectedRating,
  setSelectedRating
}: FilterPanelProps) => {
  const [isExpertiseOpen, setIsExpertiseOpen] = React.useState(false);
  const [isRatingOpen, setIsRatingOpen] = React.useState(false);

  const toggleExpertise = (expertise: string) => {
    if (selectedExpertise.includes(expertise)) {
      setSelectedExpertise(selectedExpertise.filter(e => e !== expertise));
    } else {
      setSelectedExpertise([...selectedExpertise, expertise]);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white mb-4">Filtres</h3>
      
      {/* Filtre par expertise */}
      <div className="border border-background-border rounded-lg overflow-hidden">
        <button
          className="flex items-center justify-between w-full p-4 text-left bg-background-card hover:bg-background-border transition-colors"
          onClick={() => setIsExpertiseOpen(!isExpertiseOpen)}
        >
          <span className="text-white">Expertise</span>
          <ChevronDown 
            className={`w-5 h-5 text-white/60 transition-transform ${isExpertiseOpen ? 'transform rotate-180' : ''}`} 
          />
        </button>
        
        {isExpertiseOpen && (
          <div className="p-4 bg-background-dark border-t border-background-border">
            <div className="grid grid-cols-2 gap-2">
              {expertiseOptions.map((expertise) => (
                <div key={expertise} className="flex items-center">
                  <button
                    className={`w-5 h-5 rounded border mr-2 flex items-center justify-center ${
                      selectedExpertise.includes(expertise) 
                        ? 'bg-primary border-primary' 
                        : 'border-white/20 bg-transparent'
                    }`}
                    onClick={() => toggleExpertise(expertise)}
                  >
                    {selectedExpertise.includes(expertise) && (
                      <Check className="w-3.5 h-3.5 text-white" />
                    )}
                  </button>
                  <span className="text-sm text-white/80">{expertise}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Filtre par note */}
      <div className="border border-background-border rounded-lg overflow-hidden">
        <button
          className="flex items-center justify-between w-full p-4 text-left bg-background-card hover:bg-background-border transition-colors"
          onClick={() => setIsRatingOpen(!isRatingOpen)}
        >
          <span className="text-white">Note minimale</span>
          <ChevronDown 
            className={`w-5 h-5 text-white/60 transition-transform ${isRatingOpen ? 'transform rotate-180' : ''}`} 
          />
        </button>
        
        {isRatingOpen && (
          <div className="p-4 bg-background-dark border-t border-background-border">
            <div className="space-y-2">
              {[4.5, 4, 3.5, 3].map((rating) => (
                <div key={rating} className="flex items-center">
                  <button
                    className={`w-5 h-5 rounded-full border mr-2 flex items-center justify-center ${
                      selectedRating === rating 
                        ? 'bg-primary border-primary' 
                        : 'border-white/20 bg-transparent'
                    }`}
                    onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                  >
                    {selectedRating === rating && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    )}
                  </button>
                  <span className="text-sm text-white/80">{rating}+ étoiles</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Bouton de réinitialisation */}
      {(selectedExpertise.length > 0 || selectedRating !== null) && (
        <button
          className="w-full py-2 text-sm text-primary hover:text-primary-light transition-colors"
          onClick={() => {
            setSelectedExpertise([]);
            setSelectedRating(null);
          }}
        >
          Réinitialiser les filtres
        </button>
      )}
    </div>
  );
};

export default FilterPanel;
