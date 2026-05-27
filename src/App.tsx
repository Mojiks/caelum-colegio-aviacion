import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing";

import PilotPage from "./pages/PilotPage";
import CabinCrewPage from "./pages/CabinCrewPage";
import CoursesPage from "./pages/CoursesPage";

function AnimatedRoutes() {

  const location = useLocation();

  return (

    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<Landing />} />

        <Route path="/piloto" element={<PilotPage />} />

        <Route path="/sobrecargo" element={<CabinCrewPage />} />

        <Route path="/cursos" element={<CoursesPage />} />

      </Routes>

    </AnimatePresence>

  );

}

export default function App() {

  return <AnimatedRoutes />;

}