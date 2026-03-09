import { useEffect } from "react";
import { portfolioData } from "../data/portfolioData";

const Portfolio = () => {

    useEffect(() => {
        if (window.Swiper) {
            new window.Swiper(".mySwiper", {
                cssMode: true,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            });
        }
    }, []);

    return (
        <section className="portfolio section" id="portfolio">

            <h2 className="section__title">Portfolio</h2>

            <span className="section__subtitle">
                My projects
            </span>

            <div className="portfolio__container container mySwiper">

                <div className="swiper-wrapper">

                    {portfolioData.map((project, index) => (

                        <div
                            className="portfolio__content grid swiper-slide"
                            key={index}
                        >

                            <img
                                src={project.image}
                                alt={project.title}
                                className="portfolio__img"
                            />

                            <div className="portfolio__data">

                                <h3 className="portfolio__title">
                                    {project.title}
                                </h3>

                                <p className="portfolio__description">
                                    {project.description}
                                </p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="button button--flex button--small portfolio__button"
                                >
                                    View
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

                {/* NAVIGATION BUTTONS */}
                <div className="swiper-button-next">
                    <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>

                <div className="swiper-button-prev">
                    <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
                </div>

                {/* PAGINATION */}
                <div className="swiper-pagination"></div>

            </div>

        </section>
    );
};

export default Portfolio;