import React from 'react';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Armies from './Armies';
import ArmyModels from './ArmyModels';
import mortarion from "./images/mortarion.jpg";




function App() {
  return (
    <div style={{ backgroundImage: `url(${mortarion})`,
    margin: '0 auto',
    height: '100vh',
    width: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
    }}>
      <NavBar />
        <Routes>
          <Route path ="*" element={<Home />}/>
          <Route path="/armies" element={<Armies />}/>
          <Route path="/army_models" element={<ArmyModels />}/>
        </Routes >
    </div>
  );
}

export default App;
