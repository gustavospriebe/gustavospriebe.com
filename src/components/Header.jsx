import logo from "../assets/logosvg.svg";
import "./Header.css";

function Header({language, setLanguage}) {

    console.log(language);
    return (
        <header>
            <img src={logo} alt="logo" className="logo" />
            {/* <ul className="links">
                <li>Bio</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul> */}
            <ul className="languages">
                <li
                    className={language === "en" ? "active" : "inactive"}
                    onClick={() => setLanguage("en")}
                >
                    ENG
                </li>
                <div className="separator"></div>
                <li
                    className={language === "en" ? "inactive" : "active"}
                    onClick={() => setLanguage("pt-br")}
                >
                    PT-BR
                </li>
            </ul>
        </header>
    );
}

export default Header;
