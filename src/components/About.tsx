"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Boxes, Database, Rocket } from "lucide-react";

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "10+", label: "Projects Built" },
  { number: "95+", label: "Lighthouse Score" },
];

const approaches = [
  {
    icon: Boxes,
    number: "01",
    title: "Scalable Full-Stack Systems",
    description:
      "Building reusable component architectures using React, Next.js, and TypeScript.",
  },

  {
    icon: Database,
    number: "02",
    title: "Real-Time Backend Engineering",
    description:
      "Developing distributed systems with Redis, Kafka, Socket.io, and PostgreSQL.",
  },

  {
    icon: Rocket,
    number: "03",
    title: "Performance & Deployment",
    description:
      "Optimizing performance, CI/CD pipelines, Docker workflows, and production deployment.",
  },
];

export default function About() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="about"
      className="relative py-16 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-mesh opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span
            className="
              inline-flex items-center
              px-4 py-2
              rounded-full
              text-sm
              text-cyan-300
              border border-cyan-500/20
              bg-cyan-500/10
              backdrop-blur-xl
              mb-5
            "
          >
            About Me
          </span>

          <h2
            className="
              text-4xl md:text-5xl
              font-bold
              bg-linear-to-r
              from-violet-400
              to-cyan-400
              bg-clip-text
              text-transparent
              mb-4
            "
          >
            Full-Stack Engineer
          </h2>

          <p
            className="
              max-w-3xl
              mx-auto
              text-slate-400
              text-base md:text-lg
              leading-relaxed
            "
          >
            Full-Stack Engineer with experience building scalable web
            applications, real-time systems, and AI-powered platforms using
            React, Next.js, Node.js, TypeScript, Redis, Kafka, and modern cloud
            infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            flex flex-wrap
            justify-center
            gap-3
            mb-12
          "
        >
          {[
            "React.js",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Kafka",
            "Redis",
            "Socket.io",
            "Docker",
            "Kubernetes",
            "PostgreSQL",
          ].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="
                px-4 py-2
                rounded-full
                text-sm
                text-slate-300
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all duration-300
                hover:border-violet-400/30
                hover:bg-violet-500/10
                hover:text-white
              "
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-3 gap-5 mb-12"
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-5
                transition-all duration-500
                hover:border-cyan-400/30
                hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]
              "
            >
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  bg-linear-to-br
                  from-cyan-500/10
                  via-violet-500/5
                  to-pink-500/10
                "
              />

              <div
                className="
                  relative z-10
                  w-12 h-12
                  rounded-2xl
                  flex items-center justify-center
                  bg-white/10
                  border border-white/10
                  mb-5
                "
              >
                <approach.icon size={22} className="text-cyan-300" />
              </div>

              <span
                className="
                  relative z-10
                  text-xs
                  tracking-widest
                  text-cyan-400
                  font-medium
                "
              >
                {approach.number}
              </span>

              <h3
                className="
                  relative z-10
                  text-xl
                  font-semibold
                  text-white
                  mt-2 mb-3
                "
              >
                {approach.title}
              </h3>

              <p
                className="
                  relative z-10
                  text-sm
                  leading-relaxed
                  text-slate-400
                "
              >
                {approach.description}
              </p>

              <div
                className="
                  absolute
                  -bottom-16
                  -right-16
                  w-32 h-32
                  bg-cyan-500/20
                  blur-3xl
                  rounded-full
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-700
                "
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
    flex flex-wrap
    justify-center
    gap-5
    max-w-4xl
    mx-auto
  "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              className="
       min-w-35
        flex-1
        max-w-55
        text-center
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-6
        transition-all duration-300
        hover:border-violet-400/30
        hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]
      "
            >
              <div
                className="
          text-3xl md:text-5xl
          font-bold
          bg-linear-to-r
          from-violet-400
          to-cyan-400
          bg-clip-text
          text-transparent
          mb-2
        "
              >
                {stat.number}
              </div>

              <div
                className="
          text-sm
          text-slate-400
          leading-relaxed
        "
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
