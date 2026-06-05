import { supabase } from "./lib/supabase";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Landing from "./pages/Landing";
import PilotPage from "./pages/PilotPage";
import CabinCrewPage from "./pages/CabinCrewPage";
import CoursesPage from "./pages/CoursesPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import MyCoursesPage from "./pages/MyCoursesPage";
import CourseCfitAlarPage from "./pages/CourseCfitAlarPage";
import ProfilePage from "./pages/ProfilePage";
import CertificatesPage from "./pages/CertificatesPage";
import SupportPage from "./pages/SupportPage";
import ModulePage from "./pages/ModulePage";
import LessonPage from "./pages/LessonPage";
import QuizPage from "./pages/QuizPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
       
        <Route path="/" element={<Landing />} />

<Route path="/piloto" element={<PilotPage />} />
<Route path="/sobrecargo" element={<CabinCrewPage />} />
<Route path="/cursos" element={<CoursesPage />} />

<Route path="/login" element={<LoginPage />} />
<Route path="/registro" element={<RegisterPage />} />

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  }
/>
<Route
  path="/perfil"
  element={<ProfilePage />}
/>
<Route
  path="/mis-cursos"
  element={
    <ProtectedRoute>
      <MyCoursesPage />
    </ProtectedRoute>
  }
/>
<Route
  path="/quiz/:id"
  element={<QuizPage />}
/>
<Route
  path="/certificados"
  element={<CertificatesPage />}
/>
<Route
  path="/curso/cfit-alar"
  element={<CourseCfitAlarPage />}
/>
<Route
  path="/soporte"
  element={<SupportPage />}
/>
<Route
  path="/modulo/:id"
  element={<ModulePage />}
/>
<Route
  path="/lesson/:id"
  element={<LessonPage />}
/>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return <AnimatedRoutes />;
}