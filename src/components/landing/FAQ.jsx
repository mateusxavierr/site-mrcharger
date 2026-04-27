import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Quem paga a conta de energia do carregador?',
    a: 'O custo da energia é coberto pela operação do ponto. O estabelecimento parceiro não tem nenhum custo adicional na conta de luz.',
  },
  {
    q: 'Quem é responsável pela manutenção do equipamento?',
    a: '100% da Mr. Charger. Manutenção preventiva e corretiva por nossa equipe, sem envolvimento do parceiro.',
  },
  {
    q: 'Preciso assinar contrato de exclusividade?',
    a: 'Não. O modelo é flexível e definido em comum acordo.',
  },
  {
    q: 'Quanto tempo leva a instalação?',
    a: 'Após aprovação do local, a instalação acontece em poucos dias úteis, sem interromper a operação do estabelecimento.',
  },
  {
    q: 'Existe algum custo inicial para o estabelecimento?',
    a: 'Zero. A Mr. Charger investe na implantação completa. O parceiro disponibiliza apenas a vaga e a tomada de energia.',
  },
  {
    q: 'O equipamento é seguro?',
    a: 'Sim. Utilizamos o Intelbras EVE 0220B, em conformidade com a norma ABNT NBR 17019, com proteções contra sobrecarga, curto-circuito e fuga de corrente.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-widest uppercase text-primary mb-4 block">
            Perguntas frequentes
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Perguntas que os parceiros fazem antes de fechar
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="font-heading font-medium text-foreground text-left text-sm py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}