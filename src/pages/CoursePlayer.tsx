import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function CoursePlayer() {
  const { id } = useParams();

  const [course, setCourse] = useState<any>(null);
  const [modules, setModules] = useState<any[]>([]);
  const [selectedModule, setSelectedModule] = useState<any>(null);

  useEffect(() => {
    loadCourse();
  }, []);

  async function loadCourse() {

    const { data: courseData } = await supabase
      .from("courses")
      .select("*")
      .eq("id", id)
      .single();

    setCourse(courseData);

    const { data: moduleData } = await supabase
      .from("modules")
      .select("*")
      .eq("course_id", id)
      .order("module_order");

    setModules(moduleData || []);

    if (moduleData?.length) {
      setSelectedModule(moduleData[0]);
    }
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white flex">

      {/* Sidebar */}

      <div className="w-[350px] border-r border-slate-800 p-6">

        <h2 className="text-2xl font-bold mb-6">
          {course?.title}
        </h2>

        <div className="space-y-2">

          {modules.map((module) => (

            <button
              key={module.id}
              onClick={() => setSelectedModule(module)}
              className="
                w-full
                text-left
                p-4
                rounded-lg
                bg-slate-900
                hover:bg-slate-800
              "
            >
              {module.title}
            </button>

          ))}

        </div>

      </div>

      {/* Contenido */}

      <div className="flex-1 p-10">

        {selectedModule && (

          <>
            <h1 className="text-4xl font-bold mb-8">
              {selectedModule.title}
            </h1>

            <div className="aspect-video bg-slate-900 rounded-xl mb-8 flex items-center justify-center">

              VIDEO DEL MÓDULO

            </div>

            <div className="bg-slate-900 p-6 rounded-xl">

              {selectedModule.description}

            </div>
          </>

        )}

      </div>

    </div>
  );
}