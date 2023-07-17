import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from 'antd';
import getDefaultFetchConfig from '../../fetchconfig';
const role = localStorage.getItem('role');
const lowercaseRole = role ? role.toLowerCase() : '';
  const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Distributeur_gisement`;
  const URL2 = `http://localhost:8080/api/v1/${lowercaseRole}/Table_de_vente`;
const AjoutSuivi = () => {
  

  const token = localStorage.getItem('token');

  const [quantite, setQuantite] = useState('');
  const [prix_dachat, setprix_dachat] = useState('');
  const [unite_de_mesure, setunite_de_mesure] = useState('');
  const dateActuelle = new Date();
  const formatDateCreation = format(dateActuelle, 'dd MMMM yyyy HH:mm', { locale: fr });
  const navigate = useNavigate();
  const [distributeurs, setDistributeurs] = useState([]);
  const [selectedDistributeur, setSelectedDistributeur] = useState('');
  const[date_de_creation, setDate_de_creation] = useState(formatDateCreation);
  const[date_de_modification,setDate_de_modification]=useState(formatDateCreation);
  useEffect(() => {
    fetch(URL, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((data) => {
        setDistributeurs(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    
  }, );

  const handlesubmit = (e) => {
    e.preventDefault();

    // Vérification des champs obligatoires
    if (!prix_dachat || unite_de_mesure || !selectedDistributeur) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const suivData = {
     prix_dachat,unite_de_mesure,
      id_gisement_distributeur: { id_gisement_distributeur: selectedDistributeur },
    };

    console.log(suivData);

    fetch(URL2, {
      method: 'POST',
      headers: { 'content-type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(suivData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        
        }
        alert("Ajout avec succès");
        navigate('/Home?tab=remplissages');
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
                <h2>Ajouter un nouveau achat </h2>
              </div>
              <div className="card-body">
                <div className="row">
        
                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px' }}>Distributeur :</label>
                      <select
                        value={selectedDistributeur}
                        onChange={(e) => setSelectedDistributeur(parseInt(e.target.value))}
                        className="form-control"
                      >
                        <option value="">Sélectionner un distributeur</option>
                        {distributeurs.map((distributeur) => (
                          <option key={distributeur.id_gisement_distributeur} value={distributeur.id_gisement_distributeur}>
                            {distributeur.iddistributeur.nom}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px' }}>Prix d'achat :</label>
                      <input value={prix_dachat} onChange={(e) => setprix_dachat(e.target.value)} className="form-control" required />
                    </div>
                  </div>
                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px' }}>Compteur final :</label>
                      <input value={unite_de_mesure} onChange={(e) => setunite_de_mesure(e.target.value)} className="form-control" required />
                    </div>
                  </div>
        
                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px' }}>Quantité vendu :</label>
                      <input value={quantite} onChange={(e) => setQuantite(e.target.value)} className="form-control" required />
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
