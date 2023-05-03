import React from "react";
import { useState } from "react";
import Login from "./Login";
import Menu from "./Menu";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }
  return (
    <div>
      {isLoggedIn ? (
        <>
          <Menu />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}
export default App;
