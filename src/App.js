import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Army from "./Army";
import Grid from "@mui/material/Grid";
import mortarion from "./images/mortarion.jpg";
import AddArmyForm from "./AddArmyForm";
import AddModelForm from "./AddModelForm";

function App() {
  // State variables
  const [armies, setArmies] = useState([]);
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
    army_id: "",
  });

  const [dialogFormData, setDialogFormData] = useState({
    number_in_collection: 0,

    unit_points_cost: 0,
  });

  ///////////////////////////////////////////

  let navigate = useNavigate();

  // Gets all armies and associated models from DB
  function getArmies() {
    fetch("http://localhost:9292/armies").then((response) =>
      response.json().then((fullArmyData) => setArmies(fullArmyData))
    );
  }

  useEffect(() => {
    getArmies();
  }, []);

  ////////////////////////////////////////////

  function onHandleChange(e) {
    const foundArmy = armies.find((army) => army.name === e.target.value);
    navigateToFoundArmy(foundArmy);
  }

  function navigateToFoundArmy(army) {
    navigate(`/armies/${army.id}`);
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
    getArmies()
  }

  function handleAddNewArmy(form) {
    fetch("http://localhost:9292/add_new_army", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((addedArmy) => setArmies([...armies, addedArmy]))
      .then(getArmies())
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




// Functions for rendering DOM after DB updates
  function updateArmyPageAfterDelete(modelId, armyId) {
    const targetArmy = armies.find((army) => army.id === armyId);
    const updatedModelsList = targetArmy.army_models.filter(
      (model) => model.id !== modelId
    );
    const updatedArmy = { ...targetArmy, army_models: updatedModelsList };
    setArmies(armies.map((army) => (army.id === armyId ? updatedArmy : army)));
  }

  function updateArmyPageAfterPatch(newModel, armyId) {
    const targetArmy = armies.find((army) => army.id === armyId);
    const newModelList = targetArmy.army_models.map((model) => {
      if (model.id === newModel.id) {
        return newModel;
      } else {
        return model;
      }
    });
        const updatedArmy = { ...targetArmy, army_models: newModelList };
        setArmies(armies.map((army) => (army.id === armyId ? updatedArmy : army)));
  }


  function updateArmyPageAfterCreate(formData, addedModel){
    const targetArmy = armies.find((army) => army.id === Number(formData.army_id));
    const updatedModelList= [...targetArmy.army_models, addedModel];
    const updatedArmy = { ...targetArmy, army_models: updatedModelList };
    setArmies(armies.map((army) => (army.id === Number(formData.army_id)? updatedArmy : army)));
  }
  ////////////////////////////////////////////////////////////////////////



  // Controlled Form Submit Functions for UPDATING Models in DB

  function handleDialogFormChange(e) {
    setDialogFormData({ ...dialogFormData, [e.target.name]: e.target.value });
  }

  function handleDialogFormSubmit(e, armyId, modelId) {
    e.preventDefault();
    updateModels(dialogFormData, armyId, modelId);
    setModelFormData({
      number_in_collection: 0,
      unit_points_cost: 0,
    });
  }

  function handleAddNewModels(formData) {
   
    fetch("http://localhost:9292/models", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((addedModel) => {
       updateArmyPageAfterCreate(formData, addedModel)
        alert(`${addedModel.name} has been added to your roster.`);
      });
  
  }

  function updateModels(dialogFormData, armyId, modelId) {
    fetch(`http://localhost:9292/models/${modelId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        number_in_collection: dialogFormData.number_in_collection,
        unit_points_cost: dialogFormData.unit_points_cost,
      }),
    })
      .then((res) => res.json())
      .then((newModel) => {
        updateArmyPageAfterPatch(newModel, armyId);
        alert(`${newModel.name} updated successfully.`);
      });
     ;
  }

  function  handleModelDelete(modelId, armyId) {
    fetch(`http://localhost:9292/models/${modelId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedModel) => {
        alert(`${deletedModel.name} deleted successfully.`);
        updateArmyPageAfterDelete(modelId, armyId);
      });
  };

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
      <NavBar handleChange={onHandleChange} armies={armies} />
      <Routes>
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
          exact
          path="armies/:armyId"
          element={
            <Grid
              container
              spacing={8}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Army
                armies={armies}
                setArmies={setArmies}
                handleDialogFormChange={handleDialogFormChange}
                dialogFormData={dialogFormData}
                handleDialogFormSubmit={handleDialogFormSubmit}
                updateModels={updateModels}
                handleModelDelete={handleModelDelete}
              />
            </Grid>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
