import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO, TRUST_STATS, TESTIMONIALS } from "../lib/constants";

export const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className="relative py-24 lg:py-32"
            data-testid="portfolio-section"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Stats strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 p-8 lg:p-10 rounded-3xl glass-strong"
                    data-testid="trust-stats"
                >
                    {TRUST_STATS.map((stat, i) => (
                        <div
                            key={stat.label}
                            className="flex flex-col"
                            data-testid={`stat-${i}`}
                        >
                            <span className="font-heading text-4xl lg:text-5xl font-black gradient-purple-text leading-none">
                                {stat.number}
                            </span>
                            <span className="mt-2 text-sm text-white/60 leading-snug">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#A78BFA] font-semibold mb-4">
                            / Portfólio
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white">
                            Projetos entregues com{" "}
                            <span className="gradient-purple-text">precisão de outra órbita</span>
                        </h2>
                        <p className="mt-4 text-white/65 text-base lg:text-lg">
                            Alguns dos nossos trabalhos recentes — desenhados para converter.
                        </p>
                    </motion.div>
                </div>

                {/* Portfolio grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {PORTFOLIO.map((item, i) => (
                        <motion.a
                            key={item.title}
                            href="#contato"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group relative rounded-2xl overflow-hidden glass glow-border transition-all duration-500 hover:-translate-y-1.5"
                            data-testid={`portfolio-item-${i}`}
                        >
                            <div className="aspect-[4/3] bg-[#0A071A] overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030108] via-[#030108]/40 to-transparent" />
                                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-4 h-4 text-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h3 className="font-heading text-base lg:text-lg font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-white/55 mt-0.5">{item.subtitle}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-10"
                >
                    <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#A78BFA] font-semibold mb-4">
                        / Depoimentos
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white">
                        O que nossos clientes{" "}
                        <span className="gradient-purple-text">dizem sobre nós</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="rounded-2xl p-7 glass glow-border"
                            data-testid={`testimonial-${i}`}
                        >
                            <div className="text-4xl text-[#A78BFA] font-heading leading-none mb-3">“</div>
                            <p className="text-white/85 leading-relaxed text-[15px] min-h-[120px]">
                                {t.quote}
                            </p>
                            <div className="mt-6 flex items-center gap-4 pt-5 border-t border-white/5">
                                <div className="relative">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 rounded-full ring-2 ring-[#7C3AED]/40" />
                                </div>
                                <div>
                                    <div className="font-heading font-bold text-white text-sm">{t.name}</div>
                                    <div className="text-xs text-white/55">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
