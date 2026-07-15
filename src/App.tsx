import { useState, useCallback, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "@/components/LoadingScreen";
import FloatingHearts from "@/components/FloatingHearts";
import MusicControl from "@/components/MusicControl";
import Navigation from "@/components/Navigation";

import WelcomeLock from "@/pages/WelcomeLock";
import Landing from "@/pages/Landing";
import MemoryGallery from "@/pages/MemoryGallery";
import BirthdayWish from "@/pages/BirthdayWish";
import LoveCounterPage from "@/pages/LoveCounterPage";
import SecretSurprise from "@/pages/SecretSurprise";
import MiniLoveQuizPage from "@/pages/MiniLoveQuizPage";

import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

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

const AppRoutes = () => {
  const location = useLocation();
  const isLockScreen = location.pathname === "/";

  return (
    <>
      <ScrollToTop />

      {!isLockScreen && <FloatingHearts />}
      {!isLockScreen && <Navigation />}
      {!isLockScreen && <MusicControl />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<WelcomeLock />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/gallery" element={<MemoryGallery />} />
          <Route path="/birthday-wish" element={<BirthdayWish />} />
          <Route path="/love-counter" element={<LoveCounterPage />} />
          <Route path="/surprise" element={<SecretSurprise />} />
          <Route path="/love-quiz" element={<MiniLoveQuizPage />} />
          
          <Route path="*" element={<NotFound />} />
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