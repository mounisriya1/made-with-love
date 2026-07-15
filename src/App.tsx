import { useCallback, useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import FloatingHearts from "@/components/FloatingHearts";
import LoadingScreen from "@/components/LoadingScreen";
import MusicControl from "@/components/MusicControl";
import Navigation from "@/components/Navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

import BirthdayWish from "@/pages/BirthdayWish";
import Landing from "@/pages/Landing";
import LoveCounterPage from "@/pages/LoveCounterPage";
import MemoryGallery from "@/pages/MemoryGallery";
import MiniLoveQuizPage from "@/pages/MiniLoveQuizPage";
import NotFound from "@/pages/NotFound";
import SecretSurprise from "@/pages/SecretSurprise";
import WelcomeLock from "@/pages/WelcomeLock";

const queryClient = new QueryClient();

const protectedPaths = [
  "/home",
  "/birthday-wish",
  "/gallery",
  "/love-counter",
  "/surprise",
  "/love-quiz",
];

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return null;
};

const ProtectedPage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

const AppRoutes = () => {
  const location = useLocation();

  const isLockScreen = location.pathname === "/";
  const isProtectedPage = protectedPaths.includes(location.pathname);

  return (
    <>
      <ScrollToTop />

      {isProtectedPage && <FloatingHearts />}
      {isProtectedPage && <Navigation />}
      {isProtectedPage && <MusicControl />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<WelcomeLock />} />

          <Route
            path="/home"
            element={
              <ProtectedPage>
                <Landing />
              </ProtectedPage>
            }
          />

          <Route
            path="/birthday-wish"
            element={
              <ProtectedPage>
                <BirthdayWish />
              </ProtectedPage>
            }
          />

          <Route
            path="/gallery"
            element={
              <ProtectedPage>
                <MemoryGallery />
              </ProtectedPage>
            }
          />

          <Route
            path="/love-counter"
            element={
              <ProtectedPage>
                <LoveCounterPage />
              </ProtectedPage>
            }
          />

          <Route
            path="/surprise"
            element={
              <ProtectedPage>
                <SecretSurprise />
              </ProtectedPage>
            }
          />

          <Route
            path="/love-quiz"
            element={
              <ProtectedPage>
                <MiniLoveQuizPage />
              </ProtectedPage>
            }
          />

          

          <Route path="/404" element={<NotFound />} />

          <Route
            path="*"
            element={<Navigate to="/404" replace />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />

        {!loaded && <LoadingScreen onComplete={handleLoaded} />}

        {loaded && (
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;