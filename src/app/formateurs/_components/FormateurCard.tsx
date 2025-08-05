'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Star, BookOpen, GraduationCap } from 'lucide-react';

interface FormateurType {
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

const FormateurCard = ({ formateur }: { formateur: FormateurType }) => {
  return (
    <Card className="group relative overflow-hidden bg-black/20 hover:bg-black/30 backdrop-blur-[2px] border-[0.5px] border-white/[0.05] hover:border-blue-500/20 transition-all duration-300">
      <CardContent className="p-4">
        {/* En-tête avec image et titre */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-blue-400/10 to-blue-600/10 p-[1px] ring-1 ring-white/10">
            <div className="h-full w-full rounded-full overflow-hidden bg-black/40">
              <Image
                src={formateur.avatar}
                alt={formateur.name}
                width={64}
                height={64}
                className="scale-110 object-cover"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-medium text-white truncate group-hover:text-blue-400/90 transition-colors">
              {formateur.name}
            </h3>
            <p className="text-xs text-gray-400 truncate">
              {formateur.title}
            </p>
            <div className="flex items-center mt-1">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="text-xs text-white/80">{formateur.rating}</span>
              <span className="text-xs text-white/60 ml-1">({formateur.reviewCount} avis)</span>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {formateur.expertise.slice(0, 3).map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs border-blue-500/20 bg-blue-500/5 text-blue-400/90 px-2 py-0.5"
              >
                {skill}
              </Badge>
            ))}
            {formateur.expertise.length > 3 && (
              <Badge 
                variant="outline" 
                className="text-xs border-white/10 bg-white/5 text-white/60 px-2 py-0.5"
              >
                +{formateur.expertise.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-2 text-xs mb-4">
          <div className="flex flex-col items-center p-2 rounded-md bg-white/5">
            <Users className="w-4 h-4 text-blue-400/80 mb-1" />
            <span className="text-white/80">{formateur.studentCount}</span>
            <span className="text-white/40 text-[10px]">Apprenants</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-md bg-white/5">
            <BookOpen className="w-4 h-4 text-blue-400/80 mb-1" />
            <span className="text-white/80">{formateur.courseCount}</span>
            <span className="text-white/40 text-[10px]">Formations</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-md bg-white/5">
            <GraduationCap className="w-4 h-4 text-blue-400/80 mb-1" />
            <span className="text-white/80">{formateur.rating}</span>
            <span className="text-white/40 text-[10px]">Note</span>
          </div>
        </div>

        {/* Bouton */}
        <CardFooter className="flex items-center justify-center px-0 pb-0 pt-2 border-t border-white/[0.04]">
          <Link href={`/formateurs/${formateur.id}`} className="w-full">
            <Button 
              variant="ghost"
              size="sm"
              className="w-full h-8 px-3 text-xs bg-gradient-to-r from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 text-blue-400/90 border border-blue-500/20 hover:border-blue-500/30">
              Voir le profil
            </Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default FormateurCard;
