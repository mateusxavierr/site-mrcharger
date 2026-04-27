import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react';

const SPLIT_IMAGE = `${import.meta.env.BASE_URL}images/intelbras-carregador.png`;

const problems = [
  {
    icon: Clock,
    text: 'Pontos de recarga podem levar meses para gerar uso consistente',
  },
  {
    icon: AlertTriangle,
    text: 'Incerteza de demanda é a principal barreira para parceiros',
  },
  {
    icon: TrendingDown,
    text: 'Sem estratégia de ativação, o retorno demora — e a percepção de valor cai',
  },
];

export default function DemandProblem() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative rounded-2xl overflow-hidden bg-[#f5f5f5] flex items-center justify-center" style={{minHeight: '420px'}}>
          <img
            src={SPLIT_IMAGE}
            alt="Equipamento Intelbras EVE 0220B utilizado pela Mr. Charger"
            className="w-full h-full object-contain p-8"
            style={{maxHeight: '420px'}}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <span className="font-body text-xs text-muted-foreground bg-background/80 backdrop-blur px-3 py-1 rounded-full">
              Intelbras EVE 0220B
            </span>
            <span className="font-body text-xs text-primary bg-background/80 backdrop-blur px-3 py-1 rounded-full">
              Equipamento utilizado pela Mr. Charger
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="font-body text-xs tracking-widest uppercase text-destructive mb-4 block">
          O Problema
        </span>
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          Infraestrutura parada{' '}
          <span className="text-muted-foreground">não gera valor</span>
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed mb-8">
          A maioria dos pontos de recarga começa sem nenhuma estratégia de captação.
          O resultado: vagas equipadas, mas sem uso — e parceiros frustrados com retorno lento.
        </p>

        <div className="space-y-4">
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card border border-border rounded-xl p-4"
            >
              <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <p.icon className="w-4 h-4 text-destructive" />
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed pt-1.5">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}