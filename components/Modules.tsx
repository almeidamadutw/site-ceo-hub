const modules = [
  "Venda que Conduz",
  "Avaliação de Elite",
  "Jornada Encantadora",
  "Autoridade Premium",
  "Comunicação de CEO",
  "Clínica Lucrativa",
  "Vendas de Alta Performance",
  "Virada CEO",
  "Rotina de Alta Performance",
  "Time Forte",
  "Gestão Premium",
  "Escala Segura",
];

export default function Modules() {
  return (
    <section className="bg-slate-50 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-semibold text-[#C8A45D]">
            Conteúdo Completo
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 lg:text-5xl">
            Os 12 módulos da sua transformação.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Uma trilha estratégica para desenvolver vendas, gestão, liderança,
            comunicação e crescimento sustentável.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <div
              key={module}
              className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:shadow-lg"
            >
              <span className="text-sm font-black text-[#C8A45D]">
                MÓDULO {index + 1}
              </span>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                {module}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}