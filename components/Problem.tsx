const problems = [
  "Baixa conversão de avaliações",
  "Falta de previsibilidade financeira",
  "Dificuldade na gestão da equipe",
  "Agenda inconsistente",
  "Lucro abaixo do potencial",
  "Ausência de indicadores estratégicos",
];

export default function Problem() {
  return (
    <section className="bg-[#f3f6fa] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-semibold text-[#0f2a44]">O Desafio</span>

          <h2 className="mt-4 text-4xl font-black text-[#07111f] lg:text-5xl">
            A faculdade ensinou odontologia. O mercado exige gestão.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Muitos dentistas dominam a técnica clínica, mas enfrentam
            dificuldades quando precisam liderar equipes, vender tratamentos,
            controlar números e expandir sua clínica.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem}
              className="group rounded-3xl border border-[#d8dde6] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl bg-[#0f2a44] shadow-lg shadow-[#0f2a44]/20" />

              <h3 className="text-lg font-bold text-[#07111f]">{problem}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}