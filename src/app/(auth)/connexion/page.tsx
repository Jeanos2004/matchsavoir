"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simuler une connexion
    try {
      // Ici, vous intégreriez votre logique d'authentification
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirection après connexion réussie
      window.location.href = '/';
    } catch (err) {
      setError('Identifiants incorrects. Veuillez réessayer.' + err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Section de gauche - Formulaire */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16">
        <div className="w-full max-w-md">
          {/* En-tête */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Connexion</h1>
            <p className="text-white/60">
              Accédez à votre espace personnel pour gérer vos formations
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-primary/70" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background-dark border border-background-border text-white rounded-lg block w-full pl-10 p-3 focus:ring-primary/50 focus:border-primary/50 outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            {/* Champ mot de passe */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-white/70">
                  Mot de passe
                </label>
                <Link href="/mot-de-passe-oublie" className="text-sm text-primary hover:text-primary-light transition-colors">
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-primary/70" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-background-dark border border-background-border text-white rounded-lg block w-full pl-10 pr-10 p-3 focus:ring-primary/50 focus:border-primary/50 outline-none transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/50 hover:text-white/80 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Message d'erreur */}
            {error && (
              <div className="p-3 bg-red-500/20 text-red-400 rounded-lg text-center">
                {error}
              </div>
            )}

            {/* Bouton de connexion */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark transition-all duration-300 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Connexion en cours...
                </>
              ) : (
                "Se connecter"
              )}
            </Button>

            {/* Séparateur */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-background-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background-dark text-white/60">
                  Ou continuer avec
                </span>
              </div>
            </div>

            {/* Boutons de connexion sociale */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center py-2.5 px-4 rounded-lg border border-background-border bg-background-card hover:bg-background-border/50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                  <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center py-2.5 px-4 rounded-lg border border-background-border bg-background-card hover:bg-background-border/50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                  />
                </svg>
                LinkedIn
              </button>
            </div>

            {/* Lien vers l'inscription */}
            <div className="text-center mt-6">
              <p className="text-white/60">
                Vous n&apos;avez pas de compte ?{" "}
                <Link href="/inscription" className="text-primary hover:text-primary-light transition-colors">
                  S&apos;inscrire
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Section de droite - Image */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-10" />
        
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-md">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/login-illustration.png"
                alt="Connexion à MatchSavoir"
                fill
                className="contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Bienvenue sur MatchSavoir
                </h2>
                <p className="text-white/80">
                  Connectez-vous pour accéder à votre espace personnel et retrouver vos formations et formateurs favoris.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-background-card/30 backdrop-blur-md rounded-lg p-6 border border-white/10">
              <div className="flex items-start mb-4">
                <div className="mr-4 p-2 bg-primary/20 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Accès illimité</h3>
                  <p className="text-white/60 text-sm">à toutes vos formations et ressources pédagogiques</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/20 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Sécurité garantie</h3>
                  <p className="text-white/60 text-sm">vos données sont protégées et confidentielles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
