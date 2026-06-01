export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07111F] pt-40 pb-28 text-white">
      <div className="absolute left-[-220px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#173B5C]/50 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-180px] h-[480px] w-[480px] rounded-full bg-[#D8DDE6]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-[#D8DDE6]/25 bg-white/5 px-5 py-2 text-sm font-semibold text-[#D8DDE6] backdrop-blur">
              CEO Club Mentoria
            </span>

            <h1 className="mt-8 text-5xl font-black leading-[1.02] tracking-tight lg:text-7xl">
              Transformando dentistas em CEO&apos;s da própria clínica.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#D8DDE6]">
              Você aprendeu odontologia. Agora é hora de desenvolver vendas,
              liderança, gestão, experiência do paciente e crescimento para
              construir uma clínica organizada, lucrativa e preparada para
              crescer.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contato"
                className="rounded-full bg-[#D8DDE6] px-8 py-4 text-sm font-black text-[#07111F] shadow-2xl shadow-black/30 transition hover:bg-white"
              >
                Quero me tornar mentorado
              </a>

              <a
                href="/mentoria"
                className="rounded-full border border-[#D8DDE6]/35 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#07111F]"
              >
                Conhecer a metodologia
              </a>
            </div>

            <div className="mt-12 grid gap-4 text-sm text-[#D8DDE6] sm:grid-cols-2">
              {[
                "Plataforma exclusiva",
                "12 módulos estratégicos",
                "Aplicação prática",
                "Acompanhamento de evolução",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D8DDE6] text-xs font-black text-[#07111F]">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[#D8DDE6]/10 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#F3F6FA] text-[#07111F]">
                <div className="flex items-center justify-between border-b border-[#D8DDE6] bg-white px-6 py-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      Plataforma CEO
                    </p>
                    <h3 className="mt-1 text-xl font-black">
                      Sua evolução em um único lugar
                    </h3>
                  </div>

                  <div className="rounded-full bg-[#0F2A44] px-4 py-2 text-sm font-black text-white">
                    72%
                  </div>
                </div>

                <div className="p-6">
                  <div className="rounded-2xl bg-[#07111F] p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-[#D8DDE6]">
                          Continue estudando
                        </p>
                        <h4 className="mt-1 text-lg font-black">
                          Jornada Encantadora
                        </h4>
                      </div>

                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-[#D8DDE6]">
                        Módulo 03
                      </span>
                    </div>

                    <div className="mt-5 h-2 rounded-full bg-white/15">
                      <div className="h-2 w-[72%] rounded-full bg-[#D8DDE6]" />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {[
                      ["Aulas", "36"],
                      ["Atividades", "12"],
                      ["Simulados", "8"],
                      ["Progresso", "72%"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-[#D8DDE6] bg-white p-5 shadow-sm"
                      >
                        <p className="text-xs font-semibold text-slate-500">
                          {label}
                        </p>
                        <h4 className="mt-2 text-2xl font-black">{value}</h4>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-[#D8DDE6] bg-white p-5 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="font-black">Próximos passos</h4>
                      <span className="text-xs font-bold text-[#0F2A44]">
                        Em andamento
                      </span>
                    </div>

                    <div className="space-y-3">
                      {[
                        "Assistir aula do módulo atual",
                        "Concluir atividade prática",
                        "Acompanhar evolução semanal",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-[#0F2A44]" />
                          <p className="text-sm text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 left-8 hidden rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-sm font-semibold text-[#D8DDE6] backdrop-blur-xl lg:block">
              Mentoria, prática e evolução dentro da plataforma.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}