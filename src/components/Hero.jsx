import { Button } from "flowbite-react";
import { useState } from "react";
import dribble from "../assets/dribble.svg";
import github from "../assets/github.svg";
import hero from "../assets/hero.jpg";
import linkedin from "../assets/linkedin.svg";
import styles from "./Hero.module.css";
import ModalEnglish from "./ModalEnglish";
import ModalPortuguese from "./ModalPortugues";

function Hero({ language }) {
    const [modal, setModal] = useState(false);

    return (
        <div className=" flex flex-col items-center justify-between lg:flex-row lg:p-12 ">
            <img
                src={hero}
                alt="hero"
                className="mb-[60px] h-64 w-64 rounded-full object-cover sm:mb-[90px] sm:h-127 sm:w-127 lg:mb-0"
            />
            <div className="flex flex-col items-center">
                <h1 className="mb-6 text-center text-4xl font-extrabold text-whiter">
                    Gustavo Priebe
                </h1>
                <h3 className="mb-6 text-center text-2xl font-bold text-header3">
                    {language === "en"
                        ? "Front End Developer"
                        : "Desenvolvedor Front End"}
                </h3>

                {/* <h4>
                    {language === "en"
                        ? "I'm a experienced "
                        : "Desenvolvedor"}
                </h4> */}
                <div className="flex flex-col lg:flex-row">
                    <button
                        onClick={() => setModal(!modal)}
                        className="h-12 w-52 rounded-lg bg-indigo-500 text-whiter hover:border-indigo-500 hover:bg-transparent transition hover:text-indigo-500 hover:outline
                    
                        "
                        // className="w-52 rounded"
                    >
                        {language === "en" ? "Contact me" : "Contato"}
                    </button>
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
