import './App.css';

import Accueil from "./components/Acceuil";


import { Navbar, Nav, Container } from 'react-bootstrap';
import {

  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Villes from './components/Villes';
import Home from './components/Home';
import VilleList from './components/Villes';
import Zones from './components/ZoneList';
import Restaurants from './components/Restaurants';




function App() {
  return (
   


    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/ville" element={<VilleList/>} />
        <Route path="/acceuil" element={<Accueil/>} />
        <Route path="/zone" element={<Zones/>} />
        <Route path="/res" element={<Restaurants/>} />


        </Routes>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
