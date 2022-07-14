import React from 'react'

function AddModelForm({handleModelFormChange, handleModelFormSubmit, modelFormData}) {
  return (
    <form  onSubmit={handleModelFormSubmit}
    style={{
      display: "flex",
      flexDirection: "column",
      width: "400px",
      margin: "auto",
      paddingTop: "2rem",
      color:'red'
    }}>
    <label style={{fontSize:"20px", textAlign: "center", padding:'15px'}}>Model Name</label>
      <input
        value={modelFormData.name}
        type="text"
        name="name"
        aria-label="model name"
        onChange={handleModelFormChange}
      ></input>
      <label style={{fontSize:"20px", textAlign: "center", padding:'15px'}}>Image URL</label>
      <input
        value={modelFormData.image_url}
        type="text"
        name="image_url"
        aria-label="image_url"
        onChange={handleModelFormChange}
      ></input>
       <label style={{fontSize:"20px", textAlign: "center", padding:'15px'}}>Number in Collection</label>
      <input
        value={modelFormData.number_in_collection}
        type="number"
        name="number_in_collection"
        aria-label="number_in_collection"
        onChange={handleModelFormChange}
      ></input>
            <label style={{fontSize:"20px", textAlign: "center", padding:'15px'}}>Cost per Box</label>
      <input
        value={modelFormData.cost_per_box}
        type="number"
        name="cost_per_box"
        aria-label="cost_per_box"
        onChange={handleModelFormChange}
      ></input>
            <label style={{fontSize:"20px", textAlign: "center", padding:'15px'}}>Unit Points Cost</label>
      <input
        value={modelFormData.unit_points_cost}
        type="number"
        name="unit_points_cost"
        aria-label="unit_points_cost"
        onChange={handleModelFormChange}
      ></input>
      </form>
  )
}

export default AddModelForm