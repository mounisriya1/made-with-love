import { Link, useLocation } from "react-router-dom";
import {
  Heart,
  Menu,
  X,
  Home,
  Cake,
  Images,
  Timer,
  Gift,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/birthday-wish", label: "Birthday Wish", icon: Cake },
  { path: "/gallery", label: "Gallery", icon: Images },
  { path: "/love-counter", label: "Love Counter", icon: Timer },
  { path: "/surprise", label: "Surprise", icon: Gift },
];

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/50 bg-white/55 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2"
        >
          <motion.div
            whileHover={{ rotate: 12, scale: 1.08 }}
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg shadow-rose-300/40"
          >
            <Heart className="h-5 w-5 fill-white text-white" />

            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-sm">
              <Sparkles className="h-2.5 w-2.5 text-rose-500" />
            </span>
          </motion.div>

          <div className="hidden sm:block leading-tight">
            <p className="font-display text-lg font-extrabold bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              My Love
            </p>
            <p className="-mt-1 text-[10px] font-semibold tracking-wide text-rose-500/70">
              made with love
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/45 p-1 shadow-sm backdrop-blur-md md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "text-white"
                    : "text-rose-600/75 hover:bg-white/60 hover:text-rose-700"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 shadow-md shadow-rose-300/40"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}

                <Icon className="relative z-10 h-4 w-4" />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/60 text-rose-600 shadow-sm backdrop-blur-md md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-white/60 bg-white/80 backdrop-blur-xl md:hidden"
          >
            <div className="mx-4 mb-4 mt-2 rounded-3xl border border-white/70 bg-white/60 p-3 shadow-xl">
              <div className="grid gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                        active
                          ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md shadow-rose-300/40"
                          : "text-rose-700 hover:bg-rose-100/70"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${
                          active ? "bg-white/20" : "bg-white/70"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>

                      <span>{item.label}</span>

                      {active && (
                        <span className="ml-auto text-xs opacity-90">❤️</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;