import styles from "./Hero.css";
import hero from "../assets/hero.jpg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import dribble from "../assets/dribble.svg";

function Hero({language}) {
    return (
        <div className="hero">
            <div className="hero-img"></div>
            <div className="hero-info">
                <h1>GUSTAVO PRIEBE</h1>
                <h3>FRONT END DEVELOPER</h3>
                <div className="hero-nav">
                    <button className="contact">{language === 'en' ? 'Contact me': 'Contato'}</button>
                    <div className="hero-links">
                        <a
                            href="https://www.linkedin.com/in/gustavospriebe/"
                            target="_blank"
                        >
                            <img src={linkedin} alt="" />
                        </a>
                        <a
                            href="https://github.com/gustavospriebe"
                            target="_blank"
                        >
                            <img src={github} alt="" />
                        </a>
                        <a
                            href="https://dribbble.com/gustavospriebe"
                            target="_blank"
                        >
                            <img src={dribble} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
