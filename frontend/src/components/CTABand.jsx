import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { buildWhatsappLink } from "../lib/constants";

/**
 * CTABand — slim, premium inline CTA between sections.
 *
 * Props:
 *   eyebrow  -> small uppercase label above title
 *   title    -> headline (string or JSX)
 *   button   -> button label
 *   message  -> WhatsApp prefilled message
 *   variant  -> 'default' | 'highlight' (highlight = full purple gradient)
 *   testid   -> base data-testid for tracking
 */
export const CTABand = ({
    eyebrow,
    title,
    button,
    message,
    variant = "default",
    testid = "cta-band",
}) => {
    const isHighlight = variant === "highlight";

    return (
        <section
            className="relative py-10 lg:py-14"
            data-testid={`${testid}-section`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative rounded-2xl lg:rounded-full px-6 sm:px-8 lg:px-10 py-6 lg:py-5 overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-5 ${
                        isHighlight
                            ? "bg-gradient-to-r from-[#1C1438] via-[#2A1F4C] to-[#1C1438] border border-[#A78BFA]/30 shadow-[0_0_40px_rgba(124,58,237,0.25)]"
                            : "glass-strong"
                    }`}
                    data-testid={testid}
                >
                    {/* Decorative glow */}
                    <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-[#7C3AED]/15 blur-[80px]" />
                    <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-[#A78BFA]/10 blur-[80px]" />

                    {/* Left content */}
                    <div className="relative z-10 flex items-start lg:items-center gap-4">
                        <div className="hidden sm:flex w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-[#7C3AED]/15 border border-[#7C3AED]/30 items-center justify-center flex-shrink-0">
                            <Sparkles className="w-5 h-5 text-[#A78BFA]" />
                        </div>
                        <div>
                            {eyebrow && (
                                <span className="block text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#A78BFA] font-semibold mb-1">
                                    {eyebrow}
                                </span>
                            )}
                            <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight text-balance">
                                {title}
                            </h3>
                        </div>
                    </div>

                    {/* Right CTA */}
                    <a
                        href={buildWhatsappLink(message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`${testid}-btn`}
                        className="group relative z-10 inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-7 lg:py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#A78BFA] text-white font-semibold text-sm lg:text-[15px] tracking-wide whitespace-nowrap transition-all duration-300 shadow-[0_0_24px_rgba(124,58,237,0.45)] hover:shadow-[0_0_40px_rgba(167,139,250,0.7)] flex-shrink-0 overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <MessageCircle className="w-4 h-4 relative z-10" />
                        <span className="relative z-10">{button}</span>
                        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CTABand;
