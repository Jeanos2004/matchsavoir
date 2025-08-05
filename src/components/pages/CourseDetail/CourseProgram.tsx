import React, { useState } from 'react';
import { ChevronDown, Clock, Play } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  duration: string;
  lessons: {
    id: number;
    title: string;
    duration: string;
    preview?: boolean;
  }[];
}

interface CourseProgramProps {
  formation: {
    modules: Module[];
    totalModules: number;
    totalLessons: number;
    totalDuration: string;
    certification: string;
  };
}

export const CourseProgram: React.FC<CourseProgramProps> = ({ formation }) => {
  const [expandedModules, setExpandedModules] = useState<number[]>([0]); // Premier module ouvert par défaut

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev => 
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div className="space-y-8">
      {/* Résumé du programme */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-background-card rounded-lg p-4">
          <p className="text-white/60 text-sm mb-1">Modules</p>
          <p className="text-xl font-bold">{formation.totalModules} modules</p>
        </div>
        <div className="bg-background-card rounded-lg p-4">
          <p className="text-white/60 text-sm mb-1">Leçons</p>
          <p className="text-xl font-bold">{formation.totalLessons} leçons</p>
        </div>
        <div className="bg-background-card rounded-lg p-4">
          <p className="text-white/60 text-sm mb-1">Durée totale</p>
          <p className="text-xl font-bold">{formation.totalDuration}</p>
        </div>
      </div>
      
      {/* Liste des modules */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Contenu du cours</h2>
        
        {formation.modules.map((module, index) => (
          <div key={module.id} className="border border-background-border rounded-lg overflow-hidden">
            {/* En-tête du module */}
            <button 
              onClick={() => toggleModule(module.id)}
              className="w-full flex items-center justify-between p-4 bg-background-card hover:bg-background-border transition-colors"
            >
              <div className="flex items-center">
                <span className="text-primary font-medium mr-3">Module {index + 1}:</span>
                <span className="font-medium">{module.title}</span>
              </div>
              <div className="flex items-center">
                <span className="text-white/60 mr-3 text-sm">{module.duration}</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform ${
                    expandedModules.includes(module.id) ? 'rotate-180' : ''
                  }`} 
                />
              </div>
            </button>
            
            {/* Contenu du module (leçons) */}
            {expandedModules.includes(module.id) && (
              <div className="border-t border-background-border">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div 
                    key={lesson.id} 
                    className="flex items-center justify-between p-4 hover:bg-background-card/50 transition-colors"
                  >
                    <div className="flex items-center">
                      {lesson.preview ? (
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                          <Play size={14} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-white/10 text-white/60 flex items-center justify-center mr-3">
                          {lessonIndex + 1}
                        </div>
                      )}
                      <span className={lesson.preview ? 'text-primary' : 'text-white/90'}>
                        {lesson.title}
                        {lesson.preview && <span className="ml-2 text-xs text-primary">(Aperçu gratuit)</span>}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="text-white/60 mr-1" />
                      <span className="text-white/60 text-sm">{lesson.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Certification */}
      <div className="bg-background-card/50 rounded-lg p-6 border border-background-border">
        <h3 className="text-xl font-semibold mb-3">Évaluation et certification</h3>
        <p className="text-white/80 leading-relaxed">
          {formation.certification}
        </p>
      </div>
    </div>
  );
};
