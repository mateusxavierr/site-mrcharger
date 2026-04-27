import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, BarChart3 } from 'lucide-react';

const DEMAND_IMAGE = 'https://media.base44.com/images/public/69eaaeab98cc2b020bb71ba4/3cbc6c1d4_generated_4b63d7ae.png';

const solutions = [
  {
    icon: Rocket,
    title: 'Campanha de pré-lançamento',
    desc: 'Captamos interesse antes do ponto estar em operação.',
  },
  {
    icon: Users,
    title: 'Base de clientes formada',
    desc: 'Usuários prontos para recarregar desde o primeiro dia.',
  },
  {
    icon: BarChart3,
    title: 'Validação antes da inauguração',
    desc: 'Confirmamos a demanda real antes do início da operação.',
  },
];

export default function DemandSolution() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="order-2 lg:order-1"
      >
        <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
          Como fazemos
        </span>
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          Resultado{' '}
          <span className="text-primary">antes da inauguração</span>
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed mb-8">
          Enquanto o ponto é preparado, já trabalhamos a captação. Os dados completos — alcance, engajamento e conversões — apresentamos na reunião.
        </p>

        <div className="space-y-4">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex items-start gap-4 bg-primary/5 border border-primary/10 rounded-xl p-4"
            >
              <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center flex-shrink-0">
                <s.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{s.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="order-1 lg:order-2"
      >
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <img
            src={DEMAND_IMAGE}
            alt="Visualização de demanda ativa com fluxo de clientes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}