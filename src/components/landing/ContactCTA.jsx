import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForms';

export default function ContactCTA() {
  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
              Contato
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-5">
              Entre em contato e agende uma conversa
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Sem custo, sem compromisso. Análise do seu espaço em até 15 minutos.
            </p>

            <div className="space-y-3 mb-10">
              {[
                'Sem custo de implantação',
                'Modelo comercial negociável',
                'Análise técnica gratuita',
                'Clientes desde o primeiro dia de operação',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                  <span className="font-body text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-8">
              <p className="font-body text-xs text-muted-foreground mb-4 uppercase tracking-wider">Fale diretamente</p>
              <div className="flex flex-col gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="border-border text-foreground font-heading rounded-full px-6 hover:border-primary hover:text-primary justify-start"
                >
                  <a
                    href="https://wa.me/5584991064591?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20parceria%20Mr.%20Charger."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 w-4 h-4 text-primary" />
                    Rubens Sousa — (84) 99106-4591
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-border text-foreground font-heading rounded-full px-6 hover:border-primary hover:text-primary justify-start"
                >
                  <a
                    href="https://wa.me/5581991945763?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20parceria%20Mr.%20Charger."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 w-4 h-4 text-primary" />
                    Mateus Xavier — (81) 99194-5763
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-card border border-border rounded-3xl p-8 lg:p-10 overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
            <div className="relative">
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                Envie sua mensagem
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Preencha abaixo e envie direto para o WhatsApp do fundador de sua preferência. Respondemos em minutos.
              </p>
              <ContactForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}