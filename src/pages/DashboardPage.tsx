import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import LmsLayout from "../components/LmsLayout";

export default function DashboardPage() {
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
        Dashboard
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
          "
        >
          <h2 className="text-2xl font-bold">
            Bienvenido,
            {" "}
            {profile.full_name}
          </h2>

          <p className="mt-4">
            Rol: {profile.role}
          </p>

          <p>
            Tipo: {profile.user_type}
          </p>

        </div>

      )}

    </LmsLayout>
  );
}