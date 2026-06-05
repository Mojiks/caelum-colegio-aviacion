import heroAviation from "../assets/images/hero-aviation.jpg";
import { Link } from "react-router-dom";

export default function CoursesPage() {
  return (
    <main className="bg-[#020817] text-white">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Imagen */}
        <img
          src={heroAviation}
          alt="CAELUM Aviation"
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-bottom
          "
        />

        {/* Overlay */}
        <div
          className="
          absolute
          inset-0
          bg-[#020817]/80
          "
        />

        {/* Botón regreso */}
        <div className="absolute top-8 left-8 z-20">
          <Link
            to="/"
            className="
            px-5
            py-3
            rounded-xl
            bg-black/40
            backdrop-blur-md
            border
            border-white/10
            hover:bg-cyan-500/20
            transition
            "
          >
            ← CAELUM Web
          </Link>
        </div>

        {/* Login */}
        <div className="absolute top-8 right-8 z-20">
          <Link
            to="/login"
            className="
            px-6
            py-3
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-600
            font-semibold
            transition
            "
          >
            Iniciar Sesión
          </Link>
        </div>

        {/* Texto principal */}
        <div
          className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-center
          px-6
          "
        >
          <div className="text-center max-w-5xl">

            <p
              className="
              uppercase
              tracking-[6px]
              text-cyan-300
              text-2xl
              md:text-4xl
              font-semibold
              mb-10
              "
            >
              Plataforma de Formación Online
            </p>

            <p
              className="
              text-gray-300
              text-2xl
              md:text-3xl
              leading-relaxed
              max-w-4xl
              mx-auto
              "
            >
              Cursos aeronáuticos online con seguimiento de avance,
              evaluaciones, soporte académico y certificados digitales.
            </p>

          </div>
        </div>

      </section>

      {/* CURSOS DESTACADOS */}
      <section className="bg-[#020817] px-8 py-24">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-12 text-cyan-400">
            Cursos Destacados
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6">

              <h3 className="text-2xl font-bold mb-4">
                CFIT / ALAR
              </h3>

              <p className="text-slate-300 mb-4">
                Prevención de Controlled Flight Into Terrain
                y reducción de accidentes en aproximación
                y aterrizaje.
              </p>

              <div className="text-cyan-400 font-semibold">
                Certificado Incluido
              </div>

            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6">

              <h3 className="text-2xl font-bold mb-4">
                CRM
              </h3>

              <p className="text-slate-300 mb-4">
                Crew Resource Management para mejorar
                comunicación, liderazgo y toma de decisiones.
              </p>

              <div className="text-cyan-400 font-semibold">
                Próximamente
              </div>

            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6">

              <h3 className="text-2xl font-bold mb-4">
                SMS
              </h3>

              <p className="text-slate-300 mb-4">
                Sistema de Gestión de Seguridad Operacional
                aplicado a operaciones aeronáuticas.
              </p>

              <div className="text-cyan-400 font-semibold">
                Próximamente
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}