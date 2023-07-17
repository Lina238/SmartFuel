import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import {BrowserRouter as Router, Route ,Routes,navigate  }from "react-router-dom" ;

import AjoutProduit from './content/produits/AjoutProduit';
import ModifProduit from './content/produits/ModifProduit';

import AjoutGisement from './content/gisements/AjoutGisement';
import ModifGisement from './content/gisements/ModifGisement';


import AjoutRemplissage from './content/remplissage/AjoutRemplissage';
import ModifRemplissage from './content/remplissage/ModifierRemplissage';

import AjoutSuivi from './content/suivi/AjoutSuivi';
import ModifSuivi from './content/suivi/ModifSuivi';
import AjoutEmployee from './content/employees/AjoutEmployee';
import ModifEmployee from './content/employees/ModifEmployee';
import { getAuthToken } from './auth';
const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!getAuthToken();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : window.location.href = "/"} // Redirect to login page
    />
  );
};



  function App() {
 
      return (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <ProtectedRoute path="/Home" element={<Home />} />
    
              <Route path="/AjouterProduit" element={<AjoutProduit />} />
              <Route path="/ModifierProduit/:prodid" element={<ModifProduit />} />
    
              {/* Add other routes here */}
            </Routes>
          </Router>
        </>
      );
    }
    
  

export default App;