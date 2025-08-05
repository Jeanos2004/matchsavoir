"use client"

import React, { useState } from 'react';

// Importation des composants modulaires
import { CourseHeader } from '@/components/pages/CourseDetail/CourseHeader';
import { CourseTabs } from '@/components/pages/CourseDetail/CourseTabs';
import { CourseSidebar } from '@/components/pages/CourseDetail/CourseSidebar';
import { CourseOverview } from '@/components/pages/CourseDetail/CourseOverview';
import { CourseProgram } from '@/components/pages/CourseDetail/CourseProgram';
import { CourseInstructor } from '@/components/pages/CourseDetail/CourseInstructor';
import { CourseReviews } from '@/components/pages/CourseDetail/CourseReviews';
import { CourseFAQ } from '@/components/pages/CourseDetail/CourseFAQ';

// Simuler la récupération des données de la formation
const getFormation = (id: string) => {
  // Dans une application réelle, ces données viendraient d'une API
  return {
    id,
    title: "Formation Python Avancé",
    instructor: "Dr. Mamadou Diallo",
    instructorId: "1",
    instructorAvatar: "/images/instructor-1.svg",
    instructorTitle: "Expert en Développement Web & Data Science",
    instructorBio: "Docteur en informatique avec plus de 10 ans d'expérience dans l'enseignement et le développement logiciel. Spécialisé en développement web moderne et en science des données.",
    instructorRating: 4.9,
    instructorReviewCount: 128,
    instructorStudentCount: 1240,
    instructorCourseCount: 8,
    instructorExpertise: ["JavaScript", "React", "Node.js", "Python", "Machine Learning", "Data Science", "TypeScript", "MongoDB"],
    instructorEducation: [
      { degree: "Doctorat en Informatique", institution: "Université Paris-Saclay", year: "2015" },
      { degree: "Master en Intelligence Artificielle", institution: "École Polytechnique", year: "2012" },
    ],
    instructorExperience: [
      { position: "Lead Developer", company: "TechInnovate", period: "2018 - Présent" },
      { position: "Data Scientist", company: "DataCorp", period: "2015 - 2018" },
      { position: "Enseignant-Chercheur", company: "Université Paris-Saclay", period: "2012 - 2015" },
    ],
    coverImage: "/images/course-python.jpg",
    rating: 4.8,
    reviewCount: 124,
    studentCount: 245,
    lessonCount: 42,
    duration: "30 heures",
    level: "Intermédiaire",
    price: 1000,
    discount: 20, // pourcentage de réduction
    originalPrice: 1250,
    format: "En ligne",
    language: "Français",
    nextSession: "21 juin 2025",
    description: "Maîtrisez Python et ses bibliothèques avancées pour l'analyse de données, le machine learning et le développement d'applications. Cette formation complète vous permettra de passer au niveau supérieur en programmation Python et d'appliquer ces compétences à des projets concrets.",
    objectives: [
      "Maîtriser les fonctionnalités avancées de Python (générateurs, décorateurs, métaclasses)",
      "Développer des applications robustes avec les meilleures pratiques",
      "Utiliser efficacement NumPy, Pandas et Matplotlib pour l'analyse de données",
      "Créer des modèles de machine learning avec scikit-learn et TensorFlow",
      "Construire des applications web avec Django ou Flask",
      "Optimiser les performances de vos programmes Python"
    ],
    prerequisites: "Connaissances de base en programmation Python. Vous devez être à l'aise avec les concepts fondamentaux comme les variables, les fonctions, les boucles et les structures de données de base.",
    targetAudience: "Développeurs, data scientists, ingénieurs et professionnels de l'IT souhaitant approfondir leurs compétences en Python et ses applications dans l'analyse de données et le machine learning.",
    methodology: "Cette formation combine théorie et pratique avec de nombreux exercices, projets concrets et études de cas. Vous aurez accès à un environnement de développement cloud pour réaliser les travaux pratiques sans configuration complexe.",
    resources: [
      "Accès à vie au contenu du cours et aux mises à jour",
      "30+ heures de vidéos HD",
      "100+ exercices pratiques et projets",
      "Code source complet de tous les exemples",
      "Certificat de réussite",
      "Accès à la communauté d'entraide"
    ],
    videoPreview: "/videos/course-preview.mp4",
    modules: [
      {
        id: 1,
        title: "Fondamentaux avancés de Python",
        duration: "6 heures",
        lessons: [
          { id: 101, title: "Programmation orientée objet avancée", duration: "45 min", preview: true },
          { id: 102, title: "Générateurs et itérateurs", duration: "30 min" },
          { id: 103, title: "Décorateurs et métaclasses", duration: "45 min" },
          { id: 104, title: "Gestion avancée des exceptions", duration: "30 min" },
          { id: 105, title: "Modules et packages", duration: "45 min" },
          { id: 106, title: "Tests unitaires et TDD", duration: "45 min" },
          { id: 107, title: "Projet: Création d'une bibliothèque Python", duration: "1h 30min" }
        ]
      },
      {
        id: 2,
        title: "Analyse de données avec Python",
        duration: "8 heures",
        lessons: [
          { id: 201, title: "Introduction à NumPy", duration: "45 min", preview: true },
          { id: 202, title: "Manipulation de données avec Pandas", duration: "1h" },
          { id: 203, title: "Visualisation avec Matplotlib et Seaborn", duration: "1h" },
          { id: 204, title: "Analyse statistique avec SciPy", duration: "45 min" },
          { id: 205, title: "Nettoyage et préparation des données", duration: "1h" },
          { id: 206, title: "Analyse exploratoire de données", duration: "1h" },
          { id: 207, title: "Projet: Analyse d'un jeu de données réel", duration: "2h 30min" }
        ]
      },
      {
        id: 3,
        title: "Machine Learning avec Python",
        duration: "10 heures",
        lessons: [
          { id: 301, title: "Introduction au Machine Learning", duration: "45 min" },
          { id: 302, title: "Scikit-learn: Régression et classification", duration: "1h 15min" },
          { id: 303, title: "Évaluation et validation des modèles", duration: "45 min" },
          { id: 304, title: "Apprentissage non supervisé", duration: "1h" },
          { id: 305, title: "Introduction à TensorFlow et Keras", duration: "1h 15min" },
          { id: 306, title: "Réseaux de neurones et Deep Learning", duration: "1h 30min" },
          { id: 307, title: "Projet: Système de recommandation", duration: "3h 30min" }
        ]
      },
      {
        id: 4,
        title: "Développement web avec Python",
        duration: "6 heures",
        lessons: [
          { id: 401, title: "Introduction à Flask", duration: "45 min" },
          { id: 402, title: "Création d'API REST", duration: "1h" },
          { id: 403, title: "Introduction à Django", duration: "1h" },
          { id: 404, title: "Modèles, vues et templates", duration: "1h" },
          { id: 405, title: "Authentification et autorisation", duration: "45 min" },
          { id: 406, title: "Projet: Application web avec Django", duration: "1h 30min" }
        ]
      }
    ],
    totalModules: 4,
    totalLessons: 27,
    totalDuration: "30 heures",
    certification: "À la fin de cette formation, vous passerez une évaluation finale combinant QCM et projet pratique. Un certificat de réussite vous sera délivré si vous obtenez un score d'au moins 70%. Ce certificat pourra être partagé sur votre profil LinkedIn et autres réseaux professionnels.",
    features: [
      "Accès à vie au contenu",
      "Projets pratiques corrigés",
      "Certificat de réussite",
      "Support technique",
      "Communauté d'entraide",
      "Garantie satisfait ou remboursé de 30 jours"
    ],
    ratingDistribution: [
      { value: 5, count: 89, percentage: 72 },
      { value: 4, count: 25, percentage: 20 },
      { value: 3, count: 7, percentage: 6 },
      { value: 2, count: 2, percentage: 1 },
      { value: 1, count: 1, percentage: 1 }
    ],
    reviews: [
      {
        id: 1,
        userName: "Sophie Martin",
        userAvatar: "/images/avatar-1.jpg",
        rating: 5,
        date: "15 mars 2025",
        content: "Formation exceptionnelle ! Le contenu est très bien structuré et les explications sont claires. J'ai particulièrement apprécié les projets pratiques qui m'ont permis d'appliquer immédiatement les concepts appris. Je recommande vivement."
      },
      {
        id: 2,
        userName: "Thomas Dubois",
        userAvatar: "/images/avatar-2.jpg",
        rating: 5,
        date: "2 mars 2025",
        content: "Dr. Diallo est un excellent formateur qui sait rendre des concepts complexes accessibles. La section sur le machine learning était particulièrement bien conçue. J'utilise déjà ce que j'ai appris dans mon travail quotidien."
      },
      {
        id: 3,
        userName: "Julie Leroy",
        userAvatar: "/images/avatar-3.jpg",
        rating: 4,
        date: "18 février 2025",
        content: "Contenu très riche et bien expliqué. J'aurais aimé plus de temps sur la partie machine learning, mais dans l'ensemble c'est une excellente formation qui m'a permis de progresser rapidement."
      }
    ],
    faq: [
      {
        question: "Cette formation est-elle adaptée aux débutants en Python ?",
        answer: "Cette formation nécessite des connaissances de base en Python. Si vous êtes débutant, nous recommandons de suivre d'abord notre cours 'Introduction à Python' pour acquérir les fondamentaux avant de vous lancer dans cette formation avancée."
      },
      {
        question: "Quel matériel est nécessaire pour suivre cette formation ?",
        answer: "Vous aurez besoin d'un ordinateur avec une connexion Internet stable. Tous les environnements de développement seront disponibles via notre plateforme cloud, donc vous n'aurez pas besoin d'installer de logiciels spécifiques. Cependant, si vous préférez travailler en local, nous vous fournirons des instructions d'installation."
      },
      {
        question: "Y a-t-il un support disponible si je rencontre des difficultés ?",
        answer: "Oui, vous aurez accès à notre forum communautaire où vous pourrez poser des questions et interagir avec d'autres apprenants et formateurs. Pour les participants à la formule Premium, un support individuel par email est également disponible avec un temps de réponse garanti de 24h."
      },
      {
        question: "Combien de temps ai-je accès au contenu de la formation ?",
        answer: "Vous bénéficiez d'un accès à vie au contenu de la formation, y compris toutes les futures mises à jour. Vous pouvez donc apprendre à votre rythme et revenir consulter les ressources quand vous en avez besoin."
      },
      {
        question: "Cette formation est-elle certifiante ?",
        answer: "Oui, à la fin de la formation, vous passerez une évaluation finale. Si vous obtenez un score d'au moins 70%, vous recevrez un certificat de réussite que vous pourrez partager sur votre profil LinkedIn et autres réseaux professionnels."
      }
    ]
  };
};

// Définir le type correct pour les props de page dans Next.js 15.2.4
type PageProps = {
  params: Promise<{ id: string }>
};

export default function FormationDetailPage({ params }: PageProps) {
  // Utiliser React.use pour unwrapper les params qui sont maintenant une Promise
  const unwrappedParams = React.use(params);
  const formation = getFormation(unwrappedParams.id);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const displayedReviews = showAllReviews ? formation.reviews : formation.reviews.slice(0, 2);
  
  // Fonction pour ouvrir la modal vidéo
  const handlePlayVideo = () => {
    // La logique pour afficher la vidéo sera implémentée ultérieurement
    console.log('Lecture de la vidéo');
  };

  return (
    <div className="min-h-screen bg-background-dark text-white pb-20">
      {/* En-tête avec image de couverture */}
      <CourseHeader formation={formation} />
      
      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal - 2/3 de la largeur */}
          <div className="lg:col-span-2">
            {/* Tabs de navigation */}
            <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {/* Contenu des onglets */}
            {activeTab === 'overview' && (
              <CourseOverview formation={formation} onPlayVideo={handlePlayVideo} />
            )}
            
            {activeTab === 'program' && (
              <CourseProgram formation={formation} />
            )}
            
            {activeTab === 'instructor' && (
              <CourseInstructor formation={formation} />
            )}
            
            {activeTab === 'reviews' && (
              <CourseReviews 
                formation={formation} 
                showAllReviews={showAllReviews} 
                setShowAllReviews={setShowAllReviews}
                displayedReviews={displayedReviews}
              />
            )}
            
            {activeTab === 'faq' && (
              <CourseFAQ formation={formation} />
            )}
          </div>
          
          {/* Sidebar - 1/3 de la largeur */}
          <CourseSidebar 
            formation={formation} 
            isFavorite={isFavorite} 
            setIsFavorite={setIsFavorite} 
          />
        </div>
      </div>
    </div>
  );
}
