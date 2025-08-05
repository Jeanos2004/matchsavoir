"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ButtonLink } from '../ui/Button';
import { Search, Menu, X, ChevronRight, User, LogIn, Home, BookOpen, Users, MessageSquare } from 'lucide-react';

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Détecte le défilement pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ferme le menu mobile lors d'un changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Gère la fermeture du drawer lors d'un clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && 
          drawerRef.current && 
          !drawerRef.current.contains(event.target as Node) &&
          event.target !== document.querySelector('[aria-label="Ouvrir le menu"]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  // Empêche le défilement du body lorsque le drawer est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background-card/90 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">
              <span className="text-primary">Match</span>
              <span className="text-white">Savoir</span>
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" label="Accueil" />
            <NavLink href="/formations" label="Formations" />
            <NavLink href="/formateurs" label="Formateurs" />
            <NavLink href="#contact" label="Contact" />
          </nav>

          {/* Actions desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </button>
            <ButtonLink 
              href="/connexion" 
              className="bg-primary hover:bg-primary-dark text-white"
            >
              Connexion
            </ButtonLink>
            <ButtonLink 
              href="/inscription" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-primary hover:border-primary"
            >
              S&apos;inscrire
            </ButtonLink>
          </div>

          {/* Menu mobile */}
          <button 
            className="md:hidden p-2 text-white focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay pour le drawer mobile */}
      {isMenuOpen && (
        <div 
          ref={overlayRef}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          aria-hidden="true"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Drawer mobile */}
      <div 
        ref={drawerRef}
        className={`md:hidden fixed top-0 bottom-0 right-0 w-[280px] bg-background-dark border-l border-background-border z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* En-tête du drawer */}
          <div className="flex items-center justify-between p-4 border-b border-background-border">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <span className="text-xl font-bold">
                <span className="text-primary">Match</span>
                <span className="text-white">Savoir</span>
              </span>
            </Link>
            <button 
              className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Corps du drawer */}
          <div className="flex-1 overflow-y-auto py-4 px-4">
            <nav className="flex flex-col space-y-1">
              <MobileNavLink href="/" label="Accueil" icon={<Home size={18} />} />
              <MobileNavLink href="/formations" label="Formations" icon={<BookOpen size={18} />} />
              <MobileNavLink href="/formateurs" label="Formateurs" icon={<Users size={18} />} />
              <MobileNavLink href="#contact" label="Contact" icon={<MessageSquare size={18} />} />
            </nav>
            
            <div className="mt-8">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 px-3">Compte</h3>
              <nav className="flex flex-col space-y-1">
                <MobileNavLink href="/connexion" label="Connexion" icon={<LogIn size={18} />} />
                <MobileNavLink href="/inscription" label="Inscription" icon={<User size={18} />} />
              </nav>
            </div>
          </div>
          
          {/* Pied du drawer */}
          <div className="p-4 border-t border-background-border">
            <ButtonLink 
              href="/inscription" 
              className="w-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center"
            >
              Commencer maintenant
              <ChevronRight size={16} className="ml-1" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
};

// Composant pour les liens de navigation desktop
const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));
  
  return (
    <Link 
      href={href} 
      className={`relative py-2 text-sm font-medium transition-colors ${
        isActive 
          ? 'text-primary' 
          : 'text-white/80 hover:text-white'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
      )}
    </Link>
  );
};

// Composant pour les liens de navigation mobile
const MobileNavLink = ({ 
  href, 
  label, 
  icon 
}: { 
  href: string; 
  label: string; 
  icon?: React.ReactNode 
}) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));
  
  return (
    <Link 
      href={href} 
      className={`flex items-center space-x-3 py-2.5 px-3 rounded-md transition-colors ${
        isActive 
          ? 'text-primary bg-primary/10 font-medium' 
          : 'text-white/80 hover:text-white hover:bg-white/5'
      }`}
    >
      {icon && <span className={isActive ? 'text-primary' : 'text-white/60'}>{icon}</span>}
      <span>{label}</span>
      {isActive && <span className="ml-auto"><ChevronRight size={16} className="text-primary" /></span>}
    </Link>
  );
};

export default NavigationMenu;
