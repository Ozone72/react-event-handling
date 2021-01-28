import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleInputChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
  }

  // ? uses ternary operator to change the state of the backgroundColor property
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
