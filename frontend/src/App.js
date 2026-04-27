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
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

const Home = () => {
    return (
        <div className="relative min-h-screen overflow-x-clip" data-testid="home-page">
            <CosmicBackground density={120} />
            <Header />
            <main>
                <Hero />
                <Services />
                <Templates />
                <Portfolio />
                <Plans />
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
