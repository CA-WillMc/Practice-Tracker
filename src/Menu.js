import React from "react";
import { useState, useRef } from "react";
import "./menu.css";
import "./index.css";

export default function Menu() {
  function handleLinkClick(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
  const [todos, setTodos] = useState([]);
  const textInputRef = useRef();
  const numberInputRef = useRef();
  /*
  function handleInputChange(event) {
    const newTodo = setNewTodo(event.target.value);
    setNewTodo([...todos, newTodo]);
  }
*/
  function handleAddTodoClick() {
    const newTodo =
      "Practice " +
      textInputRef.current.value +
      " for " +
      numberInputRef.current.value +
      "!";
    setTodos([...todos, newTodo]);
    textInputRef.current.value = "";
    numberInputRef.current.value = "";
  }
  function handleDeleteTodoClick(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
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
          <div id="addTodo">
            <input type="text" placeholder="Goal" ref={textInputRef}></input>
            <input
              type="text"
              placeholder="repetition"
              ref={numberInputRef}
            ></input>
            <button onClick={handleAddTodoClick}>add</button>
          </div>
          <ul id="listTodo">
            {todos.map((todo, index) => (
              <li className="elemTodo" key={index}>
                {todo}
                <button id="practiceTodo">:)</button>
                <button
                  id="deleteTodo"
                  onClick={() => handleDeleteTodoClick(index)}
                >
                  X
                </button>
              </li>
            ))}
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
