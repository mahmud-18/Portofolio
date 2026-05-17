"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Link, ArrowRight } from "lucide-react";
import { PersonalInfo, SocialLinks } from "../data/content";

const iconMap = {
  Github: Link,
  Linkedin: Link,
  Email: Mail,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black text-white py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24"
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
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-400">
            Reach out for work, collaboration, or just a quick hello. I&apos;m
            available for frontend and data-focused projects.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/30"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-400">
                  Email
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  {PersonalInfo.email}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                <Mail size={22} />
              </div>
            </div>
            <a
              href={`mailto:${PersonalInfo.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white transition-colors"
            >
              Send email
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/30"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-400">
                  Phone
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  {PersonalInfo.phone}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                <Phone size={22} />
              </div>
            </div>
            <a
              href={`tel:${PersonalInfo.phone}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white transition-colors"
            >
              Call now
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/30"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-400">
                  Location
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  {PersonalInfo.location}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                <MapPin size={22} />
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Available remotely and locally across Indonesia.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/30"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-400">
                Socials
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Connect on GitHub and LinkedIn
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {SocialLinks.map((link) => {
                const Icon = iconMap[link.iconName] || Mail;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
                  >
                    <Icon size={16} />
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
