import React from "react";

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h2 className="hero-title">Hi — I’m Abubakar</h2>
                    <p className="hero-sub">
                        I build thoughtful mobile apps with Flutter and craft clean web UIs.
                    </p>
                    <p>
                        <a className="btn" href="#skills">See my skills</a>
                        <a className="btn ghost" href="#contact">Get in touch</a>
                        {/* <a className="btn" href="/resume.pdf" download>
              Download Resume
            </a> */}
                    </p>
                </div>
                <div className="hero-photo">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQGtttZtd75MSA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698232676875?e=2147483647&v=beta&t=6YTSSVnN3g7qiTDK_o0CRC2PXab1YoZtTGdBS0hZrUQ"
                        alt="Abubakar Siddique"
                    />
                </div>
            </div>
        </section>
    );
}
