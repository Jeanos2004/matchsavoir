import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface CourseFAQProps {
  formation: {
    faq: FAQ[];
  };
}

export const CourseFAQ: React.FC<CourseFAQProps> = ({ formation }) => {
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([0]); // Premier élément ouvert par défaut

  const toggleFAQ = (index: number) => {
    setExpandedFAQs(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Questions fréquemment posées</h2>
      
      {/* Liste des FAQs */}
      <div className="space-y-4">
        {formation.faq.map((item, index) => (
          <div key={index} className="border border-background-border rounded-lg overflow-hidden">
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 bg-background-card hover:bg-background-border transition-colors text-left"
            >
              <span className="font-medium">{item.question}</span>
              <ChevronDown 
                size={18} 
                className={`transition-transform ${
                  expandedFAQs.includes(index) ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {expandedFAQs.includes(index) && (
              <div className="p-4 border-t border-background-border bg-background-card/30">
                <p className="text-white/80 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Contact pour plus de questions */}
      <div className="bg-background-card/50 rounded-lg p-6 border border-background-border">
        <h3 className="text-xl font-semibold mb-3">Vous avez d&apos;autres questions ?</h3>
        <p className="text-white/80 mb-4">
          N&apos;hésitez pas à contacter notre équipe ou directement le formateur pour obtenir plus d&apos;informations sur cette formation.
        </p>
        <button className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors">
          Nous contacter
        </button>
      </div>
    </div>
  );
};
