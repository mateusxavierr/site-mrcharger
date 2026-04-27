import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-card border border-primary/25 rounded-3xl p-12 lg:p-16 text-center overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4 pointer-events-none" />
          {/* Glow orbs */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/15 rounded-2xl mb-6 mx-auto">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
              Próximo passo
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Vamos conversar sobre o seu espaço
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
              Análise inicial sem custo e sem compromisso. Em 15 minutos você entende o potencial da sua vaga e como gerar receita com ela.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground font-heading font-semibold rounded-full px-8 hover:bg-primary/90 group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300"
              >
                <a href="#contato">
                  Solicitar análise gratuita
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground font-heading rounded-full px-8 hover:border-primary hover:text-primary transition-colors duration-300"
              >
                <a
                  href="https://wa.me/5584991064591?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20parceria%20Mr.%20Charger."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-4 h-4 text-primary" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
