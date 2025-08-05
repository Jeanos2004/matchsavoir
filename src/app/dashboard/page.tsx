"use client"

import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  ChevronRight, 
  Clock, 
  MessageSquare, 
  Settings, 
  Users,
  Bell,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Données fictives pour le tableau de bord
  const upcomingClasses = [
    { id: 1, title: "Introduction au Machine Learning", formateur: "Marie Dupont", date: "Aujourd'hui, 15:00", duration: "1h30", image: "/images/course-ml.jpg" },
    { id: 2, title: "Développement Web Avancé", formateur: "Thomas Martin", date: "Demain, 10:00", duration: "2h", image: "/images/course-webdev.jpg" },
    { id: 3, title: "Design UX/UI Fondamentaux", formateur: "Sophie Legrand", date: "18 Avril, 14:00", duration: "1h", image: "/images/course-ux.jpg" },
  ];
  
  const recentMessages = [
    { id: 1, sender: "Marie Dupont", content: "Bonjour, j'ai partagé les ressources supplémentaires pour le cours de ML.", time: "Il y a 2h", unread: true, avatar: "/images/avatar-1.jpg" },
    { id: 2, sender: "Support MatchSavoir", content: "Votre prochaine session est confirmée pour demain à 10h.", time: "Il y a 5h", unread: false, avatar: "/images/avatar-support.jpg" },
  ];
  
  const progressCourses = [
    { id: 1, title: "Python pour Data Science", progress: 75, image: "/images/course-python.jpg" },
    { id: 2, title: "JavaScript Moderne", progress: 45, image: "/images/course-js.jpg" },
    { id: 3, title: "Design Thinking", progress: 30, image: "/images/course-design.jpg" },
  ];
  
  const notifications = [
    { id: 1, content: "Nouveau message de Marie Dupont", time: "Il y a 2h", type: "message" },
    { id: 2, content: "Rappel: Cours de Python demain", time: "Il y a 3h", type: "reminder" },
    { id: 3, content: "Nouvelle ressource disponible: Guide JavaScript", time: "Il y a 1j", type: "resource" },
  ];

  return (
    <div className="min-h-screen bg-background-dark text-white pb-20">
      {/* Header avec titre de la page */}
      <div className="bg-background-card/30 border-b border-background-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Tableau de bord</h1>
              <p className="text-white/60 mt-1">Bienvenue sur votre espace personnel</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <button className="p-2 rounded-full bg-background-card hover:bg-background-border transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
              </button>
              <button className="p-2 rounded-full bg-background-card hover:bg-background-border transition-colors">
                <MessageSquare size={20} />
              </button>
              <button className="p-2 rounded-full bg-background-card hover:bg-background-border transition-colors">
                <Settings size={20} />
              </button>
              <Link href="/profile" className="flex items-center space-x-2 p-1 rounded-full bg-background-card hover:bg-background-border transition-colors">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image 
                    src="/images/avatar-placeholder.jpg" 
                    alt="Avatar" 
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        {/* Tabs de navigation */}
        <div className="mb-8 border-b border-background-border">
          <div className="flex overflow-x-auto hide-scrollbar space-x-6">
            <TabButton 
              active={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')}
              label="Vue d'ensemble"
            />
            <TabButton 
              active={activeTab === 'courses'} 
              onClick={() => setActiveTab('courses')}
              label="Mes formations"
            />
            <TabButton 
              active={activeTab === 'calendar'} 
              onClick={() => setActiveTab('calendar')}
              label="Calendrier"
            />
            <TabButton 
              active={activeTab === 'messages'} 
              onClick={() => setActiveTab('messages')}
              label="Messages"
            />
            <TabButton 
              active={activeTab === 'profile'} 
              onClick={() => setActiveTab('profile')}
              label="Profil"
            />
          </div>
        </div>
        
        {/* Vue d'ensemble */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard 
                title="Formations en cours" 
                value="3" 
                icon={<BookOpen className="text-primary" />} 
                change="+1 cette semaine"
                positive
              />
              <StatCard 
                title="Heures d'apprentissage" 
                value="24.5" 
                icon={<Clock className="text-blue-400" />} 
                change="+2.5 cette semaine"
                positive
              />
              <StatCard 
                title="Formateurs suivis" 
                value="5" 
                icon={<Users className="text-purple-400" />} 
                change="Inchangé"
              />
              <StatCard 
                title="Certifications" 
                value="2" 
                icon={<CheckCircle2 className="text-green-400" />} 
                change="+1 ce mois"
                positive
              />
            </div>
            
            {/* Prochaines sessions */}
            <div className="bg-background-card rounded-xl border border-background-border overflow-hidden">
              <div className="p-4 md:p-6 border-b border-background-border flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold">Prochaines sessions</h2>
                  <p className="text-white/60 text-sm">Vos cours programmés</p>
                </div>
                <Link href="/dashboard/calendar" className="text-primary hover:text-primary-light text-sm flex items-center">
                  Voir tout <ChevronRight size={16} />
                </Link>
              </div>
              <div className="divide-y divide-background-border">
                {upcomingClasses.map(course => (
                  <div key={course.id} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center">
                    <div className="relative w-full md:w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 mb-4 md:mb-0">
                      <Image 
                        src={course.image} 
                        alt={course.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:ml-4 flex-grow">
                      <h3 className="font-medium">{course.title}</h3>
                      <p className="text-white/60 text-sm">Par {course.formateur}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4 flex flex-col items-start md:items-end">
                      <div className="flex items-center text-white/80">
                        <Calendar size={14} className="mr-1" />
                        <span className="text-sm">{course.date}</span>
                      </div>
                      <div className="flex items-center text-white/60 mt-1">
                        <Clock size={14} className="mr-1" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 md:ml-6 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm">
                      Rejoindre
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Ligne de 2 colonnes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Progression des cours */}
              <div className="bg-background-card rounded-xl border border-background-border overflow-hidden">
                <div className="p-4 md:p-6 border-b border-background-border">
                  <h2 className="text-lg font-bold">Progression</h2>
                  <p className="text-white/60 text-sm">Vos formations en cours</p>
                </div>
                <div className="divide-y divide-background-border">
                  {progressCourses.map(course => (
                    <div key={course.id} className="p-4 md:p-6 flex items-center">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                        <Image 
                          src={course.image} 
                          alt={course.title} 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3 flex-grow">
                        <h3 className="font-medium text-sm">{course.title}</h3>
                        <div className="mt-2 w-full bg-background-border rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4 text-white/80 font-medium">
                        {course.progress}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Messages récents */}
              <div className="bg-background-card rounded-xl border border-background-border overflow-hidden">
                <div className="p-4 md:p-6 border-b border-background-border flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-bold">Messages récents</h2>
                    <p className="text-white/60 text-sm">Vos dernières conversations</p>
                  </div>
                  <Link href="/dashboard/messages" className="text-primary hover:text-primary-light text-sm flex items-center">
                    Voir tout <ChevronRight size={16} />
                  </Link>
                </div>
                <div className="divide-y divide-background-border">
                  {recentMessages.map(message => (
                    <div key={message.id} className="p-4 md:p-6 flex items-start">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image 
                          src={message.avatar} 
                          alt={message.sender} 
                          fill
                          className="object-cover"
                        />
                        {message.unread && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-background-card"></div>
                        )}
                      </div>
                      <div className="ml-3 flex-grow">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{message.sender}</h3>
                          <span className="text-white/60 text-xs">{message.time}</span>
                        </div>
                        <p className="text-white/80 text-sm mt-1 line-clamp-2">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {recentMessages.length === 0 && (
                    <div className="p-6 text-center text-white/60">
                      Aucun message récent
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Notifications */}
            <div className="bg-background-card rounded-xl border border-background-border overflow-hidden">
              <div className="p-4 md:p-6 border-b border-background-border flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold">Notifications</h2>
                  <p className="text-white/60 text-sm">Vos dernières alertes</p>
                </div>
                <button className="text-white/60 hover:text-white text-sm">
                  Tout marquer comme lu
                </button>
              </div>
              <div className="divide-y divide-background-border">
                {notifications.map(notification => (
                  <div key={notification.id} className="p-4 md:p-6 flex items-start">
                    <div className={`p-2 rounded-full ${
                      notification.type === 'message' ? 'bg-primary/10 text-primary' :
                      notification.type === 'reminder' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-green-500/10 text-green-500'
                    }`}>
                      {notification.type === 'message' ? <MessageSquare size={18} /> :
                       notification.type === 'reminder' ? <Bell size={18} /> :
                       <BookOpen size={18} />}
                    </div>
                    <div className="ml-3 flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-sm">{notification.content}</h3>
                        <span className="text-white/60 text-xs">{notification.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Autres onglets - à implémenter */}
        {activeTab !== 'overview' && (
          <div className="bg-background-card rounded-xl border border-background-border p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Contenu en développement</h2>
            <p className="text-white/60 mb-6">Cette section sera bientôt disponible.</p>
            <button 
              onClick={() => setActiveTab('overview')}
              className="px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors"
            >
              Retour à la vue d&apos;ensemble
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Composant pour les boutons de navigation
const TabButton = ({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) => {
  return (
    <button
      onClick={onClick}
      className={`pb-3 px-1 font-medium whitespace-nowrap border-b-2 transition-colors ${
        active 
          ? 'border-primary text-primary' 
          : 'border-transparent text-white/60 hover:text-white hover:border-white/20'
      }`}
    >
      {label}
    </button>
  );
};

// Composant pour les cartes de statistiques
const StatCard = ({ 
  title, 
  value, 
  icon, 
  change, 
  positive 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  change: string;
  positive?: boolean;
}) => {
  return (
    <div className="bg-background-card rounded-xl border border-background-border p-4 md:p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-white/60 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-3 rounded-full bg-background-dark">
          {icon}
        </div>
      </div>
      <div className={`mt-4 text-xs flex items-center ${
        positive ? 'text-green-400' : change === 'Inchangé' ? 'text-white/60' : 'text-red-400'
      }`}>
        {positive && <ChevronRight size={14} className="rotate-90 mr-1" />}
        {positive === false && <ChevronRight size={14} className="-rotate-90 mr-1" />}
        <span>{change}</span>
      </div>
    </div>
  );
};
