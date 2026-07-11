import heroImage from "../assets/images/hero-aviation.jpg";
import logoImage from "../assets/images/logo-caelum.png";
import PromotionCarousel from "./PromotionCarousel";
import fleetComingSoon from "../assets/images/fleet-coming-soon.jpg";

import aboutImage from "../assets/images/about-aviation.jpg";
import pilotProgram from "../assets/images/pilot-program.jpg";
import cabinProgram from "../assets/images/cabin-program.jpg";
import coursesProgram from "../assets/images/courses-program.jpg";

import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function LandingPage() {
  const navigate = useNavigate();

const [introVideo, setIntroVideo] =
  useState<string | null>(null);

const [introText, setIntroText] =
  useState("Colegio de Aviación");

const playPilotIntro = () => {

  setIntroText("Preparado para despegar...");
  setIntroVideo("/video/pilot-v1.mp4");

  setTimeout(() => {
    setIntroText("Conquista el cielo");
  }, 2500);

  setTimeout(() => {
    navigate("/piloto");
  }, 6000);

};

const playCabinIntro = () => {

  setIntroText("Bienvenido a bordo...");
  setIntroVideo("/video/cabin_ready.mp4");

  setTimeout(() => {
    setIntroText("La excelencia comienza aquí");
  }, 2500);

  setTimeout(() => {
    navigate("/sobrecargo");
  }, 6000);

};

  const [mobileMenu, setMobileMenu] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

useEffect(() => {

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, []);

 return (
  <>
    {introVideo && (
      <div className="fixed inset-0 z-[99999] bg-[#020817]">

        <video
  autoPlay
  playsInline
  preload="auto"
  className="w-full h-full object-cover"
>
  <source
    src={introVideo}
    type="video/mp4"
  />
</video>

        <div
          className="
          absolute
          inset-0
          bg-black/40
          flex
          items-center
          justify-center
          "
        >
          <div className="text-center">

            <h1
             className="
text-white
text-5xl
md:text-7xl
font-black
tracking-tight
"
            >
              CAELUM
            </h1>

            <motion.p
  key={introText}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
text-cyan-400
text-lg
md:text-2xl
mt-5
"
>
  {introText}
</motion.p>

          </div>
        </div>

      </div>
    )}

    <main className="bg-[#020817] text-white overflow-x-hidden">

<header
  className="
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-[#020817]/80
    backdrop-blur-xl
    border-b
    border-white/10
  "
>

  <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">

    <img
      src={logoImage}
      alt="CAELUM"
      className="h-10"
    />

    <nav className="hidden md:flex gap-6 text-[15px] font-semibold">

      <a href="#inicio" className="hover:text-cyan-300 transition">
        Inicio
      </a>

      <a href="#programas" className="hover:text-cyan-300 transition">
        Programas
      </a>

      <a href="#flota" className="hover:text-cyan-300 transition">
        Flota
      </a>

      <a href="#nosotros" className="hover:text-cyan-300 transition">
        Nosotros
      </a>

      <a href="#contacto" className="hover:text-cyan-300 transition">
        Contacto
      </a>

    </nav>

    <button
      onClick={() => setMobileMenu(true)}
      className="md:hidden text-2xl text-cyan-300"
    >
      ☰
    </button>

  </div>

</header>

{/* MOBILE MENU */}

<AnimatePresence>

  {mobileMenu && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed
        inset-0
        z-[100]
        bg-[#020817]/95
        backdrop-blur-2xl
        flex
        flex-col
        items-center
        justify-center
      "
    >

      {/* CLOSE */}

      <button
        onClick={() => setMobileMenu(false)}
        className="
absolute
top-6
right-6
text-4xl
text-cyan-300
"
      >
      
      </button>

      {/* LINKS */}

      <div className="flex flex-col items-center gap-8 text-2xl font-bold">

        <a
          href="#inicio"
          onClick={() => setMobileMenu(false)}
          className="hover:text-cyan-300 transition"
        >
          Inicio
        </a>

        <a
          href="#programas"
          onClick={() => setMobileMenu(false)}
          className="hover:text-cyan-300 transition"
        >
          Programas
        </a>

        <a
          href="#flota"
          onClick={() => setMobileMenu(false)}
          className="hover:text-cyan-300 transition"
        >
          Flota
        </a>

        <a
          href="#nosotros"
          onClick={() => setMobileMenu(false)}
          className="hover:text-cyan-300 transition"
        >
          Nosotros
        </a>

        <a
          href="#contacto"
          onClick={() => setMobileMenu(false)}
          className="hover:text-cyan-300 transition"
        >
          Contacto
        </a>

      </div>

    </motion.div>

  )}

</AnimatePresence>

      {/* HERO */}

      <section
        id="inicio"
        className="
          relative
          min-h-[88vh]
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >

        {/* BACKGROUND */}

       <motion.img
  src={heroImage}
  alt="Hero"
  initial={{ scale: 1.1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 2 }}
  style={{
    transform: `translateY(${offsetY * 0.4}px) scale(1.1)`
  }}
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    will-change-transform
  "
/>

        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#020817]/60
            via-[#020817]/70
            to-[#020817]
          "
        />

        {/* GLOW EFFECT */}

<motion.div
  animate={{
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3]
  }}
  transition={{
    duration: 6,
    repeat: Infinity
  }}
  className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[520px]
    h-[520px]
    rounded-full
    bg-cyan-400/10
    blur-[140px]
  "
/>

        {/* CONTENT */}

        <div className="relative z-10 text-center px-6 max-w-5xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              uppercase
              tracking-[0.3em]
text-cyan-300
text-xs
            "
          >
            Formación Aeronáutica Profesional
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="
text-5xl
md:text-7xl
font-black
leading-tight
mt-6
"
          >

            Conquista el cielo

            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-cyan-100
                bg-clip-text
                text-transparent
              "
            >
              con CAELUM
            </span>

          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="
              text-gray-300
              text-lg
leading-relaxed
mt-7
max-w-2xl
              mx-auto
            "
          >
            Academia enfocada en excelencia,
            seguridad operacional y formación
            profesional para pilotos y sobrecargos en México.
          </motion.p>

</div>

</section>

          {/* PROGRAMAS */}

<section
  id="programas"
  className="py-24 px-6"
>

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[0.35em] text-cyan-300 text-sm">

        FORMACIÓN PROFESIONAL

      </p>

      <h2 className="text-4xl md:text-5xl font-black mt-4">

        Nuestros Programas

      </h2>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* PILOTO */}

      <motion.div

        whileHover={{ y:-8 }}

        className="

          relative

          overflow-hidden

          rounded-3xl

          border

          border-cyan-400/20

          h-[420px]

          cursor-pointer

        "

        onClick={playPilotIntro}

      >

        <img

          src={pilotProgram}

          className="absolute inset-0 w-full h-full object-cover"

        />

        <div

          className="

            absolute

            inset-0

            bg-gradient-to-t

            from-[#020817]

            via-[#020817]/45

            to-transparent

          "

        />

        <div className="absolute bottom-8 left-8 z-10">

          <h3 className="text-3xl font-black">

            Piloto Privado

          </h3>

          <p className="text-gray-300 mt-3">

            Formación profesional de ala fija.

          </p>

          <span className="text-cyan-300 mt-6 block">

            Ver programa →

          </span>

        </div>

      </motion.div>

      {/* SOBRECARGO */}

      <motion.div

        whileHover={{ y:-8 }}

        className="

          relative

          overflow-hidden

          rounded-3xl

          border

          border-cyan-400/20

          h-[420px]

          cursor-pointer

        "

        onClick={playCabinIntro}

      >

        <img

          src={cabinProgram}

          className="absolute inset-0 w-full h-full object-cover"

        />

        <div

          className="

            absolute

            inset-0

            bg-gradient-to-t

            from-[#020817]

            via-[#020817]/45

            to-transparent

          "

        />

        <div className="absolute bottom-8 left-8 z-10">

          <h3 className="text-3xl font-black">

            Sobrecargo

          </h3>

          <p className="text-gray-300 mt-3">

            Seguridad y servicio de cabina.

          </p>

          <span className="text-cyan-300 mt-6 block">

            Ver programa →

          </span>

        </div>

      </motion.div>

      {/* CURSOS */}

      <motion.div

        whileHover={{ y:-8 }}

        className="

          relative

          overflow-hidden

          rounded-3xl

          border

          border-cyan-400/20

          h-[420px]

          cursor-pointer

        "

        onClick={() => navigate("/cursos")}

      >

        <img

          src={coursesProgram}

          className="absolute inset-0 w-full h-full object-cover"

        />

        <div

          className="

            absolute

            inset-0

            bg-gradient-to-t

            from-[#020817]

            via-[#020817]/45

            to-transparent

          "

        />

        <div className="absolute bottom-8 left-8 z-10">

          <h3 className="text-3xl font-black">

            Cursos Online

          </h3>

          <p className="text-gray-300 mt-3">

            Plataforma digital aeronáutica.

          </p>

          <span className="text-cyan-300 mt-6 block">

            Ver cursos →

          </span>

        </div>

      </motion.div>

    </div>

  </div>

</section>
    
{/* PROMOCIONES */}

<section
  id="promociones"
  className="py-20 px-6 bg-white/[0.02]"
>
  <PromotionCarousel />
</section>

      {/* FLOTA */}

<section
  id="flota"
  className="py-24 px-6"
>

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">

      <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
        Nuestra Flota
      </p>

    </div>

    <div
      className="
      relative
      overflow-hidden
      rounded-[36px]
      border
      border-white/10
      h-[420px]
      "
    >

      <img
        src={fleetComingSoon}
        alt="Flota CAELUM"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-[#020817]/25
        via-[#020817]/45
        to-[#020817]/70
        "
      />

      <div
        className="
        absolute
        inset-0
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-10
        "
      >

      </div>

    </div>

  </div>

</section>

      {/* ABOUT */}

      <section
        id="nosotros"
        className="py-20 px-6 bg-white/[0.03]"
      >

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">
              Sobre CAELUM
            </p>

            <h2 className="text-4xl font-black mt-4 leading-tight">
              Formación aeronáutica moderna y profesional
            </h2>

            <p className="text-gray-300 mt-6 text-base leading-relaxed">
              CAELUM Colegio de Aviación ofrece capacitación
              profesional para pilotos privados y sobrecargos,
              combinando excelencia académica,
              seguridad operacional y aeronaves modernas.
            </p>

          </div>

          <img
            src={aboutImage}
            alt="About Aviation"
            className="
              rounded-2xl
              shadow-xl
              border
              border-white/10
              max-w-[90%]
              mx-auto
            "
          />

        </div>

      </section>

      {/* CONTACTO */}

<section
  id="contacto"
  className="py-20 px-6"
>

  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-12">

      <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">
        Contacto
      </p>

      <h2 className="text-4xl font-black mt-3">
        Solicita Información
      </h2>

      <p className="text-gray-300 mt-5 text-base max-w-2xl mx-auto">
        Nuestro equipo puede ayudarte a iniciar tu formación aeronáutica profesional.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-8 items-start">

      {/* IZQUIERDA */}

      <div className="space-y-6">

        {/* INFO */}

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
          "
        >

          <h3 className="text-2xl font-black">
            CAELUM Colegio de Aviación
          </h3>

          <p className="text-gray-400 mt-5 leading-relaxed text-base">
            Formación profesional enfocada en seguridad operacional,
            excelencia académica y desarrollo aeronáutico moderno.
          </p>

          <div className="mt-8 space-y-5 text-gray-300">

            <div>
              <p className="text-cyan-300 font-bold">
                Correo
              </p>

              <p className="mt-2">
                caelum.aviacion@outlook.com
              </p>
            </div>

            <div>
              <p className="text-cyan-300 font-bold">
                Teléfono
              </p>

              <p className="mt-2">
                +52 492 107 7722
              </p>
            </div>

            <div>
              <p className="text-cyan-300 font-bold">
                Ubicación
              </p>

              <p className="mt-2">
                Av. García Salinas #321-A
                <br />
                Guadalupe, Zacatecas
                <br />
                C.P. 98609
              </p>
            </div>

          </div>

        </div>

        {/* MAPA */}

<div className="rounded-2xl overflow-hidden border border-cyan-400/20 shadow-lg">

          <iframe
            title="CAELUM Colegio de Aviación"
            src="https://www.google.com/maps?q=Av%20Garc%C3%ADa%20Salinas%20321-A,%20Las%20Arboledas,%2098097%20Guadalupe,%20Zacatecas&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </div>

      {/* DERECHA */}

      <form
        action="https://formsubmit.co/caelum.aviacion@outlook.com"
        method="POST"
        className="
          rounded-2xl
          border
          border-cyan-400/20
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
          space-y-6
        "
      >

        <input
          type="hidden"
          name="_captcha"
          value="false"
        />

        <input
          type="hidden"
          name="_template"
          value="table"
        />

        <div>

          <label className="block text-xs text-gray-400 mb-2">
            Nombre completo
          </label>

          <input
            type="text"
            name="nombre"
            required
            className="
              w-full
              rounded-xl
              bg-black/30
              border
              border-white/10
              px-4
              py-3
              text-white
              outline-none
              focus:border-cyan-400
              transition
            "
          />

        </div>

        <div>

          <label className="block text-xs text-gray-400 mb-2">
            Teléfono
          </label>

          <input
            type="tel"
            name="telefono"
            required
            className="
              w-full
              rounded-xl
              bg-black/30
              border
              border-white/10
              px-4
              py-3
              text-white
              outline-none
              focus:border-cyan-400
              transition
            "
          />

        </div>

        <div>

          <label className="block text-xs text-gray-400 mb-2">
            Correo electrónico
          </label>

          <input
            type="email"
            name="email"
            required
            className="
              w-full
              rounded-xl
              bg-black/30
              border
              border-white/10
              px-4
              py-3
              text-white
              outline-none
              focus:border-cyan-400
              transition
            "
          />

        </div>

        <div>

          <label className="block text-xs text-gray-400 mb-2">
            Programa de interés
          </label>

          <select
            name="programa"
            className="
              w-full
              rounded-xl
              bg-black/30
              border
              border-white/10
              px-4
              py-3
              text-white
              outline-none
              focus:border-cyan-400
              transition
            "
          >

            <option value="Piloto Privado">
              Piloto Privado
            </option>

            <option value="Sobrecargo">
              Sobrecargo
            </option>

            <option value="Cursos Online">
              Cursos Online
            </option>

          </select>

        </div>

        <div>

          <label className="block text-xs text-gray-400 mb-2">
            Mensaje
          </label>

          <textarea
            name="mensaje"
            rows={5}
            className="
              w-full
              rounded-xl
              bg-black/30
              border
              border-white/10
              px-4
              py-3
              text-white
              outline-none
              focus:border-cyan-400
              transition
              resize-none
            "
          />

        </div>

        <button
          type="submit"
          className="
            w-full
            py-4
            rounded-xl
            bg-cyan-400
            text-black
            font-semibold
            text-base
            hover:scale-[1.02]
            transition
            shadow-[0_0_25px_rgba(34,211,238,0.35)]
          "
        >
          Enviar Solicitud
        </button>

      </form>

    </div>

  </div>

</section>

{/* WHATSAPP FLOAT */}

<a
  href="https://wa.me/524921077722?text=Hola%20CAELUM,%20me%20interesa%20recibir%20información%20sobre%20sus%20programas."
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-5
    right-5
    z-50
    w-14
    h-14
    rounded-full
    bg-cyan-400
    text-black
    flex
    items-center
    justify-center
    text-2xl
    shadow-[0_0_25px_rgba(34,211,238,0.35)]
    hover:scale-105
    transition
  "
>
  ✆
</a>

{/* FOOTER */}

<footer
  className="
    border-t
    border-white/10
    bg-black/30
    backdrop-blur-xl
    py-12
    px-6
  "
>

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-3 gap-10">

      {/* BRAND */}

      <div>

        <div className="flex items-center gap-4">

          <img
            src={logoImage}
            alt="CAELUM"
            className="w-12 h-12 object-contain"
          />

          <div>

            <h3
              className="
                text-xl
                font-black
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-cyan-100
                bg-clip-text
                text-transparent
              "
            >
              CAELUM
            </h3>

            <p className="text-xs tracking-[0.3em] text-gray-500">
              COLEGIO DE AVIACION
            </p>

          </div>

        </div>

        <p className="text-gray-400 mt-6 text-sm leading-relaxed">
          Formación aeronáutica profesional
          enfocada en excelencia operativa,
          seguridad y desarrollo profesional.
        </p>

      </div>

      {/* LINKS */}

      <div>

        <h4 className="text-lg font-bold mb-4">
          Navegación
        </h4>

        <div className="flex flex-col gap-4 text-gray-400">

          <a href="#inicio" className="hover:text-cyan-300 transition">
            Inicio
          </a>

          <a href="#programas" className="hover:text-cyan-300 transition">
            Programas
          </a>

          <a href="#flota" className="hover:text-cyan-300 transition">
            Flota
          </a>

          <a href="#nosotros" className="hover:text-cyan-300 transition">
            Nosotros
          </a>

          <a href="#contacto" className="hover:text-cyan-300 transition">
            Contacto
          </a>

        </div>

      </div>

      {/* CONTACTO */}

      <div>

        <h4 className="text-lg font-bold mb-4">
          Contacto
        </h4>
<div className="mb-5">

  <p className="text-cyan-300 font-semibold">
    Horario
  </p>

  <p className="text-gray-400 text-sm mt-1">
    Lunes a Viernes
    <br />
    09:00 - 18:00 hrs
  </p>

</div>
        <div className="flex flex-col gap-3 text-sm text-gray-400">

          <p className="text-sm">
  caelum.aviacion@outlook.com
</p>

          <p className="text-sm">
  +52 492 107 7722
</p>

          <p className="text-sm">
  Av. García Salinas #321-A
  <br />
  Guadalupe, Zacatecas
  <br />
  C.P. 98609
</p>  

         <div className="flex flex-col gap-2 text-sm">

  <a
    href="https://www.instagram.com/caelum.colegio.de.aviacion"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-400 transition"
  >
    Instagram
  </a>

  <a
    href="https://www.tiktok.com/@caelum.colegiodeaviacion"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cyan-300 transition"
  >
    TikTok
  </a>

  <a
    href="https://wa.me/524921077722"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-400 transition"
  >
    WhatsApp
  </a>

</div>
        </div>

      </div>

    </div>

    {/* COPYRIGHT */}

    <div
      className="
        mt-10
        pt-6
        border-t
        border-white/10
        text-center
        text-gray-500
      "
    >
      © 2026 CAELUM Colegio de Aviación. Todos los derechos reservados.
    </div>

  </div>

</footer>

        </main>
  </>
);

}