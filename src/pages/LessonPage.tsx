import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function LessonPage() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLesson();
  }, []);

  async function loadLesson() {

    const { data } = await supabase
      .from("lessons")
      .select("*")
      .eq("id", id)
      .single();

    if (data) {
      setLesson(data);
    }

    setLoading(false);
  }

  async function completeLesson() {

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    navigate("/login");
    return;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id")
    .eq("email", user.email)
    .single();

  if (!profile || !lesson) return;

  await supabase
    .from("lesson_progress")
    .upsert({
      profile_id: profile.id,
      lesson_id: lesson.id,
      completed: true,
      completed_at: new Date().toISOString()
    });

  const { data: nextLesson } = await supabase
    .from("lessons")
    .select("*")
    .eq("module_id", lesson.module_id)
    .gt("lesson_order", lesson.lesson_order)
    .order("lesson_order")
    .limit(1)
    .single();

  if (nextLesson) {

    if (nextLesson.lesson_type === "quiz") {

      navigate(`/quiz/${nextLesson.quiz_id}`);

    } else {

      navigate(`/lesson/${nextLesson.id}`);

    }

    return;
  }

  const { data: nextModule } = await supabase
    .from("modules")
    .select("*")
    .gt("module_order", lesson.module_order || 0)
    .order("module_order")
    .limit(1)
    .single();

  if (nextModule) {

    navigate(`/modulo/${nextModule.id}`);

  } else {

    navigate("/mis-cursos");

  }

}

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center">
        Cargando lección...
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center">
        Lección no encontrada.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white">

      <div className="max-w-4xl mx-auto px-8 py-16">

        <button
          onClick={() =>
            navigate(`/modulo/${lesson.module_id}`)
          }
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

        <div className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
          {lesson.lesson_type}
        </div>

        <h1 className="text-5xl font-bold mb-8">
          {lesson.title}
        </h1>

        <div className="text-slate-400 mb-10">
          Duración estimada: {lesson.duration_minutes} minutos
        </div>

        <div
          className="
          bg-[#0B1220]
          border
          border-slate-800
          rounded-2xl
          p-8
          whitespace-pre-wrap
          leading-relaxed
          text-lg
          "
        >
          {lesson.content}
        </div>

        <div className="mt-10">

          <div className="flex justify-between mb-2">

            <span className="text-slate-400">
              Progreso del Curso
            </span>

            <span className="text-cyan-400 font-semibold">
              25%
            </span>

          </div>

          <div className="w-full bg-slate-800 rounded-full h-4">

            <div
              className="
              bg-cyan-500
              h-4
              rounded-full
              "
              style={{ width: "25%" }}
            />

          </div>

        </div>

        <div className="flex justify-between mt-12">

          <button
            onClick={() =>
              navigate(`/modulo/${lesson.module_id}`)
            }
            className="
            border
            border-slate-700
            px-6
            py-3
            rounded-lg
            "
          >
            ← Anterior
          </button>

          <button
            onClick={completeLesson}
            className="
            bg-cyan-500
            hover:bg-cyan-600
            px-6
            py-3
            rounded-lg
            font-semibold
            "
          >
            Siguiente →
          </button>

        </div>

      </div>

    </div>
  );
}