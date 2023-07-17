import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import getDefaultFetchConfig from '../../fetchconfig';

const role = localStorage.getItem('role');
const lowercaseRole = role ? role.toLowerCase() : '';
const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Distributeur_gisement`;
const URL2 = `http://localhost:8080/api/v1/${lowercaseRole}/Table_dachat`;
const TabDeRemplissage = () => {
  const [rempData, setRempData] = useState(null);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate('/ModifierRemplissage/' + id);
  };

  useEffect(() => {
    fetch(URL, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((resp) => {
        setRempData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const Removefunction = (id) => {
    if (window.confirm('Voulez vous vraiment le supprimer ?')) {
      fetch(URL2 + '/' + id, getDefaultFetchConfig('DELETE'))
        .then((res) => {
          window.location.reload();
          console.log('the id' + id);
          navigate('/Home?tab=remplissages');
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <Link to="/AjouterRemplissage">
        <Button type="primary" style={{ marginBottom: 20 }}>
          Nouveau Remplissage
        </Button>
      </Link>

      <br />
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
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>
                Nom Distributeur
              </th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>
                Quantité de remplissage
              </th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>
                Unité de mesure
              </th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>
                Date de création
              </th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>
                Date de modification
              </th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>
                Prix d'achats
              </th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>
                Opérations
              </th>
            </tr>
          </thead>
       <tbody>
  {rempData && rempData.length > 0 ? (
    rempData.map((item) => (
      <React.Fragment key={item.id}>
        {item.table_dachat && item.table_dachat.length > 0 ? (
          item.table_dachat.map((vente) => (
            <tr key={vente.id}>
              <td>{item.iddistributeur.nom}</td>
              <td>{vente.quantite}</td>
              <td>{vente.unite_de_mesure}</td>
              <td>{vente.date_de_creation}</td>
              <td>{vente.date_de_modification}</td>
              <td>{vente.prix_dachat}</td>

              <td>
                <Button
                  type="primary"
                  onClick={() => {
                    Removefunction(item.id);
                  }}
                  style={{ backgroundColor: '#FF0000', margin: '5px 8px', fontWeight: '600' }}
                >
                  Supprimer
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>{item.id_gisement_distributeur?.iddistributeur?.nom || 'N/A'}</td>
            <td colSpan={6}>Aucune donnée disponible</td>
          </tr>
        )}
      </React.Fragment>
    ))
  ) : (
    <tr>
      <td colSpan={7}>Aucune donnée disponible</td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default TabDeRemplissage;
