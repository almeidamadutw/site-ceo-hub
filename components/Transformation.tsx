const pillars = [
  {
    number: "01",
    title: "Vendas e conversão",
    text: "Você aprende a conduzir avaliações, apresentar tratamentos com clareza e aumentar a aceitação dos pacientes.",
  },
  {
    number: "02",
    title: "Experiência do paciente",
    text: "Você estrutura uma jornada mais encantadora, desde o primeiro contato até o pós-atendimento.",
  },
  {
    number: "03",
    title: "Gestão e processos",
    text: "Você organiza rotinas, indicadores, agenda, equipe e decisões para a clínica funcionar com mais previsibilidade.",
  },
  {
    number: "04",
    title: "Liderança e mentalidade",
    text: "Você desenvolve postura de dono, visão estratégica e capacidade de liderar a clínica como uma empresa.",
  },
];

export default function Transformation() {
  return (
    <section className="relative overflow-hidden bg-[#07111F] py-32 text-white">
      <div className="absolute left-[-12rem] top-20 h-[30rem] w-[30rem] rounded-full bg-[#173B5C]/40 blur-3xl" />
      <div className="absolute bottom-[-12rem] right-[-12rem] h-[28rem] w-[28rem] rounded-full bg-[#D8DDE6]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="font-semibold text-[#D8DDE6]">
              A transformação
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight lg:text-6xl">
              Você não entra apenas para assistir aulas. Você entra para
              mudar a forma como sua clínica funciona.
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-[#D8DDE6]">
            O CEO Club Mentoria foi desenhado para desenvolver as áreas que
            sustentam uma clínica lucrativa: vendas, experiência do paciente,
            gestão, liderança e crescimento com consistência.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8DDE6] text-sm font-black text-[#07111F]">
                {pillar.number}
              </span>

              <h3 className="mt-8 text-2xl font-black">
                {pillar.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[#D8DDE6]">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}