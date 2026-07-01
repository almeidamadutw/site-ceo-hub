import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const marcos = [
  {
    title: "Administração primeiro",
    text: "Antes da Odontologia, a Dra. Luciana se formou em Administração de Empresas. Essa base trouxe uma visão estratégica sobre clínica, gestão, processos e crescimento.",
  },
  {
    title: "O sonho da Odontologia",
    text: "Mesmo seguindo pela Administração, o desejo de fazer Odontologia sempre esteve presente. Ao conhecer de perto a rotina clínica, ela decidiu recomeçar.",
  },
  {
    title: "A construção da Casal Odonto",
    text: "Ao lado do Dr. Fábio, ela viveu a rotina real dos consultórios, participou das escolhas estratégicas e ajudou a transformar uma história pequena em uma clínica maior.",
  },
  {
    title: "Legado e continuidade",
    text: "Depois da partida do Dr. Fábio, a Dra. Luciana decidiu continuar. O que nasceu como um casal se tornou uma grande família, construída com amor, gestão e propósito.",
  },
];

const visoes = [
  {
    title: "Clínica como empresa",
    text: "A clínica precisa de direção, processos, equipe alinhada, indicadores e decisões estratégicas. Não basta atender bem, é preciso conduzir bem.",
  },
  {
    title: "Experiência do paciente",
    text: "Cada contato importa: do WhatsApp à avaliação, da entrega do plano ao pós-atendimento. Encantar também faz parte da estratégia.",
  },
  {
    title: "Venda com valor",
    text: "Vender não é empurrar tratamento. É conduzir o paciente com clareza, segurança e percepção de valor.",
  },
  {
    title: "Liderança com método",
    text: "Quem está à frente da clínica precisa sair do improviso e assumir uma postura de liderança, cultura e crescimento sustentável.",
  },
];

const diferenciais = [
  "Formação em Administração de Empresas",
  "Vivência real em clínica odontológica",
  "Visão estratégica de vendas e gestão",
  "Experiência com liderança de equipe",
  "Construção de marca e identidade clínica",
  "Método voltado para aplicação prática",
];

const galeria = [
  {
    src: "/images/dra-equipe-clinica.png",
    alt: "Dra. Luciana Rocha com equipe na clínica",
    title: "Cultura e equipe",
  },
  {
    src: "/images/dra-premio.png",
    alt: "Dra. Luciana Rocha com reconhecimento da Casal Odonto",
    title: "Reconhecimento",
  },
  {
    src: "/images/dra-consultorio.png",
    alt: "Dra. Luciana Rocha em consultório odontológico",
    title: "Vivência clínica",
  },
  {
    src: "/images/dra-fabio.png",
    alt: "Dra. Luciana Rocha e Dr. Fábio",
    title: "História e legado",
  },
  {
    src: "/images/dra-familia.png",
    alt: "Dra. Luciana Rocha em momento familiar",
    title: "Família e propósito",
  },
];

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Header />

      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#354b88_0%,transparent_35%),radial-gradient(circle_at_bottom_left,#162a4d_0%,transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Sobre a mentora
            </span>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Dra. Luciana Rocha, uma história construída entre gestão,
              odontologia e legado.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Antes de ser cirurgiã-dentista, a Dra. Luciana veio da
              Administração de Empresas. Mas o sonho da Odontologia sempre
              esteve ali, crescendo em silêncio até se tornar uma decisão:
              recomeçar.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
              Foi ao conhecer de perto a rotina clínica, ao lado do Dr. Fábio,
              que ela entendeu que poderia unir duas forças: o cuidado da
              Odontologia e a visão estratégica da Administração.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/mentoria"
                className="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-[#07111f] transition hover:bg-white/90"
              >
                Conhecer a mentoria
              </Link>

              <Link
                href="/contato"
                className="rounded-full border border-white/20 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Falar com a equipe
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute bottom-8 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative h-[620px] w-full max-w-[540px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff18_0%,transparent_45%)]" />

              <Image
                src="/images/dra-autoridade.jpg"
                alt="Dra. Luciana Rocha"
                width={900}
                height={1200}
                priority
                className="relative z-10 h-full w-full object-cover object-[center_32%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-8">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold">Gestão</p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Uma visão que nasceu antes da Odontologia e acompanha toda a sua
              trajetória.
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">Odontologia</p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Um sonho antigo que se transformou em escolha, profissão e
              propósito.
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">Legado</p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              A continuidade de uma história construída com amor, coragem e
              direção.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[0.95fr_1.05fr]">
        <div className="relative h-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff14_0%,transparent_45%)]" />

          <Image
            src="/images/dra-fabio.png"
            alt="Dra. Luciana Rocha e Dr. Fábio na Casal Odonto"
            width={900}
            height={900}
            className="relative z-10 h-full w-full object-cover object-center"
          />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
            A história da Dra. Luciana
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Antes de ensinar gestão, ela viveu a rotina real de quem constrói
            uma clínica todos os dias.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            A primeira formação da Dra. Luciana foi Administração de Empresas,
            mas o sonho de fazer Odontologia sempre esteve presente. Ao ver os
            estudantes de Odonto na faculdade, algo dentro dela dizia que um dia
            aquele também seria o seu caminho.
          </p>

          <p className="mt-4 text-lg leading-8 text-white/70">
            Depois de formada, ela conheceu o Dr. Fábio, dentista apaixonado
            pela profissão. Foi convivendo com ele e com a realidade do
            consultório que a certeza cresceu: ela queria viver aquilo pelo
            resto da vida.
          </p>

          <p className="mt-4 text-lg leading-8 text-white/70">
            Então ela deixou a área administrativa e recomeçou. Entrou na
            faculdade de Odontologia, formou-se e passou a trabalhar nos
            consultórios, unindo a visão empreendedora da Administração à
            prática da Odontologia.
          </p>
        </div>
      </section>

      <section className="bg-white/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
              Marcos da trajetória
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Uma caminhada que explica a essência do CEO Club.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {marcos.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#07111f] p-7 transition hover:-translate-y-1 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm">
                  ✦
                </div>

                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
            Do consultório à construção de uma marca
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            A Casal Odonto nasceu de uma história que virou família.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Ao lado do Dr. Fábio, a Dra. Luciana participou da rotina de vários
            consultórios, decisões de expansão, escolhas de cidade e construção
            de identidade. Com o tempo, aquele início foi se transformando em
            algo maior: uma clínica com equipe, cultura e uma história própria.
          </p>

          <p className="mt-4 text-lg leading-8 text-white/70">
            Após a partida do Dr. Fábio, veio a pergunta mais difícil: como
            continuar sem uma das pessoas mais importantes daquela história? Foi
            nesse momento que a Dra. Luciana entendeu o significado de legado.
          </p>

          <p className="mt-4 text-lg leading-8 text-white/70">
            Continuar era manter vivo o amor pela Odontologia, a história
            construída e o propósito que deu origem à Casal Odonto. O que
            começou como um casal se tornou uma grande família.
          </p>
        </div>

        <div className="relative h-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff14_0%,transparent_45%)]" />

          <Image
            src="/images/dra-premio.png"
            alt="Dra. Luciana Rocha com reconhecimento da Casal Odonto"
            width={900}
            height={1200}
            className="relative z-10 h-full w-full object-cover object-[center_35%]"
          />
        </div>
      </section>

      <section className="bg-white/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
              Visão de trabalho
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              A clínica cresce quando existe direção por trás de cada decisão.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {visoes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#07111f] p-7 transition hover:-translate-y-1 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm">
                  ✦
                </div>

                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
            Por que aprender com ela
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Uma mentoria conduzida por quem entende a rotina real da clínica.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            A força do CEO Club está em unir método e realidade. A Dra. Luciana
            conduz os participantes a olharem para a clínica com mais
            estratégia, identificando pontos de melhoria e transformando
            conhecimento em execução.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {diferenciais.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm font-medium text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff14_0%,transparent_45%)]" />

          <Image
            src="/images/dra-consultorio.png"
            alt="Dra. Luciana Rocha em consultório odontológico"
            width={900}
            height={1200}
            className="relative z-10 h-full w-full object-cover object-[center_32%]"
          />
        </div>
      </section>

      <section className="bg-white/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
              Momentos da trajetória
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Uma história construída com clínica, equipe, reconhecimento e
              propósito.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {galeria.map((item) => (
              <div
                key={item.src}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
              >
                <div className="relative h-[360px] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={700}
                    height={900}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="text-lg font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white px-8 py-14 text-center text-[#07111f] md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#07111f]/50">
            CEO Club Mentoria
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            A transformação começa quando o profissional decide liderar a
            clínica com método.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#07111f]/70">
            Conheça a jornada criada pela Dra. Luciana Rocha para dentistas que
            querem vender melhor, organizar processos e crescer com mais
            segurança.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/mentoria"
              className="rounded-full bg-[#07111f] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0c1d34]"
            >
              Ver a mentoria
            </Link>

            <Link
              href="/contato"
              className="rounded-full border border-[#07111f]/20 px-7 py-3 text-sm font-semibold text-[#07111f] transition hover:bg-[#07111f]/5"
            >
              Falar com a equipe
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}