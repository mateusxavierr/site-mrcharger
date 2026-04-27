import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Brain, Wrench } from 'lucide-react';

const team = [
  {
    name: 'Mateus Xavier',
    role: 'Co-fundador',
    photo: 'https://media.base44.com/images/public/69eaaeab98cc2b020bb71ba4/62adad331_image.png',
    tags: [
      { icon: GraduationCap, text: 'Sistemas de Informação — Cesar School Recife' },
      { icon: Brain, text: 'Foco em mobilidade elétrica e infraestrutura urbana' },
      { icon: Wrench, text: 'Operação com equipamento Intelbras EVE 0220B' },
    ],
  },
  {
    name: 'Rubens Sousa',
    role: 'Co-fundador',
    photo: 'https://media.base44.com/images/public/69eaaeab98cc2b020bb71ba4/16270add8_image.png',
    tags: [
      { icon: GraduationCap, text: 'Sistemas de Informação — Cesar School Recife' },
      { icon: Brain, text: 'Foco em estratégia comercial e parcerias B2B' },
      { icon: Wrench, text: 'Operação com equipamento Intelbras EVE 0220B' },
    ],
  },
];

export default function Team() {
  return (
    <section id="equipe" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
            Quem está por trás
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Os fundadores
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Tecnologia, empreendedorismo e inteligência artificial — a combinação que move a Mr. Charger.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-card border border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative glow on hover */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-700" />

              <div className="relative flex flex-col items-center text-center">
                {/* Photo */}
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-border group-hover:border-primary/40 transition-colors duration-500">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Green status dot */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-card flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <span className="font-body text-xs text-primary tracking-widest uppercase mb-6">
                  {member.role}
                </span>

                {/* Tags */}
                <div className="w-full space-y-2.5 text-left">
                  {member.tags.map((tag, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-3 bg-background/50 border border-border rounded-xl px-4 py-3"
                    >
                      <tag.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-xs text-muted-foreground leading-relaxed">
                        {tag.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}