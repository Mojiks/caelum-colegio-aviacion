import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import {
  AnimatePresence,
  motion
} from "framer-motion";

import {
  useEffect
} from "react";

import Landing from "./pages/Landing";

import PilotPage from "./pages/PilotPage";
import CabinCrewPage from "./pages/CabinCrewPage";
import CoursesPage from "./pages/CoursesPage";

function AnimatedRoutes() {

  const location = useLocation();

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }, [location.pathname]);

  return (

    <AnimatePresence mode="wait">

      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 40
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: -40
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
      >

        <Routes location={location}>

          <Route
            path="/"
            element={<Landing />}
          />

          <Route
            path="/piloto"
            element={<PilotPage />}
          />

          <Route
            path="/sobrecargo"
            element={<CabinCrewPage />}
          />

          <Route
            path="/cursos"
            element={<CoursesPage />}
          />

        </Routes>

      </motion.div>

    </AnimatePresence>

  );

}

export default function App() {

  return <AnimatedRoutes />;

}