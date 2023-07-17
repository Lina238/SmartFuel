import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from 'antd';
import getDefaultFetchConfig from '../../fetchconfig';

const AjoutSuivi = () => {
  const URL = 'http://localhost:8080/api/v1/admin/Distributeur_gisement';
  const URL1 = 'http://localhost:8080/api/v1/admin/Table_de_vente';

  const [nom, setNom] = useState('');
  const [compteur_actuel, setCompteur_actuel] = useState('');
  const [compteur_final, setCompteur_final] = useState('');
  const [quantite, setQuantite] = useState('');
  const [espace_libre, setEspace_libre] = useState('');
  const [user_opperation, setUser_opperation] = useState('');
  const [montant_actuel, setMontant_actuel] = useState('');
  const username = localStorage.getItem('username');

  const dateActuelle = new Date();
  const formatDateCreation = format(dateActuelle, 'dd MMMM yyyy HH:mm', { locale: fr });
  const [date_de_creation, setDate_de_creation] = useState(formatDateCreation);
  const [date_de_modification, setDate_de_modification] = useState(formatDateCreation);

  const navigate = useNavigate();

  const [chefId, setChefId] = useState(null);
  const [distributeurs, setDistributeurs] = useState([]);
  const [selectedDistributeur, setSelectedDistributeur] = useState('');
  useEffect(() => {
    fetch(URL, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((data) => {
        setDistributeurs(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    fetch(URL1, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((resp) => {
        const matchedChef = resp.find((chef) => chef.username === username);
        if (matchedChef) {
          setChefId(matchedChef.id);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [username]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const suivData = {
      nom,
      compteur_actuel,
      compteur_final,
      quantite,
      espace_libre,
      user_opperation,
      date_de_creation,
      date_de_modification,
      montant_actuel,
      chef: { id: chefId },
      id_distributeur_gisement: { id_distributeur_gisement: selectedDistributeur.id },
    };

    fetch(URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(suivData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (chefId) {
          fetch(`http://localhost:8080/api/v1/Chefs/${chefId}`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
          })
            .then((res) => res.json())
            .then((chefData) => {
              const updatedChef = { ...chefData, table_de_vente: [...chefData.table_de_vente, data] };
              fetch(`http://localhost:8080/api/v1/Chefs/${chefId}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(updatedChef),
              })
                .then(() => {
                  alert('ajout avec succès');
                  navigate('/Home?tab=suivi');
                })
                .catch((err) => {
                  console.log(err.message);
                });
            })
            .catch((err) => {
              console.log(err.message);
            });
        } else {
          alert('Chef not found!');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
              letterSpacing: '1px',
              fontSize: '20px',
            }}
            className="container"
            onSubmit={handlesubmit}
          >
            <div className="card" style={{ padding: '20px', height: '85vh', textAlign: 'left', overflow: 'auto' }}>
              <div style={{ margin: '10px' }} className="card-title">
                <h2>Ajouter un nouveau suivi</h2>
              </div>
              <div className="card-body">
                <div className="row">

                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px' }}>Utilisateur :</label>
                      <input value={username} readOnly className="form-control" />
                    </div>
                  </div>

                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px' }}>Distributeur :</label>
                      <select
                        value={selectedDistributeur}
                        onChange={(e) => setSelectedDistributeur(e.target.value)}
                        className="form-control">
                    <option value="">Sélectionner un distributeur</option>
                        {distributeurs.map((distributeur, index) => (
                          distributeur.iddistributeur.map((dist, index) => (
                            <option key={index} value={dist.id}>
                              {dist.nom}
                            </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Compteur actuel :</label>
                                            <input value={compteur_actuel} onChange={e=>setCompteur_actuel(e.target.value)} className="form-control"></input>
                                          
                                        </div>
                                    </div>
                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }} >Compteur final :</label>
                                            <input value={compteur_final} onChange={e=>setCompteur_final(e.target.value)} className="form-control"></input>
                                          
                                        </div>
                                    </div>

                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Quantité vendu :</label>
                                            <input value={quantite} onChange={e=>setQuantite(e.target.value)} className="form-control"></input>
                                            
                                        </div>
                                    </div>
                                  
                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Espace libre actuel :</label>
                                            <input value={espace_libre} onChange={e=>setEspace_libre(e.target.value)} className="form-control"></input>
                                            
                                        </div>
                                    </div>
                                    <div style={{ margin: "10px" }} className="col-lg-12">
                             <div className="form-group">
    <label style={{ margin: "10px" }}>Utilisateur :</label>
    <input
      value={username}
      readOnly
      className="form-control"
      // If you want to apply some styles, you can use the `style` prop as well
      // style={{ backgroundColor: "#f0f0f0", color: "#000000" }}
    />
  </div>
</div>

                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Date de création :</label>
                                            <input value={date_de_creation} disabled onChange={e=>setDate_de_creation(e.target.value)} className="form-control"></input>
                                            
                                        </div>
                                    </div>
                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Date de modification :</label>
                                            <input value={date_de_modification} disabled onChange={e=>setDate_de_modification(e.target.value)} className="form-control"></input>
                                            
                                        </div>
                                    </div>
                                    
                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Monatant actuel :</label>
                                            <input value={montant_actuel} onChange={e=>setMontant_actuel(e.target.value)} className="form-control"></input>
                                            
                                        </div>
                                    </div>

                                  
                      

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" style={{ padding: '10px 20px', margin: '20px' }} type="submit">
                        Enregistrer
                      </button>
                      <Link to="/Home?tab=suivi" className="btn btn-danger" style={{ padding: '10px 20px', margin: '20px' }}>
                        Annuler
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjoutSuivi;
