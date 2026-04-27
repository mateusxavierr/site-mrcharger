import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Benefits from '../components/landing/Benefits';
import DemandActivation from '../components/landing/DemandActivation';
import PartnershipModels from '../components/landing/PartnershipModels';
import Structure from '../components/landing/Structure';
import Team from '../components/landing/Team';
import InstitutionalBadge from '../components/landing/InstitutionalBadge';
import FAQ from '../components/landing/FAQ';
import FinalCTA from '../components/landing/FinalCTA';
import ContactCTA from '../components/landing/ContactCTA';
import Footer from '../components/landing/Footer';
import WhatsAppFloat from '../components/landing/WhatsAppFloat';
import SectionCardShell from '../components/landing/SectionCardShell';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <div className="pt-4 sm:pt-6 lg:pt-8 pb-2">
        <SectionCardShell variant="a">
          <Benefits />
        </SectionCardShell>
        <SectionCardShell variant="b">
          <DemandActivation />
        </SectionCardShell>
        <SectionCardShell variant="a">
          <PartnershipModels />
        </SectionCardShell>
        <SectionCardShell variant="b">
          <Structure />
        </SectionCardShell>
        <SectionCardShell variant="a">
          <Team />
        </SectionCardShell>
        <SectionCardShell variant="b">
          <InstitutionalBadge />
        </SectionCardShell>
        <SectionCardShell variant="a">
          <FAQ />
        </SectionCardShell>
        <SectionCardShell variant="b">
          <FinalCTA />
        </SectionCardShell>
        <SectionCardShell variant="a">
          <ContactCTA />
        </SectionCardShell>
        <SectionCardShell variant="b">
          <Footer />
        </SectionCardShell>
      </div>

      <WhatsAppFloat />
    </div>
  );
}
