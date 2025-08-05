import React from 'react';
import Image from 'next/image';
import { Star, MessageCircle } from 'lucide-react';

interface Review {
  id: number;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  content: string;
}

interface CourseReviewsProps {
  formation: {
    rating: number;
    reviewCount: number;
    ratingDistribution: {
      value: number;
      count: number;
      percentage: number;
    }[];
    reviews: Review[];
  };
  showAllReviews: boolean;
  setShowAllReviews: (value: boolean) => void;
  displayedReviews: Review[];
}

export const CourseReviews: React.FC<CourseReviewsProps> = ({ 
  formation, 
  showAllReviews, 
  setShowAllReviews,
  displayedReviews
}) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Avis des apprenants</h2>
      
      {/* Résumé des avis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Note globale */}
        <div className="bg-background-card/50 rounded-lg p-6 flex flex-col items-center justify-center">
          <div className="text-5xl font-bold mb-2">{formation.rating}</div>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={20} 
                className={i < Math.floor(formation.rating) ? "text-yellow-400 fill-yellow-400" : "text-white/20"}
              />
            ))}
          </div>
          <p className="text-white/60">{formation.reviewCount} avis</p>
        </div>
        
        {/* Distribution des notes */}
        <div className="bg-background-card/50 rounded-lg p-6">
          <h3 className="font-medium mb-4">Distribution des notes</h3>
          <div className="space-y-3">
            {formation.ratingDistribution.map((dist) => (
              <div key={dist.value} className="flex items-center">
                <div className="flex items-center w-16">
                  <span>{dist.value}</span>
                  <Star size={14} className="ml-1 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="flex-grow mx-3 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${dist.percentage}%` }}
                  ></div>
                </div>
                <div className="w-12 text-right text-white/60 text-sm">
                  {dist.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Liste des avis */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold flex items-center">
          <MessageCircle size={20} className="mr-2" />
          Commentaires des apprenants
        </h3>
        
        {displayedReviews.length > 0 ? (
          <div className="space-y-6">
            {displayedReviews.map((review) => (
              <div key={review.id} className="bg-background-card/30 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image 
                      src={review.userAvatar} 
                      alt={review.userName} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{review.userName}</h4>
                    <div className="flex items-center mt-1">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"}
                          />
                        ))}
                      </div>
                      <span className="text-white/60 text-sm">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-white/80 leading-relaxed">
                  {review.content}
                </p>
              </div>
            ))}
            
            {formation.reviews.length > 2 && (
              <div className="flex justify-center">
                <button 
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="px-6 py-2 bg-background-card hover:bg-background-border text-white/80 hover:text-white rounded-lg transition-colors"
                >
                  {showAllReviews ? 'Voir moins d\'avis' : `Voir tous les avis (${formation.reviews.length})`}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8 text-white/60">
            Aucun avis pour le moment. Soyez le premier à donner votre avis !
          </div>
        )}
      </div>
    </div>
  );
};
