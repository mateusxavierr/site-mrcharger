import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Handshake, Wrench, Activity } from 'lucide-react';

const stages = [
  {
    stage: '01',
    icon: MapPin,
    title: 'Análise do local',
    subtitle: 'Avaliação técnica e comercial',
    desc: 'Visitamos e avaliamos o espaço gratuitamente. Sem compromisso.',
  },
  {
    stage: '02',
    icon: Handshake,
    title: 'Acordo comercial',
    subtitle: 'Modelo definido em conjunto',
    desc: 'Definimos juntos o modelo de receita mais adequado para o seu perfil.',
  },
  {
    stage: '03',
    icon: Wrench,
    title: 'Instalação e pré-lançamento',
    subtitle: 'Tudo por conta da Mr. Charger',
    desc: 'Instalamos o ponto e já iniciamos a captação de clientes antes da inauguração.',
  },
  {
    stage: '04',
    icon: Activity,
    title: 'Operação contínua',
    subtitle: 'Retenção e crescimento da base',
    desc: '100% Mr. Charger. Manutenção, monitoramento e crescimento da base de usuários.',
  },
];

export default function DemandProcess() {
  return (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
          Como funciona
        </span>
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
          Simples, do primeiro contato à operação
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map((s, i) => (
          <motion.div
            key={s.stage}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative group"
          >
            <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/40 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-heading font-bold text-3xl text-border group-hover:text-primary/20 transition-colors duration-500">
                  {s.stage}
                </span>
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">{s.title}</h4>
              <p className="font-body text-xs text-primary mb-3">{s.subtitle}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}