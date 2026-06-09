import { useEffect, useState } from "react";

export default function IntroScreen() {

  const [show, setShow] = useState(true);

  const videos = [
  "/video/pilot-v1.mp4",
  "/video/cabin_ready.mp4"
];

  const [video] = useState(
    videos[Math.floor(Math.random() * videos.length)]
  );

  useEffect(() => {

    const alreadySeen =
      sessionStorage.getItem("caelum_intro");

    if (alreadySeen) {
      setShow(false);
      return;
    }

    sessionStorage.setItem(
      "caelum_intro",
      "true"
    );

    const timer = setTimeout(() => {
      setShow(false);
    }, 6000);

    return () => clearTimeout(timer);

  }, []);

  if (!show) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-[99999]
      bg-black
      "
    >
      <video
        autoPlay
        muted
        playsInline
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      >
        <source
          src={video}
          type="video/mp4"
        />
      </video>

      <div
        className="
        absolute
        inset-0
        bg-black/40
        "
      />

      <div
        className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        "
      >
        <div className="text-center">

          <h1
            className="
            text-white
            text-6xl
            md:text-8xl
            font-black
            "
          >
            CAELUM
          </h1>

          <p
            className="
            mt-6
            text-cyan-400
            text-xl
            md:text-3xl
            "
          >
            Colegio de Aviación
          </p>

        </div>
      </div>

    </div>
  );
}