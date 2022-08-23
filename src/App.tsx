import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Weather Ready is still under development</h1>
      <p className="read-the-docs ">
        Check out the{" "}
        <a href="https://github.com/dsabelli/weatheready">github repo</a> to see
        more!
      </p>
    </div>
  );
}

export default App;
