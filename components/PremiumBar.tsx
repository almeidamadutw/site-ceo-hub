const items = [
  "12 Módulos Estratégicos",
  "4 Fases de Transformação",
  "Plataforma Exclusiva",
  "Aplicação Prática",
  "Mentoria Premium",
];

export default function PremiumBar() {
  return (
    <section className="border-y border-white/10 bg-[#0f2a44] py-6 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-[#d8dde6]">
          {items.map((item) => (
            <span key={item} className="rounded-full bg-white/5 px-4 py-2">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}