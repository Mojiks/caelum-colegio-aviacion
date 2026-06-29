import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import LmsSidebar from "../components/LmsSidebar";
import { useNavigate } from "react-router-dom";

export default function CourseCfitAlarPage() {

  const [modules, setModules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  
  async function loadModules() {

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

        <p className="text-slate-400 mb-6">
          Controlled Flight Into Terrain &
          Approach And Landing Accident Reduction
        </p>

      <div
  className="
  bg-[#0B1220]
  border
  border-slate-800
  rounded-xl
  p-5
  mb-8
  "
>

  <div className="flex justify-between items-center">

    <div>

      <div className="text-slate-400 text-sm">
        Progreso del Curso
      </div>

      <div className="text-2xl font-bold">
        0%
      </div>

    </div>

    <div className="text-cyan-400">
      Curso Activo
    </div>

  </div>

</div>
      
              {loading ? (
          <p>Cargando módulos...</p>
        ) : (
          <div className="space-y-4">

            {modules.map((module) => (

              <div
  key={module.id}
  onClick={() =>
    navigate(`/modulo/${module.id}`)
  }
  className="
  bg-[#0B1220]
  border
  border-slate-800
  rounded-xl
  p-6
  cursor-pointer
  hover:border-cyan-500/40
  transition
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

              </div>

            ))}

          </div>
        )}

      </main>

    </div>
  );
}