import heroImage from "../assets/images/hero-aviation.jpg";
import logoImage from "../assets/images/logo-caelum.png";

import aircraft1 from "../assets/images/aircraft-1.jpg";
import aircraft2 from "../assets/images/aircraft-2.jpg";
import aircraft3 from "../assets/images/aircraft-3.jpg";

import aboutImage from "../assets/images/about-aviation.jpg";

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
      <div className="fixed inset-0 z-[99999] bg-black">

        <video
  autoPlay
  muted
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
              text-7xl
              md:text-9xl
              font-black
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
    text-xl
    md:text-3xl
    mt-6
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

  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <img
      src={logoImage}
      alt="CAELUM"
      className="h-12"
    />

    <nav className="hidden md:flex gap-8 font-semibold">

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
      className="md:hidden text-3xl text-cyan-300"
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
          top-8
          right-8
          text-5xl
          text-cyan-300
        "
      >
      
      </button>

      {/* LINKS */}

      <div className="flex flex-col items-center gap-10 text-3xl font-bold">

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
          min-h-screen
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
    w-[700px]
    h-[700px]
    rounded-full
    bg-cyan-400/10
    blur-[180px]
  "
/>

        {/* CONTENT */}

        <div className="relative z-10 text-center px-6 max-w-6xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              uppercase
              tracking-[0.4em]
              text-cyan-300
              text-sm
            "
          >
            Formación Aeronáutica Profesional
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="
              text-6xl
              md:text-8xl
              font-black
              leading-tight
              mt-8
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
              text-xl
              leading-relaxed
              mt-10
              max-w-3xl
              mx-auto
            "
          >
            Academia enfocada en excelencia,
            seguridad operacional y formación
            profesional para pilotos y sobrecargos en México.
          </motion.p>

          {/* BOTONES */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="
              mt-14
              flex
              flex-col
              lg:flex-row
              justify-center
              items-center
              gap-6
            "
          >

           <button
  onClick={playPilotIntro}
  className="
    px-10
    py-5
    rounded-2xl
    bg-cyan-400
    text-black
    font-bold
    text-lg
    hover:scale-105
    transition
    shadow-[0_0_50px_rgba(34,211,238,0.5)]
  "
>
  Carrera Piloto Privado
</button>

            <button
  onClick={playCabinIntro}
  className="
    px-10
    py-5
    rounded-2xl
    border
    border-white/10
    bg-white/5
    font-bold
    text-lg
    hover:bg-white/10
    transition
  "
>
  Sobrecargo de Aviación
</button>

            <Link
              to="/cursos"
              className="
                px-10
                py-5
                rounded-2xl
                border
                border-cyan-400/30
                bg-cyan-400/10
                text-cyan-300
                font-bold
                text-lg
                hover:bg-cyan-400/20
                transition
              "
            >
              Nuestros Cursos
            </Link>

          </motion.div>

        </div>

      </section>

      {/* PROGRAMAS */}

     <motion.section
  id="programas"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="py-28 px-6 bg-white/[0.02]"
>

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
              Formación Profesional
            </p>

            <h2 className="text-5xl font-black mt-4">
              Nuestros Programas
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <Link
              to="/piloto"
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-10
                hover:bg-cyan-400/10
                transition
              "
            >

              <div className="text-5xl mb-6">
                ✈️
              </div>

              <h3 className="text-3xl font-black">
                Piloto Privado
              </h3>

              <p className="text-gray-300 mt-6">
                Formación profesional de ala fija
                con teoría, simulador y vuelo real.
              </p>

            </Link>

            <Link
              to="/sobrecargo"
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-10
                hover:bg-cyan-400/10
                transition
              "
            >

              <div className="text-5xl mb-6">
                🛫
              </div>

              <h3 className="text-3xl font-black">
                Sobrecargo
              </h3>

              <p className="text-gray-300 mt-6">
                Capacitación enfocada en seguridad,
                servicio y procedimientos de cabina.
              </p>

            </Link>

            <Link
              to="/cursos"
              className="
                rounded-3xl
                border
                border-cyan-400/20
                bg-cyan-400/5
                p-10
                hover:bg-cyan-400/10
                transition
              "
            >

              <div className="text-5xl mb-6">
                🎓
              </div>

              <h3 className="text-3xl font-black">
                Cursos Online
              </h3>

              <p className="text-gray-300 mt-6">
                Plataforma digital de capacitación
                aeronáutica próximamente disponible.
              </p>

            </Link>

          </div>

        </div>

</motion.section>

      {/* FLOTA */}

      <section
        id="flota"
        className="py-28 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
              Nuestra Flota
            </p>

            <h2 className="text-5xl font-black mt-4">
              Aeronaves Profesionales
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>

              <div
                className="
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/5
                "
              >

                <img
                  src={aircraft1}
                  alt="Bristell NG5"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">

                  <h3 className="text-3xl font-black">
                    Bristell NG5
                  </h3>

                  <p className="text-gray-300 mt-4">
                    Aeronave moderna de alto rendimiento
                    utilizada para formación avanzada.
                  </p>

                </div>

              </div>

            </Tilt>

            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>

              <div
                className="
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/5
                "
              >

                <img
                  src={aircraft2}
                  alt="Cessna 150"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">

                  <h3 className="text-3xl font-black">
                    Cessna 150
                  </h3>

                  <p className="text-gray-300 mt-4">
                    Aeronave ideal para entrenamiento
                    básico y navegación visual.
                  </p>

                </div>

              </div>

            </Tilt>

            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>

              <div
                className="
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/5
                "
              >

                <img
                  src={aircraft3}
                  alt="Cessna 172"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">

                  <h3 className="text-3xl font-black">
                    Cessna 172
                  </h3>

                  <p className="text-gray-300 mt-4">
                    Aeronave reconocida mundialmente
                    para navegación y procedimientos avanzados.
                  </p>

                </div>

              </div>

            </Tilt>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="nosotros"
        className="py-28 px-6 bg-white/[0.03]"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">
              Sobre CAELUM
            </p>

            <h2 className="text-5xl font-black mt-4 leading-tight">
              Formación aeronáutica moderna y profesional
            </h2>

            <p className="text-gray-300 mt-8 text-lg leading-relaxed">
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
              rounded-3xl
              shadow-2xl
              border
              border-white/10
            "
          />

        </div>

      </section>

      {/* CONTACTO */}

<section
  id="contacto"
  className="py-32 px-6"
>

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-20">

      <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">
        Contacto
      </p>

      <h2 className="text-5xl font-black mt-4">
        Solicita Información
      </h2>

      <p className="text-gray-300 mt-8 text-lg max-w-3xl mx-auto">
        Nuestro equipo puede ayudarte a iniciar tu formación aeronáutica profesional.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-14 items-start">

      {/* INFO */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-10
        "
      >

        <h3 className="text-3xl font-black">
          CAELUM Colegio de Aviación
        </h3>

        <p className="text-gray-400 mt-8 leading-relaxed text-lg">
          Formación profesional enfocada en seguridad operacional,
          excelencia académica y desarrollo aeronáutico moderno.
        </p>

        <div className="mt-12 space-y-6 text-gray-300">

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
              Guadalupe, Zacatecas
              C.P. 98609
            </p>
          </div> 

        </div>

      </div>

      {/* FORM */}

      <form
       action="https://formsubmit.co/caelum.aviacion@outlook.com"
        method="POST"
        className="
          rounded-3xl
          border
          border-cyan-400/20
          bg-white/[0.03]
          backdrop-blur-xl
          p-10
          space-y-8
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

        {/* NOMBRE */}

        <div>

          <label className="block text-sm text-gray-400 mb-3">
            Nombre completo
          </label>

          <input
            type="text"
            name="nombre"
            required
            className="
              w-full
              rounded-2xl
              bg-black/30
              border
              border-white/10
              px-5
              py-4
              text-white
              outline-none
              focus:border-cyan-400
              transition
            "
          />

        </div>

        {/* TELEFONO */}

        <div>

          <label className="block text-sm text-gray-400 mb-3">
            Teléfono
          </label>

          <input
            type="tel"
            name="telefono"
            required
            className="
              w-full
              rounded-2xl
              bg-black/30
              border
              border-white/10
              px-5
              py-4
              text-white
              outline-none
              focus:border-cyan-400
              transition
            "
          />

        </div>

        {/* EMAIL */}

        <div>

          <label className="block text-sm text-gray-400 mb-3">
            Correo electrónico
          </label>

          <input
            type="email"
            name="email"
            required
            className="
              w-full
              rounded-2xl
              bg-black/30
              border
              border-white/10
              px-5
              py-4
              text-white
              outline-none
              focus:border-cyan-400
              transition
            "
          />

        </div>

        {/* PROGRAMA */}

        <div>

          <label className="block text-sm text-gray-400 mb-3">
            Programa de interés
          </label>

          <select
            name="programa"
            className="
              w-full
              rounded-2xl
              bg-black/30
              border
              border-white/10
              px-5
              py-4
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

        {/* MENSAJE */}

        <div>

          <label className="block text-sm text-gray-400 mb-3">
            Mensaje
          </label>

          <textarea
            name="mensaje"
            rows={5}
            className="
              w-full
              rounded-2xl
              bg-black/30
              border
              border-white/10
              px-5
              py-4
              text-white
              outline-none
              focus:border-cyan-400
              transition
              resize-none
            "
          />

        </div>

        {/* BOTON */}

        <button
          type="submit"
          className="
            w-full
            py-5
            rounded-2xl
            bg-cyan-400
            text-black
            font-black
            text-lg
            hover:scale-[1.02]
            transition
            shadow-[0_0_40px_rgba(34,211,238,0.4)]
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
    bottom-6
    right-6
    z-50
    w-16
    h-16
    rounded-full
    bg-cyan-400
    text-black
    flex
    items-center
    justify-center
    text-3xl
    shadow-[0_0_40px_rgba(34,211,238,0.5)]
    hover:scale-110
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
    py-16
    px-6
  "
>

  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-3 gap-14">

      {/* BRAND */}

      <div>

        <div className="flex items-center gap-4">

          <img
            src={logoImage}
            alt="CAELUM"
            className="w-14 h-14 object-contain"
          />

          <div>

            <h3
              className="
                text-2xl
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

        <p className="text-gray-400 mt-8 leading-relaxed">
          Formación aeronáutica profesional
          enfocada en excelencia operativa,
          seguridad y desarrollo profesional.
        </p>

      </div>

      {/* LINKS */}

      <div>

        <h4 className="text-xl font-bold mb-6">
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

        <h4 className="text-xl font-bold mb-6">
          Contacto
        </h4>
<div className="mb-6">

  <p className="text-cyan-300 font-semibold">
    Horario
  </p>

  <p className="text-gray-400 mt-2">
    Lunes a Viernes
    <br />
    09:00 - 18:00 hrs
  </p>

</div>
        <div className="flex flex-col gap-4 text-gray-400">

          <p className="mt-2">
  caelum.aviacion@outlook.com
</p>

          <p className="mt-2">
  +52 492 107 7722
</p>

          <p className="mt-2">
  Av. García Salinas #321-A
  <br />
  Guadalupe, Zacatecas
  <br />
  C.P. 98609
</p>  

         <div className="flex flex-col gap-3">

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
        mt-16
        pt-8
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