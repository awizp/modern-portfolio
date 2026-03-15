import { socialLinks, homeInfo } from "../data/homeData";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">

                <div className="home__content grid">
                    {/* SOCIAL LINKS */}
                    <div className="home__social">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                className="home__social-icon"
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>


                    {/* PROFILE IMAGE */}
                    <div className="home__img">
                        <svg
                            className="home__blob"
                            viewBox="0 0 200 190"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask id="mask0">
                                <path
                                    fill="white"
                                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                />
                            </mask>

                            <g mask="url(#mask0)">
                                <path
                                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                />

                                <image
                                    className="home__blob-img"
                                    x="3"
                                    y="10"
                                    width="150"
                                    height="150"
                                    href="/images/profile.png"
                                />
                            </g>
                        </svg>
                    </div>


                    {/* TEXT CONTENT */}
                    <div className="home__data">

                        <h1 className="home__title">
                            Hi, I'm {homeInfo.name}
                        </h1>

                        <h3 className="home__subtitle">
                            {homeInfo.role}
                        </h3>

                        <p className="home__description">
                            {homeInfo.description}
                        </p>

                        <a href="#contact" className="button button--flex">
                            Contact Me
                            <i className="uil uil-message button__icon"></i>
                        </a>

                    </div>

                </div>


                {/* SCROLL DOWN */}
                <div className="home__scroll">

                    <a href="#about" className="home__scroll-button button--flex">
                        <i className="uil uil-mouse-alt home__scroll-mouse"></i>

                        <span className="home__scroll-name">
                            Scroll down
                        </span>

                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>

                </div>

            </div>

        </section>
    );
};

export default Home;