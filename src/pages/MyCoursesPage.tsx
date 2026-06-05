import { Link } from "react-router-dom";

export default function MyCoursesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      <img
        src="/aviation-bg.jpg"
        alt="Aviation Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 p-10 text-white">

        <Link
          to="/dashboard"
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
            mb-6
          "
        >
          ← Volver al menú
        </Link>

        <h1 className="text-5xl font-bold text-cyan-400">
          Mis Cursos
        </h1>

        <div
          className="
            mt-8
            bg-black/25
            backdrop-blur-xl
            p-8
            rounded-3xl
            border
            border-cyan-500/20
          "
        >
          <h2 className="text-3xl font-semibold">
            CFIT / ALAR
          </h2>

          <p className="text-slate-300 mt-3">
            Progreso: 0%
          </p>

          <Link
            to="/curso/cfit-alar"
            className="
              inline-block
              mt-6
              bg-cyan-500
              hover:bg-cyan-600
              px-6
              py-3
              rounded-xl
              font-bold
              transition
            "
          >
            Continuar
          </Link>
        </div>

      </div>

    </div>
  );
}