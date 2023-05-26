import { Button } from "flowbite-react";
import { useState } from "react";
import dribble from "../assets/dribble.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import styles from "./Hero.module.css";
import ModalEnglish from "./ModalEnglish";
import ModalPortuguese from "./ModalPortugues";
import hero from "../assets/hero.jpg";

function Hero({ language }) {
    const [modal, setModal] = useState(false);

    return (
        <div className="flex items-center justify-between px-32">
            <img src={hero} alt="hero" className="h-64 w-64 object-cover sm:w-127 sm:h-127" />
            <div className={styles.heroInfo}>
                <h1>Gustavo Priebe</h1>
                <h3>
                    {language === "en"
                        ? "Front End Developer"
                        : "Desenvolvedor Front End"}
                </h3>

                {/* <h4>
                    {language === "en"
                        ? "I'm a experienced "
                        : "Desenvolvedor"}
                </h4> */}
                <div className={styles.heroNav}>
                    <Button
                        onClick={() => setModal(!modal)}
                        // className="contact"
                        class="hover:text-md rounded bg-indigo-700 py-1 px-3 text-white hover:border-indigo-700 hover:bg-transparent hover:text-indigo-700 hover:outline
                        "
                    >
                        {language === "en" ? "Contact me" : "Contato"}
                    </Button>
                    {language === "en" ? (
                        <ModalEnglish modal={modal} setModal={setModal} />
                    ) : (
                        <ModalPortuguese modal={modal} setModal={setModal} />
                    )}
                    <div className={styles.heroLinks}>
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
