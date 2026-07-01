import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050b14] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.3em]">CEO CLUB</p>
          <p className="mt-2 text-sm text-white/50">
            Mentoria estratégica para dentistas com visão de crescimento.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-white/60">
          <Link href="/" className="hover:text-white">
            Início
          </Link>
          <Link href="/mentoria" className="hover:text-white">
            Mentoria
          </Link>
          <Link href="/sobre" className="hover:text-white">
            Sobre
          </Link>
        </div>
      </div>
    </footer>
  );
}