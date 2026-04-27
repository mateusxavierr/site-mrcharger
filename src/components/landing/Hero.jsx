import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HERO_IMAGE = 'https://media.base44.com/images/public/69eaaeab98cc2b020bb71ba4/d0352aaff_generated_efddf76a.png';

const highlights = [
  'Análise inicial sem compromisso',
  'Implantação por nossa conta',
  'Modelo comercial negociável',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Estacionamento moderno com ponto de recarga elétrica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Animated energy line */}
      <div className="absolute bottom-0 left-0 w-full h-px overflow-hidden">
        <div className="h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-energy-flow" style={{ width: '40%' }} />
      </div>

      {/* Particle dots (decorative, CSS-only, lightweight) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `floatY ${2.5 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 lg:pt-32 lg:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 animate-shimmer border border-primary/25 rounded-full px-4 py-1.5 mb-8">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-xs font-body font-medium text-primary tracking-wider uppercase">
                Parceria para recarga veicular
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
          >
            Recarga elétrica no seu estabelecimento,{' '}
            <span className="text-primary relative">
              sem custo de instalação.
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/40 rounded-full" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
          >
            A Mr. Charger implanta, opera e mantém o ponto de recarga na sua vaga.
            Você ganha modernidade, receita e diferencial — sem investir nada.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground font-heading font-semibold rounded-full px-8 text-base hover:bg-primary/90 group animate-glow-pulse shadow-lg shadow-primary/20"
            >
              <a href="#contato">
                Solicitar análise gratuita do espaço
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground font-heading rounded-full px-8 text-base hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <a href="https://wa.me/5584991064591?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20parceria%20Mr.%20Charger.">
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-body text-muted-foreground">{h}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
