import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import LmsSidebar from "../components/LmsSidebar";
import { useNavigate } from "react-router-dom";

export default function CourseCfitAlarPage() {

  const [modules, setModules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadModules();
  }, []);

  async function loadModules() {

  const {
    data: { user }
  } = await supabase.auth.getUser();

  console.log("USER:", user);

  const { data, error } = await supabase
    .from("modules")
    .select("*")
    .order("module_order");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (data) {
    setModules(data);
  }

  setLoading(false);
}

  return (
    <div className="min-h-screen bg-[#020817] text-white flex">

      <LmsSidebar />

      <main className="flex-1 p-10">

        <h1 className="text-5xl font-bold text-cyan-400 mb-3">
          CFIT / ALAR
        </h1>

        <p className="text-slate-400 mb-10">
          Controlled Flight Into Terrain &
          Approach And Landing Accident Reduction
        </p>

        {loading ? (
          <p>Cargando módulos...</p>
        ) : (
          <div className="space-y-4">

            {modules.map((module) => (

              <div
                key={module.id}
                className="
                bg-slate-900
                border
                border-slate-700
                rounded-xl
                p-6
                "
              >

                <h2 className="text-2xl font-bold">
                  {module.title}
                </h2>

                <p className="text-slate-400 mt-2">
                  {module.description}
                </p>

                <div className="mt-3 text-sm text-cyan-400">
                  {module.estimated_minutes} minutos
                </div>

                <button
  onClick={() =>
    navigate(`/modulo/${module.id}`)
  }
  className="
  mt-4
  bg-cyan-500
  hover:bg-cyan-600
  px-5
  py-2
  rounded
  "
>
  Iniciar
</button>

              </div>

            ))}

          </div>
        )}

      </main>

    </div>
  );
}