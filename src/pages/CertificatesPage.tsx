import LmsLayout from "../components/LmsLayout";

export default function CertificatesPage() {
  return (
    <LmsLayout>

      <h1 className="text-5xl font-bold text-cyan-400">
        Certificados
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

        <h2 className="text-2xl font-bold">
          CFIT / ALAR
        </h2>

        <p className="mt-3 text-gray-400">
          Estado: Pendiente
        </p>

        <button
          disabled
          className="
          mt-6
          px-6
          py-3
          rounded-xl
          bg-gray-700
          text-gray-400
          cursor-not-allowed
          "
        >
          Certificado no disponible
        </button>

      </div>

    </LmsLayout>
  );
}