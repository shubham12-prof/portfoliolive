"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "PixelMind AI",
    description:
      "AI image generation SaaS using HuggingFace FLUX with Redis rate limiting, Cloudinary CDN delivery, Docker, Kubernetes, and CI/CD pipelines.",
    image: "/projects/pixelmind.png",
    tags: ["Next.js", "TypeScript", "Redis", "Kubernetes"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    title: "DailyChat",
    description:
      "Real-time chat platform with Redis Streams, Kafka event streaming, Socket.io synchronization, and scalable distributed architecture.",
    image: "/projects/dailychat.png",
    tags: ["Socket.io", "Kafka", "Redis", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    title: "ForestGarden",
    description:
      "Full-stack MERN platform with JWT authentication, role-based access, Cloudinary uploads, and hierarchical tree management.",
    image: "/projects/forestgarden.png",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    title: "Drip Store",
    description:
      "Modern e-commerce platform built using TypeScript, Prisma ORM, PostgreSQL, JWT authentication, and scalable backend APIs.",
    image: "/projects/dripstore.png",
    tags: ["TypeScript", "Prisma", "PostgreSQL", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    title: "FourthMonkey",
    description:
      "Premium wedding website optimized for Lighthouse performance with Cloudinary optimization and smooth Framer Motion animations.",
    image: "/projects/fourthmonkey.png",
    tags: ["React", "Framer Motion", "Cloudinary", "EmailJS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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

export default function Projects() {
  const ref = useRef(null);

  const [showAll, setShowAll] = useState(false);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative py-16 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-mesh opacity-25 pointer-events-none" />

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
            Featured Work
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
            Projects
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Production-ready full-stack applications focused on scalability,
            realtime systems, performance, and modern UI experiences.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                transition-all duration-500
                hover:border-violet-400/30
                hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]
              "
            >
              <div
                className="
                  relative
                  h-60
                  overflow-hidden
                  border-b border-white/10
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
                    group-hover:scale-105
                    transition-transform duration-700
                  "
                >
                  <span
                    className="
                      text-lg
                      font-medium
                      text-slate-300
                    "
                  >
                    {project.title}
                  </span>
                </div>

                <div
                  className="
                    absolute inset-0
                    bg-black/60
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                    flex items-center justify-center gap-4
                  "
                >
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="
                      w-12 h-12
                      rounded-full
                      flex items-center justify-center
                      bg-white
                      text-black
                      hover:bg-violet-500
                      hover:text-white
                      transition-all
                    "
                  >
                    <ExternalLink size={20} />
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="
                      w-12 h-12
                      rounded-full
                      flex items-center justify-center
                      bg-white
                      text-black
                      hover:bg-cyan-500
                      hover:text-white
                      transition-all
                    "
                  >
                    <FaGithub size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-white
                    mb-3
                    group-hover:text-violet-300
                    transition-colors
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-slate-400
                    text-sm
                    leading-relaxed
                    mb-5
                  "
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="
                        px-3 py-2
                        rounded-full
                        text-xs
                        font-medium
                        border border-white/10
                        bg-white/5
                        text-slate-300
                        transition-all duration-300
                        hover:bg-violet-500/10
                        hover:border-violet-400/20
                        hover:text-white
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="
                  absolute
                  -bottom-16
                  -right-16
                  w-40 h-40
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

        {!showAll && projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
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
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]
              "
            >
              View More Projects
              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
