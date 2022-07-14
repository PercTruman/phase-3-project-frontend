import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Army from "./Army";
import mortarion from "./images/mortarion.jpg";
import AddArmyForm from "./AddArmyForm";
import AddModelForm from "./AddModelForm";

function App() {
  const [armies, setArmies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292").then((response) =>
      response.json().then((fullArmyData) => setArmies(fullArmyData))
    );
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${mortarion})`,
        margin: "0 auto",
        height: "100vh",
        width: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavBar />
      <Routes>
        <Route path="*" element={<Home armies={armies}/>} />
        <Route path="/add_new_army" element={<AddArmyForm />} />
        <Route path="/add_new_models" element={<AddModelForm />} />
        <Route path="/army" element={<Army armies={armies} />} />
      </Routes>
    </div>
  );
}

export default App;
