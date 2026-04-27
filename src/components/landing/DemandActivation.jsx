import React from 'react';
import { motion } from 'framer-motion';
import DemandProblem from './DemandProblem';
import DemandSolution from './DemandSolutions';
import DemandProcess from './DemandProcess';
import DemandSegments from './DemandSegments';
import DemandBenefits from './DemandBenefits';
import DemandDifferential from './DemmandDifferential';

export default function DemandActivation() {
  return (
    <section id="demanda" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Decorative flow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-body font-medium text-primary tracking-wider uppercase">
              Diferencial estratégico
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-5">
            Operação com clientes{' '}
            <span className="text-primary">desde o primeiro dia</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Aplicamos uma estratégia de pré-lançamento que garante demanda real antes mesmo da inauguração do ponto. Os dados e métricas apresentamos na reunião.
          </p>
        </motion.div>

        <DemandProblem />
        <DemandSolution />
        <DemandProcess />
        <DemandBenefits />
        <DemandSegments />
        <DemandDifferential />
      </div>
    </section>
  );
}