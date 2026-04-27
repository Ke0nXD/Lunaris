import React from "react";
import { Mail, MessageCircle, Clock, Instagram, Linkedin, Facebook, Github } from "lucide-react";
import { LOGO_URL, NAV_LINKS, EMAIL, WHATSAPP_DISPLAY, buildWhatsappLink } from "../lib/constants";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer
            id="contato"
            className="relative pt-20 pb-10 border-t border-white/5 bg-[#030108]"
            data-testid="site-footer"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <img
                            src={LOGO_URL}
                            alt="Lunaris"
                            className="h-36 sm:h-44 lg:h-52 w-auto mb-5"
                            style={{ filter: "drop-shadow(0 0 26px rgba(167,139,250,0.55))" }}
                            data-testid="footer-logo"
                        />
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Soluções web de alta performance para impulsionar seu negócio rumo a outra órbita.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            {[
                                { icon: Instagram, href: "#", id: "instagram" },
                                { icon: Linkedin, href: "#", id: "linkedin" },
                                { icon: Facebook, href: "#", id: "facebook" },
                                { icon: Github, href: "#", id: "github" },
                            ].map(({ icon: Icon, href, id }) => (
                                <a
                                    key={id}
                                    href={href}
                                    className="w-10 h-10 rounded-full glass hover:border-[#A78BFA]/40 flex items-center justify-center text-white/70 hover:text-white transition-all"
                                    aria-label={id}
                                    data-testid={`social-${id}`}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-heading text-sm font-bold text-white uppercase tracking-[0.2em] mb-5">
                            Navegação
                        </h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((l) => (
                                <li key={l.id}>
                                    <a
                                        href={l.href}
                                        className="text-sm text-white/65 hover:text-[#A78BFA] transition-colors"
                                        data-testid={`footer-link-${l.id}`}
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading text-sm font-bold text-white uppercase tracking-[0.2em] mb-5">
                            Contato
                        </h4>
                        <ul className="space-y-3.5">
                            <li>
                                <a
                                    href={buildWhatsappLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-2.5 text-sm text-white/65 hover:text-white transition-colors"
                                    data-testid="footer-whatsapp"
                                >
                                    <MessageCircle className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                                    <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="flex items-start gap-2.5 text-sm text-white/65 hover:text-white transition-colors"
                                    data-testid="footer-email"
                                >
                                    <Mail className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                                    <span>{EMAIL}</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5 text-sm text-white/65">
                                <Clock className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                                <span>Seg–Sex, 9h às 18h</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Final CTA */}
                    <div>
                        <h4 className="font-heading text-sm font-bold text-white uppercase tracking-[0.2em] mb-5">
                            Pronto para decolar?
                        </h4>
                        <p className="text-sm text-white/65 mb-5">
                            Receba uma proposta sob medida em até 24h.
                        </p>
                        <a
                            href={buildWhatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#7C3AED] hover:bg-[#A78BFA] text-white text-sm font-semibold transition-all shadow-[0_0_24px_rgba(124,58,237,0.4)]"
                            data-testid="footer-cta-whatsapp"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/45">
                        © {year} Lunaris. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-5 text-xs text-white/45">
                        <a href="#" className="hover:text-white/80 transition-colors" data-testid="footer-privacy">
                            Política de Privacidade
                        </a>
                        <span className="opacity-40">|</span>
                        <a href="#" className="hover:text-white/80 transition-colors" data-testid="footer-terms">
                            Termos de Uso
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
