import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-black">CEO Club Mentoria</h3>

            <p className="mt-4 max-w-sm text-slate-400">
              Transformando dentistas em CEO's da própria clínica.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Navegação</h4>

            <div className="mt-4 flex flex-col gap-3 text-slate-400">
              <Link href="/">Home</Link>
              <Link href="/sobre">Sobre</Link>
              <Link href="/mentoria">Mentoria</Link>
              <Link href="/contato">Contato</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">Acesso</h4>

            <div className="mt-4 flex flex-col gap-3 text-slate-400">
              <a href="#">Área do Aluno</a>
              <a href="/contato">Falar com a equipe</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-500">
          © 2026 CEO Club Mentoria. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}