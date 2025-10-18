"use client";

import React from "react";

export default function NotifyForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("You’re on the list!");
  }

  return (
    <form className="gc-form" onSubmit={handleSubmit}>
      <input type="email" placeholder="you@email.com" required />
      <button className="gc-btn gc-btn-primary" type="submit">
        Notify Me
      </button>
    </form>
  );
}
