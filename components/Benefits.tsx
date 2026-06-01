const benefits = [
  {
    title: "Aulas gravadas",
    text: "Assista no seu ritmo e avance com clareza em cada etapa da mentoria.",
  },
  {
    title: "Atividades práticas",
    text: "Aplique o conteúdo diretamente na rotina da sua clínica.",
  },
  {
    title: "Materiais complementares",
    text: "Tenha checklists, modelos e ferramentas para usar no dia a dia.",
  },
  {
    title: "Acompanhamento de progresso",
    text: "Visualize sua evolução dentro da plataforma.",
  },
  {
    title: "Simulados",
    text: "Teste seus conhecimentos e fortaleça sua tomada de decisão.",
  },
  {
    title: "Suporte",
    text: "Conte com apoio para seguir sua jornada com mais segurança.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-semibold text-[#C8A45D]">
            O que você recebe
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 lg:text-5xl">
            Mais do que conteúdo. Uma estrutura completa para sua evolução.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}