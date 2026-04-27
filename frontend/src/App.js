import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CosmicBackground } from "./components/CosmicBackground";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Templates } from "./components/Templates";
import { Portfolio } from "./components/Portfolio";
import { Plans } from "./components/Plans";
import { PerplexitySection } from "./components/PerplexitySection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { CTABand } from "./components/CTABand";
import { FreeAnalysisCTA } from "./components/FreeAnalysisCTA";

const Home = () => {
    return (
        <div className="relative min-h-screen overflow-x-clip" data-testid="home-page">
            <CosmicBackground density={120} />
            <Header />
            <main>
                <Hero />

                <Services />
                <CTABand
                    eyebrow="Próximo passo"
                    title="Pronto para tirar sua ideia do papel?"
                    button="Solicitar orçamento"
                    message="Olá! Quero solicitar um orçamento para o meu projeto."
                    testid="cta-after-services"
                />

                <Templates />
                <CTABand
                    eyebrow="Modelo escolhido?"
                    title="Gostou de algum modelo? Vamos personalizar para você."
                    button="Quero meu site"
                    message="Olá! Gostei de um dos templates e quero saber mais."
                    testid="cta-after-templates"
                />

                {/* Main repeated promo CTA */}
                <FreeAnalysisCTA testid="free-analysis-cta-mid" />

                <Portfolio />
                <CTABand
                    eyebrow="Vamos juntos"
                    title="Seu negócio pode ser o próximo case da Lunaris."
                    button="Falar com especialista"
                    message="Olá! Quero falar com um especialista sobre meu projeto."
                    variant="highlight"
                    testid="cta-after-portfolio"
                />

                <Plans />
                <CTABand
                    eyebrow="Indeciso?"
                    title="Não sabe qual plano escolher? Receba uma recomendação gratuita."
                    button="Receber recomendação gratuita"
                    message="Olá! Estou em dúvida sobre qual plano escolher e quero uma recomendação."
                    testid="cta-after-plans"
                />

                <PerplexitySection />

                {/* Second placement of the main repeated promo CTA */}
                <FreeAnalysisCTA testid="free-analysis-cta-bottom" />

                <FinalCTA />
            </main>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
};

function App() {
    return (
        <div className="App font-body bg-[#030108] text-white">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
