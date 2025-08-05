import React from 'react';
import { Info, BookOpen, User, Star, HelpCircle } from 'lucide-react';

interface CourseTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const CourseTabs: React.FC<CourseTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-background-border mb-8 sticky top-20 md:top-24 bg-background-dark z-10">
      <div className="flex overflow-x-auto hide-scrollbar space-x-8">
        <TabButton 
          active={activeTab === 'overview'} 
          onClick={() => setActiveTab('overview')}
          label="Aperçu"
          icon={<Info size={16} />}
        />
        <TabButton 
          active={activeTab === 'program'} 
          onClick={() => setActiveTab('program')}
          label="Programme"
          icon={<BookOpen size={16} />}
        />
        <TabButton 
          active={activeTab === 'instructor'} 
          onClick={() => setActiveTab('instructor')}
          label="Formateur"
          icon={<User size={16} />}
        />
        <TabButton 
          active={activeTab === 'reviews'} 
          onClick={() => setActiveTab('reviews')}
          label="Avis"
          icon={<Star size={16} />}
        />
        <TabButton 
          active={activeTab === 'faq'} 
          onClick={() => setActiveTab('faq')}
          label="FAQ"
          icon={<HelpCircle size={16} />}
        />
      </div>
    </div>
  );
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}

export const TabButton: React.FC<TabButtonProps> = ({ active, onClick, label, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center py-4 px-1 border-b-2 transition-colors whitespace-nowrap ${
        active 
          ? 'border-primary text-primary' 
          : 'border-transparent text-white/70 hover:text-white'
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};
