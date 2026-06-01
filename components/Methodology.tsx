const phases = [
  {
    number: "01",
    title: "Resultados Rápidos",
    description: "Comece pelas áreas que geram impacto imediato na sua clínica.",
    modules: ["Venda que Conduz", "Avaliação de Elite", "Jornada Encantadora"],
  },
  {
    number: "02",
    title: "Autoridade e Valor",
    description: "Fortaleça sua presença, comunicação e percepção de valor.",
    modules: ["Autoridade Premium", "Comunicação de CEO"],
  },
  {
    number: "03",
    title: "Lucro e Controle",
    description: "Entenda os números da clínica e aumente sua lucratividade.",
    modules: ["Clínica Lucrativa", "Vendas de Alta Performance"],
  },
  {
    number: "04",
    title: "Mentalidade de CEO",
    description: "Desenvolva liderança, gestão e crescimento sustentável.",
    modules: [
      "Virada CEO",
      "Rotina de Alta Performance",
      "Time Forte",
      "Gestão Premium",
      "Escala Segura",
    ],
  },
];

export default function Methodology() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-semibold text-[#C8A45D]">
            Metodologia CEO Club Mentoria
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 lg:text-5xl">
            Uma jornada construída para transformar você em CEO da sua clínica.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Você não espera meses para começar a evoluir. Nossa metodologia foi
            estruturada para gerar resultado desde as primeiras semanas.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="rounded-3xl border border-slate-200 p-8 transition hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8A45D] font-black text-white">
                  {phase.number}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {phase.title}
                  </h3>

                  <p className="text-slate-500">{phase.description}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {phase.modules.map((module) => (
                  <span
                    key={module}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}