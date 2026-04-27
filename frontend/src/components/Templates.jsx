import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TEMPLATES } from "../lib/constants";

export const Templates = () => {
    const [index, setIndex] = useState(0);
    const visibleCount = 3;

    const next = () => setIndex((i) => Math.min(i + 1, TEMPLATES.length - visibleCount));
    const prev = () => setIndex((i) => Math.max(i - 1, 0));

    return (
        <section
            id="templates"
            className="relative py-24 lg:py-32"
            data-testid="templates-section"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#A78BFA] font-semibold mb-4">
                            / Templates prontos
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white">
                            Modelos profissionais{" "}
                            <span className="gradient-purple-text">prontos para lançar</span>
                        </h2>
                        <p className="mt-4 text-white/65 text-base lg:text-lg">
                            Escolha um nicho, personalizamos sua identidade e entregamos no ar.
                        </p>
                    </motion.div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={prev}
                            disabled={index === 0}
                            className="w-12 h-12 rounded-full glass border border-white/10 hover:border-[#A78BFA]/40 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            data-testid="templates-prev-btn"
                            aria-label="Anterior"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            type="button"
                            onClick={next}
                            disabled={index >= TEMPLATES.length - visibleCount}
                            className="w-12 h-12 rounded-full bg-[#7C3AED] hover:bg-[#A78BFA] flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[0_0_24px_rgba(124,58,237,0.4)]"
                            data-testid="templates-next-btn"
                            aria-label="Próximo"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <motion.div
                        animate={{ x: `calc(-${index} * (100% / ${visibleCount}))` }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="flex gap-6"
                    >
                        {TEMPLATES.map((tpl, i) => (
                            <motion.div
                                key={tpl.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                data-testid={`template-card-${i}`}
                            >
                                <div className="group relative rounded-2xl overflow-hidden glass glow-border transition-all duration-500 hover:-translate-y-1.5">
                                    <div className="aspect-[16/10] overflow-hidden bg-[#0A071A] relative">
                                        <img
                                            src={tpl.image}
                                            alt={tpl.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#030108] via-[#030108]/30 to-transparent" />
                                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass-strong text-[10px] uppercase tracking-[0.2em] font-semibold text-white/90">
                                            {tpl.category}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-end justify-between gap-3">
                                            <div>
                                                <h3 className="font-heading text-lg font-bold text-white">
                                                    {tpl.name}
                                                </h3>
                                                <p className="mt-1 text-sm text-white/55">
                                                    a partir de
                                                </p>
                                            </div>
                                            <div className="text-2xl font-heading font-extrabold gradient-purple-text">
                                                {tpl.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2">
                    {TEMPLATES.slice(0, TEMPLATES.length - visibleCount + 1).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            data-testid={`templates-dot-${i}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === index ? "w-8 bg-[#A78BFA]" : "w-1.5 bg-white/20 hover:bg-white/40"
                            }`}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Templates;
