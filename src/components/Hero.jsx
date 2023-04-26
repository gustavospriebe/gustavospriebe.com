import styles from "./Hero.module.css";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import dribble from "../assets/dribble.svg";
import { Button } from "flowbite-react";
import { useState } from "react";
import ModalEnglish from "./ModalEnglish";
import ModalPortuguese from "./ModalPortugues";

function Hero({ language }) {
    const [modal, setModal] = useState(false);

    return (
        <div className={styles.hero}>
            <div className={styles.heroImg}></div>
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
                        class="py-1 px-3 text-white rounded bg-indigo-700 hover:bg-transparent hover:border-indigo-700 hover:outline hover:text-indigo-700 hover:text-md
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
