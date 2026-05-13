"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

import {
  Code2,
  Layers3,
  Database,
  Server,
  Cloud,
  Cpu,
  GitBranch,
  Rocket,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.io",
      "JWT Auth",
      "Zod Validation",
    ],
  },

  {
    title: "Databases & Realtime",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Prisma ORM",
      "Firebase",
    ],
  },

  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Cloudinary",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="skills"
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
              text-violet-300
              border border-violet-500/20
              bg-violet-500/10
              backdrop-blur-xl
              mb-5
            "
          >
            Technical Expertise
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
            Skills & Technologies
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Modern full-stack technologies focused on scalable systems,
            performance, and premium user experiences.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {skillCategories.map((category, index) => (
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
                transition-all duration-500
                hover:border-violet-400/30
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

              <div className="relative z-10 flex items-center gap-3 mb-6">
                <div
                  className="
                    w-12 h-12
                    rounded-2xl
                    flex items-center justify-center
                    bg-white/10
                    border border-white/10
                  "
                >
                  <category.icon size={22} className="text-violet-300" />
                </div>

                <h3 className="text-white font-semibold text-lg">
                  {category.title}
                </h3>
              </div>

              <div className="relative z-10 space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    className="
                      flex items-center
                      gap-3
                      rounded-xl
                      border border-white/5
                      bg-white/3
                      px-3 py-2.5
                      transition-all duration-300
                      hover:bg-violet-500/10
                      hover:border-violet-400/20
                    "
                  >
                    <div
                      className="
                        w-2 h-2
                        rounded-full
                        bg-linear-to-r
                        from-violet-400
                        to-cyan-400
                      "
                    />

                    <span className="text-slate-300 text-sm">{skill}</span>
                  </motion.div>
                ))}
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
