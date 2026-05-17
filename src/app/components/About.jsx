"use client";

import Image from "next/image";
import { PersonalInfo } from "../data/content";
import { Mail, Phone, MapPin, Download, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-black text-white py-40 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main glow orb */}
        <motion.div
          className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-radial from-cyan-500/20 via-cyan-500/5 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Secondary glow */}
        <motion.div
          className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/15 via-purple-500/5 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[length:50px_50px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <span className="inline-block text-xs font-mono text-cyan-400/80 tracking-widest mb-4 uppercase">
            About
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight mb-4">
            Creative developer
            <br />
            building the future
          </h2>
          <p className="text-base sm:text-lg text-gray-400/80 max-w-2xl">
            From code to creativity, crafting digital experiences that inspire
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16"
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative h-full">
              {/* Background glow */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-transparent to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glass container */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden aspect-[9/10] lg:aspect-auto lg:h-full group-hover:border-white/20 transition-all duration-500">
                {/* Image */}
                <Image
                  src={PersonalInfo.profileImage}
                  alt={PersonalInfo.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />

                {/* Fade overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                {/* Floating glow on hover */}
                <motion.div
                  className="absolute -inset-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 -z-10"
                  animate={{ scale: [0.8, 1.1, 0.8] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            {/* Name & Title */}
            <div className="space-y-2">
              <h3 className="text-4xl sm:text-5xl font-bold">
                {PersonalInfo.name}
              </h3>
              <p className="text-lg text-cyan-400/90 font-medium">
                {PersonalInfo.title}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-300/90">
              {PersonalInfo.longDescription.split("\n").map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <motion.a
                href={PersonalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 hover:from-cyan-500/30 hover:to-blue-500/20 border border-cyan-500/30 hover:border-cyan-500/60 rounded-xl backdrop-blur-sm transition-all duration-300 font-semibold text-white"
              >
                <Download
                  size={18}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
                Download Resume
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Cards - Premium Glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              value: PersonalInfo.email,
              href: `mailto:${PersonalInfo.email}`,
            },
            {
              icon: Phone,
              label: "Phone",
              value: PersonalInfo.phone,
              href: `tel:${PersonalInfo.phone}`,
            },
            {
              icon: MapPin,
              label: "Location",
              value: PersonalInfo.location,
              href: "#",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={idx}
                href={item.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 bg-gradient-to-br from-cyan-500/20 via-cyan-500/5 to-transparent border border-cyan-500/30 hover:border-cyan-500/60 backdrop-blur-xl rounded-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />

                <div className="relative flex items-start gap-4">
                  <Icon
                    size={24}
                    className="text-cyan-400 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-white font-semibold group-hover:text-cyan-300 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-sm text-gray-400/80"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse" />
          Available for new projects
        </motion.div>
      </div>
    </section>
  );
}
