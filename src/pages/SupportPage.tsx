import { useState } from "react";
import { supabase } from "../lib/supabase";
import LmsLayout from "../components/LmsLayout";

export default function SupportPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function sendTicket() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { error } = await supabase
      .from("support_tickets")
      .insert([
  {
    profile_id: user.id,
    subject,
    message,
  },
]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Ticket enviado correctamente");

    setSubject("");
    setMessage("");
  }

  return (
    <LmsLayout>
      <h1 className="text-5xl font-bold text-cyan-400">
        Soporte
      </h1>

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
        <input
          type="text"
          placeholder="Asunto"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="
            w-full
            p-4
            rounded-xl
            bg-slate-900/60
            mb-4
            text-white
          "
        />

        <textarea
          placeholder="Describe tu duda..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="
            w-full
            p-4
            rounded-xl
            bg-slate-900/60
            text-white
          "
        />

        <button
          onClick={sendTicket}
          className="
            mt-6
            px-6
            py-3
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-600
            font-semibold
          "
        >
          Enviar Ticket
        </button>
      </div>
    </LmsLayout>
  );
}