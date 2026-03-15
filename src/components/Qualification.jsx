import { useState } from "react";
import { educationData, technicalData } from "../data/qualificationData";

const Qualification = () => {

    const [activeTab, setActiveTab] = useState("education");

    const renderItems = (data) => {
        return data.map((item, index) => (
            <div className="qualification__item" key={index}>

                <h3 className="qualification__title">
                    {item.title}
                </h3>

                <span className="qualification__subtitle">
                    {item.subtitle}
                </span>

                {item.year && (
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> {item.year}
                    </div>
                )}

            </div>
        ));
    };

    return (
        <section className="qualification section" id="qualifications">

            <h2 className="section__title">
                Qualification
            </h2>

            <span className="section__subtitle">
                My Certifications
            </span>

            <div className="qualification__container container">

                {/* TABS */}
                <div className="qualification__tabs">

                    <div
                        className={`qualification__button button--flex ${activeTab === "education" ? "qualification__active" : ""
                            }`}
                        onClick={() => setActiveTab("education")}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div
                        className={`qualification__button button--flex ${activeTab === "technical" ? "qualification__active" : ""
                            }`}
                        onClick={() => setActiveTab("technical")}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Technical
                    </div>

                </div>

                {/* CONTENT */}
                <div className="qualification__sections">

                    {activeTab === "education" && (
                        <div className="qualification__content qualification__active">
                            {renderItems(educationData)}
                        </div>
                    )}

                    {activeTab === "technical" && (
                        <div className="qualification__content qualification__active">
                            {renderItems(technicalData)}
                        </div>
                    )}

                </div>

            </div>

        </section>
    );
};

export default Qualification;