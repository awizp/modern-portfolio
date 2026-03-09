import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = ({ activeSection }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const { darkTheme, toggleTheme } = useContext(ThemeContext);

    function handleNavClick() {
        setMenuOpen(false);
    }

    return (
        <header className="header" id="header">

            <nav className="nav container">

                <a href="#home" className="nav__logo">
                    Vishnuprakash
                </a>

                {/* NAV MENU */}
                <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">

                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <a
                                href="#home"
                                className={`nav__link ${activeSection === "home" ? "active-link" : ""}`}
                                onClick={handleNavClick}
                            >
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#about"
                                className={`nav__link ${activeSection === "about" ? "active-link" : ""}`}
                                onClick={handleNavClick}
                            >
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#skills"
                                className={`nav__link ${activeSection === "skills" ? "active-link" : ""}`}
                                onClick={handleNavClick}
                            >
                                <i className="uil uil-layers nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#qualifications"
                                className={`nav__link ${activeSection === "qualifications" ? "active-link" : ""}`}
                                onClick={handleNavClick}
                            >
                                <i className="uil uil-graduation-cap nav__icon"></i> Qualification
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#portfolio"
                                className={`nav__link ${activeSection === "portfolio" ? "active-link" : ""}`}
                                onClick={handleNavClick}
                            >
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#contact"
                                className={`nav__link ${activeSection === "contact" ? "active-link" : ""}`}
                                onClick={handleNavClick}
                            >
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>

                    </ul>

                    {/* CLOSE BUTTON */}
                    <i
                        className="uil uil-times nav__close"
                        id="nav-close"
                        onClick={() => setMenuOpen(false)}
                    ></i>

                </div>

                {/* NAV BUTTONS */}
                <div className="nav__btns">

                    {/* THEME TOGGLE */}
                    <i
                        className={`uil ${darkTheme ? "uil-sun" : "uil-moon"} change-theme`}
                        id="theme-button"
                        onClick={toggleTheme}
                    ></i>

                    {/* MOBILE MENU BUTTON */}
                    <div
                        className="nav__toggle"
                        id="nav-toggle"
                        onClick={() => setMenuOpen(true)}
                    >
                        <i className="uil uil-apps"></i>
                    </div>

                </div>

            </nav>

        </header>
    );
};

export default Header;