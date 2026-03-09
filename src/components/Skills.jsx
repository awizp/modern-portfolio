import { skillsData } from "../data/skillsData";

const Skills = () => {

    return (

        <section className="skills section" id="skills">

            <h2 className="section__title">
                Skills
            </h2>

            <span className="section__subtitle">
                My technical level
            </span>

            <div className="skills__container container grid section__border">

                {skillsData.map((category, index) => (

                    <div className="skills__content" key={index}>

                        <h3 className="skills__title">

                            <i className={`${category.icon} skills__icon`}></i>

                            {category.category}

                        </h3>

                        <div className="skills__grid">

                            {category.skills.map((skill, i) => (

                                <div className="skills__info" key={i}>

                                    <div className="skills__data">

                                        <div className="skills__blob">

                                            <img src={skill.image} alt={skill.name} />

                                        </div>

                                        <h3 className="skills__name">
                                            {skill.name}
                                        </h3>

                                        <span className="skills__subtitle">
                                            {skill.level}
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );
};

export default Skills;