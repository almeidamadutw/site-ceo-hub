import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MentoriaPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f3f6fa] pt-32">
        <section className="mx-auto max-w-7xl px-6 py-24">
          <span className="font-semibold text-[#0f2a44]">
            CEO Club Mentoria
          </span>

          <h1 className="mt-4 max-w-4xl text-5xl font-black text-[#07111f]">
            Uma jornada completa para transformar você em CEO da sua clínica.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Aqui você vai conhecer a metodologia, os módulos e a estrutura da
            mentoria criada para desenvolver vendas, gestão, liderança e
            crescimento sustentável.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}