import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#020817] flex items-center justify-center px-6 relative">

      <div className="absolute top-8 left-8">
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
          text-white
          "
        >
          ← CAELUM Web
        </Link>
      </div>

      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-700">

        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-2">
          CAELUM
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Iniciar Sesión
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 rounded bg-slate-800"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 rounded bg-slate-800"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded font-bold"
          >
            Ingresar
          </button>

        </form>

      </div>

    </main>
  );
}