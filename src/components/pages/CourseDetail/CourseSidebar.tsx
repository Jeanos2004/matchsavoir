import React from 'react';
import { CheckCircle, Share2, Heart } from 'lucide-react';

interface CourseSidebarProps {
  formation: {
    price: number;
    originalPrice?: number;
    discount?: number;
    features: string[];
  };
  isFavorite: boolean;
  setIsFavorite: (value: boolean) => void;
}

export const CourseSidebar: React.FC<CourseSidebarProps> = ({ 
  formation, 
  isFavorite, 
  setIsFavorite 
}) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-background-card rounded-xl border border-background-border overflow-hidden sticky top-32 md:top-36">
        {/* Prix et inscription */}
        <div className="p-6 border-b border-background-border">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold">{formation.price}€</span>
            {formation.originalPrice && (
              <>
                <span className="text-white/60 line-through ml-3">{formation.originalPrice}€</span>
                <span className="ml-2 px-2 py-1 bg-primary/20 text-primary text-xs rounded-md">
                  -{formation.discount}%
                </span>
              </>
            )}
          </div>
          
          <button className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors font-medium mb-3">
            S&apos;inscrire maintenant
          </button>
          
          <div className="flex justify-between">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`flex items-center py-2 px-3 rounded-lg transition-colors ${
                isFavorite 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-background-border hover:bg-white/10 text-white/80 hover:text-white'
              }`}
            >
              <Heart size={18} className={isFavorite ? "fill-primary" : ""} />
              <span className="ml-2 text-sm">Favoris</span>
            </button>
            
            <button className="flex items-center py-2 px-3 bg-background-border hover:bg-white/10 text-white/80 hover:text-white rounded-lg transition-colors">
              <Share2 size={18} />
              <span className="ml-2 text-sm">Partager</span>
            </button>
          </div>
        </div>
        
        {/* Ce que vous obtiendrez */}
        <div className="p-6">
          <h3 className="font-semibold mb-4">Ce que vous obtiendrez</h3>
          <ul className="space-y-3">
            {formation.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={18} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
