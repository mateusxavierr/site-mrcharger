import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Timer, Star, DollarSign } from 'lucide-react';

const benefits = [
  { icon: ShieldCheck, text: 'Redução do risco de baixa utilização' },
  { icon: Users, text: 'Aumento de fluxo qualificado ao local' },
  { icon: Timer, text: 'Maior tempo de permanência dos clientes' },
  { icon: Star, text: 'Valorização do estabelecimento' },
  { icon: DollarSign, text: 'Geração de receita desde o início' },
];

export default function DemandBenefits() {
  return (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
          Valor real
        </span>
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
          Benefícios para o parceiro
        </h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="font-body text-sm text-foreground font-medium leading-snug">
              {b.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}