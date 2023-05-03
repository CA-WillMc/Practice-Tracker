import React from "react";
import "./menu.css";

export default function Menu() {
  function handleLinkClick(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <header>
        <h1 class="name">
          Practice
          <span id="io">.io</span>
        </h1>
        <nav class="navigation">
          <a href="#Goals" onClick={handleLinkClick}>
            Goals
          </a>
          <a href="#Calendar" onClick={handleLinkClick}>
            Calendar
          </a>
          <a href="#Practice" onClick={handleLinkClick}>
            Practice
          </a>
          <a href="#Explore" onClick={handleLinkClick}>
            Explore
          </a>
          <a href="#Profil" onClick={handleLinkClick}>
            Profil
          </a>
        </nav>
      </header>
      <body>
        <section id="Goals">
          <h2>Goals</h2>
          <input type="text" placeholder="goals"></input>
          <button>add</button>
          <h3>To do list</h3>
          <ul id="Todo">
            <li>scales</li>
            <li>arpegios</li>
          </ul>
        </section>
        <section id="Calendar">
          <h2>Calendar</h2>
          <p>Display a calendar that display the goals (on hover)</p>
        </section>
        <section id="Practice">
          <h2>Practice</h2>
          <p>Metronome, repetition counter, complete</p>
        </section>
        <section id="Explore">
          <h2>Explore</h2>
          <p>Not sure yet</p>
        </section>
        <section id="Profil">
          <h2>Profil</h2>
          <p>Display user progress</p>
        </section>
      </body>
    </>
  );
}
