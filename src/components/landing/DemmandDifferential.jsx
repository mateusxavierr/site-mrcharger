import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

export default function DemandDifferential() {
  return (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-3xl p-8 lg:p-12"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
              Por que a Mr. Charger
            </span>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
              Não é apenas instalação.{' '}
              <span className="text-primary">É operação com resultado.</span>
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Enquanto outros instalam o equipamento e vão embora, a Mr. Charger permanece operando, monitorando e garantindo uso ativo do ponto.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 font-heading font-semibold text-primary hover:underline group"
            >
              Solicitar análise gratuita
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="space-y-4">
            <div className="bg-background/50 border border-border rounded-xl p-5">
              <p className="font-heading font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                Concorrência tradicional
              </p>
              <div className="space-y-2.5">
                {['Apenas instalação do equipamento', 'Sem estratégia de captação de clientes', 'Resultado incerto e lento'].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="font-body text-sm text-muted-foreground">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <p className="font-heading font-semibold text-sm text-primary mb-3 uppercase tracking-wider">
                Mr. Charger
              </p>
              <div className="space-y-2.5">
                {['Instalação + operação + manutenção contínua', 'Campanha de pré-lançamento com clientes reais', 'Uso ativo do ponto desde o primeiro dia'].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-body text-sm text-foreground">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}