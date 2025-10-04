import React, { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState(""); // success or error

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            const response = await fetch("https://formspree.io/f/xjkarlww", {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset(); // clear form
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            console.error("Form submission failed:", error);
            setStatus("ERROR");
        }
    };

    return (
        <section id="contact" className="contact card">
            <h3>Contact</h3>

            <p>
                <a href="mailto:siddiquepanathur@gmail.com">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                        alt="Email"
                        style={{ width: "20px", marginRight: "8px", verticalAlign: "middle" }}
                    />
                    siddiquepanathur@gmail.com
                </a>
            </p>

            <p>
                <a
                    href="https://in.linkedin.com/in/abubakarsiddiquepa"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        alt="LinkedIn"
                        style={{ width: "20px", marginRight: "8px", verticalAlign: "middle" }}
                    />
                    LinkedIn
                </a>
            </p>

            <p>
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="GitHub"
                        style={{ width: "20px", marginRight: "8px", verticalAlign: "middle" }}
                    />
                    GitHub
                </a>
            </p>

            {/* --- Contact Form --- */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Drop me a message</h3>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" rows="4" required />
                <button type="submit" className="btn">Send Message</button>
            </form>

            {/* --- Feedback Message --- */}
            {status === "SUCCESS" && (
                <p style={{ color: "green", marginTop: "10px" }}>
                    ✅ Thanks! Your message has been sent.
                </p>
            )}
            {status === "ERROR" && (
                <p style={{ color: "red", marginTop: "10px" }}>
                    ❌ Oops! Something went wrong. Please try again.
                </p>
            )}
        </section>
    );
}
