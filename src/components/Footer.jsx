import React, { useEffect, useState } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // --- Configurable values ---
    const startDate = new Date("2024-10-01"); // your "site launch" date
    const baseCount = 250; // initial fake visitor count
    const minIncrease = 10; // min daily increment
    const maxIncrease = 20; // max daily increment

    // --- Calculate how many days since launch ---
    const today = new Date();
    const daysPassed = Math.floor(
      (today - startDate) / (1000 * 60 * 60 * 24)
    );

    // --- Calculate total visitors ---
    let count = baseCount;
    for (let i = 0; i < daysPassed; i++) {
      count +=
        Math.floor(Math.random() * (maxIncrease - minIncrease + 1)) +
        minIncrease;
    }

    // --- Animate count up (optional) ---
    let current = 0;
    const step = Math.ceil(count / 100);
    const interval = setInterval(() => {
      current += step;
      if (current >= count) {
        current = count;
        clearInterval(interval);
      }
      setVisitorCount(current);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="site-footer">
      <div className="container" style={{ textAlign: "center" }}>
        <p>&copy; 2025 Abubakar Siddique. All rights reserved.</p>

        {/* 🔢 Visitor Counter */}
        <p style={{ marginTop: "8px", fontWeight: "bold" }}>
          Visitors: {visitorCount.toLocaleString()}
        </p>

        {/* Social Links */}
        <div className="footer-socials" style={{ marginTop: "10px" }}>
          <a
            href="https://www.youtube.com/@Siddizain/shorts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              alt="YouTube"
              style={{ width: "24px", marginRight: "12px" }}
            />
          </a>

          <a
            href="https://www.instagram.com/siddizain/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
              alt="Instagram"
              style={{ width: "24px", marginRight: "12px" }}
            />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
              alt="Facebook"
              style={{ width: "24px", marginRight: "12px" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
