export default function Platform() {
  return (
    <section className="bg-slate-950 py-32 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="font-semibold text-[#C8A45D]">
            Plataforma exclusiva
          </span>

          <h2 className="mt-4 text-4xl font-black lg:text-5xl">
            Toda a jornada do CEO Club Mentoria em um único ambiente.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Acesse módulos, aulas, atividades, simulados, materiais de apoio e
            acompanhe sua evolução com uma experiência organizada, moderna e
            intuitiva.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5">
              Módulos organizados
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              Progresso visual
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              Atividades práticas
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              Área do mentorado
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-2xl">
          <div className="rounded-3xl bg-slate-100 p-6">
            <div className="mb-6 h-8 w-48 rounded-full bg-slate-300" />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="h-36 rounded-2xl bg-white p-5 shadow-sm">
                <div className="h-4 w-24 rounded-full bg-slate-300" />
                <div className="mt-6 h-16 rounded-xl bg-[#C8A45D]/20" />
              </div>

              <div className="h-36 rounded-2xl bg-white p-5 shadow-sm">
                <div className="h-4 w-24 rounded-full bg-slate-300" />
                <div className="mt-6 h-16 rounded-xl bg-slate-900/10" />
              </div>

              <div className="h-36 rounded-2xl bg-white p-5 shadow-sm md:col-span-2">
                <div className="h-4 w-32 rounded-full bg-slate-300" />
                <div className="mt-6 h-4 rounded-full bg-slate-300" />
                <div className="mt-3 h-4 w-4/5 rounded-full bg-slate-300" />
                <div className="mt-3 h-4 w-2/3 rounded-full bg-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}