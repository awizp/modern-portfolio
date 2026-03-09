import { aboutInfo, aboutStats } from "../data/aboutData";

const About = () => {
    return (
        <section className="about section" id="about">

            <h2 className="section__title">About Me</h2>

            <span className="section__subtitle">
                My Introduction
            </span>

            <div className="about__container container grid">

                {/* ABOUT IMAGE */}
                <img
                    src={aboutInfo.image}
                    alt="about"
                    className="about__img"
                />

                <div className="about__data">

                    {/* DESCRIPTION */}
                    <p className="about__description">
                        {aboutInfo.description}
                    </p>

                    {/* STATS */}
                    <div className="about__info">

                        {aboutStats.map((stat, index) => (
                            <div key={index}>

                                <span className="about__info-title">
                                    {stat.number}
                                </span>

                                <span className="about__info-name">
                                    {stat.label} <br /> {stat.subLabel}
                                </span>

                            </div>
                        ))}

                    </div>

                    {/* RESUME BUTTON */}
                    <div className="about__buttons">

                        <a
                            download
                            href={aboutInfo.resume}
                            className="button button--flex"
                        >

                            Download Resume

                            <i className="uil uil-import button__icon"></i>

                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;