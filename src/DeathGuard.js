
import React from 'react'

function DeathGuard({armies}) {
  fetch('http://localhost:9292/army/death_guard')
    .then(res => res.json())
    .then(modelList => modelList.map(model =>
      <div>
        <p>{model.name}</p>
      </div>))
  console.log(armies)
  const armyBlockStyle = {
    color: 'red',
    textAlign: 'center'
    }

  return (
    <div style={armyBlockStyle}>
      <h1 style={{armyBlockStyle, fontSize:'40px'} }>Death Guard</h1>
    </div>
  )
}

export default DeathGuard;