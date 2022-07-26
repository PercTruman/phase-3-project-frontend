import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Routes, Route, useNavigate} from "react-router-dom";
import Home from "./Home";
import Army from "./Army";
import Grid from "@mui/material/Grid";
import mortarion from "./images/mortarion.jpg";
import AddArmyForm from "./AddArmyForm";
import AddModelForm from "./AddModelForm";
import AllModelsList from "./AllModelsList";


function App() {

  // State variables
  const [armies, setArmies] = useState([]);
  const [chosenArmy, setChosenArmy] = useState({});
  const [models, setModels] = useState([]);
  const [armyFormData, setArmyFormData] = useState({
    name: "",
    alignment: "",
    description: "",
  });
  const [modelFormData, setModelFormData] = useState({
    name: "",
    image_url: "",
    number_in_collection: 0,
    cost_per_box: 0,
    unit_points_cost: 0,
    army_id: ''
  });

  const [dialogFormData, setDialogFormData] = useState({
    number_in_collection: 0,
    unit_points_cost: 0
  });


///////////////////////////////////////////
 
  let navigate = useNavigate();

  // Gets all armies and associated models from DB

  useEffect(() => {
    fetch("http://localhost:9292").then((response) =>
      response.json().then((fullArmyData) =>setArmies(fullArmyData))
    );
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:9292/all_models").then((response) =>
  //     response.json().then((modelsData) =>setModels(modelsData))
  //   );
  // }, []);
  ////////////////////////////////////////////


  function onHandleChange(e) {
    const foundArmy = armies.find((army) => army.name === e.target.value);
    setChosenArmy(foundArmy);
    navigateToChosenArmy(foundArmy);
  }

  function navigateToChosenArmy(army) {
    navigate(`/army/${army.id}`);
  }

  // Controlled Form Submit Functions for Army
  function handleArmyFormChange(e) {
    setArmyFormData({ ...armyFormData, [e.target.name]: e.target.value });
  }

  function handleArmyFormSubmit(e) {
    e.preventDefault();
    handleAddNewArmy(armyFormData);
    setArmyFormData({
      name: "",
      alignment: "",
      description: "",
    });
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

  ////////////////////////////////////////////////////////////////////////

  // Controlled Form Submit Functions for Adding Models to DB

  function handleModelFormChange(e) {
    setModelFormData({ ...modelFormData, [e.target.name]: e.target.value });
  }

  function handleModelFormSubmit(e) {
    e.preventDefault();
    handleAddNewModels(modelFormData);
    setModelFormData({
      name: "",
      image_url: "",
      number_in_collection: 0,
      cost_per_box: 0,
      unit_points_cost: 0,
      army_id: 0,
    });
  }

  function handleAddNewModels(formData) {
    fetch("http://localhost:9292/add_new_models", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(addedModel => alert(`${addedModel.name} has been added to your roster.`))
  }

  //////////////////////////////////////////////////////////////////////// 

   // Controlled Form Submit Functions for UPDATING Models in DB

  function handleDialogFormChange(e) {
    setDialogFormData({ ...dialogFormData, [e.target.name]: e.target.value });
  }

  function handleDialogFormSubmit(e, modelId) {
    e.preventDefault();
    updateModels(dialogFormData, modelId);
    setModelFormData({
      number_in_collection: 0,
      unit_points_cost: 0,
     });
  }

  const updateModels = (dialogFormData,modelId) => {
    fetch(`http://localhost:9292/all_models/${modelId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        number_in_collection: dialogFormData.number_in_collection,
        unit_points_cost: dialogFormData.unit_points_cost
      }),
    })
    .then(res => res.json())
    .then(updatedModel => alert(`${updatedModel.name} updated successfully.`))
  };

  const deleteModel =(e) =>{
    fetch(`http://localhost:9292/all_models/${e.target.id}`, {
      method: "DELETE",
  })}

  return (
    <div
      style={{
        backgroundImage: `url(${mortarion})`,
        margin: "0 auto",
        height: "100vh",
        width: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
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
          path="army/:armyId"
          element={
            <Grid
              container
              spacing={8}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Army
                chosenArmy={chosenArmy}
                handleDialogFormChange={handleDialogFormChange}
                dialogFormData={dialogFormData}
                handleDialogFormSubmit={handleDialogFormSubmit} 
                updateModels={updateModels}
              />
            </Grid>
          }
        />
        <Route
          path="/all_models"
          element={<AllModelsList  models={models} setModels={setModels} handleDelete={deleteModel}/>}
          />
      </Routes>
    </div>
  );
}

export default App;
