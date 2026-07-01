import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo-ceo-club.png"
            alt="Logo CEO Club"
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
            priority
          />

          <div className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-[0.35em] text-white">
              CEO CLUB
            </span>

            <span className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">
              Mentoria Odontológica
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          <Link href="/" className="transition hover:text-white">
            Início
          </Link>

          <Link href="/mentoria" className="transition hover:text-white">
            Mentoria
          </Link>

          <Link href="/sobre" className="transition hover:text-white">
            Sobre
          </Link>
        </nav>

        <Link
          href="/login"
          className="rounded-full border border-white/20 bg-white px-5 py-2 text-sm font-semibold text-[#07111f] transition hover:bg-white/90"
        >
          Área do Aluno
        </Link>
      </div>
    </header>
  );
}