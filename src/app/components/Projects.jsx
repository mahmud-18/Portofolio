"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { projects } from "../data/content";

function ProjectCard({ project, index }) {
  const liveDisabled = !project.liveUrl || project.liveUrl === "#";
  const githubDisabled = !project.githubUrl || project.githubUrl === "#";
  const imageSrc = project.imageSrc || "/images/project-fallback.jpg";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/30"
    >
      <div className="relative overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src={imageSrc}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-100 backdrop-blur-md">
          {project.featured ? "Featured" : "Project"}
        </div>
        <div className="absolute inset-x-0 bottom-0 px-6 pb-5">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-400/80">
              {project.tags[1] || "General"}
            </p>
          </div>
          <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-300 border border-white/10">
            #{project.id}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
            {project.title}
          </h3>
          {project.problem && (
            <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-300">
              <span className="font-semibold text-cyan-300">Problem:</span>{" "}
              {project.problem}
            </p>
          )}
          <p className="text-sm leading-6 text-slate-300">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          {liveDisabled ? (
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white/35"
            >
              {project.liveStatus || "In Development"}
              <ExternalLink size={14} />
            </button>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 hover:border-cyan-400 hover:bg-cyan-500/15 hover:text-white transition-all duration-200"
            >
              Live preview
              <ExternalLink size={14} />
            </a>
          )}

          {githubDisabled ? (
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/40 cursor-not-allowed"
            >
              GitHub
              <GitBranch size={14} />
            </button>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-white/80 hover:border-slate-500 hover:bg-slate-900 hover:text-white transition-all duration-200"
            >
              GitHub
              <GitBranch size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#04040a] text-white py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <div className="absolute inset-x-0 top-0 h-44 bg-linear-to-b from-cyan-500/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-[0.35em] text-cyan-400/80 mb-3">
            Projects
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Selected UI work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-400">
            A modern showcase of my web UI projects built with Next.js, Tailwind
            CSS, and Framer Motion. Each card is designed to feel polished,
            responsive, and interaction-ready.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400/80">
                Project summary
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Fast, modern UI layouts with clean interactions.
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full bg-white/5 px-4 py-2 border border-white/10">
                {projects.length} projects
              </span>
              <span className="rounded-full bg-white/5 px-4 py-2 border border-white/10">
                Next.js + Tailwind + Framer Motion
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
