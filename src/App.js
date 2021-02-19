import React from "react";
import ReactDOM from "react-dom";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
