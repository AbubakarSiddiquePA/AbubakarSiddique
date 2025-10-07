import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container" style={{ textAlign: "center" }}>
        <p>&copy; 2025 Abubakar Siddique. All rights reserved.</p>

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
