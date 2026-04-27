import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function InstitutionalBadge() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {[
              { number: '100%', label: 'Custo zero para o parceiro' },
              { number: '15min', label: 'Para entender o potencial' },
              { number: '0', label: 'Burocracia na implantação' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-bold text-2xl text-primary">{stat.number}</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
            Equipamento e conformidade
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Intelbras */}
            <div className="bg-card border border-border rounded-xl px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-heading font-semibold text-sm text-foreground">Intelbras EVE 0220B</p>
                <p className="font-body text-xs text-muted-foreground">Fornecedor certificado</p>
              </div>
            </div>

            {/* Cesar School */}
            <div className="bg-card border border-border rounded-xl px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-heading font-semibold text-sm text-foreground">Cesar School Recife</p>
                <p className="font-body text-xs text-muted-foreground">Formação técnica dos fundadores</p>
              </div>
            </div>
          </div>

          <p className="font-body text-xs text-muted-foreground max-w-xl leading-relaxed">
            Operação com equipamento certificado, em conformidade com a norma <span className="text-foreground font-medium">ABNT NBR 17019</span> — Estações de recarga para veículos elétricos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}