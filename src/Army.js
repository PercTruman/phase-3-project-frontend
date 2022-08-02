import * as React from "react";
import {useEffect} from "react"
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormDialog from "./FormDialog";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



function Army({
  armies,
  setArmies,
  chosenArmy,
  setChosenArmy,
  handleDialogFormChange,
  dialogFormData,
  handleDialogFormSubmit,
  updateModels,
  handleModelDelete,
}) {


 // Gets all armies and associated models from DB
  useEffect(() => {
    fetch("http://localhost:9292/armies").then((response) =>
      response.json().then((fullArmyData) => setArmies(fullArmyData))
    );
  }, [chosenArmy]);

  let navigate = useNavigate();

  const dropDownOptions = armies.map((army) => (
    <MenuItem key={army.name} value={army.name} id={army.id}>
      {army.name}
    </MenuItem>
  ))

  function onHandleChange(e) {
    const foundArmy = armies.find((army) => army.name === e.target.value);
    setChosenArmy(foundArmy);
    navigateToChosenArmy(foundArmy);
  }

  function navigateToChosenArmy(army) {
    navigate(`/armies/${army.id}`);
  }


  const armyBlockStyle = {
    color: "red",
    textAlign: "center",
  };

  const modelListing = chosenArmy.army_models.map((model) => (
   
    <Grid key={model.id} item xs={12}>
      <Item sx={{ width: "100%", margin: "20px" }}>
        <h3>Model: {model.name}</h3>
        <h3>Number in Collection: {model.number_in_collection}</h3>
        <h3>Cost per box: {model.cost_per_box}</h3>
        <h3>Unit points cost: {model.unit_points_cost}</h3>
        <FormDialog
          chosenArmy={chosenArmy}
          model={model}
          handleDialogFormChange={handleDialogFormChange}
          dialogFormData={dialogFormData}
          handleDialogFormSubmit={handleDialogFormSubmit}
          handleModelDelete={handleModelDelete}
          updateModels={updateModels}
        />
      </Item>
    </Grid>
  ));

  return (
    <div style={armyBlockStyle}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choose Army</InputLabel>
          <Select
            type="text"
            autoWidth
            labelId="demo-simple-select-label"
            value=""
            id="demo-simple-select"
            label="Choose Army"
            onChange={onHandleChange}
          >
            {dropDownOptions}
          </Select>
        </FormControl>
      <h1 style={{ armyBlockStyle, fontSize: "40px" }}>{chosenArmy.name}</h1>
      {modelListing}
    </div>
  );
}

export default Army;
