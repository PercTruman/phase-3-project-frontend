import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Army from "./Army";
import Grid from "@mui/material/Grid";
import mortarion from "./images/mortarion.jpg";
import AddArmyForm from "./AddArmyForm";
import AddModelForm from "./AddModelForm";

function App() {
  const [armies, setArmies] = useState([]);
  const [chosenArmy, setChosenArmy] = useState({});
  const [armyFormData, setArmyFormData] = useState({
    name: "",
    alignment: "",
    description: ""
  });
  const [modelFormData, setModelFormData] = useState({
    name: "",
    image_url: "",
    number_in_collection: 0,
    cost_per_box: 0,
    unit_points_cost: 0,
    army_id: 0
  });
  const [armyModelData, setArmyModelData] = useState({
    name: "",
    image_url: "",
    number_in_collection: 0,
    cost_per_box: 0,
    unit_points_cost: 0,
    army_id: 0,
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

  function handleArmyFormChange(e) {
    setArmyFormData({ ...armyFormData, [e.target.name]: e.target.value });
  }

  function handleArmyFormSubmit(e) {
    e.preventDefault();
    handleAddNewArmy(armyFormData);
    setArmyFormData({ 
      name: "",
      alignment: "",
      description: ""
   })
  }

  function handleAddNewArmy(form) {
    fetch("http://localhost:9292/add_new_army", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((addedArmy) => setArmies([...armies, addedArmy]));
  }

  function handleModelFormChange(e) {
    setModelFormData({ ...modelFormData, [e.target.value]: e.target.value });
    handleModelFormSubmit(modelFormData)
  }

  function handleModelFormSubmit(formData) {
    // console.log(form)
    fetch("http://localhost:9292/add_new_models", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(addedModel => console.log(addedModel)
       
      );
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
              armies={armies}
            />
          }
        />
        <Route
          path="/army/:id"
          element={
            <Grid
              container
              spacing={8}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Army
                chosenArmy={chosenArmy}
                setModelFormData={setModelFormData}
                modelFormData={modelFormData}
              />
            </Grid>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
