import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const steps = [
  {
    title: "Diagnóstico",
    text: "Entendimento da realidade da clínica, dos pontos de trava, da rotina, da equipe e das oportunidades de crescimento.",
  },
  {
    title: "Método",
    text: "Aplicação de estratégias práticas para vendas, avaliação, agenda, liderança, posicionamento e experiência do paciente.",
  },
  {
    title: "Acompanhamento",
    text: "Evolução com direcionamento, atividades, análises e ajustes para transformar conhecimento em prática dentro da clínica.",
  },
];

const deliverables = [
  "Aulas e módulos estratégicos",
  "Atividades práticas aplicadas à clínica",
  "Simulados e exercícios de condução",
  "Acompanhamento da evolução",
  "Plataforma própria do CEO Club",
  "Direcionamento para vendas, gestão e equipe",
];

const modules = [
  {
    title: "Venda Consultiva",
    text: "Conduza conversas com mais clareza, apresente soluções com segurança e ajude o paciente a perceber valor antes de discutir preço.",
  },
  {
    title: "Avaliação Estratégica",
    text: "Transforme a avaliação em um momento de confiança, diagnóstico, orientação e direcionamento para o melhor plano de cuidado.",
  },
  {
    title: "Agendamento Inteligente",
    text: "Organize a agenda com intenção, reduza faltas, melhore confirmações e fortaleça o primeiro contato com o paciente.",
  },
  {
    title: "Encantamento do Paciente",
    text: "Crie uma experiência mais acolhedora e memorável, do WhatsApp ao pós-atendimento.",
  },
  {
    title: "Gestão e Liderança",
    text: "Desenvolva comunicação, alinhamento, rotina e postura de liderança para que a equipe trabalhe com mais clareza.",
  },
  {
    title: "Posicionamento Profissional",
    text: "Fortaleça a imagem da clínica, a percepção de valor e a forma como o paciente entende o cuidado oferecido.",
  },
  {
    title: "Marketing e Captação",
    text: "Organize a comunicação da clínica para atrair pacientes mais alinhados ao posicionamento e aos serviços oferecidos.",
  },
  {
    title: "Financeiro e Precificação",
    text: "Entenda preço, valor, margem, planejamento e decisões financeiras com mais segurança.",
  },
  {
    title: "Processos e Crescimento",
    text: "Estruture a clínica com indicadores, organização e decisões mais estratégicas para crescer com previsibilidade.",
  },
];

export default function MentoriaPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Header />

      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#354b88_0%,transparent_35%),radial-gradient(circle_at_bottom_left,#162a4d_0%,transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              CEO Club Mentoria
            </span>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Uma jornada para transformar a clínica em um negócio mais claro,
              forte e previsível.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              O CEO Club foi criado para dentistas e profissionais da saúde que
              desejam sair do improviso, organizar a rotina, vender com mais
              segurança, liderar melhor a equipe e construir uma experiência
              mais encantadora para o paciente.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/sobre"
                className="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-[#07111f] transition hover:bg-white/90"
              >
                Conhecer a mentora
              </Link>

              <Link
                href="/contato"
                className="rounded-full border border-white/20 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Quero saber mais
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute bottom-8 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative h-[620px] w-full max-w-[540px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff18_0%,transparent_45%)]" />

              <Image
                src="/images/dra-clinica-mentoria.jpg"
                alt="Dra. Luciana Rocha em ambiente clínico"
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
            <p className="text-3xl font-semibold">Estratégia</p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Para tomar decisões com mais clareza, intenção e visão de
              crescimento.
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">Prática</p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Para aplicar o conteúdo diretamente na rotina da clínica e da
              equipe.
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">Evolução</p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Para acompanhar resultados, ajustar processos e fortalecer a
              gestão.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
            Como funciona
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            A mentoria conduz o profissional do improviso para uma rotina com
            método.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            A proposta não é apenas entregar conteúdo. É criar um caminho para
            que cada participante entenda a própria clínica, organize processos,
            melhore a condução do paciente e lidere com mais segurança.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-bold text-[#07111f]">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold">{step.title}</h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative h-[600px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff14_0%,transparent_45%)]" />

            <Image
              src="/images/dra-clinica-sorrindo.jpg"
              alt="Dra. Luciana Rocha sorrindo na clínica"
              width={900}
              height={1200}
              className="relative z-10 h-full w-full object-cover object-[center_35%]"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
              O que você recebe
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Conteúdo, direção e aplicação prática dentro da realidade da
              clínica.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              A jornada combina estratégia, prática e acompanhamento para que o
              conhecimento não fique parado em uma aula. Ele entra na rotina,
              nos atendimentos, na equipe, no financeiro e na experiência do
              paciente.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm font-medium text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
            Pilares da jornada
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Uma trilha pensada para fortalecer venda, gestão, equipe e
            experiência.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Cada módulo foi pensado para ajudar o profissional a sair da
            operação no automático e assumir uma condução mais estratégica da
            clínica.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm">
                ✦
              </div>

              <h3 className="text-xl font-semibold">{module.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                {module.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white text-[#07111f]">
          <div className="grid gap-10 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#07111f]/50">
                Plataforma CEO Club
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                A mentoria continua viva dentro da plataforma.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#07111f]/70">
                Além dos encontros e direcionamentos, cada participante acessa
                uma estrutura própria com módulos, tarefas, simulados,
                progresso, agenda e suporte para acompanhar sua evolução.
              </p>

              <Link
                href="/login"
                className="mt-8 inline-flex rounded-full bg-[#07111f] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0c1d34]"
              >
                Acessar Área do Aluno
              </Link>
            </div>

            <div className="rounded-[1.5rem] border border-[#07111f]/10 bg-[#07111f] p-6 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                Dentro da plataforma
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Módulos liberados por etapa",
                  "Atividades práticas",
                  "Simulados",
                  "Agenda",
                  "Financeiro",
                  "Relatórios de evolução",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}