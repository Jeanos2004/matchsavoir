import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, Clock, Users, BookOpen } from 'lucide-react';

interface CourseHeaderProps {
  formation: {
    id: string;
    title: string;
    rating: number;
    reviewCount: number;
    duration: string;
    studentCount: number;
    lessonCount: number;
    instructor: string;
    instructorId: string;
    coverImage: string;
  };
}

export const CourseHeader: React.FC<CourseHeaderProps> = ({ formation }) => {
  return (
    <div className="relative">
      {/* Image de couverture */}
      <div className="relative h-64 md:h-80 w-full">
        <Image 
          src={formation.coverImage} 
          alt={formation.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
      </div>
      
      {/* Contenu superposé */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-32 md:-mt-40 pb-8">
          <Link href="/formations" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Retour aux formations
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{formation.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < Math.floor(formation.rating) ? "text-yellow-400 fill-yellow-400" : "text-white/20"}
                  />
                ))}
              </div>
              <span className="font-medium">{formation.rating}</span>
              <span className="text-white/60 ml-1">({formation.reviewCount} avis)</span>
            </div>
            
            <div className="flex items-center text-white/80">
              <Clock size={16} className="mr-1" />
              <span>{formation.duration}</span>
            </div>
            
            <div className="flex items-center text-white/80">
              <Users size={16} className="mr-1" />
              <span>{formation.studentCount} apprenants</span>
            </div>
            
            <div className="flex items-center text-white/80">
              <BookOpen size={16} className="mr-1" />
              <span>{formation.lessonCount} leçons</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-white/60 mr-1">Par</span>
              <Link 
                href={`/formateurs/${formation.instructorId}`}
                className="text-white hover:text-primary transition-colors"
              >
                {formation.instructor}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
