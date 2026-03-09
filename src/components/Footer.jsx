const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__bg">

                <div className="footer__container container grid">

                    {/* FOOTER TITLE */}
                    <div>
                        <h1 className="footer__title">
                            Vishnuprakash
                        </h1>

                        <span className="footer__subtitle">
                            Fullstack Engineer
                        </span>
                    </div>

                    {/* FOOTER LINKS */}
                    <ul className="footer__links">

                        <li>
                            <a
                                href="#qualifications"
                                className="footer__link"
                            >
                                Qualification
                            </a>
                        </li>

                        <li>
                            <a
                                href="#portfolio"
                                className="footer__link"
                            >
                                Portfolio
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                className="footer__link"
                            >
                                Contact
                            </a>
                        </li>

                    </ul>

                    {/* SOCIAL LINKS */}
                    <div className="footer__socials">

                        <a
                            href="https://www.linkedin.com/in/awizp/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__social"
                        >
                            <i className="uil uil-linkedin-alt"></i>
                        </a>

                        <a
                            href="https://www.sololearn.com/profile/14130040"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__social"
                        >
                            <i className="uil uil-code-branch"></i>
                        </a>

                        <a
                            href="https://github.com/awizp"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__social"
                        >
                            <i className="uil uil-github-alt"></i>
                        </a>

                    </div>

                </div>

                {/* COPYRIGHT */}
                <p className="footer__copy">
                    {new Date().getFullYear()}. Portfolio made by Vishnuprakash R
                </p>

            </div>

        </footer>
    );
};

export default Footer;