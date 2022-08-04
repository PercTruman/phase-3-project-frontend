import * as React from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormDialog from "./FormDialog";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Army({
armies, 
  handleDialogFormChange,
  dialogFormData,
  handleDialogFormSubmit,
  updateModels,
  handleModelDelete,
}) {


  const armyBlockStyle = {
    color: "red", 
    textAlign: "center",
  };

  let { armyId } = useParams();

  const chosenArmy= armies.find((army) => army.id === Number(armyId))
  
  if (!chosenArmy)
    return null;
    
  const displayModels = chosenArmy.army_models.map((model) => (
    <Grid key={model.id} item xs={12}>
      <Item sx={{ width: "100%", margin: "20px" }}>
        <h3>Model: {model.name}</h3>
        <h3>Number in Collection: {model.number_in_collection}</h3>
        <h3>Cost per box: {model.cost_per_box}</h3>
        <h3>Unit points cost: {model.unit_points_cost}</h3>
        <FormDialog
          armyId = {chosenArmy.id}
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
      <h1 style={{ armyBlockStyle, fontSize: "40px" }}>{chosenArmy.name}</h1>
      {displayModels}
    </div>
  );
}

export default Army;
