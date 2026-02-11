import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a className="skip" href="#main">Skip to content</a>

      <div className="nav__inner container">
        <Link to="/" className="brand" aria-label="Accentricity Corp Home" >
          <span className="brand__mark" aria-hidden="true" ><img className="brand__mark" src="logo.png" alt="Accentricity Corp Logo" /></span>
          <span className="brand__text">Accentricity</span>
        </Link>

        <button
          className="nav__burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`} aria-label="Primary">
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/app-development" onClick={() => setOpen(false)}>App Development</NavLink>
          <NavLink to="/ai-automation" onClick={() => setOpen(false)}>AI Automation</NavLink>
          <NavLink to="/work" onClick={() => setOpen(false)}>Work</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          <Link to="/contact" className="btn btn--primary" onClick={() => setOpen(false)}>
            Book a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
