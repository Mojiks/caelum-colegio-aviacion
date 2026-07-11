import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import promo1 from "../assets/images/promociones/promo1.jpg";
import promo2 from "../assets/images/promociones/promo2.jpg";
import promo3 from "../assets/images/promociones/promo3.jpg";

const promociones = [promo1, promo2, promo3];

export default function PromotionCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promociones.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const previous = () =>
    setCurrent((prev) => (prev - 1 + promociones.length) % promociones.length);

  const next = () =>
    setCurrent((prev) => (prev + 1) % promociones.length);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-8">

        <p className="uppercase tracking-[0.35em] text-cyan-300 text-xs">
          PROMOCIONES
        </p>

        <h2 className="text-3xl md:text-4xl font-black mt-3">
          Aprovecha nuestras promociones
        </h2>

        <p className="text-gray-400 mt-4 text-base max-w-2xl mx-auto">
          Conoce nuestras promociones vigentes.
        </p>

      </div>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="
relative
overflow-hidden
rounded-3xl
border
border-cyan-400/20
bg-[#061120]
aspect-[21/8]
max-h-[360px]
max-w-[1180px]
mx-auto
shadow-2xl
"
      >

        <AnimatePresence mode="wait">

          <motion.img
            key={current}
            src={promociones[current]}
            alt={`Promoción ${current + 1}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9 }}
            className="
absolute
inset-0
w-full
h-full
object-contain
object-center
bg-black
"
          />

        </AnimatePresence>

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/45
            via-transparent
            to-black/10
          "
        />

        <button
          onClick={previous}
          className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            w-12
            h-12
            rounded-full
            bg-black/40
            backdrop-blur-md
            hover:bg-cyan-500
            transition
            text-lg
          "
        >
          ❮
        </button>

        <button
          onClick={next}
          className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            w-12
            h-12
            rounded-full
            bg-black/40
            backdrop-blur-md
            hover:bg-cyan-500
            transition
            text-lg
          "
        >
          ❯
        </button>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">

          {promociones.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "bg-cyan-400 w-9 h-2"
                  : "bg-white/40 w-2 h-2"
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}