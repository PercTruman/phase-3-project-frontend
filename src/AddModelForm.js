import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function AddModelForm({
  handleModelFormChange,
  handleModelFormSubmit,
  modelFormData,
  armies,
}) {
  const armyNames = armies.map((army) => (
    <MenuItem key={army.name} value={army.name} id={army.id}>
      {army.name}
    </MenuItem>
  ));
  let selectedArmy = [];
  function handleArmyDropDownChange(e) {
    selectedArmy = armies.find((army) => army.name === e.target.value);
  }
  return (
    <form
      onSubmit={handleModelFormSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        margin: "auto",
        paddingTop: "2rem",
        color: "red",
      }}
    >
      <label style={{ fontSize: "20px", textAlign: "center", padding: "15px" }}>
        Model Name
      </label>
      <input
        value={modelFormData.name}
        type="text"
        name="name"
        aria-label="model name"
        onChange={handleModelFormChange}
      ></input>
      <label style={{ fontSize: "20px", textAlign: "center", padding: "15px" }}>
        Image URL
      </label>
      <input
        value={modelFormData.image_url}
        type="text"
        name="image_url"
        aria-label="image_url"
        onChange={handleModelFormChange}
      ></input>
      <label style={{ fontSize: "20px", textAlign: "center", padding: "15px" }}>
        Number in Collection
      </label>
      <input
        value={modelFormData.number_in_collection}
        type="number"
        name="number_in_collection"
        aria-label="number_in_collection"
        onChange={handleModelFormChange}
      ></input>
      <label style={{ fontSize: "20px", textAlign: "center", padding: "15px" }}>
        Cost per Box
      </label>
      <input
        value={modelFormData.cost_per_box}
        type="number"
        name="cost_per_box"
        aria-label="cost_per_box"
        onChange={handleModelFormChange}
      ></input>
      <label style={{ fontSize: "20px", textAlign: "center", padding: "15px" }}>
        Unit Points Cost
      </label>
      <input
        value={modelFormData.unit_points_cost}
        type="number"
        name="unit_points_cost"
        aria-label="unit_points_cost"
        onChange={handleModelFormChange}
      ></input>
    <Box
        sx={{
          minWidth: 120,
          width: "300px",
          backgroundColor: "white",
          color: "red",
          margin: "2rem auto",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Which Army To Update?</InputLabel>
          <Select
            autoWidth
            type="text"
            labelId="demo-simple-select-label"
            value={selectedArmy.name}
            id="demo-simple-select"
            label="Choose Army"
            onChange={handleArmyDropDownChange}
          >
            {armyNames}
          </Select>
        </FormControl>
      </Box>

      <input
        style={{ margin: "15px auto", width: "130px" }}
        type="submit"
        value="Add New Model(s)"
      />
    </form>
  );
}

export default AddModelForm;
