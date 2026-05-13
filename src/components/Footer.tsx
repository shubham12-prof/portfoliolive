"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/shubham12-prof",
    label: "GitHub",
  },

  {
    icon: CiLinkedin,
    href: "https://linkedin.com/in/shubham-semwal-224540172",
    label: "LinkedIn",
  },

  {
    icon: Mail,
    href: "mailto:shubhsemwal12@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t border-white/10
        bg-[#050816]
        py-14
      "
    >
      <div
        className="
          absolute inset-0
          bg-mesh
          opacity-20
          pointer-events-none
        "
      />

      <div
        className="
          relative z-10
          max-w-7xl
          mx-auto
          px-4 sm:px-6 lg:px-8
        "
      >
        <div
          className="
            grid
            md:grid-cols-3
            gap-10
            mb-10
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="
                w-12 h-12
                rounded-2xl
                flex items-center justify-center
                bg-linear-to-r
                from-violet-500
                to-cyan-500
                text-white
                font-bold
                text-lg
                mb-5
                shadow-[0_0_30px_rgba(139,92,246,0.35)]
              "
            >
              SS
            </div>

            <h3 className="text-white text-xl font-semibold mb-3">
              Shubham Semwal
            </h3>

            <p
              className="
                text-slate-400
                text-sm
                leading-relaxed
                max-w-sm
              "
            >
              Full-Stack Engineer focused on scalable systems, real-time
              applications, AI-powered platforms, and premium frontend
              experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <h4
              className="
                text-white
                font-semibold
                mb-5
              "
            >
              Navigation
            </h4>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-slate-400
                      text-sm
                      transition-all duration-300
                      hover:text-white
                    "
                  >
                    {link.name}

                    <ArrowUpRight
                      size={14}
                      className="
                        opacity-0
                        -translate-y-1
                        translate-x-1
                        transition-all duration-300
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        group-hover:translate-x-0
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <h4
              className="
                text-white
                font-semibold
                mb-5
              "
            >
              Connect
            </h4>

            <div className="flex gap-3 mb-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="
                    w-11 h-11
                    rounded-2xl
                    flex items-center justify-center
                    border border-white/10
                    bg-white/5
                    text-slate-300
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-violet-400/30
                    hover:bg-violet-500/10
                    hover:text-white
                  "
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            <a
              href="mailto:shubhsemwal12@gmail.com"
              className="
                text-slate-400
                text-sm
                transition-colors duration-300
                hover:text-white
              "
            >
              shubhsemwal12@gmail.com
            </a>
          </motion.div>
        </div>

        <div
          className="
            border-t border-white/10
            pt-6
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
          "
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              text-slate-500
              text-sm
            "
          >
            © {new Date().getFullYear()} Shubham Semwal. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              group
              inline-flex
              items-center
              gap-2
              text-slate-400
              text-sm
              transition-colors duration-300
              hover:text-white
            "
          >
            Back to top
            <ArrowUpRight
              size={16}
              className="
                transition-transform duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
