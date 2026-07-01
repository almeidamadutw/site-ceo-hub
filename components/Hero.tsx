import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] pt-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#354b88_0%,transparent_35%),radial-gradient(circle_at_bottom_left,#162a4d_0%,transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
  Para dentistas e profissionais da saúde que querem liderar com visão de CEO.
</h1>

<p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
  Uma mentoria estratégica para organizar vendas, equipe, agenda,
  experiência do paciente e gestão, transformando a rotina da clínica em
  um negócio mais claro, previsível e preparado para crescer.
</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/mentoria"
              className="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-[#07111f] transition hover:bg-white/90"
            >
              Conhecer a mentora
            </Link>

            <Link
              href="/sobre"
              className="rounded-full border border-white/20 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Conhecer a Dra. Luciana
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute bottom-8 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex min-h-[640px] w-full max-w-[540px] items-end justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-6 pt-12 shadow-2xl backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff18_0%,transparent_45%)]" />

            <Image
              src="/images/dra-ipad.png"
              alt="Dra. Luciana Rocha segurando um tablet"
              width={720}
              height={1000}
              priority
              className="relative z-10 h-auto w-auto max-h-[590px] max-w-[92%] object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}