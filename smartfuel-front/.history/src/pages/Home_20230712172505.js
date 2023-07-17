import React from 'react';
import { Tabs , Button } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link, useNavigate } from 'react-router-dom';

import TabDeProduits from './../content/produits/TabDeProduits';
import TabDeRemplissage from './../content/remplissage/TabDeRemplissage';
import TabDeGisement from './../content/gisements/TabDeGisement';
import TabDeEmployees from './../content/employees/TabDeEmployees';
import TabDeSuivi from './../content/suivi/TabDeSuivi';
import TabDeBords from '../content/dashboard/TabDeBords';


const { TabPane } = Tabs;

const Home = () => {

  const rolesAutorises = ['admin','mangement'];
  const navigate = useNavigate();

  const onLogout =()=>(
    localStorage.removeItem('token'),
    navigate('/')
  )
   
  

// ...
const tabStyles = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600',
  fontSize: '20px',
};
const onglets = [
  { tab: <TabPane tab="Table des produits" key="1" style={tabStyles}><TabDeProduits /></TabPane>, roles: ['ADMIN', 'MANGEMENT'], },
  { tab: <TabPane tab="Table de gisement" key="2" style={tabStyles}><TabDeGisement /></TabPane>, roles: ['admin'] },
  { tab: <TabPane tab="Table de remplissages" key="3" style={tabStyles}><TabDeRemplissage /></TabPane>, roles: ['mangement'] },
  { tab: <TabPane tab="Table de suivi" key="4" style={tabStyles}><TabDeSuivi /></TabPane>, roles: ['admin', 'mangement'] },
  { tab: <TabPane tab="Table des employés" key="5" style={tabStyles}><TabDeEmployees /></TabPane>, roles: ['admin'] },
  { tab: <TabPane tab="Tableaux de bord" key="6" style={tabStyles}><TabDeBords /></TabPane>, roles: ['admin', 'mangement'] }

];

const ongletsFiltres = onglets.filter(onglet => {
  return onglet.roles.some(role => rolesAutorises.includes(role));
});
 

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        
      }}
    >
      <img
        src="/logo.png"
        alt="Logo"
        style={{
          margin: '25px 60px',
          width: '65px',
          height: '65px',
        }}
      />

      <Tabs
        tabPosition="left"
        tabBarGutter={55}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '600',
          letterSpacing: '1px',
          fontSize: '20px',
        }}

      >
         {ongletsFiltres.map(onglet => onglet.tab)}
          


      </Tabs>

      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '30px', marginBottom: '10px' }}>
        <Button type="primary" style={{backgroundColor:"#E42A2A", color:"#fff",fontFamily: 'Poppins, sans-serif',fontSize: '15px', fontWeight:"600"}} onClick={onLogout}>Déconnexion</Button>
      </div>
    </div>
  );
};

export default Home;