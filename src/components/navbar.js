import React from 'react';
import { Link  , useNavigate} from 'react-router-dom';


function Navbar() {
    const navigateToAcceuil = useNavigate();
    const GoToacceuil = async () => {
        try {
            // Redirect to the home page
            navigateToAcceuil('/acceuil');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const navigateTozone = useNavigate();
    const GoTozone = async () => {
        try {
            // Redirect to the home page
            navigateTozone('/zone');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const navigateToVille = useNavigate();
    const GoToville = async () => {
        try {
            // Redirect to the home page
            navigateToVille('/ville');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };
    const navigateTores = useNavigate();
    const GoTores = async () => {
        try {
            // Redirect to the home page
            navigateTores('/res');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/"></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
          <button type="button" className="btn" onClick={GoToacceuil} >
                 <b>Eat.ma</b>
        </button>         
        </li>
          <li className="nav-item">
          <button type="button" className="btn" onClick={GoToacceuil} >
                 <b>Acceuil</b>
        </button>         
        </li>
          <li className="nav-item">
            <button type="button" className="btn" onClick={GoToville} >
                 <b>Ville</b>
        </button>
          </li>
          <li className="nav-item">
          <button type="button" className="btn" onClick={GoTozone} >
                 <b>Zone</b>
        </button>          </li>
          <li className="nav-item">
          <button type="button" className="btn" onClick={GoTores} >
                 <b>Restaurant</b>
        </button>          </li>
          {/* Add more navbar items as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
