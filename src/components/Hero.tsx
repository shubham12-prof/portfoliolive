"use client";

import { motion } from "framer-motion";

import { Download, ArrowRight } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import portfolio from "../../public/image/portfolio.png";
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
                Full-Stack Engineer
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
                  Scalable Web
                </span>
                <br />
                Experiences
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
              Full-Stack Engineer with experience building production-grade
              applications using React, Next.js, Node.js, TypeScript, Redis,
              Kafka, and scalable cloud infrastructure.
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
              {[
                "Next.js",
                "TypeScript",
                "Node.js",
                "Kafka",
                "Redis",
                "Docker",
              ].map((tech, index) => (
                <div
                  key={index}
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
                <Download size={18} />
                Download Resume
                <ArrowRight
                  size={18}
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
              <motion.a
                href="https://linkedin.com/in/shubham-semwal-224540172"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  w-12 h-12
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  text-slate-300
                  flex items-center justify-center
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-violet-400/30
                  hover:bg-violet-500/10
                  hover:text-white
                "
              >
                <CiLinkedin size={20} />
              </motion.a>

              <motion.a
                href="https://github.com/shubham12-prof"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  w-12 h-12
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  text-slate-300
                  flex items-center justify-center
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-500/10
                  hover:text-white
                "
              >
                <FaGithub size={20} />
              </motion.a>
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
                bg-white/5
                backdrop-blur-2xl
                overflow-hidden
                shadow-[0_0_50px_rgba(139,92,246,0.18)]
              "
            >
              <div
                className="
                  w-full h-full
                  bg-linear-to-br
                  from-[#111827]
                  via-[#1e1b4b]
                  to-[#0f172a]
                  flex items-center justify-center
                "
              >
                <span className="text-slate-400 text-sm">
                  Add Your Professional Photo
                </span>
              </div>

              <Image
                src={portfolio}
                alt="Shubham Semwal"
                sizes="500px"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
