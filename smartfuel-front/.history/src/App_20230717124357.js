import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'; // Import the custom ProtectedRoute component

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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <ProtectedRoute exact path="/Home" element={<Home />} />
          <ProtectedRoute exact path="/AjouterProduit" element={<AjoutProduit />} />
          <ProtectedRoute exact path="/ModifierProduit/:prodid" element={<ModifProduit />} />

          <ProtectedRoute exact path="/AjouterGisement" element={<AjoutGisement />} />
          <ProtectedRoute exact path="/ModifierGisement/:gisid" element={<ModifGisement />} />

          <ProtectedRoute exact path="/AjouterRemplissage" element={<AjoutRemplissage />} />
          <ProtectedRoute exact path="/ModifierRemplissage/:rempid" element={<ModifRemplissage />} />

          <ProtectedRoute exact path="/AjouterSuivi" element={<AjoutSuivi />} />
          <ProtectedRoute exact path="/ModifierSuivi/:suivid" element={<ModifSuivi />} />

          <ProtectedRoute exact path="/AjouterEmployee" element={<AjoutEmployee />} />
          <ProtectedRoute exact path="/ModifierEmployee/:empid" element={<ModifEmployee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
