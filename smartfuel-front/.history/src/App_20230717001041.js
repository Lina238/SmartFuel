import './App.css';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

  // Fonction pour déconnecter l'utilisateur et le rediriger vers la page de connexion
  const handleLogout = () => {
    clearAuthToken();
    window.location.href = '/'; // Rediriger vers la page de connexion
  };

  // Route privée pour les pages nécessitant une authentification
  const PrivateRoute = ({ element: Element, path }) => {
    // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
    if (!isAuthenticated) {
      return <Login />;
    }

    // Si l'utilisateur est authentifié, afficher le composant correspondant
    return <Route path={path} element={<Element />} />;
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home onLogout={handleLogout} />} />

          {/* Utilisation de PrivateRoute pour les pages nécessitants une authentification */}
          <PrivateRoute path="/AjouterProduit" element={AjoutProduit} />
          <PrivateRoute path="/ModifierProduit/:prodid" element={ModifProduit} />

          <PrivateRoute path="/AjouterGisement" element={AjoutGisement} />
          <PrivateRoute path="/ModifierGisement/:gisid" element={ModifGisement} />

          <PrivateRoute path="/AjouterRemplissage" element={AjoutRemplissage} />
          <PrivateRoute path="/ModifierRemplissage/:rempid" element={ModifRemplissage} />

          <PrivateRoute path="/AjouterSuivi" element={AjoutSuivi} />
          <PrivateRoute path="/ModifierSuivi/:suivid" element={ModifSuivi} />

          <PrivateRoute path="/AjouterEmployee" element={AjoutEmployee} />
          <PrivateRoute path="/ModifierEmployee/:empid" element={ModifEmployee} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
