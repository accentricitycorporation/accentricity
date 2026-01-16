import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__mark" aria-hidden="true">A</div>
            <div>
              <div className="footer__name">Accentricity Corp</div>
              <div className="footer__tag">Technology crafted for your business.</div>
            </div>
          </div>

          <div className="footer__meta">
            <div><span className="muted">Email:</span> accentricitycorporation@gmail.com</div>
            <div><span className="muted">Phone:</span> +91 89786 76960 | +1 571 631 9490</div>
            <div><span className="muted">Locations:</span> Hyderabad, India | Washington DC, USA</div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="muted">© {new Date().getFullYear()} Accentricity Corp</div>
          <div className="footer__links">
            <Link to="/contact">Contact</Link>
            <a href="#" aria-label="Privacy (placeholder)">Privacy</a>
            <a href="#" aria-label="Terms (placeholder)">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
