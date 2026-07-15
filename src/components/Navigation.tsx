import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Cake,
  Gift,
  Heart,
  HelpCircle,
  Home,
  Images,
  Menu,
  PartyPopper,
  Sparkles,
  Timer,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  {
    path: "/home",
    label: "Home",
    icon: Home,
  },
  {
    path: "/birthday-wish",
    label: "Wish",
    icon: Cake,
  },
  {
    path: "/gallery",
    label: "Gallery",
    icon: Images,
  },
  {
    path: "/love-counter",
    label: "Counter",
    icon: Timer,
  },
  {
    path: "/surprise",
    label: "Surprise",
    icon: Gift,
  },
  {
    path: "/love-quiz",
    label: "Quiz",
    icon: HelpCircle,
  },
  
];

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className="
          fixed
          inset-x-0
          top-0
          z-40
          w-full
          border-b
          border-white/60
          bg-white/75
          shadow-lg
          shadow-rose-200/20
          backdrop-blur-2xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-16
            w-full
            max-w-[1500px]
            items-center
            justify-between
            gap-3
            px-3
            sm:h-20
            sm:px-5
            lg:px-8
          "
        >
          {/* Logo */}
          <Link
            to="/home"
            onClick={() => setOpen(false)}
            aria-label="Go to home page"
            className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
          >
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                relative
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-rose-500
                via-pink-500
                to-red-500
                shadow-lg
                shadow-rose-300/40
                sm:h-14
                sm:w-14
              "
            >
              <Heart className="h-5 w-5 fill-white text-white sm:h-7 sm:w-7" />

              <motion.span
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
                className="
                  absolute
                  -right-1
                  -top-1
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-md
                  sm:h-6
                  sm:w-6
                "
              >
                <Sparkles className="h-3 w-3 text-rose-500 sm:h-3.5 sm:w-3.5" />
              </motion.span>
            </motion.div>

            <div className="min-w-0 leading-tight">
              <p
                className="
                  truncate
                  bg-gradient-to-r
                  from-rose-500
                  via-pink-500
                  to-red-500
                  bg-clip-text
                  font-display
                  text-lg
                  font-extrabold
                  text-transparent
                  sm:text-xl
                  xl:text-2xl
                "
              >
                My Love
              </p>

              <p
                className="
                  hidden
                  truncate
                  text-[10px]
                  font-bold
                  tracking-wide
                  text-rose-500/75
                  sm:block
                  xl:text-xs
                "
              >
                Birthday surprise world
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div
            className="
              hidden
              min-w-0
              items-center
              gap-1
              rounded-full
              border
              border-white/80
              bg-white/60
              p-1.5
              shadow-xl
              shadow-rose-200/25
              backdrop-blur-xl
              xl:flex
            "
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative
                    flex
                    shrink-0
                    items-center
                    gap-1.5
                    rounded-full
                    px-3
                    py-2.5
                    text-xs
                    font-bold
                    transition-all
                    duration-300
                    2xl:px-4
                    2xl:text-sm
                    ${
                      active
                        ? "text-white"
                        : "text-rose-600/80 hover:bg-white/85 hover:text-rose-700"
                    }
                  `}
                >
                  {active && (
                    <motion.span
                      layoutId="activeNavigationItem"
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-gradient-to-r
                        from-rose-500
                        to-pink-500
                        shadow-lg
                        shadow-rose-300/45
                      "
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                    />
                  )}

                  <Icon className="relative z-10 h-4 w-4 2xl:h-5 2xl:w-5" />

                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Tablet navigation */}
          <div className="hidden items-center gap-2 md:flex xl:hidden">
            {navItems.slice(0, 3).map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-label={item.label}
                  title={item.label}
                  className={`
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    shadow-md
                    transition-all
                    ${
                      active
                        ? "border-rose-300 bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-rose-300/40"
                        : "border-white/80 bg-white/75 text-rose-600 hover:bg-rose-100"
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open birthday menu"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/80
                bg-white/75
                text-rose-600
                shadow-md
                transition
                hover:bg-rose-100
              "
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            type="button"
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setOpen(true)}
            aria-label="Open birthday menu"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/80
              bg-white/80
              text-rose-600
              shadow-md
              backdrop-blur-md
              md:hidden
            "
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile and tablet menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setOpen(false)}
            className="
              fixed
              inset-0
              z-[100]
              flex
              w-full
              items-start
              justify-center
              overflow-y-auto
              overflow-x-hidden
              bg-black/40
              px-3
              py-4
              backdrop-blur-sm
              sm:px-5
              sm:py-6
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -18,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -18,
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 170,
                damping: 20,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                my-auto
                w-full
                max-w-lg
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/80
                bg-white/95
                p-3
                shadow-2xl
                backdrop-blur-xl
                sm:rounded-[2rem]
                sm:p-5
              "
            >
              {/* Modal header */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.2rem]
                  bg-gradient-to-r
                  from-rose-500
                  to-pink-500
                  p-3.5
                  text-white
                  shadow-lg
                  shadow-rose-300/40
                  sm:rounded-[1.7rem]
                  sm:p-5
                "
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/20 blur-2xl sm:h-28 sm:w-28" />

                <div className="relative flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white/20
                        sm:h-14
                        sm:w-14
                      "
                    >
                      <PartyPopper className="h-5 w-5 text-white sm:h-7 sm:w-7" />
                    </div>

                    <div className="min-w-0 text-left">
                      <p className="truncate font-display text-lg font-extrabold sm:text-2xl">
                        Birthday Menu
                      </p>

                      <p className="truncate text-[11px] font-semibold text-white/80 sm:text-sm">
                        Choose your next surprise
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close birthday menu"
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/20
                      transition
                      hover:bg-white/30
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </div>
              </div>

              {/* Navigation cards */}
              <div
                className="
                  mt-3
                  grid
                  grid-cols-2
                  gap-2.5
                  sm:mt-5
                  sm:gap-4
                "
              >
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`
                        group
                        relative
                        min-w-0
                        overflow-hidden
                        rounded-[1.1rem]
                        border
                        px-2
                        py-3
                        text-center
                        shadow-md
                        transition-all
                        duration-300
                        sm:rounded-3xl
                        sm:px-4
                        sm:py-5
                        ${
                          active
                            ? "border-rose-300 bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-rose-300/35"
                            : "border-rose-100 bg-white/80 text-rose-700 hover:-translate-y-0.5 hover:bg-rose-50"
                        }
                      `}
                    >
                      <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-white/20 blur-xl sm:h-20 sm:w-20" />

                      <div
                        className={`
                          relative
                          mx-auto
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          sm:h-12
                          sm:w-12
                          ${
                            active
                              ? "bg-white/20"
                              : "bg-gradient-to-br from-rose-100 to-pink-100"
                          }
                        `}
                      >
                        <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                      </div>

                      <p className="relative mt-2 truncate text-[11px] font-bold sm:mt-3 sm:text-sm">
                        {item.label}
                      </p>

                      {active && (
                        <p className="relative mt-1 text-[9px] font-semibold text-white/85 sm:text-xs">
                          Current page ❤️
                        </p>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Bottom note */}
              <div
                className="
                  mt-3
                  rounded-2xl
                  border
                  border-rose-100
                  bg-gradient-to-r
                  from-rose-50
                  to-pink-50
                  px-3
                  py-2.5
                  text-center
                  sm:mt-5
                  sm:px-4
                  sm:py-3
                "
              >
                <p className="text-[10px] font-semibold leading-4 text-rose-600/80 sm:text-xs">
                  Every page has a little piece of love waiting for you ✨
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;