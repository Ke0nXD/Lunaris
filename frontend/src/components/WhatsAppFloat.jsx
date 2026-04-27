import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsappLink } from "../lib/constants";

// Inline WhatsApp brand SVG
const WhatsAppIcon = ({ className = "w-7 h-7" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886a9.86 9.86 0 0 0 1.514 5.26l-.999 3.648 3.974-1.609zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
);

export const WhatsAppFloat = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 400);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.a
                    href={buildWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-[60] w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.8)] transition-shadow duration-300"
                    data-testid="whatsapp-floating-btn"
                    aria-label="Falar no WhatsApp"
                >
                    {/* Pulse rings */}
                    <span className="absolute inset-0 rounded-full bg-[#22C55E] opacity-50 animate-ping" />
                    <span className="absolute inset-0 rounded-full bg-[#22C55E] opacity-30 animate-pulse" />
                    <WhatsAppIcon className="w-7 h-7 lg:w-8 lg:h-8 relative z-10" />
                </motion.a>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppFloat;
