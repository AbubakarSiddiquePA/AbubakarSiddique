import React from "react";

function Experience() {
    return (
        <section id="experience" className="experience card">
            <h3>Work Experience</h3>
            <ul className="timeline">
                <li>
                    <h4>Flutter Developer — Dubai, UAE</h4>
                    <span className="time">2024 – Present</span>
                    <ul>
                        <li>
                            Led the full-lifecycle development and maintenance of enterprise
                            applications including a Learning Management System (LMS),
                            Employee Self-Service (ESS) portal, job search application, and
                            contracts management system.
                        </li>
                        <li>
                            Architected and implemented high-quality, scalable apps using MVVM
                            architecture and Provider for state management.
                        </li>
                        <li>
                            Managed deployments on Google Play Store and Apple App Store,
                            ensuring compliance with platform policies.
                        </li>
                        <li>
                            Designed and delivered user-friendly interfaces, fixed bugs, and
                            released updates to improve stability and user experience.
                        </li>
                    </ul>
                </li>

                <li>
                    <h4>IT Support Engineer — Delhivery</h4>
                    <span className="time">2021 – 2022</span>
                    <ul>
                        <li>
                            Managed and monitored IT infrastructure for logistics sites,
                            including a Fulfillment Center in Bangalore and a Hub in Kozhikode.
                        </li>
                        <li>
                            Provided timely remote support using tools like AnyDesk for
                            troubleshooting technical issues across India.
                        </li>
                        <li>
                            Collaborated with network engineers to resolve complex
                            connectivity problems, minimizing downtime.
                        </li>
                        <li>
                            Streamlined the ticket resolution process, resolving requests
                            quickly to keep business operations smooth.
                        </li>
                        <li>
                            Enhanced communication and problem-solving skills in a fast-paced,
                            multi-site environment.
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    );
}

export default Experience;
