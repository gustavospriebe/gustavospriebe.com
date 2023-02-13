import styles from "./Hero.css";
import hero from "../assets/hero.jpg";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-img"></div>
            <div className="hero-info">
                <h1>GUSTAVO PRIEBE</h1>
                <h3>FRONT END DEVELOPER</h3>
                <div className="hero-links">
                    <button className="contact">Contact me</button>
                    <p>Linkedin</p>
                    <p>Dribbble</p>
                    <p>Github</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
