import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="contact card">
            <h3>Contact</h3>

            <p>
                <a href="mailto:siddiquepanathur@gmail.com">
                    <i className="fa-solid fa-envelope"></i> siddiquepanathur@gmail.com
                </a>
            </p>

            <p>
                <a
                    href="https://in.linkedin.com/in/abubakarsiddiquepa"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                </a>
            </p>

            <p>
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-github"></i> GitHub
                </a>
            </p>
        </section>
    );
}
