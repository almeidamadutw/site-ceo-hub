import Link from "next/link";

const aprendizados = [
  {
    title: "Vender com mais clareza",
    text: "Você aprende a conduzir conversas, avaliações e apresentações de tratamento com mais segurança, ajudando o paciente a entender valor antes de pensar apenas em preço.",
  },
  {
    title: "Melhorar a experiência do paciente",
    text: "Você entende como organizar a jornada do paciente desde o primeiro contato até o pós-atendimento, criando uma experiência mais profissional, acolhedora e memorável.",
  },
  {
    title: "Organizar a gestão da clínica",
    text: "Você desenvolve uma visão mais estratégica sobre agenda, rotina, processos, equipe, financeiro e indicadores, para tomar decisões com mais controle e menos improviso.",
  },
  {
    title: "Liderar com mentalidade de CEO",
    text: "Você aprende a sair do papel de apenas executor técnico e passa a enxergar sua clínica como uma empresa que precisa de direção, posicionamento, cultura, liderança e crescimento sustentável.",
  },
];

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white">
      <header className="border-b border-white/10 bg-[#07111F]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="leading-tight">
            <h1 className="text-xl font-black tracking-wide text-white lg:text-2xl">
              CEO Club Mentoria
            </h1>

            <p className="text-xs font-medium text-[#D8DDE6]">
              Transformando dentistas em CEO&apos;s da própria clínica.
            </p>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#D8DDE6] lg:flex">
            <Link href="/" className="transition hover:text-white">
              Início
            </Link>

            <Link href="/contato" className="transition hover:text-white">
              Contato
            </Link>
          </nav>

          <a
            href="https://ceoclubmentoria.com.br/login"
            className="rounded-full bg-[#D8DDE6] px-5 py-3 text-sm font-black text-[#07111F] shadow-xl shadow-black/20 transition hover:bg-white"
          >
            Área do Aluno
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 lg:py-32">
        <div className="absolute left-[-14rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#173B5C]/60 blur-3xl" />
        <div className="absolute bottom-[-14rem] right-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[#D8DDE6]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-[#D8DDE6]/25 bg-white/5 px-5 py-2 text-sm font-semibold text-[#D8DDE6] backdrop-blur">
              Sobre a mentoria
            </span>

            <h2 className="mt-8 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight lg:text-7xl">
              Uma mentoria para quem quer liderar a clínica como uma empresa.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#D8DDE6] lg:text-xl">
              O CEO Club ensina você a desenvolver visão de dono,
              melhorar vendas, organizar processos, fortalecer a experiência do
              paciente e tomar decisões com mais clareza dentro da sua clínica.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#D8DDE6]">
              A proposta não é apenas assistir aulas. É aprender a aplicar uma
              nova forma de pensar, conduzir e gerir a clínica no dia a dia.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contato"
                className="rounded-full bg-[#D8DDE6] px-8 py-4 text-sm font-black text-[#07111F] shadow-2xl shadow-black/30 transition hover:bg-white"
              >
                Quero falar com a equipe
              </a>

              <a
                href="/"
                className="rounded-full border border-[#D8DDE6]/35 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#07111F]"
              >
                Voltar para início
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[#D8DDE6]/10 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-[#F3F6FA] p-6 text-[#07111F]">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                  O que você aprende
                </p>

                <h3 className="mt-3 text-3xl font-black leading-tight">
                  Uma evolução prática para sua rotina como dono de clínica.
                </h3>

                <div className="mt-8 space-y-4">
                  {aprendizados.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#D8DDE6] bg-white p-5 shadow-sm"
                    >
                      <div className="flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F2A44] text-sm font-black text-white">
                          ✓
                        </span>

                        <div>
                          <h4 className="text-base font-black text-[#07111F]">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="/contato"
                  className="mt-6 flex w-full items-center justify-center rounded-2xl bg-[#0F2A44] px-6 py-4 text-sm font-black text-white transition hover:bg-[#07111F]"
                >
                  Pedir para conhecer a mentoria
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#D8DDE6] md:flex-row md:items-center">
          <p>© 2026 CEO Club Mentoria. Todos os direitos reservados.</p>

          <div className="flex gap-5">
            <a href="/" className="transition hover:text-white">
              Início
            </a>

            <a href="/contato" className="transition hover:text-white">
              Contato
            </a>

            <a
              href="https://ceoclubmentoria.com.br/login"
              className="transition hover:text-white"
            >
              Área do Aluno
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}