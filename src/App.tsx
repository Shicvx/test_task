import React from "react";
import "./App.css";
import { Menuitem } from "./components/menu";

const App: React.FC = () => {
  return (
    <div>
      <div
        style={{ width: "100vw", height: "60px", backgroundColor: "blue" }}
      ></div>
      <div style={{ display: "flex" }}>
        <div
          style={{ height: "100vh", width: "60px", backgroundColor: "red" }}
        ></div>
        <Menuitem />
      </div>
    </div>
  );
};

export default App;
