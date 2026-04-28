import React from "react";
import { motion } from "framer-motion";
import {
    Check, MessageCircle, Bug, Sparkles, Zap, Search, Smartphone, Plug, RefreshCw,
} from "lucide-react";
import { PLANS, SUPPORT_FEATURES, buildWhatsappLink } from "../lib/constants";

const SUPPORT_ICONS = { Bug, Sparkles, Zap, Search, Smartphone, Plug, RefreshCw };

const PlanCard = ({ plan, index }) => {
    const isHighlighted = plan.highlighted;
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`relative rounded-2xl p-6 lg:p-7 transition-all duration-500 ${
                isHighlighted
                    ? "bg-gradient-to-br from-[#1C1438] to-[#0A071A] border-2 border-[#7C3AED]/50 shadow-[0_0_50px_rgba(124,58,237,0.25)] xl:scale-[1.03]"
                    : "glass glow-border"
            }`}
            data-testid={`plan-card-${plan.name.toLowerCase()}`}
        >
            {plan.badge && (
                <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex px-4 py-1 rounded-full bg-[#7C3AED] text-white text-[10px] font-bold tracking-[0.2em] uppercase shadow-[0_0_24px_rgba(124,58,237,0.6)] animate-pulse-glow whitespace-nowrap"
                    data-testid={`plan-badge-${plan.name.toLowerCase()}`}
                >
                    {plan.badge}
                </span>
            )}

            {/* Planet/icon */}
            <div className="w-12 h-12 rounded-full mb-5 flex items-center justify-center"
                style={{
                    background: "radial-gradient(circle at 30% 30%, #A78BFA, #4C1D95 60%, #1C1438)",
                    boxShadow: "inset -4px -4px 12px rgba(0,0,0,0.4), 0 0 20px rgba(124,58,237,0.4)"
                }}
            >
                <div className="w-1 h-1 rounded-full bg-white/80" style={{ boxShadow: "0 0 4px white" }} />
            </div>

            <h3 className="font-heading text-2xl font-bold text-white">{plan.name}</h3>
            <p className="mt-2 text-sm text-white/55 min-h-[40px]">{plan.tagline}</p>

            <div className="mt-6 pb-6 border-b border-white/10">
                <span className="text-xs text-white/55 block">a partir de</span>
                <div className="mt-1 flex items-baseline gap-1 flex-wrap">
                    <span className="text-sm text-white/70 font-heading font-semibold">R$</span>
                    <span className="font-heading text-3xl sm:text-4xl xl:text-[2.5rem] font-black text-white tracking-tight leading-none">{plan.price}</span>
                </div>
            </div>

            <ul className="mt-6 space-y-3">
                {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-white/85">
                        <div className="w-5 h-5 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#A78BFA]" />
                        </div>
                        <span>{feat}</span>
                    </li>
                ))}
            </ul>

            <a
                href={buildWhatsappLink(`Olá, tenho interesse no Plano ${plan.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold tracking-wide transition-all duration-300 ${
                    isHighlighted
                        ? "bg-[#7C3AED] hover:bg-[#A78BFA] text-white shadow-[0_0_24px_rgba(124,58,237,0.5)]"
                        : "glass-strong hover:border-[#A78BFA]/40 text-white"
                }`}
                data-testid={`plan-cta-${plan.name.toLowerCase()}`}
            >
                <MessageCircle className="w-4 h-4" />
                Pedir orçamento
            </a>
        </motion.div>
    );
};

export const Plans = () => {
    return (
        <section
            id="planos"
            className="relative py-24 lg:py-32"
            data-testid="plans-section"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16"
                >
                    <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#A78BFA] font-semibold mb-4">
                        / Planos
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white text-balance">
                        Planos que cabem no{" "}
                        <span className="gradient-purple-text">seu negócio</span>
                    </h2>
                    <p className="mt-4 text-white/65 text-base lg:text-lg">
                        Soluções completas com preço justo e entrega de qualidade.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7">
                    {PLANS.map((plan, idx) => (
                        <PlanCard key={plan.name} plan={plan} index={idx} />
                    ))}
                </div>

                {/* Support section */}
                <SupportSection />
            </div>
        </section>
    );
};

const SupportSection = () => (
    <motion.div
        id="suporte"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mt-24 rounded-3xl glass-strong overflow-hidden"
        data-testid="support-section"
    >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left: content */}
            <div className="lg:col-span-3 p-10 lg:p-14 relative z-10">
                <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#A78BFA] font-semibold mb-3">
                    / Suporte premium
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter text-white">
                    Suporte para sites já prontos
                </h3>
                <p className="mt-3 text-white/65">
                    Seu site atual precisa de ajuda? A gente resolve.
                </p>

                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SUPPORT_FEATURES.map((f) => {
                        const Icon = SUPPORT_ICONS[f.icon] || Sparkles;
                        return (
                            <li
                                key={f.label}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5"
                            >
                                <div className="w-9 h-9 rounded-lg bg-[#7C3AED]/15 border border-[#7C3AED]/30 flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-4 h-4 text-[#A78BFA]" />
                                </div>
                                <span className="text-sm text-white/85">{f.label}</span>
                            </li>
                        );
                    })}
                </ul>

                <a
                    href={buildWhatsappLink("Olá, preciso de suporte no meu site existente.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#A78BFA] text-white font-semibold transition-all shadow-[0_0_24px_rgba(124,58,237,0.5)]"
                    data-testid="support-cta"
                >
                    <MessageCircle className="w-4 h-4" /> Chamar no WhatsApp
                </a>
            </div>

            {/* Right: astronaut visual */}
            <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1768005419000-d53e45851b50?auto=format&fit=crop&w=1000&q=80"
                    alt="Astronauta cósmico"
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                    loading="lazy"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(90deg, #130E26 0%, transparent 35%), radial-gradient(circle at 70% 50%, rgba(124,58,237,0.35), transparent 60%)",
                    }}
                />
                {/* Floating tiny stars */}
                <div className="absolute top-10 right-12 w-1.5 h-1.5 rounded-full bg-white animate-twinkle" style={{ boxShadow: "0 0 8px white" }} />
                <div className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-[#A78BFA] animate-twinkle" style={{ animationDelay: '1s', boxShadow: "0 0 10px #A78BFA" }} />
            </div>
        </div>
    </motion.div>
);

export default Plans;
