import React from 'react';
import { motion } from 'framer-motion';
import { Package, Wifi, Wrench } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Equipamento profissional',
    desc: 'Carregador projetado para uso comercial e operação contínua.',
  },
  {
    icon: Wifi,
    title: 'Operação monitorada remotamente',
    desc: 'Disponibilidade, controle e resposta rápida a qualquer ocorrência.',
  },
  {
    icon: Wrench,
    title: 'Manutenção completa',
    desc: 'Qualquer necessidade técnica é resolvida pela nossa equipe, sem custo para o parceiro.',
  },
];

export default function Structure() {
  return (
    <section id="estrutura" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
            Estrutura profissional
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            A vaga é sua. A operação é nossa.
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            O parceiro não se envolve com nenhuma etapa técnica nem operacional. A Mr. Charger assume toda a responsabilidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}