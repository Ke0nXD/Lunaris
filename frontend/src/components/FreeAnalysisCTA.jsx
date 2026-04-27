import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles, Check } from "lucide-react";
import { buildWhatsappLink } from "../lib/constants";

const FREE_ANALYSIS_MESSAGE =
    "Olá! Quero minha análise gratuita do meu projeto.";

/**
 * FreeAnalysisCTA — main repeated promo CTA used between key sections.
 * Slightly more presence than CTABand but still premium and minimal.
 */
export const FreeAnalysisCTA = ({ testid = "free-analysis-cta" }) => {
    return (
        <section className="relative py-12 lg:py-16" data-testid={`${testid}-section`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-3xl overflow-hidden p-8 sm:p-10 lg:p-12"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(28,20,56,0.5) 50%, rgba(167,139,250,0.12) 100%)",
                        border: "1px solid rgba(167,139,250,0.25)",
                        boxShadow:
                            "0 0 50px rgba(124,58,237,0.18), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                    data-testid={testid}
                >
                    {/* Decorative orbital ring */}
                    <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 orbit-line opacity-20 animate-orbit" />
                    <div className="pointer-events-none absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#7C3AED]/15 blur-[100px]" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#A78BFA]/30 mb-4">
                                <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
                                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/90 font-bold">
                                    Análise gratuita
                                </span>
                            </div>

                            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white text-balance leading-[1.15]">
                                Receba uma{" "}
                                <span className="gradient-purple-text text-glow-purple">
                                    análise gratuita
                                </span>{" "}
                                do seu projeto pelo WhatsApp.
                            </h3>

                            <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/65">
                                {[
                                    "Sem compromisso",
                                    "Resposta em até 24h",
                                    "Diagnóstico personalizado",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-1.5">
                                        <Check className="w-3.5 h-3.5 text-[#A78BFA]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:col-span-4 flex lg:justify-end">
                            <a
                                href={buildWhatsappLink(FREE_ANALYSIS_MESSAGE)}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid={`${testid}-btn`}
                                className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#7C3AED] hover:bg-[#A78BFA] text-white font-semibold text-[15px] tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:shadow-[0_0_50px_rgba(167,139,250,0.8)] overflow-hidden w-full sm:w-auto"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <MessageCircle className="w-5 h-5 relative z-10" />
                                <span className="relative z-10">Quero minha análise gratuita</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FreeAnalysisCTA;
