import React from 'react';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center shadow-sm shadow-primary/30">
            <Zap className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="font-heading font-semibold text-sm text-foreground">Mr. Charger</span>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mr. Charger. Todos os direitos reservados.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 text-xs font-body">
          <a
            href="https://wa.me/5584991064591?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20parceria%20Mr.%20Charger."
            className="text-primary hover:underline"
          >
            (84) 99106-4591 — Rubens
          </a>
          <span className="text-border hidden sm:inline">·</span>
          <a
            href="https://wa.me/5581991945763?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20parceria%20Mr.%20Charger."
            className="text-primary hover:underline"
          >
            (81) 99194-5763 — Mateus
          </a>
        </div>
      </div>
    </footer>
  );
}
