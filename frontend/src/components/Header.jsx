import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { LOGO_URL, NAV_LINKS, buildWhatsappLink } from "../lib/constants";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-[#030108]/80 border-b border-white/5"
                    : "bg-transparent"
            }`}
            data-testid="site-header"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-28 sm:h-32 lg:h-36 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#hero"
                    className="flex items-center gap-3 group"
                    data-testid="header-logo-link"
                >
                    <img
                        src={LOGO_URL}
                        alt="Lunaris"
                        className="h-20 sm:h-24 lg:h-28 w-auto select-none transition-transform duration-300 group-hover:scale-105"
                        style={{ filter: "drop-shadow(0 0 26px rgba(167,139,250,0.55))" }}
                        data-testid="header-logo-img"
                    />
                </a>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-1" aria-label="Menu principal">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            data-testid={`nav-link-${link.id}`}
                            className="relative px-4 py-2 text-sm text-white/75 hover:text-white transition-colors duration-300 font-medium tracking-wide"
                        >
                            <span className="relative z-10">{link.label}</span>
                            <span className="absolute inset-0 rounded-full bg-white/0 hover:bg-white/5 transition-colors duration-300" />
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <a
                        href={buildWhatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="header-cta-whatsapp"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7C3AED] hover:bg-[#A78BFA] text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_24px_rgba(124,58,237,0.45)] hover:shadow-[0_0_36px_rgba(167,139,250,0.7)]"
                    >
                        Pedir Orçamento
                        <MessageCircle className="w-4 h-4 transition-transform group-hover:rotate-12" />
                    </a>
                </div>

                {/* Mobile burger */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full glass text-white"
                    aria-label="Abrir menu"
                    data-testid="mobile-menu-toggle"
                >
                    {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden border-t border-white/5 bg-[#030108]/95 backdrop-blur-2xl"
                        data-testid="mobile-menu"
                    >
                        <div className="px-6 py-6 flex flex-col gap-2">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    data-testid={`mobile-nav-link-${link.id}`}
                                    className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={buildWhatsappLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                                data-testid="mobile-cta-whatsapp"
                                className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#7C3AED] hover:bg-[#A78BFA] text-white text-sm font-semibold transition-all"
                            >
                                Pedir Orçamento <MessageCircle className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
