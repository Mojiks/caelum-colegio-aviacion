import heroImage from "../assets/images/hero-aviation.jpg";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function CabinCrewPage() {

  return (

    <main className="bg-[#020817] text-white overflow-x-hidden min-h-screen">

      {/* HERO */}

<Link
  to="/"
  className="
    inline-flex
    items-center
    gap-2
    px-4
    py-2
    rounded-xl
    bg-black/40
    backdrop-blur-md
    border
    border-white/10
    hover:bg-cyan-500/20
    transition
  "
>
  ← Volver a CAELUM Web
</Link>

      <section
        className="
          relative
          min-h-[70vh]
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >

        <img
          src={heroImage}
          alt="Sobrecargo"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#020817]/70
            via-[#020817]/80
            to-[#020817]
          "
        />

        <div className="relative z-10 text-center px-6 max-w-5xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              uppercase
              tracking-[0.35em]
              text-cyan-300
              text-sm
            "
          >
            Programa Profesional
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="
              text-6xl
              md:text-8xl
              font-black
              leading-tight
              mt-8
            "
          >
            Sobrecargo
            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-cyan-100
                bg-clip-text
                text-transparent
              "
            >
              de Aviación
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="
              text-gray-300
              text-xl
              leading-relaxed
              mt-10
              max-w-3xl
              mx-auto
            "
          >
            Formación enfocada en seguridad operacional,
            atención a pasajeros, CRM y procedimientos reales de cabina.
          </motion.p>

        </div>

      </section>

      {/* CONTENIDO */}

      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* REQUISITOS */}

            <motion.div
              whileHover={{ y: -8 }}
              className="
                rounded-3xl
                border
                border-cyan-400/20
                bg-white/5
                backdrop-blur-xl
                p-10
              "
            >

              <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm">
                Requisitos
              </p>

              <h2 className="text-4xl font-black mt-5">
                Documentación
              </h2>

              <ul className="mt-10 space-y-5 text-gray-300 text-lg">

                <li>• Mayor de edad</li>

                <li>• Bachillerato terminado</li>

                <li>• Identificación oficial</li>

                <li>• CURP</li>

                <li>• Actitud de servicio</li>

              </ul>

            </motion.div>

            {/* CAPACITACIÓN */}

            <motion.div
              whileHover={{ y: -8 }}
              className="
                rounded-3xl
                border
                border-cyan-400/20
                bg-white/5
                backdrop-blur-xl
                p-10
              "
            >

              <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm">
                Capacitación
              </p>

              <h2 className="text-4xl font-black mt-5">
                Formación
              </h2>

              <ul className="mt-10 space-y-5 text-gray-300 text-lg">

                <li>• CRM</li>

                <li>• Primeros auxilios</li>

                <li>• Evacuaciones</li>

                <li>• Seguridad operacional</li>

                <li>• Atención a pasajeros</li>

                <li>• Procedimientos de cabina</li>

              </ul>

            </motion.div>

          </div>

          {/* CTA */}

          <div className="mt-24 text-center">

            <h2 className="text-5xl font-black">
              Inicia tu carrera aeronáutica
            </h2>

            <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
              Solicita información sobre inscripciones,
              horarios y proceso de admisión.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">

              <button
                className="
                  px-10
                  py-5
                  rounded-2xl
                  bg-cyan-400
                  text-black
                  font-bold
                  text-lg
                  hover:scale-105
                  transition
                "
              >
                WhatsApp
              </button>

              <Link
                to="/"
                className="
                  px-10
                  py-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  font-bold
                  text-lg
                  hover:bg-white/10
                  transition
                "
              >
                Volver al Inicio
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}