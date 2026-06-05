import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function ModulePage() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [lessons, setLessons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLessons();
  }, []);

  async function loadLessons() {

    const { data, error } = await supabase
      .from("lessons")
      .select("*")
      .eq("module_id", id)
      .order("lesson_order");

    console.log("LESSONS:", data);
    console.log("ERROR:", error);

    if (data) {
      setLessons(data);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400 mb-4">
        Lecciones del Módulo
      </h1>

      <p className="text-slate-400 mb-10">
        Selecciona una lección para comenzar.
      </p>

      {loading ? (
        <p>Cargando lecciones...</p>
      ) : (
        <div className="space-y-4">

          {lessons.map((lesson) => (

            <div
              key={lesson.id}
              className="
              bg-slate-900
              border
              border-slate-700
              rounded-xl
              p-6
              "
            >

              <h2 className="text-2xl font-bold">
                {lesson.title}
              </h2>

              <div className="mt-2 text-cyan-400">
                {lesson.duration_minutes} minutos
              </div>

              <div className="mt-2 text-slate-400">
                Tipo: {lesson.lesson_type}
              </div>

              <button
  onClick={() => {

  if (lesson.lesson_type === "quiz") {
    navigate(`/quiz/${lesson.quiz_id}`);
  } else {
    navigate(`/lesson/${lesson.id}`);
  }

}}
  className="
  mt-4
  bg-cyan-500
  hover:bg-cyan-600
  px-5
  py-2
  rounded
  "
>
  Abrir Lección
</button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}