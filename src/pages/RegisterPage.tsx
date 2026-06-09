import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("pilot");
  const [password, setPassword] = useState("");

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const { data, error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      return;
    }

    if (data.user) {

  const { error: profileError } = await supabase
  .from("profiles")
  .insert([
    {
      id: data.user.id,
      full_name: fullName,
      email,
      phone,
      user_type: userType,
      role: "student",
      is_active: true,
    },
  ]);

if (profileError) {
  alert(profileError.message);
  return;
}

  alert(
    "Cuenta creada correctamente. Revisa tu correo."
  );
}
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
          Crear cuenta
        </p>

        <form
          onSubmit={handleRegister}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full p-3 rounded bg-slate-800"
            value={fullName}
            onChange={(e) =>
              setFullName(e.target.value)
            }
          />

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
            type="text"
            placeholder="Teléfono"
            className="w-full p-3 rounded bg-slate-800"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <select
            className="w-full p-3 rounded bg-slate-800"
            value={userType}
            onChange={(e) =>
              setUserType(e.target.value)
            }
          >
            <option value="pilot">
              Piloto
            </option>

            <option value="cabin_crew">
              Sobrecargo
            </option>
          </select>

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
            Crear Cuenta
          </button>

<div className="mt-6 text-center">

  <span className="text-slate-400">
    ¿Ya tienes cuenta?
  </span>

  <Link
    to="/login"
    className="ml-2 text-cyan-400 hover:text-cyan-300"
  >
    Iniciar sesión
  </Link>

</div>

        </form>

      </div>

    </main>
  );
}