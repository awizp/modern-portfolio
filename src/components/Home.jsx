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
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="hsl(275,69%,61%)" />
                                    <stop offset="100%" stopColor="hsl(275,57%,53%)" />
                                </linearGradient>

                                <mask id="maskBlob">
                                    <path
                                        fill="white"
                                        d="M50.3,-64.2C63.4,-55.4,71.1,-39.1,75.5,-22.1C79.9,-5.1,81.1,12.6,74.7,26.8C68.3,41,54.4,51.6,39.4,58.7C24.4,65.8,8.3,69.3,-7.4,68.6C-23.1,67.9,-38.3,63,-49.7,53.1C-61.1,43.3,-68.7,28.5,-70.9,13C-73.1,-2.4,-69.9,-18.5,-62.3,-31.7C-54.7,-44.9,-42.7,-55.2,-29.3,-63C-15.9,-70.8,-1.1,-76.1,13.9,-73.6C28.9,-71.2,37.2,-73,50.3,-64.2Z"
                                        transform="translate(100 100)"
                                    />
                                </mask>
                            </defs>

                            <g mask="url(#maskBlob)">
                                <path
                                    fill="url(#blobGradient)"
                                    d="M50.3,-64.2C63.4,-55.4,71.1,-39.1,75.5,-22.1C79.9,-5.1,81.1,12.6,74.7,26.8C68.3,41,54.4,51.6,39.4,58.7C24.4,65.8,8.3,69.3,-7.4,68.6C-23.1,67.9,-38.3,63,-49.7,53.1C-61.1,43.3,-68.7,28.5,-70.9,13C-73.1,-2.4,-69.9,-18.5,-62.3,-31.7C-54.7,-44.9,-42.7,-55.2,-29.3,-63C-15.9,-70.8,-1.1,-76.1,13.9,-73.6C28.9,-71.2,37.2,-73,50.3,-64.2Z"
                                    transform="translate(100 100)"
                                />
                                <image
                                    className="home__blob-img"
                                    href="/images/profile.png"
                                    x="30"
                                    y="20"
                                    width="140"
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