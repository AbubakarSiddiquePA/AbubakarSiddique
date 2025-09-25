import React from "react";

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h2 className="hero-title">Hi — I’m Abubakar Siddique</h2>
                    <p className="hero-sub">
                        I build thoughtful mobile apps with Flutter and craft clean web UIs.
                    </p>
                    <p>
                        <a className="btn" href="#skills">See my skills</a>
                        <a className="btn ghost" href="#contact">Get in touch</a>
                    </p>
                </div>
                <div className="hero-photo">
                    {/*  load from public/ */}
                    <img src="/images/profile.png" alt="Abubakar Siddique" />
                </div>
            </div>
        </section>
    );
}
