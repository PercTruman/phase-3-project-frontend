
import React from 'react'

function Army({chosenArmy}) {
  fetch(`http://localhost:9292/army/${chosenArmy.id}`)
    .then(res => res.json())
    // .then(modelList => modelList.map(model =>
      // <div>
      //   <p>{model.name}</p>
      // </div>))
  
  const armyBlockStyle = {
    color: 'red',
    textAlign: 'center'
    }

  return (
    <div style={armyBlockStyle}>
      <h1 style={{armyBlockStyle, fontSize:'40px'} }>{chosenArmy.name}</h1>
      <h5>{chosenArmy.alignment}</h5>
      <p>{chosenArmy.description}</p>
    </div>
  )
}

export default Army;