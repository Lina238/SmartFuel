import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import getDefaultFetchConfig from '../../fetchconfig';
const AjoutProduit = () => {
  const role = localStorage.getItem('role');
  const lowercaseRole = role ? role.toLowerCase() : '';
  const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Distributeur_gisement`;
  const URL2 = `http://localhost:8080/api/v1/${lowercaseRole}/Gisement`;
  const URL1 = `http://localhost:8080/api/v1/${lowercaseRole}/Distributeur`;

  const [selectedDis, setSelectedDis] = useState([]);
  const [selectedgis, setSelectedgis] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(URL1, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((data) => {
        setSelectedDis(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  useEffect(() => {
    fetch(URL2, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((data) => {
        setSelectedgis(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const { gisid } = useParams();

  const token = localStorage.getItem('token');

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!selectedDis ||!selectedgis ) {
        alert('Veuillez sélectionner un type de gisement.');
        return;
      }
    
      const selectedDisObject = selectedDis.find((item) => item.type === type);
      const selectedgisObject = selectedgis.find((item) => item.type === type);
      if (!selectedTypeObject) {
        alert('Veuillez sélectionner un type valide.');
        return;
      }
    
      const gisData = {
        idgisement:{id:selectedgis},
        iddistributeur: {id:selectedTypeObject}, 
      
      };
    

    fetch(URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(gisData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        alert('Ajout avec succès');
        navigate('/Home?tab=gisements');
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
            <div className="card" style={{ padding: '20px', height: '65vh', overflow: 'auto', textAlign: 'left' }}>
              <div style={{ margin: '10px' }} className="card-title">
                <h2>Créer un produit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px ' }}>le distributeur:</label>
                      <select value={selectedDis} onChange={(e) => setSelectedDis(e.target.value)} className="form-control">
                        <option value="">Sélectionner un distributeur</option>
                        {selectedDis.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.nom}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px ' }}>gisement:</label>
                      <select value={selectedgis} onChange={(e) => setSelectedgis(e.target.value)} className="form-control">
                        <option value="">sélectionner un gisement</option>
                        {selectedDis.map((item) => (
                          <option key={item.id} value={item.nom}>
                            {item.nom}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" style={{ padding: '10px 20px', margin: '20px' }} type="submit">
                        Enregistrer
                      </button>
                      <Link to="/Home?tab=produits" className="btn btn-danger" style={{ padding: '10px 20px', margin: '20px' }}>
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

export default AjoutProduit;
