export default function CTA() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="font-semibold text-[#C8A45D]">
          Comece sua transformação
        </span>

        <h2 className="mt-4 text-4xl font-black text-slate-900 lg:text-6xl">
          Sua clínica precisa apenas de um dentista ou de um verdadeiro CEO?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          O CEO Club Mentoria foi criado para ajudar você a construir uma
          clínica organizada, lucrativa, previsível e preparada para crescer.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/contato"
            className="rounded-2xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:opacity-90"
          >
            Quero me tornar mentorado
          </a>

          <a
            href="/mentoria"
            className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Conhecer a mentoria
          </a>
        </div>
      </div>
    </section>
  );
}