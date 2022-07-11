import React from 'react';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import ArmyList from './ArmyList';
import ArmyModels from './ArmyModels';




function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/armies" element={<ArmyList />}/>
          <Route path="/army_models" element={<ArmyModels />}/>
        </Routes >
    </div>
  );
}

export default App;
