import logo from "../assets/logosvg.svg";
import styles from "./Header.module.css";

function Header({ language, setLanguage }) {
    console.log(language);
    return (
        <header className="mx-auto mb-28 flex w-3/4 items-center justify-between pt-7  ">
            <img src={logo} alt="logo" className={styles.logo} />
            <ul className={styles.links}>
                <li>
                    <a href="">Bio</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
            </ul>
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
