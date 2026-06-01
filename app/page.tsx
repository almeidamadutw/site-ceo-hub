import Link from "next/link";

const logoSrc = "/images/logo.jpeg";

const highlights = [
  "Venda consultiva",
  "Avaliação estratégica",
  "Experiência do paciente",
  "Gestão e processos",
];

const areas = [
  {
    titulo: "Venda, avaliação e conversão",
    texto: "Você aprende a conduzir conversas, avaliações e planos de tratamento com mais clareza, segurança e estratégia.",
  },
  {
    titulo: "Agenda e experiência do paciente",
    texto: "Você organiza a jornada do paciente desde o primeiro contato até o pós-consulta, reduzindo ruídos e aumentando percepção de valor.",
  },
  {
    titulo: "Gestão, equipe e rotina",
    texto: "Você estrutura processos, reuniões, indicadores e uma rotina de dono para liderar a clínica com mais previsibilidade.",
  },
];

function LogoBox({ tamanho = "md" }: { tamanho?: "sm" | "md" | "lg" }) {
  const classes = {
    sm: "h-10 w-10 rounded-2xl",
    md: "h-12 w-12 rounded-[18px]",
    lg: "h-14 w-14 rounded-[20px]",
  };

  const imageClasses = {
    sm: "rounded-xl",
    md: "rounded-[14px]",
    lg: "rounded-2xl",
  };

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden bg-[#050A18] p-1 shadow-[0_0_28px_rgba(45,95,220,0.35)] ring-1 ring-white/10 ${classes[tamanho]}`}
    >
      <img
        src={logoSrc}
        alt="Logo CEO Club"
        className={`h-full w-full object-cover ${imageClasses[tamanho]}`}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050A18] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050A18]/90 backdrop-blur-xl">
  <div className="relative mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
    <Link href="/" className="flex min-w-0 items-center gap-3">
      <LogoBox tamanho="sm" />

      <div className="min-w-0">
        <h1 className="truncate text-lg font-black tracking-tight text-white sm:text-xl">
          CEO Club Mentoria
        </h1>

        <p className="hidden text-[11px] font-semibold text-[#D8DDE6] sm:block">
          Dentistas liderando clínicas como empresas.
        </p>
      </div>
    </Link>

    <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-black text-[#D8DDE6] lg:flex">
      <a href="#sobre" className="transition hover:text-white">
        Sobre
      </a>

      <a href="#contato" className="transition hover:text-white">
        Contato
      </a>
    </nav>

    <a
      href="https://ceoclubmentoria.com.br/login"
      className="rounded-full bg-[#E5E7EB] px-5 py-2.5 text-xs font-black text-[#050A18] shadow-[0_14px_35px_rgba(0,0,0,0.24)] transition hover:bg-white sm:text-sm"
    >
      Área do Aluno
    </a>
  </div>
</header>

    <section className="relative flex min-h-[calc(100vh-20px)] items-center overflow-hidden px-4 pb-10 pt-[92px] sm:px-6 lg:px-8">
  <div className="pointer-events-none absolute left-[-18rem] top-[-14rem] h-[40rem] w-[40rem] rounded-full bg-[#173B8F]/35 blur-3xl" />
  <div className="pointer-events-none absolute bottom-[-18rem] right-[-14rem] h-[38rem] w-[38rem] rounded-full bg-[#E5E7EB]/10 blur-3xl" />
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#081326] to-transparent" />

  <div className="relative mx-auto grid w-full max-w-[1380px] items-center gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(390px,0.82fr)] xl:gap-14">
    <div className="min-w-0">
      <span className="inline-flex max-w-full rounded-full border border-[#D8DDE6]/25 bg-white/5 px-5 py-2 text-xs font-black text-[#D8DDE6] shadow-[inset_0_0_25px_rgba(255,255,255,0.03)] backdrop-blur sm:text-sm">
        Mentoria para donos de clínicas odontológicas
      </span>

      <h2 className="mt-7 max-w-5xl break-words text-[clamp(3rem,5.5vw,5.8rem)] font-black leading-[0.94] tracking-[-0.07em] text-white">
        Transformando dentistas em CEOs da própria clínica.
      </h2>

      <p className="mt-6 max-w-3xl break-words text-base font-medium leading-8 text-[#D8DDE6] lg:text-lg">
        O CEO Club foi criado para você vender melhor, liderar com mais
        segurança, organizar processos e construir uma clínica mais lucrativa,
        previsível e preparada para crescer.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#contato"
          className="rounded-full bg-[#E5E7EB] px-7 py-3 text-sm font-black text-[#050A18] shadow-2xl shadow-black/30 transition hover:bg-white"
        >
          Quero conhecer a mentoria
        </a>

        <a
          href="https://ceoclubmentoria.com.br/login"
          className="rounded-full border border-[#D8DDE6]/35 px-7 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[#050A18]"
        >
          Já sou aluno
        </a>
      </div>

      <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-[#D8DDE6] shadow-[inset_0_0_18px_rgba(255,255,255,0.03)] transition hover:bg-white/[0.08]"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E5E7EB] text-xs font-black text-[#050A18]">
              ✓
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="relative min-w-0 lg:justify-self-end">
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_0%,rgba(229,231,235,0.20),transparent_42%),linear-gradient(135deg,rgba(35,78,180,0.22),rgba(255,255,255,0.04))] blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.08] p-3 shadow-2xl shadow-black/45 backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-[1.55rem] bg-[#060B1B] text-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#2D5FDC]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative border-b border-white/10 px-5 py-5">
            <div className="flex min-w-0 items-center gap-4">
              <LogoBox tamanho="lg" />

              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.32em] text-blue-100">
                  CEO Club Mentoria
                </p>

                <h3 className="mt-2 max-w-xl break-words text-[clamp(1.55rem,2vw,2.2rem)] font-black leading-tight tracking-[-0.03em] text-white">
                  Uma jornada prática para liderar com clareza.
                </h3>
              </div>
            </div>
          </div>

          <div className="relative p-5">
            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-5 shadow-[inset_0_0_45px_rgba(35,78,180,0.16)]">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#BFC7D5]">
                Você evolui em
              </p>

              <div className="mt-4 grid gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 shadow-[inset_0_0_20px_rgba(255,255,255,0.03)]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E5E7EB] text-xs font-black text-[#050A18]">
                      ✓
                    </span>

                    <span className="break-words text-sm font-black text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                <p className="text-xs font-bold text-[#BFC7D5]">Foco</p>
                <h4 className="mt-1 text-lg font-black text-white">
                  Resultado
                </h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                <p className="text-xs font-bold text-[#BFC7D5]">Método</p>
                <h4 className="mt-1 text-lg font-black text-white">
                  Execução
                </h4>
              </div>
            </div>

            <a
              href="#contato"
              className="mt-4 flex w-full items-center justify-center rounded-2xl bg-[#E5E7EB] px-6 py-3 text-sm font-black text-[#050A18] shadow-xl shadow-black/30 transition hover:bg-white"
            >
              Pedir para conhecer
            </a>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 left-6 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-xs font-bold text-[#D8DDE6] backdrop-blur-xl lg:block">
        Acesso exclusivo para mentorados.
      </div>
    </div>
  </div>
</section>

      <section
  id="sobre"
  className="relative overflow-hidden bg-[#081326] px-4 py-16 sm:px-6 lg:px-8"
>
  <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#173B8F]/20 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-white/8 blur-3xl" />

  <div className="relative mx-auto max-w-[1240px]">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.32em] text-[#BFC7D5]">
        Sobre a mentoria
      </p>

      <h2 className="mt-4 text-[clamp(2rem,3.2vw,3.7rem)] font-black leading-tight tracking-[-0.04em] text-white">
        Você aprende a conduzir a clínica com direção, não só consumir conteúdo.
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-sm font-semibold leading-7 text-[#D8DDE6] sm:text-base">
        No CEO Club, você começa pelo que gera resultado mais rápido: venda,
        avaliação, agendamento e experiência do paciente. Depois, estrutura
        posicionamento, comunicação, financeiro, equipe, processos e escala.
      </p>
    </div>

    <div className="mt-10 grid gap-4 lg:grid-cols-3">
      {areas.map((area, index) => (
        <article
          key={area.titulo}
          className="group relative min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_22px_55px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.08]"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/10 blur-2xl transition group-hover:bg-[#2D5FDC]/20" />

          <div className="relative">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E5E7EB] text-sm font-black text-[#050A18] shadow-[0_0_28px_rgba(45,95,220,0.18)]">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3 className="break-words text-lg font-black leading-tight text-white sm:text-xl">
              {area.titulo}
            </h3>

            <p className="mt-3 break-words text-sm font-medium leading-7 text-[#D8DDE6]">
              {area.texto}
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section
  id="contato"
  className="relative overflow-hidden bg-[#050A18] px-4 py-16 sm:px-6 lg:px-8"
>
  <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#173B8F]/25 blur-3xl" />

  <div className="relative mx-auto max-w-[1120px]">
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-2 shadow-2xl shadow-black/25 backdrop-blur">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[#2D5FDC]/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-[20px] bg-[#050A18] p-1 shadow-[0_0_34px_rgba(45,95,220,0.35)] ring-1 ring-white/10">
            <img
              src={logoSrc}
              alt="Logo CEO Club"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          <p className="text-xs font-black uppercase tracking-[0.32em] text-[#BFC7D5]">
            Próximo passo
          </p>

          <h2 className="mt-4 text-[clamp(2rem,3vw,3.4rem)] font-black leading-tight tracking-[-0.04em] text-white">
            Quer entender se o CEO Club faz sentido para sua clínica?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-[#D8DDE6] sm:text-base">
            Solicite contato e veja como a mentoria pode ajudar você a vender
            com mais clareza, organizar a gestão e construir uma rotina de CEO
            dentro da sua clínica.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/5515988401441"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#E5E7EB] px-8 py-4 text-sm font-black text-[#050A18] shadow-xl shadow-black/25 transition hover:bg-white sm:w-auto"
            >
              Quero conhecer a mentoria
            </a>

            <a
              href="https://ceoclubmentoria.com.br/login"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#050A18] sm:w-auto"
            >
              Já sou aluno
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <footer className="relative border-t border-white/10 bg-[#050A18] px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 text-sm text-[#D8DDE6] md:flex-row md:items-center">
          <p>© 2026 CEO Club Mentoria. Todos os direitos reservados.</p>

          <div className="flex flex-wrap gap-5">
            <a href="#sobre" className="transition hover:text-white">
              Sobre
            </a>

            <a href="#contato" className="transition hover:text-white">
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
