
import React from 'react'

function Army({chosenArmy}) {
  let modelEntries = []
  fetch(`http://localhost:9292/army/${chosenArmy.id}`)
    .then(res => res.json())
    .then( data => {
       modelEntries = data.army_models.map((model)=>
          <div>
            <p>Model: {model.name}</p>
            <p>Number in Collection: {model.number_in_collection}</p>
            <p>Cost Per Box: {model.cost_per_box}</p>
            <p>Unit Points Cost: {model.unit_points_cost}</p>
          </div>)})
  
  const armyBlockStyle = {
    color: 'red',
    textAlign: 'center'
    }

  return (
    <div style={armyBlockStyle}>
      <h1 style={{armyBlockStyle, fontSize:'40px'} }>{chosenArmy.name}</h1>
      {modelEntries}
    </div>
  )
}

export default Army;