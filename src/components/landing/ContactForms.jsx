import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Building2, User, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const segmentos = [
  'Shopping Center',
  'Supermercado',
  'Academia',
  'Restaurante',
  'Hotel',
  'Hospital / Clínica',
  'Condomínio',
  'Universidade',
  'Coworking / Prédio Corporativo',
  'Outro',
];

const WHATSAPP_RUBENS = '5584991064591';
const WHATSAPP_MATEUS = '5581991945763';

export default function ContactForm() {
  const [form, setForm] = useState({ nome: '', estabelecimento: '', segmento: '', telefone: '', mensagem: '' });
  const [sent, setSent] = useState(false);

  const handle = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const buildMessage = (socio) => {
    const lines = [
      `Olá! Vim pelo site da Mr. Charger e gostaria de saber mais sobre a parceria.`,
      ``,
      `*Nome:* ${form.nome}`,
      `*Estabelecimento:* ${form.estabelecimento}`,
      `*Segmento:* ${form.segmento}`,
      `*Telefone:* ${form.telefone}`,
      form.mensagem ? `*Mensagem:* ${form.mensagem}` : '',
    ].filter(Boolean).join('\n');
    return encodeURIComponent(lines);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-heading font-bold text-xl text-foreground mb-2">Agora escolha como falar conosco</h3>
        <p className="font-body text-muted-foreground mb-8 text-sm">
          Clique no WhatsApp do fundador de sua preferência para enviar sua mensagem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary text-primary-foreground font-heading font-semibold rounded-full px-6 hover:bg-primary/90">
            <a
              href={`https://wa.me/${WHATSAPP_RUBENS}?text=${buildMessage('Rubens')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              WhatsApp — Rubens Sousa
            </a>
          </Button>
          <Button asChild variant="outline" className="border-border text-foreground font-heading rounded-full px-6 hover:border-primary hover:text-primary">
            <a
              href={`https://wa.me/${WHATSAPP_MATEUS}?text=${buildMessage('Mateus')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              WhatsApp — Mateus Xavier
            </a>
          </Button>
        </div>
        <button
          onClick={() => { setSent(false); setForm({ nome: '', estabelecimento: '', segmento: '', telefone: '', mensagem: '' }); }}
          className="mt-6 font-body text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Preencher novamente
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="font-body text-xs text-muted-foreground flex items-center gap-1.5">
            <User className="w-3 h-3" /> Seu nome
          </label>
          <Input
            required
            placeholder="Ex: João Silva"
            value={form.nome}
            onChange={(e) => handle('nome', e.target.value)}
            className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
        <div className="space-y-1.5">
          <label className="font-body text-xs text-muted-foreground flex items-center gap-1.5">
            <Phone className="w-3 h-3" /> Telefone / WhatsApp
          </label>
          <Input
            required
            placeholder="(XX) XXXXX-XXXX"
            value={form.telefone}
            onChange={(e) => handle('telefone', e.target.value)}
            className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="font-body text-xs text-muted-foreground flex items-center gap-1.5">
          <Building2 className="w-3 h-3" /> Nome do estabelecimento
        </label>
        <Input
          required
          placeholder="Ex: Shopping Recife, Academia Corpo e Alma..."
          value={form.estabelecimento}
          onChange={(e) => handle('estabelecimento', e.target.value)}
          className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
        />
      </div>

      <div className="space-y-1.5">
        <label className="font-body text-xs text-muted-foreground">Tipo de estabelecimento</label>
        <Select required onValueChange={(v) => handle('segmento', v)}>
          <SelectTrigger className="bg-background border-border text-foreground focus:border-primary">
            <SelectValue placeholder="Selecione o segmento" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            {segmentos.map((s) => (
              <SelectItem key={s} value={s} className="text-foreground focus:bg-primary/10 focus:text-primary">
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <label className="font-body text-xs text-muted-foreground">Mensagem (opcional)</label>
        <Textarea
          placeholder="Conte um pouco sobre o seu espaço ou deixe sua dúvida..."
          value={form.mensagem}
          onChange={(e) => handle('mensagem', e.target.value)}
          className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary h-24 resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary text-primary-foreground font-heading font-semibold rounded-full hover:bg-primary/90 group"
      >
        Próximo passo — Escolher WhatsApp
        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>

      <p className="font-body text-xs text-muted-foreground text-center">
        Análise sem compromisso · Resposta rápida
      </p>
    </form>
  );
}