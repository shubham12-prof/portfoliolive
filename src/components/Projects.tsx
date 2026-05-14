"use client";

import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import {
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  User,
  Briefcase,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectType = "client" | "personal";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  type: ProjectType;
}

const projects: Project[] = [
  {
    title: "PixelMind AI",
    description:
      "AI image generation SaaS using HuggingFace FLUX with Redis rate limiting, Cloudinary CDN delivery, Docker, Kubernetes, and CI/CD pipelines.",
    image: "/projects/pixelmind.png",
    tags: ["Next.js", "TypeScript", "Redis", "Kubernetes"],
    liveUrl: "https://pixelmindimage.vercel.app/",
    githubUrl: "https://github.com/shubham12-prof/pixelmindimage",
    type: "personal",
  },
  {
    title: "DailyChat",
    description:
      "Real-time chat platform with Redis Streams, Kafka event streaming, Socket.io synchronization, and scalable distributed architecture.",
    image: "/projects/dailychat.png",
    tags: ["Socket.io", "Kafka", "Redis", "PostgreSQL"],
    liveUrl: "https://dailychat-nine.vercel.app/",
    githubUrl: "https://github.com/shubham12-prof/dailychat",
    type: "personal",
  },
  {
    title: "ForestGarden",
    description:
      "Full-stack MERN platform with JWT authentication, role-based access, Cloudinary uploads, and hierarchical tree management.",
    image: "/projects/forestgarden.png",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    liveUrl: "https://forestgarden.vercel.app/",
    githubUrl: "https://github.com/shubham12-prof/forestgarden",
    type: "client",
  },
  {
    title: "Drip Store",
    description:
      "Modern e-commerce platform built using TypeScript, Prisma ORM, PostgreSQL, JWT authentication, and scalable backend APIs.",
    image: "/projects/dripstore.png",
    tags: ["TypeScript", "Prisma", "PostgreSQL", "Express"],
    liveUrl: "https://dripstore.vercel.app/",
    githubUrl: "https://github.com/shubham12-prof/dripstore",
    type: "personal",
  },
  {
    title: "FourthMonkey",
    description:
      "Premium wedding website optimized for Lighthouse performance with Cloudinary optimization and smooth Framer Motion animations.",
    image: "/projects/fourthmonkey.png",
    tags: ["React", "Framer Motion", "Cloudinary", "EmailJS"],
    liveUrl: "https://www.fourthmunky.com/",
    githubUrl: "https://github.com/shubham12-prof/fourthmonkey",
    type: "client",
  },
  {
    title: "Polytech Materials",
    description:
      "Industrial polymer supplier website built with Next.js 14 App Router and TypeScript. Features a product catalogue with dynamic detail pages, filterable product grid, industry pages, contact form, client logo marquee, and product gallery. Styled with Tailwind CSS v4 using a dark grey and orange industrial theme.",
    image: "/projects/polytech.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React"],
    liveUrl: "https://www.shivapolymer.in/",
    githubUrl: "https://github.com/shubham12-prof/shivapolymer",
    type: "client",
  },
];

type FilterType = "all" | "client" | "personal";

const CARDS_PER_PAGE = 3;

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.35, ease: "easeIn" },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

function TypeBadge({ type }: { type: ProjectType }) {
  if (type === "client") {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/25">
        <Briefcase size={11} />
        Client
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
      <User size={11} />
      Personal
    </span>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);
  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
  const currentProjects = filtered.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > page ? 1 : -1);
      setPage(next);
    },
    [page],
  );

  const prev = () => page > 0 && goTo(page - 1);
  const next = () => page < totalPages - 1 && goTo(page + 1);

  const handleFilter = (f: FilterType) => {
    setFilter(f);
    setPage(0);
    setDirection(1);
  };

  const touchStart = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStart.current = null;
  };

  const clientCount = projects.filter((p) => p.type === "client").length;
  const personalCount = projects.filter((p) => p.type === "personal").length;

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-mesh opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm text-cyan-300 border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl mb-5">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Production-ready full-stack applications focused on scalability,
            realtime systems, performance, and modern UI experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-1 p-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            {(["all", "client", "personal"] as FilterType[]).map((f) => {
              const label =
                f === "all"
                  ? `All (${projects.length})`
                  : f === "client"
                    ? `Client (${clientCount})`
                    : `Personal (${personalCount})`;
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => handleFilter(f)}
                  className={`
                    relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 capitalize
                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }
                  `}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filterPill"
                      className="absolute inset-0 rounded-xl bg-linear-to-r from-violet-500/40 to-cyan-500/30 border border-white/15"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {f === "client" && <Briefcase size={13} />}
                    {f === "personal" && <User size={13} />}
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`${filter}-${page}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.title + index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="
                    group relative overflow-hidden rounded-3xl
                    border border-white/10 bg-white/5 backdrop-blur-2xl
                    transition-all duration-500
                    hover:border-violet-400/30
                    hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]
                    flex flex-col
                  "
                >
                  <div className="relative h-48 overflow-hidden border-b border-white/10 shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div
                      className="
                      absolute inset-0 bg-black/60
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      flex items-center justify-center gap-4
                    "
                    >
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 rounded-full flex items-center justify-center bg-white text-black hover:bg-violet-500 hover:text-white transition-all"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 rounded-full flex items-center justify-center bg-white text-black hover:bg-cyan-500 hover:text-white transition-all"
                      >
                        <FaGithub size={18} />
                      </motion.a>
                    </div>

                    <div className="absolute top-3 left-3">
                      <TypeBadge type={project.type} />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="
                            px-2.5 py-1 rounded-full text-xs font-medium
                            border border-white/10 bg-white/5 text-slate-300
                            transition-all duration-300
                            hover:bg-violet-500/10 hover:border-violet-400/20 hover:text-white
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-violet-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              ))}

              {currentProjects.length < CARDS_PER_PAGE &&
                Array.from({
                  length: CARDS_PER_PAGE - currentProjects.length,
                }).map((_, i) => (
                  <div key={`empty-${i}`} className="hidden lg:block" />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            <button
              onClick={prev}
              disabled={page === 0}
              className="
                w-10 h-10 rounded-full flex items-center justify-center
                border border-white/15 bg-white/5 text-slate-300
                hover:bg-violet-500/20 hover:border-violet-400/30 hover:text-white
                disabled:opacity-30 disabled:cursor-not-allowed
                transition-all duration-200
              "
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`
                    rounded-full transition-all duration-300
                    ${
                      i === page
                        ? "w-6 h-2.5 bg-linear-to-r from-violet-500 to-cyan-500"
                        : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                    }
                  `}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={page === totalPages - 1}
              className="
                w-10 h-10 rounded-full flex items-center justify-center
                border border-white/15 bg-white/5 text-slate-300
                hover:bg-violet-500/20 hover:border-violet-400/30 hover:text-white
                disabled:opacity-30 disabled:cursor-not-allowed
                transition-all duration-200
              "
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        )}

        {totalPages > 1 && (
          <p className="text-center text-slate-500 text-xs mt-4 sm:hidden">
            Swipe left or right to navigate
          </p>
        )}
      </div>
    </section>
  );
}
