// ...
import TabDeProduits from './content/produits/TabDeProduits';
import TabDeRemplissage from './content/remplissage/TabDeRemplissage';
import TabDeGisement from './content/gisements/TabDeGisement';
import TabDeSuivi from './content/suivi/TabDeSuivi';
import TabDeEmployees from './content/employees/TabDeEmployees';
import TabDeBords from './content/dashboard/TabDeBords';
import ProtectedRoute from './ProtectedRoute';
// ...

function App() {
  // ...

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
