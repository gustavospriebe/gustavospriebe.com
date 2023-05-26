import { useState } from "react";
import dribble from "../assets/dribble.svg";
import github from "../assets/github.svg";
import hero from "../assets/hero.jpg";
import linkedin from "../assets/linkedin.svg";
import ModalEnglish from "./ModalEnglish";
import ModalPortuguese from "./ModalPortugues";

function Hero({ language }) {
    const [modal, setModal] = useState(false);

    return (
        <div className="xl:pt-22 xl:gap-30 flex flex-col items-center justify-center pt-12 lg:flex-row lg:gap-14 lg:pt-16 2xl:gap-60 2xl:pt-24">
            <img
                src={hero}
                alt="hero"
                className="hero-animation mb-[60px] h-64 w-64 rounded-full object-cover sm:mb-[90px] sm:h-95 sm:w-95 lg:mb-0 lg:h-127 lg:w-127"
            />
            <div className="flex flex-col items-center">
                <h1 className="mb-6 text-center text-4xl font-extrabold text-whiter sm:text-6xl  lg:text-left ">
                    Gustavo Priebe
                </h1>
                <h3 className="mb-6 w-full text-center text-2xl font-bold text-header3 sm:text-3xl lg:text-left">
                    {language === "en"
                        ? "Front End Developer"
                        : "Desenvolvedor Front End"}
                </h3>

                {/* <h4>
                    {language === "en"
                        ? "I'm a experienced "
                        : "Desenvolvedor"}
                </h4> */}
                <div className="flex w-full flex-col items-center lg:flex-row lg:gap-10">
                    <button
                        onClick={() => setModal(!modal)}
                        className="mb-6 h-12 w-52 rounded-lg bg-indigo-500 text-whiter hover:border-indigo-500 hover:bg-transparent hover:text-indigo-500 hover:outline sm:text-lg lg:mb-0"
                    >
                        {language === "en" ? "Contact me" : "Contato"}
                    </button>
                    {language === "en" ? (
                        <ModalEnglish modal={modal} setModal={setModal} />
                    ) : (
                        <ModalPortuguese modal={modal} setModal={setModal} />
                    )}
                    <div className="flex items-center justify-center gap-6">
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
