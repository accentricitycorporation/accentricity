import React from "react";
import FadeInSection from "../components/FadeInSection";
import CTASection from "../components/CTASection";

export default function AppDevelopment() {
  const builds = [
    { title: "Marketplaces", desc: "Booking.com-style flows with providers and payments." },
    { title: "Appointment Apps", desc: "Scheduling, reminders, and clean booking UX." },
    { title: "Provider Dashboards", desc: "Availability, bookings, payouts, and operations." },
    { title: "Admin Systems", desc: "Control center for users, listings, and policies." },
  ];

  const stack = ["Flutter", "Firebase", "Auth", "Storage", "Notifications", "Payments"];

  const phases = [
    { title: "Prototype", desc: "Clickable + functional proof fast." },
    { title: "MVP", desc: "Core booking, payments, and provider flow." },
    { title: "Production", desc: "Security, scale, edge cases, stability." },
    { title: "Growth", desc: "Analytics, optimizations, expansion features." },
  ];

  return (
    <>
      <FadeInSection className="pageHero">
        <div className="container">
          <h1 className="pageHero__title">Mobile apps built for bookings, payments, and scale.</h1>
          <p className="pageHero__lead">Premium UX. Clean architecture. Fast execution.</p>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container">
          <h2 className="section__title">What we build</h2>
          <div className="grid4">
            {builds.map((b) => (
              <div key={b.title} className="card">
                <div className="card__title">{b.title}</div>
                <div className="card__desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container">
          <h2 className="section__title">Technology stack</h2>
          <div className="chips">
            {stack.map(s => <span className="chip" key={s}>{s}</span>)}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section">
        <div className="container">
          <h2 className="section__title">Delivery phases</h2>
          <div className="grid4">
            {phases.map((p) => (
              <div key={p.title} className="card">
                <div className="card__title">{p.title}</div>
                <div className="card__desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <CTASection title="Want a build plan for your app?" buttonLabel="Request a Build Plan" to="/contact" />
      </FadeInSection>
    </>
  );
}
