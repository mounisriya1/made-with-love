import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "@/components/LoadingScreen";
import FloatingHearts from "@/components/FloatingHearts";
import MusicControl from "@/components/MusicControl";
import Navigation from "@/components/Navigation";

import Landing from "@/pages/Landing";
import LoveStory from "@/pages/LoveStory";
import MemoryGallery from "@/pages/MemoryGallery";
import ReasonsILoveYou from "@/pages/ReasonsILoveYou";
import BirthdayWish from "@/pages/BirthdayWish";
import LoveCounterPage from "@/pages/LoveCounterPage";
import SecretSurprise from "@/pages/SecretSurprise";
import FutureWithYou from "@/pages/FutureWithYou";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />

        {/* Loading Screen */}
        {!loaded && <LoadingScreen onComplete={handleLoaded} />}

        {/* Main Website */}
        {loaded && (
          <BrowserRouter>
            {/* Background floating hearts */}
            <FloatingHearts />

            {/* Navigation Bar */}
            <Navigation />

            {/* Music Control Button */}
            <MusicControl />

            {/* Page Routes */}
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/our-story" element={<LoveStory />} />
                <Route path="/gallery" element={<MemoryGallery />} />
                <Route path="/reasons" element={<ReasonsILoveYou />} />
                <Route path="/birthday-wish" element={<BirthdayWish />} />
                <Route path="/love-counter" element={<LoveCounterPage />} />
                <Route path="/surprise" element={<SecretSurprise />} />
                <Route path="/future" element={<FutureWithYou />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;