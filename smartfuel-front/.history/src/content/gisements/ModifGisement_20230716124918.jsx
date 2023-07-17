import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import getDefaultFetchConfig from '../../fetchconfig';

const ModifGisement = () => {
  const role = localStorage.getItem('role');
  const lowercaseRole = role ? role.toLowerCase() : '';
  const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Gisement`;
  const URL1 = `http://localhost:8080/api/v1/${lowercaseRole}/Type_gisement`;

  const [chefsOptions, setChefsOptions] = useState([]);


  useEffect(() => {
    fetch(URL1, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((data) => {
        setChefsOptions(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const { gisid } = useParams();

  const [nom, setNom] = useState('');
  const [type, setType] = useState('');
  const [capacite_totale, setCapacite_totale] = useState('');
  const [seuil, setSeuil] = useState('');
  const token = localStorage.getItem('token');
  const [quantite_actuelle, setQuantite_actuelle] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL + '/' + gisid, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((resp) => {
        setNom(resp.nom);
        setType(resp.type_gisement.type);
        setCapacite_totale(resp.capacite_totale);
        setSeuil(resp.seuil);
        setQuantite_actuelle(resp.quantite_actuelle);


      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [chefsOptions]);

  const handleTypeChange = (e) => {
    const selectedTypeValue = e.target.value;
    const selectedTypeObject = chefsOptions.find((item) => item.type === selectedTypeValue);
    setSelectedType(selectedTypeObject);
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!selectedType) {
      alert('Veuillez sélectionner un type de gisement.');
      return;
    }

    const gisData = {
      nom,
      type_gisement: selectedType,
      capacite_totale,
      seuil,
      quantite_actuelle,
    };


    fetch(URL + '/' + gisid, {
      method: 'PUT',
      headers: { 'content-type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(gisData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        // alert('Modifié avec succès');
        // navigate('/Home?tab=gisements');
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
            <div className="card" style={{ padding: '20px', height: '85vh', overflow: 'auto', textAlign: 'left' }}>
              <div style={{ margin: '10px' }} className="card-title">
                <h2>Modifier le gisement</h2>
              </div>

              <div className="card-body">
                <div className="row">
                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px' }}>Nom distributeur :</label>
                      <input required value={nom} onChange={(e) => setNom(e.target.value)} className="form-control" />
                    </div>
                  </div>

                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px ' }}>Le type :</label>
                      <select value={type} onChange={(e) => setType(e.target.value)} className="form-control">
                        <option value="">Sélectionner un type</option>
                        {chefsOptions.map((item) => (
                          <option key={item.id} value={item.type}>
                            {item.type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px ' }}>Capacité totale :</label>
                      <input
                        value={capacite_totale}
                        onChange={(e) => setCapacite_totale(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px ' }}>quantite actuelle :</label>
                      <input
                        value={quantite_actuelle}
                        onChange={(e) => setQuantite_actuelle(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div style={{ margin: '10px' }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: '10px ' }}>Seuil :</label>
                      <input value={seuil} onChange={(e) => setSeuil(e.target.value)} className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" style={{ padding: '10px 20px', margin: '20px' }} type="submit">
                        Enregistrer
                      </button>
                      <Link to="/Home?tab=gisements" className="btn btn-danger" style={{ padding: '10px 20px', margin: '20px' }}>
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

export default ModifGisement;
