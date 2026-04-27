import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ShoppingCart, Dumbbell, UtensilsCrossed, Hotel, Building2 } from 'lucide-react';

const segments = [
  {
    icon: ShoppingBag,
    name: 'Shoppings',
    stat: 'Permanência',
    statLabel: 'Clientes ficam mais tempo e consomem mais.',
    benefit: 'Clientes que recarregam permanecem mais tempo e consomem mais no estabelecimento.',
  },
  {
    icon: ShoppingCart,
    name: 'Supermercados',
    stat: 'Fidelização',
    statLabel: 'Retenção de clientes com VE no dia a dia.',
    benefit: 'Retém clientes com veículos elétricos que buscam praticidade no dia a dia.',
  },
  {
    icon: Dumbbell,
    name: 'Academias',
    stat: 'Frequência',
    statLabel: 'Recarga no tempo de treino — fidelização natural.',
    benefit: 'O tempo de recarga coincide com o tempo de treino — fidelização natural.',
  },
  {
    icon: UtensilsCrossed,
    name: 'Restaurantes',
    stat: 'Permanência',
    statLabel: 'Mais tempo, mais consumo por visita.',
    benefit: 'Maior tempo de permanência e aumento do consumo médio por visita.',
  },
  {
    icon: Hotel,
    name: 'Hotéis',
    stat: 'Experiência',
    statLabel: 'Hóspedes com VE valorizam muito esse serviço.',
    benefit: 'Serviço valorizado por hóspedes com veículos elétricos.',
  },
  {
    icon: Building2,
    name: 'Condomínios',
    stat: 'Valorização',
    statLabel: 'Infraestrutura que valoriza o empreendimento.',
    benefit: 'Infraestrutura moderna que valoriza o empreendimento para moradores.',
  },
];

export default function DemandSegments() {
  const [active, setActive] = useState(0);

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
          Onde atuamos
        </span>
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
          Funciona para múltiplos segmentos
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {segments.map((seg, i) => (
          <button
            key={seg.name}
            onClick={() => setActive(i)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 min-h-[48px] ${
              active === i
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border bg-card text-muted-foreground hover:border-primary/30'
            }`}
          >
            <seg.icon className="w-5 h-5" />
            <span className="font-body text-xs font-medium">{seg.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-card border border-border rounded-2xl p-8 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex items-center gap-6 flex-shrink-0">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                {React.createElement(segments[active].icon, { className: 'w-7 h-7 text-primary' })}
              </div>
              <div>
                <span className="font-heading font-bold text-3xl text-primary">
                  {segments[active].stat}
                </span>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  {segments[active].statLabel}
                </p>
              </div>
            </div>
            <div className="lg:border-l lg:border-border lg:pl-8">
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                {segments[active].name}
              </h4>
              <p className="font-body text-muted-foreground leading-relaxed">
                {segments[active].benefit}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}