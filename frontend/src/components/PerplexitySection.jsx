import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles, Zap, Brain, Crown, Clock, ChevronDown, MessageCircle, Check,
} from "lucide-react";
import { buildWhatsappLink } from "../lib/constants";

const AI_MODELS = [
    { name: "Chat GPT 5.4", color: "from-emerald-400 to-emerald-600" },
    { name: "Gemini 3.1 Pro", color: "from-blue-400 to-indigo-500" },
    { name: "Claude Sonnet 4.6", color: "from-orange-400 to-rose-500" },
    { name: "Kimi K2.6", color: "from-pink-400 to-fuchsia-500" },
    { name: "Nemotron 3 Super", color: "from-lime-400 to-green-500" },
    { name: "Sonar 2", color: "from-cyan-400 to-sky-500" },
];

const LOREM_PLACEHOLDER = `Perplexity PRO é uma ferramenta útil para diversos perfis, desde pessoas que buscam praticidade no dia a dia até estudantes, programadores, empresários e profissionais autônomos. Seu principal diferencial está em oferecer respostas rápidas, organizadas e com fontes citadas, facilitando pesquisas, decisões e produtividade.

PARA USO NO DIA A DIA

• Respostas rápidas e confiáveis, com fontes citadas.
• Pesquisas em tempo real sobre notícias, promoções, produtos, saúde, finanças e rotina.
• Ajuda para escolher TV, celular, plano de internet ou plano de saúde.
• Organização pessoal: refeições, viagens rápidas, listas de compras e checklists.

PARA ESTUDANTES

• Ideal para ensino médio, faculdade, técnico e pós-graduação.
• Grande volume de citações para trabalhos, TCC e revisão bibliográfica.
• Upload de PDFs, apostilas e anotações para resumos, flashcards e perguntas de revisão.
• Explicações simples de matemática, física, legislação e temas complexos.
• Recursos interativos de estudo, como questionários e cartões de memória.

PARA EMPRESÁRIOS E GESTORES

• Útil para lojas, clínicas, consultórios e pequenas empresas.
• Pesquisa de mercado e concorrência para entender preços e público-alvo.
• Apoio em finanças, planilhas simples e organização contábil.
• Criação de contratos, propostas, e-mails e manuais internos.
• Ideias de campanhas, anúncios, SEO e conteúdo para redes sociais.

PARA PROGRAMADORES E TECNOLOGIA

• Análise de código ao enviar scripts, logs de erro ou arquivos.
• Pesquisa técnica sobre APIs, frameworks, erros e documentação.
• Geração de código, integrações e estrutura inicial de sistemas.
• Modelos avançados de IA para debugging e arquitetura.

PARA MINIEMPREENDEDORES E FREELANCERS

• Ideal para designers, editores, social media e prestadores de serviço.
• Criação de posts, anúncios, landing pages e descrições de produtos.
• Ideias visuais para thumbnails, mockups e capas.
• Modelos de propostas, orçamentos e organização de entregas.
• Scripts de venda, negociação e mensagens profissionais.

RESUMO GERAL

O Perplexity PRO reúne pesquisa rápida, IA e produtividade em um só lugar. Pode servir tanto para tarefas simples quanto para acelerar estudos, negócios e projetos profissionais.
`;

export const PerplexitySection = () => {
    const [open, setOpen] = useState(false);

    return (
        <section
            id="perplexity"
            className="relative py-24 lg:py-32"
            data-testid="perplexity-section"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-3xl glass-strong overflow-hidden"
                    data-testid="perplexity-card"
                >
                    {/* Decorative glow */}
                    <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#7C3AED] opacity-20 blur-[120px]" />
                    <div className="pointer-events-none absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#A78BFA] opacity-15 blur-[100px]" />
                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] orbit-line opacity-30 animate-orbit" />
                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] orbit-line opacity-15 animate-orbit" style={{ animationDuration: '50s', animationDirection: 'reverse' }} />

                    <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                            {/* Left: copy */}
                            <div className="lg:col-span-7">
                                {/* Limited badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7C3AED]/30 to-[#A78BFA]/20 border border-[#A78BFA]/30 mb-6"
                                    data-testid="perplexity-stock-badge"
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A78BFA] opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A78BFA]" />
                                    </span>
                                    <span className="text-xs uppercase tracking-[0.2em] text-white/90 font-bold">
                                        Estoque limitado de códigos
                                    </span>
                                </motion.div>

                                <span className="block text-xs uppercase tracking-[0.3em] text-[#A78BFA] font-semibold mb-3">
                                    / Oferta exclusiva
                                </span>

                                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white text-balance leading-[1.1]">
                                    Tenha a{" "}
                                    <span className="gradient-purple-text text-glow-purple">Perplexity</span>{" "}
                                    por 1 ano por apenas{" "}
                                    <span className="relative inline-block">
                                        <span className="gradient-purple-text">(valor)</span>
                                        <span className="absolute -inset-x-2 inset-y-0 rounded-md bg-[#7C3AED]/10 -z-10" />
                                    </span>
                                </h2>

                                <p className="mt-6 text-base lg:text-lg text-white/75 leading-relaxed max-w-xl">
                                    Venha já pegar o seu agora e desfrute dos modelos de IA mais
                                    avançados do mercado <span className="text-[#A78BFA] font-semibold">de forma ilimitada</span> — e muito mais.
                                </p>

                                {/* Models list */}
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {AI_MODELS.map((model, i) => (
                                        <motion.div
                                            key={model.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.05 * i }}
                                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#A78BFA]/30 transition-colors"
                                            data-testid={`perplexity-model-${i}`}
                                        >
                                            <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${model.color} flex-shrink-0`} style={{ boxShadow: '0 0 10px currentColor' }} />
                                            <span className="text-sm text-white/90 font-medium">{model.name}</span>
                                            <Check className="w-4 h-4 text-[#A78BFA] ml-auto flex-shrink-0" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTAs */}
                                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                                    <a
                                        href={buildWhatsappLink("Olá, quero garantir o código da Perplexity por 1 ano!")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#7C3AED] hover:bg-[#A78BFA] text-white font-semibold tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:shadow-[0_0_50px_rgba(167,139,250,0.8)] relative overflow-hidden"
                                        data-testid="perplexity-cta-buy"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        <MessageCircle className="w-5 h-5 relative z-10" />
                                        <span className="relative z-10">Pegar meu código agora</span>
                                    </a>

                                    <button
                                        type="button"
                                        onClick={() => setOpen((v) => !v)}
                                        aria-expanded={open}
                                        aria-controls="perplexity-details"
                                        className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass-strong hover:border-[#A78BFA]/40 text-white font-semibold transition-all duration-300"
                                        data-testid="perplexity-toggle-details"
                                    >
                                        Mais Detalhes
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                </div>

                                {/* Validity note */}
                                <p className="mt-5 flex items-center gap-2 text-xs text-white/50">
                                    <Clock className="w-3.5 h-3.5 text-[#A78BFA]" />
                                    *Oferta válida até 31 de Dezembro de 2026
                                </p>
                            </div>

                            {/* Right: feature highlights / visual */}
                            <div className="lg:col-span-5 lg:pl-6">
                                <div className="relative aspect-square max-w-md mx-auto">
                                    {/* Central planet/ring */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                                            <div
                                                className="absolute inset-0 rounded-full animate-float-slow"
                                                style={{
                                                    background:
                                                        "radial-gradient(circle at 30% 30%, #C4B5FD 0%, #7C3AED 35%, #1C1438 75%, #030108 100%)",
                                                    boxShadow:
                                                        "inset -20px -20px 40px rgba(0,0,0,0.5), 0 0 80px rgba(124,58,237,0.5)",
                                                }}
                                            />
                                            {/* center icon */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-20 h-20 rounded-2xl glass-strong border border-[#A78BFA]/40 flex items-center justify-center backdrop-blur-xl">
                                                    <Brain className="w-10 h-10 text-[#A78BFA]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating chips */}
                                    <FloatingChip icon={Sparkles} label="Ilimitado" className="top-4 left-2" delay={0} />
                                    <FloatingChip icon={Zap} label="6+ Modelos" className="top-12 right-0" delay={1} />
                                    <FloatingChip icon={Crown} label="Premium" className="bottom-12 left-0" delay={2} />
                                    <FloatingChip icon={Clock} label="1 ano" className="bottom-2 right-4" delay={1.5} />

                                    {/* Twinkling stars */}
                                    <div className="absolute top-8 right-16 w-1.5 h-1.5 rounded-full bg-white animate-twinkle" style={{ boxShadow: '0 0 8px white' }} />
                                    <div className="absolute bottom-8 left-16 w-2 h-2 rounded-full bg-[#A78BFA] animate-twinkle" style={{ animationDelay: '1.5s', boxShadow: '0 0 10px #A78BFA' }} />
                                </div>
                            </div>
                        </div>

                        {/* Expandable details panel */}
                        <AnimatePresence initial={false}>
                            {open && (
                                <motion.div
                                    id="perplexity-details"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                    className="overflow-hidden"
                                    data-testid="perplexity-details-panel"
                                >
                                    <div className="mt-10 pt-8 border-t border-white/10">
                                        <div className="flex items-start gap-3 mb-5">
                                            <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/15 border border-[#7C3AED]/30 flex items-center justify-center flex-shrink-0">
                                                <Sparkles className="w-5 h-5 text-[#A78BFA]" />
                                            </div>
                                            <div>
                                                <h3 className="font-heading text-xl font-bold text-white">
                                                    Funções, Benefícios e Vantagens
                                                </h3>
                                                <p className="text-sm text-white/55 mt-0.5">
                                                    Tudo o que você precisa saber sobre a Perplexity
                                                </p>
                                            </div>
                                        </div>

                                        <div className="text-white/70 text-[15px] leading-relaxed whitespace-pre-line max-w-3xl">
                                            {LOREM_PLACEHOLDER}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const FloatingChip = ({ icon: Icon, label, className = "", delay = 0 }) => (
    <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5 + delay, delay, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute ${className}`}
    >
        <div className="flex items-center gap-2 px-3 py-2 rounded-full glass-strong border border-[#A78BFA]/25 backdrop-blur-xl">
            <Icon className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span className="text-xs font-semibold text-white whitespace-nowrap">{label}</span>
        </div>
    </motion.div>
);

export default PerplexitySection;
