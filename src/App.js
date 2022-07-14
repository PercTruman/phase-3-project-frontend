import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Army from "./Army";
import mortarion from "./images/mortarion.jpg";
import AddArmyForm from "./AddArmyForm";
import AddModelForm from "./AddModelForm";

function App() {
  const [armies, setArmies] = useState([]);
  const [chosenArmy, setChosenArmy] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9292").then((response) =>
      response.json().then((fullArmyData) => setArmies(fullArmyData))
    );
  }, []);

  function onHandleChange(e) {
    const foundArmy = armies.find((army) => army.name === e.target.value);
    console.log(foundArmy)
    setChosenArmy(foundArmy);
    navigateToChosenArmy(foundArmy);
  }

  function navigateToChosenArmy(army) {
    navigate(`/army/${army.id}`);
  }

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
        <Route
          path="/"
          element={
            <Home
              armies={armies}
              handleChange={onHandleChange}
              chosenArmy={chosenArmy}
              setChosenArmy={setChosenArmy}
              navigateToChosenArmy={navigateToChosenArmy}
            />
          }
        />
        <Route path="/add_new_army" element={<AddArmyForm />} />
        <Route path="/add_new_models" element={<AddModelForm />} />
        <Route path="/army/:id" element={<Army chosenArmy={chosenArmy} />} />
      </Routes>
    </div>
  );
}

export default App;
