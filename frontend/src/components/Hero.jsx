import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Sparkles, Star, Zap, Headphones } from "lucide-react";
import { buildWhatsappLink } from "../lib/constants";

const FloatingElement = ({ children, delay = 0, duration = 6 }) => (
    <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
        {children}
    </motion.div>
);

export const Hero = () => {
    return (
        <section
            id="hero"
            className="relative pt-48 pb-20 lg:pt-56 lg:pb-28 overflow-hidden"
            data-testid="hero-section"
        >
            {/* Giant Planet on the right */}
            <div
                className="absolute top-0 -right-32 lg:right-[-180px] w-[640px] h-[640px] lg:w-[900px] lg:h-[900px] pointer-events-none select-none"
                aria-hidden="true"
            >
                <FloatingElement duration={10}>
                    <div className="relative w-full h-full">
                        <img
                            src="https://images.unsplash.com/photo-1745661554426-66afd48de282?auto=format&fit=crop&w=1400&q=80"
                            alt=""
                            className="w-full h-full object-cover rounded-full opacity-70"
                            style={{ filter: "drop-shadow(0 0 80px rgba(124,58,237,0.5))" }}
                        />
                        {/* Inner glow ring */}
                        <div className="absolute inset-0 rounded-full" style={{
                            boxShadow: "inset 0 0 120px rgba(167,139,250,0.4), 0 0 100px rgba(124,58,237,0.5)"
                        }} />
                    </div>
                </FloatingElement>

                {/* Orbital rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-[110%] h-[110%] orbit-line animate-orbit" />
                    <div className="absolute w-[125%] h-[125%] orbit-line opacity-50 animate-orbit" style={{ animationDuration: '50s', animationDirection: 'reverse' }} />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                        data-testid="hero-badge"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
                        <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-medium">
                            Soluções web de outro nível
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-white text-balance"
                        data-testid="hero-headline"
                    >
                        Seu negócio <br className="hidden sm:block" />
                        merece mais que <br className="hidden sm:block" />
                        presença online. <br />
                        Merece{" "}
                        <span className="gradient-purple-text text-glow-purple">
                            resultados
                        </span>
                        .
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 text-lg text-white/70 max-w-xl leading-relaxed font-body"
                        data-testid="hero-subheadline"
                    >
                        Sites, sistemas e soluções digitais criadas para empresas que querem
                        crescer de verdade. Do conceito à última pixel — entregamos com
                        precisão de outra órbita.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href={buildWhatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-cta-whatsapp"
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#7C3AED] hover:bg-[#A78BFA] text-white font-semibold tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:shadow-[0_0_50px_rgba(167,139,250,0.8)] overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <MessageCircle className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">Pedir orçamento no WhatsApp</span>
                        </a>
                        <a
                            href="#solucoes"
                            data-testid="hero-cta-solutions"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-strong hover:border-[#A78BFA]/40 text-white font-semibold transition-all duration-300"
                        >
                            Ver soluções
                            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Trust micro-strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
                        data-testid="hero-trust-strip"
                    >
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1.5 text-[#A78BFA] text-sm font-bold">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-[#A78BFA] text-[#A78BFA]" />
                                ))}
                            </div>
                            <span className="mt-1 text-xs text-white/60">Avaliações 5.0</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/80">
                            <Zap className="w-4 h-4 text-[#A78BFA]" /> Entrega rápida
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/80">
                            <Headphones className="w-4 h-4 text-[#A78BFA]" /> Suporte humano
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/80">
                            <Sparkles className="w-4 h-4 text-[#A78BFA]" /> Soluções sob medida
                        </div>
                    </motion.div>
                </div>

                {/* Right side mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="relative h-[440px] lg:h-[560px] hidden md:block"
                    data-testid="hero-mockup"
                >
                    <FloatingElement duration={8}>
                        {/* Laptop mockup */}
                        <div className="absolute top-12 right-0 w-[420px] lg:w-[560px] rotate-[-2deg]">
                            <div className="relative rounded-2xl overflow-hidden glass-strong glow-border p-1">
                                <div className="rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1771923082503-0a3381c46cef?auto=format&fit=crop&w=1200&q=80"
                                        alt="Mockup dashboard Lunaris"
                                        className="w-full h-auto"
                                    />
                                </div>
                                {/* Highlight edge */}
                                <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{
                                    boxShadow: "0 0 60px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
                                }} />
                            </div>
                        </div>
                    </FloatingElement>

                    {/* Phone mockup */}
                    <FloatingElement delay={1} duration={9}>
                        <div className="absolute bottom-0 left-0 lg:left-8 w-[150px] lg:w-[180px] rotate-[5deg]">
                            <div className="relative rounded-[28px] overflow-hidden glass-strong p-1">
                                <div className="rounded-[24px] overflow-hidden bg-[#0A071A]">
                                    <img
                                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80"
                                        alt="Mockup celular Lunaris"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="pointer-events-none absolute inset-0 rounded-[28px]" style={{
                                    boxShadow: "0 0 50px rgba(167,139,250,0.5)"
                                }} />
                            </div>
                        </div>
                    </FloatingElement>

                    {/* Tiny floating star accents */}
                    <div className="absolute top-4 right-12 w-2 h-2 rounded-full bg-white animate-twinkle" style={{ boxShadow: "0 0 12px white" }} />
                    <div className="absolute top-32 -left-2 w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-twinkle" style={{ animationDelay: '1s', boxShadow: "0 0 12px #A78BFA" }} />
                    <div className="absolute bottom-20 right-8 w-2 h-2 rounded-full bg-white animate-twinkle" style={{ animationDelay: '2s', boxShadow: "0 0 12px white" }} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
