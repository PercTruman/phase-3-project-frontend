import React from "react";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function AllModelsList({ models, handleDelete }) {
  const armyBlockStyle = {
    color: "red",
    textAlign: "center",
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const modelList = models.map((model) => (
    <Grid key={model.id} item xs={12}>
      <Item sx={{ width: "20%", margin: "20px" }}>
        <h3>Model: {model.name}</h3>
        <h3>Number in Collection: {model.number_in_collection}</h3>
        <h3>Cost per box: {model.cost_per_box}</h3>
        <h3>Unit points cost: {model.unit_points_cost}</h3>
        <button onClick={handleDelete(model.id)}>Delete {model.name}</button>
      </Item>
    </Grid>
  ));
  return <div>{modelList}</div>;
}

export default AllModelsList;
