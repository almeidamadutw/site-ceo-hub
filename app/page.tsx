import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

const pillars = [
  {
    title: "Venda consultiva",
    text: "Aprenda a conduzir conversas, apresentar soluções com mais clareza e fazer o paciente perceber valor antes de pensar apenas em preço.",
  },
  {
    title: "Avaliação estratégica",
    text: "Transforme a avaliação em uma experiência de confiança, diagnóstico, orientação e direcionamento para o melhor plano de cuidado.",
  },
  {
    title: "Agendamento inteligente",
    text: "Organize a agenda com mais intenção, reduza faltas, melhore confirmações e conduza o paciente desde o primeiro contato.",
  },
  {
    title: "Experiência do paciente",
    text: "Crie uma jornada mais acolhedora, profissional e memorável, do WhatsApp ao pós-atendimento.",
  },
  {
    title: "Gestão de equipe",
    text: "Desenvolva liderança, alinhamento, comunicação e rotina para que a equipe trabalhe com mais clareza, padrão e propósito.",
  },
  {
    title: "Processos e crescimento",
    text: "Estruture a clínica com método, indicadores, organização e decisões mais estratégicas para crescer com previsibilidade.",
  },
];

function DraImageCard({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex min-h-[620px] items-end justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 pt-12 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff14_0%,transparent_45%)]" />

      <Image
        src={src}
        alt={alt}
        width={720}
        height={1000}
        className="relative z-10 h-auto w-auto max-h-[560px] max-w-[92%] object-contain object-bottom md:max-h-[590px]"
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Header />
      <Hero />

      <section className="border-y border-white/10 bg-white/[0.03] py-6">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold">12 meses</p>
            <p className="mt-1 text-sm text-white/60">
              de jornada estratégica e acompanhamento
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">Método</p>
            <p className="mt-1 text-sm text-white/60">
              para vendas, agenda, gestão e liderança
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">Plataforma</p>
            <p className="mt-1 text-sm text-white/60">
              com módulos, tarefas, simulados e evolução
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
            O que é o CEO Club
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Uma mentoria para transformar rotina clínica em direção estratégica.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            O CEO Club foi criado para dentistas e profissionais da saúde que
            desejam sair do improviso e conduzir suas clínicas com mais clareza,
            método e visão de crescimento.
          </p>

          <p className="mt-4 text-lg leading-8 text-white/70">
            A jornada conecta vendas, agenda, equipe, experiência do paciente e
            gestão, ajudando o profissional a tomar decisões melhores e
            construir uma clínica mais organizada, previsível e forte.
          </p>
        </div>

        <DraImageCard
          src="/images/dra-blazer.png"
          alt="Dra. Luciana Rocha"
        />
      </section>

      <section className="bg-white/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
              Dentro da mentoria
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Uma jornada para organizar a clínica, conduzir melhor o paciente e
              crescer com método.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Cada pilar foi pensado para levar clareza para áreas que impactam
              diretamente o crescimento da clínica: vendas, agenda, equipe,
              experiência, processos e gestão.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#07111f] p-6 transition hover:-translate-y-1 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm">
                  ✦
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[0.95fr_1.05fr]">
        <div className="order-2 md:order-1">
          <DraImageCard
            src="/images/dra-retrato.png"
            alt="Retrato da Dra. Luciana Rocha"
          />
        </div>

        <div className="order-1 md:order-2">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
            A mentora
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Por trás do método, existe vivência real de clínica.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            A Dra. Luciana Rocha desenvolveu o CEO Club para guiar dentistas e
            profissionais da saúde que desejam crescer com mais clareza,
            posicionamento e gestão.
          </p>

          <p className="mt-4 text-lg leading-8 text-white/70">
            A mentoria nasce da prática, da rotina clínica e da necessidade de
            transformar atendimento em experiência, equipe em cultura e clínica
            em negócio.
          </p>

          <Link
            href="/sobre"
            className="mt-8 inline-flex rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Conhecer a trajetória
          </Link>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white px-8 py-14 text-center text-[#07111f] md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#07111f]/50">
            CEO Club
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            A clínica cresce quando quem está à frente deixa de apagar
            incêndios e começa a liderar com método.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#07111f]/70">
            Uma jornada para dentistas e profissionais da saúde que querem
            organizar processos, vender melhor, fortalecer a equipe e conduzir a
            clínica com visão de crescimento.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/mentoria"
              className="rounded-full bg-[#07111f] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0c1d34]"
            >
              Ver como funciona
            </Link>

            <Link
              href="/login"
              className="rounded-full border border-[#07111f]/20 px-7 py-3 text-sm font-semibold text-[#07111f] transition hover:bg-[#07111f]/5"
            >
              Área do Aluno
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}