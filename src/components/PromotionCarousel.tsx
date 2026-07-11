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
    setCurrent((prev) => {
      if (prev >= promociones.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  }, 5000);

  return () => clearInterval(interval);
}, [paused]);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">

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
          rounded-2xl
          border
          border-cyan-400/20
          bg-[#061120]
          w-full
          aspect-[18/8]
          max-h-[380px]
          md:max-h-[430px]
          shadow-xl
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

        {/* INDICADORES */}

        <div
          className="
            absolute
            bottom-3
            left-1/2
            -translate-x-1/2
            flex
            gap-2
          "
        >

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