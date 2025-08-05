"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Briefcase, 
  Calendar, 
  Edit,
  Lock,
  Bell,
  LogOut,
  ChevronRight,
  Upload,
  Save,
  X
} from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('general');
  const [isEditing, setIsEditing] = useState(false);
  
  // Données fictives de l'utilisateur
  const [userData, setUserData] = useState({
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@example.com',
    phone: '+33 6 12 34 56 78',
    location: 'Paris, France',
    website: 'jeandupont.fr',
    occupation: 'Développeur Full Stack',
    bio: "Passionné de développement web et de nouvelles technologies. J'aime apprendre de nouvelles compétences et partager mes connaissances avec la communauté.",
    joinDate: 'Avril 2025',
    interests: ['Développement Web', 'Machine Learning', 'UX/UI Design', 'Blockchain'],
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'Tailwind CSS'],
    languages: ['Français (Natif)', 'Anglais (Courant)', 'Espagnol (Intermédiaire)']
  });
  
  // Fonction pour gérer les modifications des champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous implémenteriez la logique pour envoyer les données au backend
    setIsEditing(false);
    // Afficher un message de succès (non implémenté dans cet exemple)
  };
  
  return (
    <div className="min-h-screen bg-background-dark text-white pb-20">
      {/* Header avec titre de la page */}
      <div className="bg-background-card/30 border-b border-background-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Mon Profil</h1>
              <p className="text-white/60 mt-1">Gérez vos informations personnelles et paramètres</p>
            </div>
            <Link 
              href="/dashboard" 
              className="px-4 py-2 bg-background-card hover:bg-background-border rounded-lg transition-colors text-sm flex items-center"
            >
              Retour au tableau de bord
            </Link>
          </div>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar avec photo de profil et navigation */}
          <div className="lg:col-span-1">
            <div className="bg-background-card rounded-xl border border-background-border overflow-hidden sticky top-24">
              {/* Photo de profil */}
              <div className="p-6 flex flex-col items-center border-b border-background-border">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/avatar-placeholder.jpg" 
                    alt="Photo de profil" 
                    fill
                    className="object-cover"
                  />
                  {isEditing && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="p-2 bg-primary rounded-full">
                        <Upload size={20} />
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-bold">{userData.firstName} {userData.lastName}</h2>
                <p className="text-white/60 text-sm">{userData.occupation}</p>
                
                {!isEditing ? (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="mt-4 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm flex items-center"
                  >
                    <Edit size={16} className="mr-2" />
                    Modifier le profil
                  </button>
                ) : (
                  <div className="mt-4 flex space-x-2">
                    <button 
                      onClick={handleSubmit}
                      className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors text-sm flex items-center"
                    >
                      <Save size={16} className="mr-2" />
                      Enregistrer
                    </button>
                    <button 
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 bg-background-border hover:bg-white/10 text-white rounded-lg transition-colors text-sm flex items-center"
                    >
                      <X size={16} className="mr-2" />
                      Annuler
                    </button>
                  </div>
                )}
              </div>
              
              {/* Navigation */}
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button 
                      onClick={() => setActiveTab('general')}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        activeTab === 'general' 
                          ? 'bg-primary/10 text-primary' 
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <User size={18} />
                      <span>Informations générales</span>
                      {activeTab === 'general' && <ChevronRight size={16} className="ml-auto" />}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('security')}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        activeTab === 'security' 
                          ? 'bg-primary/10 text-primary' 
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Lock size={18} />
                      <span>Sécurité</span>
                      {activeTab === 'security' && <ChevronRight size={16} className="ml-auto" />}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('notifications')}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        activeTab === 'notifications' 
                          ? 'bg-primary/10 text-primary' 
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Bell size={18} />
                      <span>Notifications</span>
                      {activeTab === 'notifications' && <ChevronRight size={16} className="ml-auto" />}
                    </button>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-background-border">
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">
                    <LogOut size={18} />
                    <span>Déconnexion</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
          
          {/* Contenu principal */}
          <div className="lg:col-span-3">
            {/* Informations générales */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                {/* Informations personnelles */}
                <div className="bg-background-card rounded-xl border border-background-border overflow-hidden">
                  <div className="p-6 border-b border-background-border">
                    <h2 className="text-lg font-bold">Informations personnelles</h2>
                    <p className="text-white/60 text-sm">Vos informations de base</p>
                  </div>
                  
                  <div className="p-6">
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                            Prénom
                          </label>
                          {isEditing ? (
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={userData.firstName}
                              onChange={handleChange}
                              className="w-full px-3 py-2 bg-background-dark border border-background-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-white"
                            />
                          ) : (
                            <p className="text-white">{userData.firstName}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                            Nom
                          </label>
                          {isEditing ? (
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={userData.lastName}
                              onChange={handleChange}
                              className="w-full px-3 py-2 bg-background-dark border border-background-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-white"
                            />
                          ) : (
                            <p className="text-white">{userData.lastName}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                            Email
                          </label>
                          <div className="flex items-center">
                            <Mail size={16} className="text-white/60 mr-2" />
                            {isEditing ? (
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-background-dark border border-background-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-white"
                              />
                            ) : (
                              <p className="text-white">{userData.email}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                            Téléphone
                          </label>
                          <div className="flex items-center">
                            <Phone size={16} className="text-white/60 mr-2" />
                            {isEditing ? (
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={userData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-background-dark border border-background-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-white"
                              />
                            ) : (
                              <p className="text-white">{userData.phone}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="location" className="block text-sm font-medium text-white/80 mb-2">
                            Localisation
                          </label>
                          <div className="flex items-center">
                            <MapPin size={16} className="text-white/60 mr-2" />
                            {isEditing ? (
                              <input
                                type="text"
                                id="location"
                                name="location"
                                value={userData.location}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-background-dark border border-background-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-white"
                              />
                            ) : (
                              <p className="text-white">{userData.location}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="website" className="block text-sm font-medium text-white/80 mb-2">
                            Site web
                          </label>
                          <div className="flex items-center">
                            <Globe size={16} className="text-white/60 mr-2" />
                            {isEditing ? (
                              <input
                                type="url"
                                id="website"
                                name="website"
                                value={userData.website}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-background-dark border border-background-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-white"
                              />
                            ) : (
                              <p className="text-white">{userData.website}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="occupation" className="block text-sm font-medium text-white/80 mb-2">
                            Profession
                          </label>
                          <div className="flex items-center">
                            <Briefcase size={16} className="text-white/60 mr-2" />
                            {isEditing ? (
                              <input
                                type="text"
                                id="occupation"
                                name="occupation"
                                value={userData.occupation}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-background-dark border border-background-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-white"
                              />
                            ) : (
                              <p className="text-white">{userData.occupation}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="joinDate" className="block text-sm font-medium text-white/80 mb-2">
                            Membre depuis
                          </label>
                          <div className="flex items-center">
                            <Calendar size={16} className="text-white/60 mr-2" />
                            <p className="text-white">{userData.joinDate}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <label htmlFor="bio" className="block text-sm font-medium text-white/80 mb-2">
                          Biographie
                        </label>
                        {isEditing ? (
                          <textarea
                            id="bio"
                            name="bio"
                            value={userData.bio}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-3 py-2 bg-background-dark border border-background-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-white"
                          />
                        ) : (
                          <p className="text-white">{userData.bio}</p>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
                
                {/* Compétences et intérêts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Intérêts */}
                  <div className="bg-background-card rounded-xl border border-background-border overflow-hidden">
                    <div className="p-6 border-b border-background-border">
                      <h2 className="text-lg font-bold">Centres d&apos;intérêt</h2>
                      <p className="text-white/60 text-sm">Vos domaines d&apos;apprentissage préférés</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {userData.interests.map((interest, index) => (
                          <div 
                            key={index} 
                            className="px-3 py-1.5 bg-background-dark rounded-full text-white/80 text-sm"
                          >
                            {interest}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Compétences */}
                  <div className="bg-background-card rounded-xl border border-background-border overflow-hidden">
                    <div className="p-6 border-b border-background-border">
                      <h2 className="text-lg font-bold">Compétences</h2>
                      <p className="text-white/60 text-sm">Vos domaines d&apos;expertise</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {userData.skills.map((skill, index) => (
                          <div 
                            key={index} 
                            className="px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Langues */}
                <div className="bg-background-card rounded-xl border border-background-border overflow-hidden">
                  <div className="p-6 border-b border-background-border">
                    <h2 className="text-lg font-bold">Langues</h2>
                    <p className="text-white/60 text-sm">Vos compétences linguistiques</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-4">
                      {userData.languages.map((language, index) => (
                        <div key={index} className="flex items-center">
                          <Globe size={16} className="text-white/60 mr-2" />
                          <span className="text-white">{language}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Sécurité */}
            {activeTab === 'security' && (
              <div className="bg-background-card rounded-xl border border-background-border overflow-hidden">
                <div className="p-6 border-b border-background-border">
                  <h2 className="text-lg font-bold">Sécurité du compte</h2>
                  <p className="text-white/60 text-sm">Gérez vos paramètres de sécurité</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-md font-medium mb-4">Modifier votre mot de passe</h3>
                      <form className="space-y-4">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-white/80 mb-2">
                            Mot de passe actuel
                          </label>
                          <input
                            type="password"
                            id="currentPassword"
                            className="w-full px-3 py-2 bg-background-dark border border-background-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-white"
                            placeholder="••••••••"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-white/80 mb-2">
                            Nouveau mot de passe
                          </label>
                          <input
                            type="password"
                            id="newPassword"
                            className="w-full px-3 py-2 bg-background-dark border border-background-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-white"
                            placeholder="••••••••"
                          />
                          <p className="mt-1 text-xs text-white/60">
                            Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.
                          </p>
                        </div>
                        
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-2">
                            Confirmer le nouveau mot de passe
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            className="w-full px-3 py-2 bg-background-dark border border-background-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-white"
                            placeholder="••••••••"
                          />
                        </div>
                        
                        <button
                          type="submit"
                          className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                        >
                          Mettre à jour le mot de passe
                        </button>
                      </form>
                    </div>
                    
                    <div className="pt-6 border-t border-background-border">
                      <h3 className="text-md font-medium mb-4">Sessions actives</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-background-dark rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Cet appareil</p>
                              <p className="text-sm text-white/60">Paris, France • Chrome sur Windows</p>
                            </div>
                            <div className="text-green-400 text-sm">Actif</div>
                          </div>
                        </div>
                        
                        <button
                          className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors"
                        >
                          Déconnecter toutes les autres sessions
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Notifications */}
            {activeTab === 'notifications' && (
              <div className="bg-background-card rounded-xl border border-background-border overflow-hidden">
                <div className="p-6 border-b border-background-border">
                  <h2 className="text-lg font-bold">Préférences de notifications</h2>
                  <p className="text-white/60 text-sm">Gérez comment vous souhaitez être notifié</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-md font-medium">Notifications par email</h3>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Nouveaux messages</p>
                          <p className="text-sm text-white/60">Recevoir un email lorsque vous recevez un nouveau message</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-background-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Rappels de cours</p>
                          <p className="text-sm text-white/60">Recevoir un email avant vos sessions programmées</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-background-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Nouvelles formations</p>
                          <p className="text-sm text-white/60">Recevoir un email lorsque de nouvelles formations sont disponibles</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-background-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-background-border space-y-4">
                      <h3 className="text-md font-medium">Notifications sur la plateforme</h3>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Activité des formateurs</p>
                          <p className="text-sm text-white/60">Recevoir des notifications sur l&apos;activité des formateurs que vous suivez</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-background-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Mises à jour des cours</p>
                          <p className="text-sm text-white/60">Recevoir des notifications lorsque vos cours sont mis à jour</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-background-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                    
                    <button
                      className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                    >
                      Enregistrer les préférences
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
