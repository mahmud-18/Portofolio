"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data/content";

function ExperienceCard({ item, index }) {
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
      className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/30"
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
            {item.year}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            {item.role}
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            {item.company} • {item.type}
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
          <Briefcase size={24} />
        </div>
      </div>

      <p className="text-sm leading-6 text-slate-300">{item.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.skills.map((skill) => (
          <span
            key={`${item.id}-${skill}`}
            className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-200 border border-white/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
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
            Experience
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Professional timeline
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-400">
            A selection of roles and freelance work that shaped the skills I
            bring to every project.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {experience.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
