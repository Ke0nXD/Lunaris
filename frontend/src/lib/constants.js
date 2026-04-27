// LUNARIS — Site data and constants
export const WHATSAPP_NUMBER = "5511999999999";
export const WHATSAPP_DISPLAY = "(11) 99999-9999";
export const EMAIL = "contato@lunaris.com.br";

export const buildWhatsappLink = (message = "Olá, vim do site da Lunaris e quero pedir um orçamento.") =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const LOGO_URL =
    "https://customer-assets.emergentagent.com/job_2406048f-ea78-49cb-959b-736f730c7016/artifacts/8uhp0f92_file_000000005f30720e8cffc90fe4cd257b.png";

export const NAV_LINKS = [
    { label: "Início", href: "#hero", id: "hero" },
    { label: "Soluções", href: "#solucoes", id: "solucoes" },
    { label: "Templates", href: "#templates", id: "templates" },
    { label: "Portfólio", href: "#portfolio", id: "portfolio" },
    { label: "Planos", href: "#planos", id: "planos" },
    { label: "Perplexity", href: "#perplexity", id: "perplexity" },
    { label: "Suporte", href: "#suporte", id: "suporte" },
];

export const TRUST_STATS = [
    { number: "+150", label: "projetos entregues" },
    { number: "98%", label: "de satisfação" },
    { number: "+5", label: "anos de experiência" },
    { number: "24/7", label: "suporte humanizado" },
];

export const SERVICES = [
    {
        title: "Plataforma Full-Stack para Restaurantes",
        description:
            "Sistema completo para a gestão do seu restaurante — do pedido até a entrega.",
        icon: "Utensils",
        highlighted: true,
        features: [
            "Cardápio digital com QR Code",
            "Pedidos no local (comandas)",
            "Delivery integrado",
            "Painel administrativo",
            "Área do cliente",
            "Fluxo para entregadores",
        ],
    },
    {
        title: "Sites Institucionais",
        description:
            "Sites profissionais que transmitem autoridade e geram confiança real para sua marca.",
        icon: "Globe",
    },
    {
        title: "Landing Pages",
        description:
            "Páginas estratégicas focadas em conversão para anúncios e geração de leads qualificados.",
        icon: "Rocket",
    },
    {
        title: "Aplicativos Web",
        description:
            "Sistemas personalizados, áreas de membros, dashboards e plataformas sob medida.",
        icon: "Box",
    },
    {
        title: "Reparo de Sites e Apps",
        description:
            "Correção de bugs, melhorias, redesign, performance e manutenção contínua.",
        icon: "Wrench",
    },
];

export const TEMPLATES = [
    {
        name: "Restaurante Premium",
        category: "Gastronomia",
        price: "R$ 499",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Clínica & Saúde",
        category: "Medicina",
        price: "R$ 499",
        image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Advocacia",
        category: "Jurídico",
        price: "R$ 499",
        image:
            "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Estética & Beleza",
        category: "Bem-estar",
        price: "R$ 499",
        image:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Loja Local",
        category: "E-commerce",
        price: "R$ 499",
        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    },
];

export const PORTFOLIO = [
    {
        title: "Sistema p/ Restaurante",
        subtitle: "Painel administrativo",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Site Institucional",
        subtitle: "Clínica Médica",
        image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Landing Page",
        subtitle: "Geração de Leads",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Sistema Delivery",
        subtitle: "Multi-restaurantes",
        image:
            "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80",
    },
];

export const TESTIMONIALS = [
    {
        name: "Rafael Martins",
        role: "Dono de Restaurante",
        avatar: "https://images.unsplash.com/photo-1769636929231-3cd7f853d038?auto=format&fit=crop&w=200&q=80",
        quote:
            "Depois que a Lunaris criou nosso sistema, aumentamos 40% dos pedidos no delivery em apenas 2 meses.",
    },
    {
        name: "Juliana Mendes",
        role: "Clínica Estética",
        avatar: "https://images.unsplash.com/photo-1758534063829-a72058381e21?auto=format&fit=crop&w=200&q=80",
        quote:
            "Atendimento rápido, entrega impecável e resultado muito acima do que esperávamos. Recomendo demais.",
    },
    {
        name: "Carlos Silva",
        role: "Advogado",
        avatar: "https://images.unsplash.com/photo-1765776830139-72b2184dae5a?auto=format&fit=crop&w=200&q=80",
        quote:
            "Nosso site ficou incrível e começamos a receber muito mais clientes qualificados pela internet.",
    },
];

export const PLANS = [
    {
        name: "Start",
        tagline: "Ideal para quem está começando no digital",
        price: "799",
        features: [
            "Site até 5 páginas",
            "Design personalizado",
            "Responsivo (mobile)",
            "Formulário de contato",
            "Suporte via WhatsApp",
        ],
        highlighted: false,
    },
    {
        name: "Growth",
        tagline: "Mais performance e para negócios exigentes",
        price: "1.499",
        features: [
            "Site até 10 páginas",
            "Design premium",
            "SEO básico",
            "Integrações",
            "Suporte prioritário",
        ],
        highlighted: true,
        badge: "MAIS ESCOLHIDO",
    },
    {
        name: "Premium",
        tagline: "Solução completa para empresas exigentes",
        price: "2.999",
        features: [
            "Páginas ilimitadas",
            "Sistema personalizado",
            "SEO avançado",
            "Relatórios e métricas",
            "Suporte dedicado",
        ],
        highlighted: false,
    },
];

export const SUPPORT_FEATURES = [
    { icon: "Bug", label: "Correção de bugs" },
    { icon: "Sparkles", label: "Melhorias visuais" },
    { icon: "Zap", label: "Aumento de performance" },
    { icon: "Search", label: "SEO básico" },
    { icon: "Smartphone", label: "Responsividade mobile" },
    { icon: "Plug", label: "Integrações e funcionalidades" },
    { icon: "RefreshCw", label: "Manutenção contínua" },
];
