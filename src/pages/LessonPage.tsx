import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function LessonPage() {

  const { id } = useParams();

  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLesson();
  }, []);

  async function loadLesson() {

    const { data, error } = await supabase
      .from("lessons")
      .select("*")
      .eq("id", id)
      .single();

    console.log("LESSON:", data);
    console.log("ERROR:", error);

    if (data) {
      setLesson(data);
    }

    setLoading(false);
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
          bg-slate-900
          border
          border-slate-700
          rounded-2xl
          p-8
          whitespace-pre-wrap
          leading-relaxed
          text-lg
          "
        >
          {lesson.content}
        </div>

        <button
  onClick={() => {
    alert("Lección completada");
  }}
  className="
  mt-10
  bg-green-500
  hover:bg-green-600
  px-6
  py-3
  rounded-xl
  font-semibold
  "
>
  ✓ Marcar como completada
</button>

<div className="mt-8">

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

      </div>

    </div>
  );
}