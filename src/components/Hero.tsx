"use client";

import { motion } from "framer-motion";

import { Download, ArrowRight, Mail, Gauge } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import portfolio from "../../public/image/portfolio.png";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
];

const proofPoints = [
  "100/100 Lighthouse Performance",
  "100/100 SEO & Best Practices",
];

const socialLinks = [
  {
    label: "Email Shubham Semwal",
    href: "mailto:shubhsemwal12@gmail.com",
    icon: <Mail size={20} />,
    hover: "hover:border-pink-400/30 hover:bg-pink-500/10",
    external: false,
  },
  {
    label: "Shubham Semwal on LinkedIn",
    href: "https://linkedin.com/in/shubham-semwal-224540172",
    icon: <CiLinkedin size={20} />,
    hover: "hover:border-violet-400/30 hover:bg-violet-500/10",
    external: true,
  },
  {
    label: "Shubham Semwal on GitHub",
    href: "https://github.com/shubham12-prof",
    icon: <FaGithub size={20} />,
    hover: "hover:border-cyan-400/30 hover:bg-cyan-500/10",
    external: true,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex items-center
        overflow-hidden
        bg-background
        pt-24
      "
    >
      <div className="absolute inset-0 bg-mesh opacity-25 pointer-events-none" />

      <div
        className="
          absolute
          top-20
          left-0
          w-72 h-72
          bg-violet-500/20
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-80 h-80
          bg-cyan-500/20
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          relative z-10
          max-w-7xl
          mx-auto
          px-4 sm:px-6 lg:px-8
          w-full
        "
      >
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <div
                className="
                  inline-flex
                  items-center
                  px-4 py-2
                  rounded-full
                  text-sm
                  text-violet-300
                  border border-violet-500/20
                  bg-violet-500/10
                  backdrop-blur-xl
                  mb-6
                "
              >
                React / Next.js Developer
              </div>

              <h1
                className="
                  text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-bold
                  leading-tight
                  text-white
                "
              >
                Building
                <br />
                <span
                  className="
                    bg-linear-to-r
                    from-violet-400
                    via-cyan-400
                    to-pink-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  Fast, SEO-Friendly
                </span>
                <br />
                Web Apps
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="
                text-slate-400
                text-lg
                leading-relaxed
                max-w-xl
              "
            >
              React and Next.js developer building production-grade web
              applications with TypeScript and Node.js. Experienced in reusable
              UI components, REST API integration and performance optimization,
              from healthcare dashboards to full-stack products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="
                flex flex-wrap
                gap-3
              "
            >
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4 py-2
                    rounded-full
                    text-sm
                    font-medium
                    border border-emerald-400/20
                    bg-emerald-500/10
                    text-emerald-300
                    backdrop-blur-xl
                  "
                >
                  <Gauge size={16} aria-hidden="true" />
                  {point}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
              className="
                flex flex-wrap
                gap-3
              "
            >
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="
                    px-4 py-2
                    rounded-full
                    text-sm
                    border border-white/10
                    bg-white/5
                    text-slate-300
                    backdrop-blur-xl
                  "
                >
                  {tech}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="
                flex flex-wrap
                items-center
                gap-4
              "
            >
              <motion.a
                href="/Shubham_Semwal_Resume.pdf"
                download
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
                  px-6 py-3
                  rounded-full
                  bg-linear-to-r
                  from-violet-500
                  to-cyan-500
                  text-white
                  font-medium
                  shadow-[0_0_35px_rgba(139,92,246,0.35)]
                  transition-all duration-300
                  hover:shadow-[0_0_45px_rgba(139,92,246,0.5)]
                "
              >
                <Download size={18} aria-hidden="true" />
                Download Resume
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.a>

              <Link
                href="#projects"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6 py-3
                  rounded-full
                  border border-white/10
                  bg-white/5
                  text-white
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-violet-400/30
                  hover:bg-violet-500/10
                "
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              className="
                flex items-center
                gap-4
              "
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  {...(social.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`
                    w-12 h-12
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    text-slate-300
                    flex items-center justify-center
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:text-white
                    ${social.hover}
                  `}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
              relative
              flex
              justify-center
              lg:justify-end
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-linear-to-r
                from-violet-500/20
                to-cyan-500/20
                blur-3xl
                rounded-full
                pointer-events-none
              "
            />

            <div
              className="
                relative
                w-80 h-105
                md:w-100
                md:h-125
                rounded-4xl
                border border-white/10
                bg-linear-to-br
                from-[#111827]
                via-[#1e1b4b]
                to-[#0f172a]
                overflow-hidden
                shadow-[0_0_50px_rgba(139,92,246,0.18)]
              "
            >
              <Image
                src={portfolio}
                alt="Shubham Semwal, React and Next.js developer"
                sizes="(min-width: 768px) 400px, 320px"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
