"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
];

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return activeSection;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="w-full max-w-7xl flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.08)]"
        >
          <span className="text-white font-semibold text-sm tracking-wider">
            SS
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          {navLinks.map((link) => {
            const isActive =
              pathname === "/" && activeSection === link.href.split("#")[1];

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative px-5 py-2 text-sm rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "text-black bg-white"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all duration-300"
          >
            Let&apos;s Talk
          </motion.button>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 rounded-full bg-white/10 border border-white/10 text-white backdrop-blur-xl"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="absolute top-20 left-4 right-4 md:hidden rounded-3xl bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === "/" && activeSection === link.href.split("#")[1];

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      px-4 py-3 rounded-2xl text-sm transition-all
                      ${
                        isActive
                          ? "bg-white text-black"
                          : "text-slate-300 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="mt-3 w-full py-3 rounded-2xl text-sm font-medium text-white bg-linear-to-r from-violet-500 to-pink-500">
                  Let&apos;s Talk
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
