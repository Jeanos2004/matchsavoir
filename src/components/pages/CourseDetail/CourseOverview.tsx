import React from 'react';
import { CheckCircle, Play } from 'lucide-react';

interface CourseOverviewProps {
  formation: {
    description: string;
    objectives: string[];
    prerequisites: string;
    targetAudience: string;
    methodology: string;
    resources: string[];
    videoPreview?: string;
  };
  onPlayVideo: () => void;
}

export const CourseOverview: React.FC<CourseOverviewProps> = ({ formation, onPlayVideo }) => {
  return (
    <div className="space-y-8">
      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold mb-4">À propos de cette formation</h2>
        <p className="text-white/80 leading-relaxed whitespace-pre-line">
          {formation.description}
        </p>
      </div>
      
      {/* Vidéo de présentation */}
      {formation.videoPreview && (
        <div className="relative rounded-xl overflow-hidden">
          <div className="aspect-video bg-background-card/50 relative">
            <button 
              onClick={onPlayVideo}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center transition-colors">
                <Play size={24} className="text-white ml-1" />
              </div>
              <div className="absolute inset-0 bg-black/30"></div>
            </button>
          </div>
        </div>
      )}
      
      {/* Objectifs d'apprentissage */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Objectifs d&apos;apprentissage</h3>
        <ul className="space-y-3">
          {formation.objectives.map((objective, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={18} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white/80">{objective}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Prérequis */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Prérequis</h3>
        <p className="text-white/80 leading-relaxed">
          {formation.prerequisites}
        </p>
      </div>
      
      {/* Public cible */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Public cible</h3>
        <p className="text-white/80 leading-relaxed">
          {formation.targetAudience}
        </p>
      </div>
      
      {/* Méthodologie */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Méthode pédagogique</h3>
        <p className="text-white/80 leading-relaxed">
          {formation.methodology}
        </p>
      </div>
      
      {/* Ressources */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Ressources incluses</h3>
        <ul className="space-y-3">
          {formation.resources.map((resource, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={18} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white/80">{resource}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
