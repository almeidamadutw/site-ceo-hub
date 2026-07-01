import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const reasons = [
  "Entender se a mentoria faz sentido para sua clínica",
  "Conhecer a jornada, os módulos e a plataforma",
  "Falar com a equipe sobre próximos passos",
];

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Header />

      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#354b88_0%,transparent_35%),radial-gradient(circle_at_bottom_left,#162a4d_0%,transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Fale com a equipe
            </span>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Quer conhecer o CEO Club Mentoria?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Converse com a equipe para entender como a mentoria pode ajudar
              dentistas e profissionais da saúde a organizarem vendas, agenda,
              equipe, experiência do paciente e gestão.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
              O primeiro passo é entender a realidade da sua clínica e o que
              precisa ser estruturado para crescer com mais clareza, método e
              previsibilidade.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5515988401441"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-[#07111f] transition hover:bg-white/90"
              >
                Chamar no WhatsApp
              </a>

              <Link
                href="/mentoria"
                className="rounded-full border border-white/20 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver a mentoria
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute bottom-8 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative h-[620px] w-full max-w-[540px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff18_0%,transparent_45%)]" />

              <Image
                src="/images/dra-clinica-sorrindo.jpg"
                alt="Dra. Luciana Rocha sorrindo na clínica"
                width={900}
                height={1200}
                priority
                className="relative z-10 h-full w-full object-cover object-[center_35%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-8">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold">Contato direto</p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Fale com a equipe pelo WhatsApp e receba as orientações iniciais.
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">Análise inicial</p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Entenda como a mentoria pode se conectar com a realidade da sua
              clínica.
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">Próximos passos</p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Conheça a jornada, a plataforma e o funcionamento do CEO Club.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
            Antes de chamar
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Para quem quer sair do improviso e liderar a clínica com método.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            O contato é indicado para quem deseja conhecer melhor a mentoria,
            entender a proposta e avaliar se o CEO Club faz sentido para o
            momento atual da clínica.
          </p>

          <div className="mt-8 space-y-3">
            {reasons.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-white/10 bg-[#07111f] p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#07111f]">
                  ✓
                </span>

                <p className="text-sm leading-6 text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-[#07111f] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#07111f]/50">
            WhatsApp
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Fale com a equipe do CEO Club.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#07111f]/70">
            Envie uma mensagem para saber mais sobre a mentoria, a plataforma e
            a jornada de acompanhamento.
          </p>

          <a
            href="https://wa.me/5515988401441"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full justify-center rounded-full bg-[#07111f] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0c1d34] sm:w-auto"
          >
            Chamar no WhatsApp
          </a>

          <div className="mt-8 rounded-3xl border border-[#07111f]/10 bg-[#07111f]/5 p-6">
            <p className="text-sm font-semibold text-[#07111f]">
              Mensagem sugerida:
            </p>

            <p className="mt-3 text-sm leading-6 text-[#07111f]/70">
              Olá, quero conhecer melhor o CEO Club Mentoria e entender como a
              jornada pode ajudar na organização e crescimento da minha clínica.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-14 text-center md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
            CEO Club Mentoria
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Uma conversa pode ser o primeiro passo para organizar a clínica com
            mais clareza.
          </h2>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5515988401441"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#07111f] transition hover:bg-white/90"
            >
              Quero falar com a equipe
            </a>

            <Link
              href="/sobre"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Conhecer a Dra. Luciana
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}