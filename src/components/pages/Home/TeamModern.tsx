"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TeamMember } from '@/types';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const TeamModern = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Kaba Moussa',
      role: 'Fondateur',
      image: '/images/team/team-1.svg',
      socialLinks: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Diallo Mamadou',
      role: 'Co-Fondateur',
      image: '/images/team/team-2.svg',
      socialLinks: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Diallo Mariama Ciré',
      role: 'Responsable Marketing',
      image: '/images/team/team-3.svg',
      socialLinks: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="equipe">
      {/* Arrière-plan avec dégradé */}
      <div className="absolute inset-0 bg-background-dark z-0">
        {/* Motif de fond */}
        <div className="absolute inset-0 opacity-5 bg-[url('/images/grid-pattern.svg')] bg-repeat" />
        
        {/* Effets lumineux */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
            <span>L&apos;équipe derrière MatchSavoir</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rencontrez notre équipe <span className="text-primary">passionnée</span>
          </h2>
          
          <p className="text-white/60">
            Des experts dévoués à la mission de connecter formateurs et apprenants pour une expérience d&apos;apprentissage optimale.
          </p>
        </div>

        {/* Grille des membres de l&apos;équipe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index} 
              member={member} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant de carte de membre d&apos;équipe avec animation au survol
const TeamMemberCard = ({ 
  member, 
  index 
}: { 
  member: TeamMember; 
  index: number;
}) => {
  // Délai d&apos;animation basé sur l&apos;index
  const animationDelay = `${index * 100}ms`;
  
  return (
    <div 
      className="relative group"
      style={{ 
        animationDelay,
        opacity: 0,
        animation: `fadeInUp 0.5s ease forwards ${animationDelay}`
      }}
    >
      <div className="relative overflow-hidden rounded-xl bg-background-card border border-background-border transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        {/* Image du membre */}
        <div className="relative h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-50 z-10" />
          <Image 
            src={member.image} 
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        {/* Informations du membre */}
        <div className="p-6 relative">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-primary/80 font-medium mb-4">
            {member.role}
          </p>
          
          {/* Liens sociaux */}
          <div className="flex space-x-3">
            {member.socialLinks.twitter && (
              <SocialLink href={member.socialLinks.twitter} icon={<Twitter className="w-4 h-4" />} />
            )}
            {member.socialLinks.linkedin && (
              <SocialLink href={member.socialLinks.linkedin} icon={<Linkedin className="w-4 h-4" />} />
            )}
            {member.socialLinks.github && (
              <SocialLink href={member.socialLinks.github} icon={<Github className="w-4 h-4" />} />
            )}
            <SocialLink href="mailto:contact@matchsavoir.com" icon={<Mail className="w-4 h-4" />} />
          </div>
        </div>
        
        {/* Élément décoratif */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};

// Composant pour les liens sociaux
const SocialLink = ({ 
  href, 
  icon 
}: { 
  href: string; 
  icon: React.ReactNode;
}) => {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-8 h-8 rounded-full bg-background-border flex items-center justify-center text-white/60 hover:text-primary hover:bg-background-border/80 transition-colors"
    >
      {icon}
    </Link>
  );
};

export default TeamModern;
