import React from 'react';

/**
 * Card grande envolvente (fundo levemente mais claro que a página), cantos bem arredondados.
 * variant alterna entre duas tonalidades próximas para ritmo visual.
 */
export default function SectionCardShell({ children, variant = 'a', className = '' }) {
  const bg = variant === 'a' ? 'bg-sectionSurface-a' : 'bg-sectionSurface-b';

  return (
    <div
      className={[
        'mx-3 mb-4 sm:mx-5 sm:mb-5 md:mb-6 lg:mx-10 lg:mb-8',
        'rounded-[1.35rem] sm:rounded-[1.75rem] lg:rounded-[2.25rem]',
        'border border-border/45',
        'shadow-[0_24px_56px_-16px_rgba(0,0,0,0.55)]',
        'overflow-hidden',
        bg,
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
