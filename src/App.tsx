import {
  useCallback,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
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

const UNLOCK_STORAGE_KEY = "birthdayUnlocked";

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

interface ProtectedPageProps {
  children: ReactNode;
}

const ProtectedPage = ({
  children,
}: ProtectedPageProps) => {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
};

const AppRoutes = () => {
  const location = useLocation();

  const isProtectedPage = protectedPaths.includes(
    location.pathname
  );

  return (
    <>
      <ScrollToTop />

      {isProtectedPage && <FloatingHearts />}
      {isProtectedPage && <Navigation />}
      {isProtectedPage && <MusicControl />}

      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}
        >
          {/* Welcome Lock */}
          <Route
            path="/"
            element={<WelcomeLock />}
          />

          {/* Home */}
          <Route
            path="/home"
            element={
              <ProtectedPage>
                <Landing />
              </ProtectedPage>
            }
          />

          {/* Birthday Wish */}
          <Route
            path="/birthday-wish"
            element={
              <ProtectedPage>
                <BirthdayWish />
              </ProtectedPage>
            }
          />

          {/* Gallery */}
          <Route
            path="/gallery"
            element={
              <ProtectedPage>
                <MemoryGallery />
              </ProtectedPage>
            }
          />

          {/* Love Counter */}
          <Route
            path="/love-counter"
            element={
              <ProtectedPage>
                <LoveCounterPage />
              </ProtectedPage>
            }
          />

          {/* Secret Surprise */}
          <Route
            path="/surprise"
            element={
              <ProtectedPage>
                <SecretSurprise />
              </ProtectedPage>
            }
          />

          {/* Love Quiz */}
          <Route
            path="/love-quiz"
            element={
              <ProtectedPage>
                <MiniLoveQuizPage />
              </ProtectedPage>
            }
          />

          {/* Not Found */}
          <Route
            path="/404"
            element={<NotFound />}
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/404"
                replace
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = useCallback(() => {
    const navigationEntry =
      performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming | undefined;

    const navigationType =
      navigationEntry?.type;

    /*
      Fresh website opening:
      Clear the previous unlock value so the
      Welcome Lock appears.

      Browser refresh:
      Keep the unlock value so the user remains
      on the same current page.
    */
    if (navigationType !== "reload") {
      sessionStorage.removeItem(
        UNLOCK_STORAGE_KEY
      );
    }

    setLoaded(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />

        {!loaded && (
          <LoadingScreen
            onComplete={handleLoaded}
          />
        )}

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