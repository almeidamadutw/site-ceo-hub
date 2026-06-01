import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#07111F]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="leading-tight">
          <h1 className="text-xl font-black tracking-wide text-white lg:text-2xl">
            CEO Club Mentoria
          </h1>

          <p className="text-xs font-medium text-[#D8DDE6]">
            Transformando dentistas em CEO&apos;s da própria clínica.
          </p>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#D8DDE6] lg:flex">
          <Link href="/" className="transition hover:text-white">
            Início
          </Link>

          <Link href="/sobre" className="transition hover:text-white">
            Sobre
          </Link>

          <Link href="/contato" className="transition hover:text-white">
            Contato
          </Link>
        </nav>

        <a
          href="https://ceoclubmentoria.com.br/login"
          className="rounded-full bg-[#D8DDE6] px-5 py-3 text-sm font-black text-[#07111F] shadow-xl shadow-black/20 transition hover:bg-white"
        >
          Área do Aluno
        </a>
      </div>
    </header>
  );
}