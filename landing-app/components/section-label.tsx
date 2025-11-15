interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="section-label inline-flex items-center rounded-full border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-white/10 px-5 py-1 text-[0.65rem] uppercase tracking-[0.45em] text-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.35)]">
      {text}
    </div>
  );
}

