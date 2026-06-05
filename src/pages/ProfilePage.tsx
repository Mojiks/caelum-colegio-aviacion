import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import LmsLayout from "../components/LmsLayout";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    setProfile(data);
  }

  return (
    <LmsLayout>

      <h1 className="text-5xl font-bold text-cyan-400">
        Mi Perfil
      </h1>

      {profile && (

        <div
          className="
          mt-10
          bg-black/30
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
          max-w-4xl
          "
        >

          <div className="space-y-5">

            <div>
              <p className="text-slate-400">
                Nombre Completo
              </p>

              <p className="text-xl font-semibold">
                {profile.full_name}
              </p>
            </div>

            <div>
              <p className="text-slate-400">
                Correo
              </p>

              <p className="text-xl">
                {profile.email}
              </p>
            </div>

            <div>
              <p className="text-slate-400">
                Teléfono
              </p>

              <p className="text-xl">
                {profile.phone}
              </p>
            </div>

            <div>
              <p className="text-slate-400">
                Tipo de Usuario
              </p>

              <p className="text-xl capitalize">
                {profile.user_type}
              </p>
            </div>

            <div>
              <p className="text-slate-400">
                Rol
              </p>

              <p className="text-xl capitalize">
                {profile.role}
              </p>
            </div>

          </div>

        </div>

      )}

    </LmsLayout>
  );
}