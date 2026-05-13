"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Code, Zap, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Building scalable web applications using React, Next.js, Node.js, TypeScript, and modern backend architectures.",
    tags: ["Next.js", "Node.js"],
  },

  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing Lighthouse scores, Core Web Vitals, lazy loading, and bundle performance for fast experiences.",
    tags: ["95+ Lighthouse", "Fast Loading"],
  },

  {
    icon: Globe,
    title: "Real-Time Systems",
    description:
      "Developing scalable real-time applications using Socket.io, Redis, Kafka, and distributed architectures.",
    tags: ["Socket.io", "Kafka"],
  },

  {
    icon: Palette,
    title: "Modern UI Engineering",
    description:
      "Crafting premium responsive interfaces with Tailwind CSS, Framer Motion, and interactive animations.",
    tags: ["Tailwind", "Framer Motion"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="services"
      className="relative py-16 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
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
              mb-5
            "
          >
            What I Build
          </span>

          <h2
            className="
              text-4xl md:text-5xl
              font-bold
              bg-hero-gradient
              bg-clip-text
              text-transparent
              mb-4
            "
          >
            Services
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg">
            Scalable applications, premium interfaces, and high-performance web
            experiences built with modern technologies.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
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
                transition-all
                duration-500
                hover:border-violet-400/40
                hover:shadow-[0_0_35px_rgba(139,92,246,0.18)]
              "
            >
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  bg-linear-to-br
                  from-violet-500/10
                  via-cyan-500/5
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
                  group-hover:scale-110
                  transition-transform duration-500
                "
              >
                <service.icon
                  size={22}
                  className="
                    text-violet-300
                    group-hover:text-white
                    transition-colors duration-300
                  "
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-sm mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="
                        px-3 py-2
                        rounded-xl
                        text-xs
                        border border-white/10
                        bg-white/5
                        text-slate-300
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:bg-violet-500/10
                        hover:border-violet-400/30
                        hover:text-white
                      "
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="
                  absolute
                  -bottom-16
                  -right-16
                  w-32 h-32
                  bg-violet-500/20
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
      </div>
    </section>
  );
}
