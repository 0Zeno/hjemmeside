"use client";

import * as React from "react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function SiteHeader() {
  return (
    <header className="flex justify-between mx-10 border-b-2 pb-3 top-0 sticky bg-white">
      <nav className="pt-2 font-semibold flex space-x-4">
        <button
          className="pt-2 hover:underline"
          onClick={() => scrollTo("jobb")}
        >
          Jobb
        </button>
        <button
          className="pt-2 hover:underline"
          onClick={() => scrollTo("verv")}
        >
          Verv
        </button>
        <button
          className="pt-2 hover:underline"
          onClick={() => scrollTo("sideprosjekter")}
        >
          Prosjekter
        </button>
        <button
          className="pt-2 hover:underline"
          onClick={() => scrollTo("skoleprosjekter")}
        >
          Skoleprosjekter
        </button>
      </nav>
    </header>
  );
}
