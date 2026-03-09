import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch(
                "https://getform.io/f/71ccfa23-5a3f-435c-9026-05ab9ede83fd",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json"
                    },
                    body: new FormData(e.target)
                }
            );

            alert("Message sent", response);

            // reset form
            setFormData({
                name: "",
                email: "",
                message: ""
            });

            e.target.reset();

        } catch (error) {
            console.log("Error in sending message :", error);
        }
    };

    return (
        <section className="contact section" id="contact">

            <h2 className="section__title">
                Contact Me
            </h2>

            <span className="section__subtitle">
                Get in touch
            </span>

            <div className="contact__container container grid">

                {/* CONTACT INFO */}
                <div>

                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>

                        <div>
                            <h3 className="contact__title">
                                My email
                            </h3>

                            <span className="contact__subtitle">
                                ridvishnu@gmail.com
                            </span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon"></i>

                        <div>
                            <h3 className="contact__title">
                                Location
                            </h3>

                            <span className="contact__subtitle">
                                Tamilnadu, India
                            </span>
                        </div>
                    </div>

                </div>

                {/* CONTACT FORM */}
                <form
                    className="contact__form grid"
                    onSubmit={handleSubmit}
                >

                    <div className="grid">

                        <div className="contact__content">
                            <label className="contact__label">
                                Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                className="contact__input"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__content">
                            <label className="contact__label">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                className="contact__input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <div className="contact__content">

                        <label className="contact__label">
                            Message
                        </label>

                        <textarea
                            name="message"
                            rows="7"
                            className="contact__input"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                    </div>

                    <div>

                        <button
                            type="submit"
                            className="button button--flex"
                        >
                            Send Message
                            <i className="uil uil-message button__icon"></i>
                        </button>

                    </div>

                </form>

            </div>

        </section>
    );
}

export default Contact;