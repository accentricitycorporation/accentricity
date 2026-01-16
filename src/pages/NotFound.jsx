import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container section">
      <h1>Page not found</h1>
      <p className="muted">The page you’re looking for doesn’t exist.</p>
      <Link className="btn btn--secondary" to="/">Go Home</Link>
    </div>
  );
}
