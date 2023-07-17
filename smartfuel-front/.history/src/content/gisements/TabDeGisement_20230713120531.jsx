import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import getDefaultFetchConfig from '../../fetchconfig';
import { Button } from 'antd';

const URL = 'http://localhost:8080/api/v1/admin/Distributeur_gisement';

const TabDeGisement = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate('/ModifierGisement/' + id);
  };

  useEffect(() => {
    fetch(URL, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const Removefunction = (id) => {
    if (window.confirm('Voulez vous vraiment le supprimer ?')) {
      fetch(`${URL}/${id}`, getDefaultFetchConfig('DELETE'))
        .then((res) => {
          alert(res);
          window.location.reload();
          console.log('the id' + id);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <Link to="/AjouterGisement">
        <Button type="primary" style={{ marginBottom: 20 }}>
          Nouveau Gisement
        </Button>
      </Link>

      <br></br>
      <div style={{ height: '400px', overflow: 'auto' }}>
        <table
          className="table table-striped table-bordered rounded"
          style={{
            fontFamily: 'Poppins, sans-serif',
            borderRadius: '4px 2px 4px',
            fontSize: '14px',
            width: '150vh',
            border: '2px solid #ffffff',
          }}
        >
          <thead style={{ backgroundColor: '#A0A0A0' }}>
            <tr style={{ borderRadius: '4px 2px 4px' }}>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Nom gisement</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Type de Gaz</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Unité de mesure</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Prix de ventes</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Type de produit</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Opérations</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((gisement) =>
               (
                  <tr key={gisement.id}>
                    <td>{gisement.nom}</td>
                    <td>{gisement.capacite_totale}</td>
                    <td>{gisement.seuil}</td>
                    <td>{gisement.quantite_actuelle}</td>
                    <td>{gisement.type_gisement.type}</td>
                    <td>
                      <Button
                        type="primary"
                        onClick={() => {
                          LoadEdit(gisement.id);
                        }}
                        style={{ backgroundColor: '#FFA500', margin: '0px 8px 0px 0px', fontWeight: '600' }}
                      >
                        Modifier
                      </Button>
                      <Button
                        type="primary"
                        onClick={() => {
                          Removefunction(gisement.id);
                        }}
                        style={{ backgroundColor: '#FF0000', margin: '0px 0px 0px 8px', fontWeight: '600' }}
                      >
                        Supprimer
                      </Button>
                    </td>
                  </tr>
              
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabDeGisement;
