import React from "react";
import { motion } from "framer-motion";
import {
    Utensils, Globe, Rocket, Box, Wrench, Check, MessageCircle,
} from "lucide-react";
import { SERVICES, buildWhatsappLink } from "../lib/constants";

const ICONS = { Utensils, Globe, Rocket, Box, Wrench };

const ServiceCard = ({ service, index }) => {
    const Icon = ICONS[service.icon] || Globe;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group relative rounded-2xl p-8 glass glow-border transition-all duration-500 ${
                service.highlighted
                    ? "lg:row-span-2 bg-gradient-to-br from-[#1C1438]/80 to-[#0A071A]/80 border-[#7C3AED]/30"
                    : ""
            }`}
            data-testid={`service-card-${index}`}
        >
            {service.highlighted && (
                <span
                    className="absolute -top-3 left-8 inline-flex px-3 py-1 rounded-full bg-[#7C3AED] text-white text-[10px] font-bold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                    data-testid={`service-badge-${index}`}
                >
                    Destaque
                </span>
            )}

            {/* Icon */}
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#7C3AED]/20 to-[#A78BFA]/5 border border-[#7C3AED]/30 mb-6 group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-6 h-6 text-[#A78BFA]" />
            </div>

            <h3 className="font-heading text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                {service.title}
            </h3>
            <p className="text-white/65 leading-relaxed text-[15px]">
                {service.description}
            </p>

            {service.features && (
                <ul className="mt-6 space-y-2.5">
                    {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-sm text-white/80">
                            <Check className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                        </li>
                    ))}
                </ul>
            )}

            <a
                href={buildWhatsappLink(`Olá, quero saber mais sobre: ${service.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-[#A78BFA] transition-colors"
                data-testid={`service-cta-${index}`}
            >
                <MessageCircle className="w-4 h-4" />
                Pedir orçamento
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
            </a>

            {/* Hover gradient overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: "radial-gradient(circle at top right, rgba(167,139,250,0.1), transparent 70%)"
            }} />
        </motion.div>
    );
};

export const Services = () => {
    return (
        <section
            id="solucoes"
            className="relative py-24 lg:py-32"
            data-testid="services-section"
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
                        / Nossas soluções
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white text-balance">
                        Soluções Web para colocar sua{" "}
                        <span className="gradient-purple-text">marca em outra órbita</span>
                    </h2>
                    <p className="mt-5 text-lg text-white/65 leading-relaxed">
                        Tecnologia sob medida para transformar o seu negócio. De pequenos
                        sites a sistemas completos — entregamos com a mesma precisão.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                    {SERVICES.map((service, idx) => (
                        <ServiceCard key={service.title} service={service} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
