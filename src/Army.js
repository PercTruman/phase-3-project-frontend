
import React, {useEffect} from 'react'

function Army({chosenArmy, armyModelData, setArmyModelData}) {

  const armyBlockStyle = {
    color: 'red',
    textAlign: 'center'
    }


    useEffect(() => {
      fetch(`http://localhost:9292/army/${chosenArmy.id}`)
        .then((res) => res.json())
        .then((data) => createListing(data))
       
    },[]
    )
    let modelList = []
    function createListing(modelObjects){
      modelList = modelObjects.army_models.map(model=>model.name)
    }
    console.log(modelList)
        //  const modelList = armyModelData ? armyModelData.army_models : []
       
         

    
  return (
    <div style={armyBlockStyle}>
      <h1 style={{armyBlockStyle, fontSize:'40px'}}>{armyModelData.name}</h1>
      {/* <h2 style={{armyBlockStyle, fontSize:'40px'}}>{modelList}</h2> */}
     </div>
  )
}

export default Army;