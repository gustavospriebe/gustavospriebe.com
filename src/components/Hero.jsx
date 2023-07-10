import { useState } from "react";
import devto from "../assets/devto.svg";
import github from "../assets/github.svg";
import hero from "../assets/hero.jpg";
import linkedin from "../assets/linkedin.svg";
import medium from "../assets/medium.svg";
import twitter from "../assets/twitter.svg";
import ModalEnglish from "./ModalEnglish";
import ModalPortuguese from "./ModalPortugues";

function Hero({ language }) {
    const [modal, setModal] = useState(false);

    return (
        <div className="xl:gap-30 flex flex-col items-center justify-center p-12 lg:flex-row lg:gap-14 lg:p-24 xl:p-16 2xl:gap-60 2xl:p-40">
            <img
                src={hero}
                alt="hero"
                className="hero-animation mb-[60px] h-64 w-64 rounded-full object-cover sm:mb-[90px] sm:h-95 sm:w-95 lg:mb-0 lg:h-127 lg:w-127"
            />
            <div className="flex flex-col items-center">
                <h1 className="mb-5 text-center text-4xl font-extrabold text-whiter sm:text-6xl  lg:text-left ">
                    Gustavo Priebe
                </h1>
                <h3 className="mb-7 w-full text-center text-2xl font-bold text-header3 sm:text-3xl lg:text-left">
                    {language === "en"
                        ? "Front End Developer"
                        : "Desenvolvedor Front End"}
                </h3>

                {/* <h4 className="mb-7 w-full text-lg text-whiter">
                    {language === "en" ? "I'm a experienced " : "Desenvolvedor"}
                </h4> */}
                <div className="flex w-full flex-col items-center lg:flex-row lg:gap-8">
                    <button
                        onClick={() => setModal(!modal)}
                        className="button sm:text-lg"
                    >
                        {language === "en" ? "Contact me" : "Contato"}
                    </button>
                    {language === "en" ? (
                        <ModalEnglish modal={modal} setModal={setModal} />
                    ) : (
                        <ModalPortuguese modal={modal} setModal={setModal} />
                    )}
                    <div className="flex items-center justify-center gap-5">
                        <a
                            href="https://www.linkedin.com/in/gustavospriebe/"
                            target="_blank"
                            className="hover-brightness"
                        >
                            <img src={linkedin} alt="" />
                        </a>
                        <a
                            href="https://github.com/gustavospriebe"
                            target="_blank"
                            className="hover-brightness"
                        >
                            <img src={github} alt="" />
                        </a>
                        {language === "en" ? (
                            <a
                                href="https://medium.com/@gustavospriebe"
                                target="_blank"
                                className="hover-brightness"
                            >
                                <img src={medium} alt="" />
                            </a>
                        ) : (
                            <a
                                href="https://dev.to/gustavospriebe"
                                target="_blank"
                                className="hover-brightness"
                            >
                                <img src={devto} alt="" />
                            </a>
                        )}
                        <a
                            href="https://twitter.com/gustavospriebe"
                            target="_blank"
                            className="hover-brightness"
                        >
                            <img src={twitter} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
