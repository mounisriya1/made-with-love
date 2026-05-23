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
  HelpCircle,
  Award,
  PartyPopper,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/home", label: "Home", icon: Home },
  { path: "/birthday-wish", label: "Wish", icon: Cake },
  { path: "/gallery", label: "Gallery", icon: Images },
  { path: "/love-counter", label: "Counter", icon: Timer },
  { path: "/surprise", label: "Surprise", icon: Gift },
  { path: "/love-quiz", label: "Quiz", icon: HelpCircle },
  { path: "/certificate", label: "Certificate", icon: Award },
];

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-40 border-b border-white/60 bg-white/65 shadow-lg shadow-rose-200/25 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          {/* Big Logo */}
          <Link
            to="/home"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 via-pink-500 to-red-500 shadow-xl shadow-rose-300/50"
            >
              <Heart className="h-7 w-7 fill-white text-white" />

              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md"
              >
                <Sparkles className="h-3.5 w-3.5 text-rose-500" />
              </motion.span>
            </motion.div>

            <div className="hidden leading-tight sm:block">
              <p className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text font-display text-2xl font-extrabold text-transparent">
                My Love
              </p>
              <p className="-mt-1 text-xs font-bold tracking-wide text-rose-500/75">
                birthday surprise world
              </p>
            </div>
          </Link>

          {/* Big Desktop Menu */}
          <div className="hidden items-center gap-2 rounded-full border border-white/80 bg-white/50 p-2 shadow-xl shadow-rose-200/30 backdrop-blur-xl lg:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition-all duration-300 ${
                    active
                      ? "text-white"
                      : "text-rose-600/80 hover:bg-white/80 hover:text-rose-700"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg shadow-rose-300/50"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                    />
                  )}

                  <Icon className="relative z-10 h-5 w-5" />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Tablet Menu */}
          <div className="hidden items-center gap-2 md:flex lg:hidden">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border shadow-md transition-all ${
                    active
                      ? "border-rose-300 bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-rose-300/40"
                      : "border-white/80 bg-white/70 text-rose-600 hover:bg-rose-100"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}

            <button
              onClick={() => setOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/70 text-rose-600 shadow-md"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/70 text-rose-600 shadow-md backdrop-blur-md md:hidden"
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile / Tablet Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-black/35 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: -25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 150 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto mt-4 w-full max-w-lg overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/90 p-5 shadow-2xl backdrop-blur-xl"
            >
              {/* Menu Header */}
              <div className="relative overflow-hidden rounded-[1.8rem] bg-gradient-to-r from-rose-500 to-pink-500 p-5 text-white shadow-lg shadow-rose-300/40">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                      <PartyPopper className="h-7 w-7 text-white" />
                    </div>

                    <div>
                      <p className="font-display text-2xl font-extrabold">
                        Birthday Menu
                      </p>
                      <p className="text-sm font-semibold text-white/80">
                        choose a cute surprise
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Big Menu Items */}
              <div className="mt-5 grid grid-cols-2 gap-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`group relative overflow-hidden rounded-3xl border px-4 py-5 text-center shadow-md transition-all ${
                        active
                          ? "border-rose-300 bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                          : "border-white/80 bg-white/70 text-rose-700 hover:bg-rose-100"
                      }`}
                    >
                      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/20 blur-xl" />

                      <div
                        className={`relative mx-auto flex h-12 w-12 items-center justify-center rounded-full ${
                          active ? "bg-white/20" : "bg-rose-100"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <p className="relative mt-3 text-sm font-bold">
                        {item.label}
                      </p>

                      {active && (
                        <p className="relative mt-1 text-xs opacity-90">
                          selected ❤️
                        </p>
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;