import { Link } from "react-router-dom";

export default function CoursesPage() {

  const cursos = [
    {
      nombre: "CFIT / ALAR",
      descripcion:
        "Controlled Flight Into Terrain y prevención de accidentes durante aproximación y aterrizaje."
    },
    {
      nombre: "CRM / ADM",
      descripcion:
        "Crew Resource Management y Aeronautical Decision Making para una operación más segura."
    },
    {
      nombre: "JEPPESEN",
      descripcion:
        "Interpretación profesional de cartas aeronáuticas y procedimientos instrumentales."
    },
    {
      nombre: "HCRM",
      descripcion:
        "Helicopter Crew Resource Management aplicado a operaciones de ala rotativa."
    },
    {
      nombre: "RVSM",
      descripcion:
        "Reduced Vertical Separation Minimum para operaciones IFR de alta altitud."
    },
    {
      nombre: "SMS",
      descripcion:
        "Sistema de Gestión de Seguridad Operacional aplicado a organizaciones aeronáuticas."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-white">

      {/* BOTÓN VOLVER */}

      <div className="absolute top-8 left-8 z-50">

        <Link
          to="/"
          className="
          px-4
          py-2
          rounded-lg
          border
          border-slate-700
          text-slate-300
          hover:text-white
          hover:border-cyan-500
          transition
          "
        >
          ← Volver
        </Link>

      </div>

      {/* HERO */}

      <section className="pt-36 pb-20 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-6">
            Formación Aeronáutica
          </p>

          <h1 className="text-6xl md:text-7xl font-black mb-8">
            Nuestros Cursos
          </h1>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Plataforma de capacitación aeronáutica diseñada para
            pilotos, sobrecargos, instructores y profesionales
            de la aviación.
          </p>

        </div>

      </section>

      {/* CURSOS */}

      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {cursos.map((curso) => (

              <div
                key={curso.nombre}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                "
              >

                <h2 className="text-3xl font-black mb-6">
                  {curso.nombre}
                </h2>

                <p className="text-slate-400 leading-relaxed">
                  {curso.descripcion}
                </p>

                <div className="mt-8">

                  <span
                    className="
                    inline-flex
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-400/10
                    text-cyan-400
                    font-bold
                    "
                  >
                    PRÓXIMAMENTE
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}