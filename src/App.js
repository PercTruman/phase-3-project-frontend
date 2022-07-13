import React from 'react';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import DeathGuard from './DeathGuard';
import Drukhari from './Drukhari';
import mortarion from "./images/mortarion.jpg";
import AddArmyForm from './AddArmyForm';
import AddModelForm from './AddModelForm';




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
          <Route path="/add_new_army" element={<AddArmyForm />}/>
          <Route path="/add_new_models" element={<AddModelForm />}/>
          <Route path="/death_guard" element={<DeathGuard />}/>
          <Route path="/drukari" element={<Drukhari />}/>
        </Routes >
    </div>
  );
}

export default App;
