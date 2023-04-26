import logo from "../assets/logosvg.svg";
import styles from "./Header.module.css";

function Header({ language, setLanguage }) {
    console.log(language);
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" className={styles.logo} />
            {/* <ul className="links">
                <li>Bio</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul> */}
            <ul className={styles.languages}>
                <li
                    className={
                        language === "en" ? styles.active : styles.inactive
                    }
                    onClick={() => setLanguage("en")}
                >
                    ENG
                </li>
                <div className={styles.separator}></div>
                <li
                    className={
                        language === "en" ? styles.inactive : styles.active
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
