import React from 'react';
import { Tabs , Button } from 'antd';
import { BrowserRouter as useNavigate } from 'react-router-dom';
import { useEffect , useState } from 'react';

import TabDeProduits from './../content/produits/TabDeProduits';
import TabDeRemplissage from './../content/remplissage/TabDeRemplissage';
import TabDeGisement from './../content/gisements/TabDeGisement';
import TabDeEmployees from './../content/employees/TabDeEmployees';
import TabDeSuivi from './../content/suivi/TabDeSuivi';
import TabDeBords from '../content/dashboard/TabDeBords';
import MouvementsGisement from '../content/Mouvement/MouvementsGisement';


const { TabPane } = Tabs;

const Home = () => {
  const role=localStorage.getItem('role')
  const token=localStorage.getItem('token')
  console.log(token);
  const rolesAutorises = [localStorage.getItem('role')]
  const navigate = useNavigate();

  const onLogout =()=>(
    localStorage.removeItem('token'),
    console.log(token),
    navigate('/')
  )
   
  

// ...
const tabStyles = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600',
  fontSize: '20px',
};
const [activeTab, setActiveTab] = useState("1");
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const tabParam = params.get("tab");

  if (tabParam === "produits") {
    setActiveTab("1"); 
  }
  if (tabParam === "gisements") {
    setActiveTab("2"); 
  }
  if (tabParam === "remplissages") {
    setActiveTab("3"); 
  }
  if (tabParam === "suivi") {
    setActiveTab("4"); 
  }
  if (tabParam === "mouvgis") {
    setActiveTab("5"); 
  }

  if (tabParam === "employés") {
    setActiveTab("6"); 
  }
  if (tabParam === "tabbord") {
    setActiveTab("7"); 
  }

}, []);
const onglets = [


  { tab: <TabPane tab="Table des produits" key="1" style={tabStyles} ><TabDeProduits /></TabPane>, roles: ['ADMIN', 'MANGEMENT'],  },
  { tab: <TabPane tab="Table de gisement" key="2" style={tabStyles} ><TabDeGisement /></TabPane>, roles: ['ADMIN','MANGEMENT'] },
  { tab: <TabPane tab="Table de remplissages"  key="3" style={tabStyles}><TabDeRemplissage /></TabPane>, roles: ['MANGEMENT','ADMIN']},
  { tab: <TabPane tab="Table de suivi" key="4" style={tabStyles}><TabDeSuivi /></TabPane>, roles: ['ADMIN', 'MANGEMENT']},
  { tab: <TabPane tab="Mouvements gisement" key="5" style={tabStyles}><MouvementsGisement /></TabPane>, roles: ['ADMIN', 'MANGEMENT'] },
  { tab: <TabPane tab="Table des employés" key="6" style={tabStyles}><TabDeEmployees /></TabPane>, roles: ['ADMIN']  },
  { tab: <TabPane tab="Tableaux de bord" key="7" style={tabStyles}><TabDeBords /></TabPane>, roles: ['ADMIN', 'MANGEMENT']}

];

const ongletsFiltres = onglets.filter(onglet => {
  return onglet.roles.some(role => rolesAutorises.includes(role));
});
useEffect(() => {
  if (!token) {
    navigate('/');
  }
}, [token, navigate]);
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
      tabBarGutter={40}
      activeKey={activeTab}
      onChange={setActiveTab}
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

    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '30px', marginBottom: '5px' }}>
      <Button type="primary" style={{backgroundColor:"#E42A2A", color:"#fff",fontFamily: 'Poppins, sans-serif',fontSize: '15px', fontWeight:"600"}} onClick={onLogout}>Déconnexion</Button>
    </div>
  </div>
);
};


export default Home;