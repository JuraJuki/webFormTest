import React from "react";
import "./App.css";

function App({ divElement }: { divElement: HTMLDivElement }) {
  console.log(divElement);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "https://static.vecteezy.com/system/resources/previews/001/195/909/original/water-logo-splash-png.png"
          }
          className="App-logo"
          alt="logo"
          style={{ width: "100px", height: "100px" }}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
