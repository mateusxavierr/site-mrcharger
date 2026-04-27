import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, PieChart, Layers, Settings2 } from 'lucide-react';

const models = [
  { icon: Landmark, title: 'Aluguel da vaga', desc: 'Valor fixo mensal pelo uso do espaço. Previsibilidade total de receita para o parceiro.' },
  { icon: PieChart, title: 'Participação na receita', desc: 'Percentual sobre a operação do ponto. Quanto mais uso, mais você ganha.' },
  { icon: Layers, title: 'Modelo híbrido', desc: 'Combinação de valor fixo + variável. O melhor dos dois mundos.' },
  { icon: Settings2, title: 'Formato personalizado', desc: 'Outro modelo definido em comum acordo, 100% adaptado ao seu perfil.' },
];

export default function PartnershipModels() {
  return (
    <section id="modelos" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
            Modelos de parceria
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Você escolhe como quer ganhar
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            A estrutura comercial é definida entre as partes. Cada parceiro tem um modelo ideal.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/8 transition-all duration-400 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/5 transition-all duration-500 pointer-events-none rounded-2xl" />
              <div className="relative">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <m.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{m.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA below models */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-primary border border-primary/30 rounded-full px-6 py-3 hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
          >
            Definir meu modelo de parceria
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
