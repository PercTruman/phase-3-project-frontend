import * as React from "react";
import { NavLink } from "react-router-dom";
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

// const [modelEditFormData, setModelEditFormData] = useState({
//   name: "",
//   number_in_collection: 0,
//   cost_per_box: 0,
//   unit_points_cost: 0,
// });

function Army({ chosenArmy }) {
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
        <FormDialog model={model}/>
        {/* <NavLink to="/:armyId/:modelId">Update </NavLink> */}
      </Item>
     
    </Grid>
  ));

  return (
    <div style={armyBlockStyle}>
      <h1 style={{ armyBlockStyle, fontSize: "40px" }}>{chosenArmy.name}</h1>
      {modelListing}
    </div>
  );
}

export default Army;
