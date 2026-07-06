"use client";

import { motion } from "framer-motion";
import { skillGroups, skills } from "../data/content";

const categoryConfig = {
  Data: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30",
  Tools: "from-blue-500/20 to-blue-500/5 border-blue-500/30",
  Operations: "from-amber-500/20 to-amber-500/5 border-amber-500/30",
  Admin: "from-purple-500/20 to-purple-500/5 border-purple-500/30",
  Interpersonal: "from-pink-500/20 to-pink-500/5 border-pink-500/30",
  Communication: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30",
  "Project Mgmt": "from-orange-500/20 to-orange-500/5 border-orange-500/30",
  Documentation: "from-sky-500/20 to-sky-500/5 border-sky-500/30",
  Collaboration: "from-lime-500/20 to-lime-500/5 border-lime-500/30",
  Workflow: "from-violet-500/20 to-violet-500/5 border-violet-500/30",
};

function SkillCard({ skill, index }) {
  const colorClasses = categoryConfig[skill.category] || categoryConfig.Tools;

  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className={`group min-h-36 rounded-2xl border bg-gradient-to-br ${colorClasses} p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10`}
    >
      <div className="flex h-full flex-col justify-between gap-5">
        <span className="text-4xl" aria-hidden="true">
          {skill.icon}
        </span>
        <div>
          <h4 className="text-base font-semibold text-white">{skill.name}</h4>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
            {skill.category}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-black px-4 py-24 text-white scroll-mt-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.2)_0%,rgba(168,85,247,0.05)_50%,transparent_70%)] blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,rgba(6,182,212,0.05)_50%,transparent_70%)] blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[length:50px_50px] opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-xs font-mono uppercase tracking-widest text-cyan-400/80">
            Skills & Tools
          </span>
          <h2 className="mb-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            What I bring
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400/80 sm:text-base">
            Operational, administrative, and remote collaboration skills backed
            by hands-on experience across industries.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: groupIndex * 0.08 }}
            >
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                    {group.description}
                  </p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {group.skills.length} skills
                </span>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.skills.map((skill, index) => (
                  <SkillCard
                    key={`${group.title}-${skill.name}`}
                    skill={skill}
                    index={index}
                  />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-gray-400/80">
            {skills.length} skills across operations, administration, data, and
            remote collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
