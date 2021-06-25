import React from "react";
import Status from "./Status";
import Tip from "./Tip";
import User from "./User";

function App() {
  return (
    <div className="App" style={{ margin: "1em" }}>
      <User />
      <Status />
      <Tip />
    </div>
  );
}

export default App;
