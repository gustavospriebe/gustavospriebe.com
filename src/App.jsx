import { useState } from "react";
import ReactGA from "react-ga";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./global.css";

const TRACKING_ID = import.meta.env.VITE_GOOGLE_ANALYTICS;
ReactGA.initialize(TRACKING_ID);

const SendAnalytics = () => {
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
    });
};

function App() {
    const [language, setLanguage] = useState("pt-br");

    return (
        <div className="bg-background min-h-screen font-inter">
            <Header language={language} setLanguage={setLanguage} />
            <Hero language={language} />
        </div>
    );
}

export default App;
