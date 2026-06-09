import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { Clock, FileText, CheckCircle } from "lucide-react";

export default function ModulePage() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [lessons, setLessons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLessons();
  }, []);

  async function loadLessons() {

    const { data } = await supabase
      .from("lessons")
      .select("*")
      .eq("module_id", id)
      .order("lesson_order");

    if (data) {
      setLessons(data);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center">
        Cargando contenido...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white">

      <div className="max-w-6xl mx-auto px-8 py-16">

        <button
onClick={() => navigate("/curso/cfit-alar")}
          className="
          mb-10
          border
          border-slate-700
          px-4
          py-2
          rounded-lg
          hover:border-cyan-500
          transition
          "
        >
          ← Volver
        </button>

        <h1 className="text-5xl font-bold mb-4">
          Contenido del Módulo
        </h1>

        <p className="text-slate-400 mb-12">
          Completa las lecciones en orden.
        </p>

        <div className="space-y-4">

          {lessons.map((lesson, index) => (

            <div
              key={lesson.id}
              onClick={() => {

                if (lesson.lesson_type === "quiz") {
                  navigate(`/quiz/${lesson.quiz_id}`);
                } else {
                  navigate(`/lesson/${lesson.id}`);
                }

              }}
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

              <div className="flex justify-between items-center">

                <div className="flex gap-5">

                  <div className="text-cyan-400 text-3xl font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {lesson.title}
                    </h3>

                    <div className="flex gap-5 mt-2">

                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Clock size={15} />
                        {lesson.duration_minutes} min
                      </div>

                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <FileText size={15} />
                        {lesson.lesson_type}
                      </div>

                    </div>

                  </div>

                </div>

                <CheckCircle
                  size={22}
                  className="text-slate-600"
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}