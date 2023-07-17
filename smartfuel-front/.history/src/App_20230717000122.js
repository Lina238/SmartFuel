import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import {BrowserRouter as Router, Route ,Routes  }from "react-router-dom" ;
import { getAuthToken, clearAuthToken } from './auth';

import ModifProduit from './content/produits/ModifProduit';
import AjoutProduit from './content/produits/AjoutProduit';
import AjoutGisement from './content/gisements/AjoutGisement';
import ModifGisement from './content/gisements/ModifGisement';


import AjoutRemplissage from './content/remplissage/AjoutRemplissage';
import ModifRemplissage from './content/remplissage/ModifierRemplissage';

import AjoutSuivi from './content/suivi/AjoutSuivi';
import ModifSuivi from './content/suivi/ModifSuivi';

import AjoutEmployee from './content/employees/AjoutEmployee';
import ModifEmployee from './content/employees/ModifEmployee';



function App() {
  // Vérifier si l'utilisateur est authentifié (a un token)
  const isAuthenticated = !!getAuthToken();

  // Fonction pour rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
  const requireAuth = (element) => {
    return isAuthenticated ? element : <Login />;
  };

  // Fonction pour rediriger vers la page d'accueil si l'utilisateur est déjà authentifié
  const requireUnauth = (element) => {
    return isAuthenticated ? <Home /> : element;
  };

  // Fonction pour déconnecter l'utilisateur et le rediriger vers la page de connexion
  const handleLogout = () => {
    clearAuthToken();
    window.location.href = '/'; // Rediriger vers la page de connexion
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={requireUnauth(<Login />)} />
          <Route path="/Home" element={requireAuth(<Home onLogout={handleLogout} />)} />


          <Route exact path='/AjouterProduit'  element={<AjoutProduit/>} />
                 <Route exact path='/ModifierProduit/:prodid'  element={<ModifProduit/>} />

                 <Route exact path='/AjouterGisement'  element={<AjoutGisement/>} />
                 <Route exact path='/ModifierGisement/:gisid'  element={<ModifGisement/>} />

                  <Route exact path='/AjouterRemplissage'  element={<AjoutRemplissage/>} />
                 <Route exact path='/ModifierRemplissage/:rempid'  element={<ModifRemplissage/>} /> 

          
                  <Route exact path='/AjouterSuivi'  element={<AjoutSuivi/>} />
                 <Route exact path='/ModifierSuivi/:suivid'  element={<ModifSuivi/>} />  

                 <Route exact path='/AjouterEmployee'  element={<AjoutEmployee/>} />
                 <Route exact path='/ModifierEmployee/:empid'  element={<ModifEmployee/>} />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
