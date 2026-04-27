import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) {
        setVisible(true);
        setTimeout(() => setShowTooltip(true), 600);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setTimeout(() => { setVisible(false); setDismissed(true); }, 200);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      style={{ animation: 'fadeSlideUp 0.5s cubic-bezier(0.22,1,0.36,1) both' }}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div
          className="relative bg-card border border-border rounded-2xl px-4 py-3 shadow-xl max-w-[220px] text-right"
          style={{ animation: 'fadeSlideUp 0.4s cubic-bezier(0.22,1,0.36,1) both' }}
        >
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -left-2 w-5 h-5 bg-muted border border-border rounded-full flex items-center justify-center hover:bg-destructive/20 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-2.5 h-2.5 text-muted-foreground" />
          </button>
          <p className="font-heading font-semibold text-xs text-foreground">Precisa de ajuda?</p>
          <p className="font-body text-xs text-muted-foreground mt-0.5">Fale com a gente agora</p>
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/5584991064591?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20parceria%20Mr.%20Charger."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-110 transition-all duration-300 animate-float"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </a>
    </div>
  );
}
