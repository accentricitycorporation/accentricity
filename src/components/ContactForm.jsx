import React, { useMemo, useState } from "react";

const budgets = ["< $2k", "$2k–$5k", "$5k–$10k", "$10k+"];
const timelines = ["ASAP", "2–4 weeks", "1–2 months", "3+ months"];

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    need: "",
    budget: "",
    timeline: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const canSubmit = useMemo(() => {
    return values.name.trim() && values.company.trim() && values.need.trim();
  }, [values]);

  function validate() {
    const e = {};
    if (!values.name.trim()) e.name = "Name is required.";
    if (!values.company.trim()) e.company = "Company is required.";
    if (!values.need.trim()) e.need = "Please describe what you need.";
    return e;
  }

  function onChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    const eMap = validate();
    setErrors(eMap);
    if (Object.keys(eMap).length > 0) return;

    // Mock submit (no backend)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="success">
        <div className="success__title">Request received.</div>
        <div className="success__text">
          We’ll reply with next steps. If it’s urgent, use WhatsApp.
        </div>
        <button className="btn btn--secondary" onClick={() => setSubmitted(false)}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__grid">
        <label className="field">
          <span className="field__label">Name *</span>
          <input
            name="name"
            value={values.name}
            onChange={onChange}
            autoComplete="name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className="field__error">{errors.name}</span>}
        </label>

        <label className="field">
          <span className="field__label">Company *</span>
          <input
            name="company"
            value={values.company}
            onChange={onChange}
            autoComplete="organization"
            aria-invalid={!!errors.company}
          />
          {errors.company && <span className="field__error">{errors.company}</span>}
        </label>

        <label className="field field--full">
          <span className="field__label">What do you need? *</span>
          <textarea
            name="need"
            value={values.need}
            onChange={onChange}
            rows={5}
            aria-invalid={!!errors.need}
          />
          {errors.need && <span className="field__error">{errors.need}</span>}
        </label>

        <label className="field">
          <span className="field__label">Budget (optional)</span>
          <select name="budget" value={values.budget} onChange={onChange}>
            <option value="">Select</option>
            {budgets.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </label>

        <label className="field">
          <span className="field__label">Timeline (optional)</span>
          <select name="timeline" value={values.timeline} onChange={onChange}>
            <option value="">Select</option>
            {timelines.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
      </div>

      <div className="form__actions">
        <button className="btn btn--primary" type="submit" disabled={!canSubmit}>
          Request a Call
        </button>
        <div className="muted small">No spam. Short, direct replies.</div>
      </div>
    </form>
  );
}
