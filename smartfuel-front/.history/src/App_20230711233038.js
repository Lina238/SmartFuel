import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import {BrowserRouter as Router, Route ,Routes  }from "react-router-dom" ;

import AjoutProduit from './content/produits/AjoutProduit';
import ModifProduit from './content/produits/ModifProduit';
function App() {
  
  return (
      <>
       <Router>
             <Routes>
                 <Route exact path='/'  element={<Login/>} />
                 <Route exact path='/Home'  element={<Home/>} />
                 <Route exact path='/AjouterProduit'  element={<AjoutProduit/>} />
                 <Route exact path='/ModifierProduit/:prodid'  element={<ModifProduit/>} />
             </Routes>
         
        </Router>
      
      </>
  );
}

export default App;
