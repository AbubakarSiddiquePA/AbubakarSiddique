import React from "react";

export default function Education() {
  return (
    <section id="education" className="education card">
      <h3>Education</h3>
      <ul className="timeline">
        <li>
          <h4>Bachelor of Computer Application</h4>
          <span className="time">2015 – 2018</span>
          <p>RR Institutions, Bangalore University, Karnataka, India</p>
        </li>
        <li>
          <h4>Higher Secondary School</h4>
          <span className="time">2015 – 2017</span>
          <p>JHSS Chithari, Kasaragod, Kerala, India</p>
        </li>
        <li>
          <h4>High School</h4>
          <span className="time">2014 – 2015</span>
          <p>St Mary's English Medium School, Kasaragod, Kerala, India</p>
        </li>
      </ul>
    </section>
  );
}
