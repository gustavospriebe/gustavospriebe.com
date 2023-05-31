import logo from "../assets/logosvg.svg";

const links = ["Bio", "Blog", "Projects"];

function Header({ language, setLanguage }) {
    return (
        <header className="mx-auto flex items-center justify-between px-12 pt-6 sm:px-20 lg:px-20 xl:px-32 2xl:px-48">
            <img src={logo} alt="logo" className="h-8 w-20" />
            {/* <ul className="hidden gap-8 md:flex">
                {links.map((l) => (
                    <li className="text-link-inactive hover-brightness">
                        <a href="">{l}</a>
                    </li>
                ))}
            </ul> */}
            <ul className="flex items-center justify-center gap-2 text-sm lg:gap-3 ">
                <li
                    className={
                        language === "en"
                            ? "language-active"
                            : "language-inactive"
                    }
                    onClick={() => setLanguage("en")}
                >
                    ENG
                </li>
                <div className="separator"></div>
                <li
                    className={
                        language === "en"
                            ? "language-inactive"
                            : "language-active"
                    }
                    onClick={() => setLanguage("pt-br")}
                >
                    PT-BR
                </li>
            </ul>
        </header>
    );
}

export default Header;
