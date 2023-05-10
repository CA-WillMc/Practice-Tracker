import React from "react";
import { useState, useRef } from "react";
import "./menu.css";
import "./index.css";
import Metronome from "./Metronome";
import Calendar from "./Calendar";

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
  //Once the Todo is completed : Hide completion button, clear the todo, update the todos
  function complete() {
    const displayDivButton = document.getElementById("complete");
    displayDivButton.setAttribute("hidden", "hidden");
    const newGoal = document.getElementById("elemTodo");
    for (let t in todos) {
      if (
        todos[t].replace(/\s/g, "") == newGoal.textContent.replace(/\s/g, "")
      ) {
        const todoItem = document.getElementById(t);
        todoItem.style.backgroundColor = "Gray";
      }
    }
    const updateGoal = document.getElementById("displayGoal");
    updateGoal.innerHTML = ``;
  }
  //Display the a Todo and the completion button
  function displayDiv(index) {
    const displayDivButton = document.getElementById("complete");
    displayDivButton.removeAttribute("hidden", "hidden");
    displayDivButton.style.display = true;
    const newGoal = document.getElementById("displayGoal");
    newGoal.innerHTML = `<div id="elemTodo" class="elemTodo">
    <p> ${todos[index]}</p>
    </div>`;
    const targetElement = document.getElementById("elemTodo");
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
          {todos.map((todo, index) => (
            <div id="listTodo">
              <li className="elemTodo" id={index}>
                {todo}
                <button id="practiceTodo" onClick={() => displayDiv(index)}>
                  :)
                </button>
                <button
                  id="deleteTodo"
                  onClick={() => handleDeleteTodoClick(index)}
                >
                  X
                </button>
              </li>
            </div>
          ))}
        </section>
        <section id="Calendar">
          <h2>Calendar</h2>
          <Calendar />
        </section>
        <section id="Practice">
          <h2>Practice</h2>
          <div id="displayGoal"></div>
          <button id="complete" hidden onClick={complete}>
            complete
          </button>
          <div id="metronome">
            <Metronome />
          </div>
        </section>
      </body>
    </>
  );
}
