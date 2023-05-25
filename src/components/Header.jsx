import logo from "../assets/logosvg.svg";
import styles from "./Header.module.css";

const links = ["Bio", "Projects"];

function Header({ language, setLanguage }) {
    console.log(language);
    return (
        <header className="mx-auto mb-28 flex w-3/4 items-center justify-between pt-14">
            <img src={logo} alt="logo" className="h-7 w-20" />
            <ul className="flex gap-8">
                {links.map((l) => (
                    <li className="text-link-inactive hover:brightness-90">
                        <a href="">{l}</a>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center text-sm gap-4">
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
                <div className='separator'></div>
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
