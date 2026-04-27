import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Sparkles, Wrench } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Nova fonte de receita',
    desc: 'Modelo comercial flexível com geração de receita recorrente para o parceiro, sem nenhum investimento inicial.',
  },
  {
    icon: Sparkles,
    title: 'Mais tempo no seu estabelecimento',
    desc: 'O cliente que recarrega fica mais tempo e consome mais. Retenção natural pelo tempo de recarga.',
  },
  {
    icon: Shield,
    title: 'Diferencial competitivo real',
    desc: 'Infraestrutura moderna que pouquíssimos concorrentes oferecem hoje. Você sai na frente.',
  },
  {
    icon: Wrench,
    title: 'Zero risco operacional',
    desc: 'Instalação, operação e manutenção 100% por conta da Mr. Charger. Você não se envolve com nada.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
            Vantagens para o parceiro
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            O que o seu estabelecimento ganha
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Zero investimento. Zero preocupação técnica. Resultado desde o primeiro dia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/8 overflow-hidden"
            >
              {/* Top border glow on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-500" />
              {/* Bottom-left corner accent */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-700" />

              <div className="relative">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {b.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
