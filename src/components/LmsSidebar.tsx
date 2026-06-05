import { Link } from "react-router-dom";

export default function LmsSidebar() {
  return (
    <aside
      className="
      w-72
      backdrop-blur-xl
      bg-black/30
      border-r
      border-white/10
      p-8
      flex
      flex-col
      "
    >
      <Link to="/">
        <img
  src="/logo-caelum-gold.png"
  alt="CAELUM"
  className="w-40 mx-auto"
/>
      </Link>

      <nav className="mt-14 flex flex-col gap-8 text-xl">

        <Link
          to="/dashboard"
          className="hover:text-cyan-400 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/mis-cursos"
          className="hover:text-cyan-400 transition"
        >
          Mis Cursos
        </Link>

        <Link
          to="/certificados"
          className="hover:text-cyan-400 transition"
        >
          Certificados
        </Link>

        <Link
          to="/soporte"
          className="hover:text-cyan-400 transition"
        >
          Soporte
        </Link>

        <Link
          to="/perfil"
          className="hover:text-cyan-400 transition"
        >
          Perfil
        </Link>

      </nav>
    </aside>
  );
}