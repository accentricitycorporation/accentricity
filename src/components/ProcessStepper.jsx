import React from "react";

export default function ProcessStepper({ steps }) {
  return (
    <div className="stepper" role="list" aria-label="Process">
      {steps.map((s) => (
        <div key={s.title} className="step" role="listitem">
          <div className="step__title">{s.title}</div>
          <div className="step__desc">{s.desc}</div>
        </div>
      ))}
    </div>
  );
}
