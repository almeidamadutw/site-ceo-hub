import Link from "next/link";

export default function ContatoPage() {
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

          <a
            href="https://ceoclubmentoria.com.br/login"
            className="rounded-full bg-[#D8DDE6] px-5 py-3 text-sm font-black text-[#07111F] shadow-xl shadow-black/20 transition hover:bg-white"
          >
            Área do Aluno
          </a>
        </div>
      </header>

      <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-6 py-24">
        <div className="absolute left-[-14rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#173B5C]/60 blur-3xl" />
        <div className="absolute bottom-[-14rem] right-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[#D8DDE6]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#D8DDE6]/25 bg-white/5 px-5 py-2 text-sm font-semibold text-[#D8DDE6] backdrop-blur">
            Fale com a equipe
          </span>

          <h2 className="mt-8 text-5xl font-black leading-[1.02] tracking-tight lg:text-7xl">
            Quer conhecer o CEO Club Mentoria?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#D8DDE6] lg:text-xl">
            Envie uma mensagem para a equipe e descubra como a mentoria pode
            ajudar você a desenvolver vendas, gestão, liderança e crescimento
            dentro da sua clínica.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5515988401441"
              className="rounded-full bg-[#D8DDE6] px-8 py-4 text-sm font-black text-[#07111F] shadow-2xl shadow-black/30 transition hover:bg-white"
            >
              Chamar no WhatsApp
            </a>

            <a
              href="/sobre"
              className="rounded-full border border-[#D8DDE6]/35 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#07111F]"
            >
              Voltar para sobre
            </a>
          </div>

          <p className="mt-8 text-sm text-[#D8DDE6]/70">
            Substitua o número do WhatsApp no código pelo número oficial da
            equipe.
          </p>
        </div>
      </section>
    </main>
  );
}