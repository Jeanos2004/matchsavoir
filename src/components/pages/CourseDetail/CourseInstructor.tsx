import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Users, BookOpen, GraduationCap, Briefcase } from 'lucide-react';

interface CourseInstructorProps {
  formation: {
    instructor: string;
    instructorId: string;
    instructorAvatar: string;
    instructorTitle: string;
    instructorBio: string;
    instructorRating: number;
    instructorReviewCount: number;
    instructorStudentCount: number;
    instructorCourseCount: number;
    instructorExpertise: string[];
    instructorEducation: {
      degree: string;
      institution: string;
      year: string;
    }[];
    instructorExperience: {
      position: string;
      company: string;
      period: string;
    }[];
  };
}

export const CourseInstructor: React.FC<CourseInstructorProps> = ({ formation }) => {
  return (
    <div className="space-y-8">
      {/* Profil du formateur */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden flex-shrink-0">
          <Image 
            src={formation.instructorAvatar} 
            alt={formation.instructor} 
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-grow">
          <h2 className="text-2xl font-bold mb-2">{formation.instructor}</h2>
          <p className="text-white/80 mb-3">{formation.instructorTitle}</p>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < Math.floor(formation.instructorRating) ? "text-yellow-400 fill-yellow-400" : "text-white/20"}
                  />
                ))}
              </div>
              <span className="font-medium">{formation.instructorRating}</span>
              <span className="text-white/60 ml-1">({formation.instructorReviewCount} avis)</span>
            </div>
            
            <div className="flex items-center text-white/80">
              <Users size={16} className="mr-1" />
              <span>{formation.instructorStudentCount} apprenants</span>
            </div>
            
            <div className="flex items-center text-white/80">
              <BookOpen size={16} className="mr-1" />
              <span>{formation.instructorCourseCount} formations</span>
            </div>
          </div>
          
          <p className="text-white/80 leading-relaxed mb-4">
            {formation.instructorBio}
          </p>
          
          <Link 
            href={`/formateurs/${formation.instructorId}`}
            className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
          >
            Voir le profil complet
          </Link>
        </div>
      </div>
      
      {/* Expertise */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Domaines d&apos;expertise</h3>
        <div className="flex flex-wrap gap-2">
          {formation.instructorExpertise.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {/* Formation */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <GraduationCap size={20} className="mr-2" />
          Formation
        </h3>
        <div className="space-y-4">
          {formation.instructorEducation.map((edu, index) => (
            <div key={index} className="bg-background-card/50 p-4 rounded-lg">
              <h4 className="font-medium">{edu.degree}</h4>
              <p className="text-white/70">{edu.institution}</p>
              <p className="text-white/60 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Expérience */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Briefcase size={20} className="mr-2" />
          Expérience professionnelle
        </h3>
        <div className="space-y-4">
          {formation.instructorExperience.map((exp, index) => (
            <div key={index} className="bg-background-card/50 p-4 rounded-lg">
              <h4 className="font-medium">{exp.position}</h4>
              <p className="text-white/70">{exp.company}</p>
              <p className="text-white/60 text-sm">{exp.period}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
