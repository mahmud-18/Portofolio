"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Link, ArrowRight, Send } from "lucide-react";
import { contactForm, PersonalInfo, SocialLinks } from "../data/content";

const iconMap = {
  Github: Link,
  Linkedin: Link,
  Email: Mail,
};

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name.trim()) {
      nextErrors.name = contactForm.fields.name.requiredMessage;
    }

    if (!values.email.trim()) {
      nextErrors.email = contactForm.fields.email.requiredMessage;
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = contactForm.fields.email.invalidMessage;
    }

    if (!values.message.trim()) {
      nextErrors.message = contactForm.fields.message.requiredMessage;
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      return;
    }

    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      "",
      values.message.trim(),
    ].join("\n");
    const mailtoUrl = `mailto:${PersonalInfo.email}?subject=${encodeURIComponent(
      contactForm.subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus(contactForm.successMessage);
    window.location.href = mailtoUrl;
  };

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
            Let&apos;s Connect with me!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-400">
            Reach out for work, collaboration, or just a quick hello. I&apos;m
            available for frontend and data-focused projects.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/30"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-400">
                Socials
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Connect on GitHub and LinkedIn
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {SocialLinks.map((link) => {
                  const Icon = iconMap[link.iconName] || Mail;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
                    >
                      <Icon size={16} />
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.25 }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/30"
          >
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-400">
                {contactForm.title}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {contactForm.intro}
              </h3>
            </div>

            <div className="space-y-5">
              {Object.entries(contactForm.fields).map(([name, field]) => {
                const isMessage = name === "message";
                const inputClasses =
                  "mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/60 focus:bg-white/10";

                return (
                  <div key={name}>
                    <label
                      htmlFor={name}
                      className="text-sm font-semibold text-slate-200"
                    >
                      {field.label}
                    </label>
                    {isMessage ? (
                      <textarea
                        id={name}
                        name={name}
                        rows={6}
                        value={values[name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        aria-invalid={Boolean(errors[name])}
                        className={`${inputClasses} resize-none`}
                      />
                    ) : (
                      <input
                        id={name}
                        name={name}
                        type={name === "email" ? "email" : "text"}
                        value={values[name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        aria-invalid={Boolean(errors[name])}
                        className={inputClasses}
                      />
                    )}
                    {errors[name] && (
                      <p className="mt-2 text-xs font-medium text-rose-300">
                        {errors[name]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition-colors duration-200 hover:bg-cyan-400 sm:w-auto"
            >
              {contactForm.submitLabel}
              <Send size={16} />
            </button>

            {status && (
              <p className="mt-4 text-sm font-medium text-emerald-300">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
