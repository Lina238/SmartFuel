import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import {BrowserRouter as Router, Route ,Routes  }from "react-router-dom" ;

import AjoutProduit from './content/produits/AjoutProduit';
import ModifProduit from './content/produits/ModifProduit';

import AjoutGisement from './content/gisements/AjoutGisement';
import ModifGisement from './content/gisements/ModifGisement';


import AjoutRemplissage from './content/remplissage/AjoutRemplissage';
import ModifRemplissage from './content/remplissage/ModifierRemplissage';

import AjoutSuivi from './content/suivi/AjoutSuivi';
import ModifSuivi from './content/suivi/ModifSuivi';
import ProtectedRoute  from './ProtectedRoute';
import AjoutEmployee from './content/employees/AjoutEmployee';
import ModifEmployee from './content/employees/ModifEmployee';


function App() {
  
  return (
      <>
       <Router>
             <Routes>
                 <Route exact path='/'  element={<Login/>} />
                 <Route exact path='/Home'  element={<ProtectedRoute element={Home}></ProtectedRoute>} />
                 <Route exact path='/AjouterProduit'  element={<ProtectedRoute element={AjoutProduit}></ProtectedRoute>} />
                 <Route exact path='/AjouterGisement'  element={<ProtectedRoute element={AjoutGisement}></ProtectedRoute>} />
                 <Route exact path='/ModifierGisement/:gisid'  element={<ProtectedRoute element={ModifGisement}></ProtectedRoute>} />
                 <Route exact path='/AjouterRemplissage'  element={<ProtectedRoute element={AjoutRemplissage}></ProtectedRoute>} />
                 <Route exact path='/ModifierRemplissage/:rempid'  element={<ProtectedRoute element={ModifRemplissage}></ProtectedRoute>} />
                 <Route exact path='/ModifierGisement/:gisid'  element={<ProtectedRoute element={ModifGisement}></ProtectedRoute>} />
                 <Route exact path='/ModifierGisement/:gisid'  element={<ProtectedRoute element={ModifGisement}></ProtectedRoute>} />

          

                  <Route exact path='/AjouterRemplissage'  element={<AjoutRemplissage/>} />
                 <Route exact path=''  element={<ModifRemplissage/>} /> 

          
                  <Route exact path='/AjouterSuivi'  element={<AjoutSuivi/>} />
                 <Route exact path='/ModifierSuivi/:suivid'  element={<ModifSuivi/>} />  

                 <Route exact path='/AjouterEmployee'  element={<AjoutEmployee/>} />
                 <Route exact path='/ModifierEmployee/:empid'  element={<ModifEmployee/>} /> */}
                
             </Routes>
         
        </Router>
      
      </>
  );
}

export default App;