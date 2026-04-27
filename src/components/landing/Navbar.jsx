import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Vantagens', href: '#beneficios' },
  { label: 'Como funciona', href: '#demanda' },
  { label: 'Modelos', href: '#modelos' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-md shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary/30">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-lg text-foreground">Mr. Charger</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            className="bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 rounded-full px-6 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-shadow duration-300"
          >
            <a href="https://wa.me/5584991064591?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20parceria%20Mr.%20Charger.">
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-background/98 backdrop-blur-xl border-b border-border px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-body text-muted-foreground hover:text-primary py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="w-full bg-primary text-primary-foreground font-heading rounded-full shadow-md shadow-primary/20">
            <a href="https://wa.me/5584991064591?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20parceria%20Mr.%20Charger.">
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
