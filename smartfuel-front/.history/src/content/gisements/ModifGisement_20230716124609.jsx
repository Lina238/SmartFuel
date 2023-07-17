import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import getDefaultFetchConfig from '../../fetchconfig';

const ModifGisement = () => {
  // ... (existing code) ...

  // Handle changes in the dropdown value
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
                      <select value={selectedType?.type} onChange={handleTypeChange} className="form-control">
                        <option value="">Sélectionner un type</option>
                        {chefsOptions.map((item) => (
                          <option key={item.id} value={item.type}>
                            {item.type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* ... (other fields) ... */}

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
