import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsappLink } from "../lib/constants";

export const FinalCTA = () => {
    return (
        <section
            className="relative py-24 lg:py-36 overflow-hidden"
            data-testid="final-cta-section"
        >
            {/* Background astronaut + planet */}
            <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden="true">
                <img
                    src="https://images.unsplash.com/photo-1768005419000-d53e45851b50?auto=format&fit=crop&w=1600&q=80"
                    alt=""
                    className="absolute -left-24 top-1/2 -translate-y-1/2 w-[420px] lg:w-[520px] opacity-25 blur-[1px]"
                    style={{
                        animation: "float-slow 10s ease-in-out infinite",
                        filter: "drop-shadow(0 0 40px rgba(124,58,237,0.5))",
                    }}
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-30 blur-[60px]"
                    style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="rounded-3xl glass-strong p-10 lg:p-16 text-center relative overflow-hidden"
                >
                    {/* Decorative orbital ring */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] orbit-line opacity-30 animate-orbit pointer-events-none" />

                    <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#A78BFA] font-semibold mb-5">
                        / Última chamada
                    </span>

                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-white text-balance leading-[1.1]">
                        Seu concorrente pode fechar clientes <br className="hidden lg:block" />
                        hoje com um{" "}
                        <span className="gradient-purple-text text-glow-purple">site melhor</span>{" "}
                        que o seu.
                    </h2>

                    <p className="mt-6 text-base lg:text-lg text-white/65 max-w-2xl mx-auto">
                        Fale com a Lunaris agora e descubra a melhor solução para crescer online.
                    </p>

                    <motion.a
                        href={buildWhatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="group mt-10 inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#7C3AED] hover:bg-[#A78BFA] text-white font-bold text-lg tracking-wide transition-all shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:shadow-[0_0_80px_rgba(167,139,250,0.85)] relative overflow-hidden"
                        data-testid="final-cta-whatsapp"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <MessageCircle className="w-6 h-6 relative z-10" />
                        <span className="relative z-10">Chamar no WhatsApp</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    <div className="mt-8 flex items-center justify-center gap-6 text-xs text-white/45">
                        <span>✓ Sem compromisso</span>
                        <span>✓ Atendimento humano</span>
                        <span>✓ Resposta rápida</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
