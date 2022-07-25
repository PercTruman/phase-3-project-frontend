import React from 'react';

function AllModelsList({ models}) {
    const armyBlockStyle = {
        color: "red",
        textAlign: "center",
      };


    
    const modelList = models.map(model=>
      
        <div style={armyBlockStyle}key={model.id}>
            <h3>Model: {model.name}</h3>
            <h3>Number in Collection: {model.number_in_collection}</h3>
            <h3>Cost per box: {model.cost_per_box}</h3>
            <h3>Unit points cost: {model.unit_points_cost}</h3>
        </div>
    )
  return (
    <div>{modelList}</div>
  )
}

export default AllModelsList