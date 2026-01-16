import React from "react";
import { Link } from "react-router-dom";

export default function Tiles({ items }) {
  return (
    <div className="tiles">
      {items.map((it) => (
        <div key={it.title} className="tile">
          <div className="tile__title">{it.title}</div>
          <div className="tile__desc">{it.desc}</div>
          <Link className="tile__link" to={it.to} aria-label={`Learn more about ${it.title}`}>
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
