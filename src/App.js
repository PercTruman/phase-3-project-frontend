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
  const [armyFormData, setArmyFormData] = useState({});
  const [modelFormData, setModelFormData] = useState({});
  const [armyModelData, setArmyModelData] = useState({
    name: "",
    image_url: "",
    number_in_collection: 0,
    cost_per_box: 0,
    unit_points_cost: 0,
    army_id: null,
  });
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9292").then((response) =>
      response.json().then((fullArmyData) => setArmies(fullArmyData))
    );
  }, []);

  function onHandleChange(e) {
    const foundArmy = armies.find((army) => army.name === e.target.value);
    setChosenArmy(foundArmy);
    navigateToChosenArmy(foundArmy);
  }

  function navigateToChosenArmy(army) {
    navigate(`/army/${army.id}`);
  }

  function handleArmyFormChange() {}

  function handleArmyFormSubmit() {}

  function handleModelFormChange() {}

  function handleModelFormSubmit() {}

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
        <Route
          path="/add_new_army"
          element={
            <AddArmyForm
              handleArmyFormSubmit={handleArmyFormSubmit}
              armyFormData={armyFormData}
              handleArmyFormChange={handleArmyFormChange}
            />
          }
        />
        <Route
          path="/add_new_models"
          element={
            <AddModelForm
              handleModelFormChange={handleModelFormChange}
              handleModelFormSubmit={handleModelFormSubmit}
              modelFormData={modelFormData}
            />
          }
        />
        <Route
          path="/army/:id"
          element={
            <Army
              chosenArmy={chosenArmy}
              setArmyModelData={setArmyModelData}
              armyModelData={armyModelData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
