// import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
    const [language, setLanguage] = useState("pt-br");

    return (
        <div className="App">
            <Header language={language} setLanguage={setLanguage} />
            <Hero language={language} />
        </div>
    );
}

export default App;
