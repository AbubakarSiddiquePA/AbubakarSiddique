import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="experience card">
      <h3>Work Experience</h3>
      <ul className="timeline">
        <li>
          <h4>Flutter Developer — Dubai, UAE</h4>
          <span className="time">2024 – Present</span>
          <ul>
            <li>Led full-lifecycle development of enterprise apps (LMS, ESS, Job Portal).</li>
            <li>Built scalable apps with MVVM & Provider state management.</li>
            <li>Managed deployment on Google Play Store & Apple App Store.</li>
            <li>Enhanced UX with bug fixes and regular updates.</li>
          </ul>
        </li>
        <li>
          <h4>IT Support Engineer — Delhivery</h4>
          <span className="time">2021 – 2022</span>
          <ul>
            <li>Monitored IT infrastructure at logistics hubs in Bangalore & Kerala.</li>
            <li>Provided remote support with Anydesk for nationwide employees.</li>
            <li>Collaborated with network engineers to resolve connectivity issues.</li>
            <li>Streamlined ticket resolution process to ensure smooth operations.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
