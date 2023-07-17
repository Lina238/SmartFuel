import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import getDefaultFetchConfig from '../../fetchconfig';

const role = localStorage.getItem('role');
const lowercaseRole = role ? role.toLowerCase() : '';
const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Distributeur_gisement`;
const URL1=`http://localhost:8080/api/v1/${lowercaseRole}/Chefs`;
const TabDeSuivi = () => {
  const [suivData, setSuivData] = useState(null);
  const [distributorNames, setDistributorNames] = useState({});
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate('/ModifierSuivi/' + id);
  };

  useEffect(() => {
    fetch(URL, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((resp) => {
        setSuivData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });

    fetch(URL1, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((resp) => {
        const mapping = {};
        resp.forEach((distributor) => {
          mapping[distributor.id] = distributor.nom;
        });
        setDistributorNames(mapping);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const Removefunction = (id) => {
    if (window.confirm('Voulez-vous vraiment le supprimer ?')) {
      fetch(`${URL}/${id}`, getDefaultFetchConfig('DELETE'))
        .then((res) => {
          window.location.reload();
          console.log('the id' + id);
          navigate('/Home?tab=suivi');
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <Link to="/AjouterSuivi">
        <Button type="primary" style={{ marginBottom: 20 }}>
          Nouveau Suivi
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
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>
                Nom Distributeur
              </th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Compteur actuel</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Compteur finale</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Quantité actuelle</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Espace libre</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Utilisateur</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Date de création</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Date de modification</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Montant Actuel</th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>Opérations</th>
            </tr>
          </thead>
          <tbody>
            {suivData && suivData.length > 0 ? (
              suivData.map((item) => (
                <React.Fragment key={item.id}>
                  {item.table_de_vente.map((vente) => (
                    <tr key={vente.id}>
                      <td>{item.iddistributeur.nom}</td>
                      <td>{vente.compteur_actuel}</td>
                      <td>{vente.compteur_final}</td>
                      <td>{vente.quantite}</td>
                      <td>{item.idgisement.espace_libre}</td>
                      <td>{vente.user_opperation.nom}</td>
                      <td>{vente.date_de_creation}</td>
                      <td>{vente.date_de_modification}</td>
                      <td>{vente.montant}</td>
                      <td>
                        <Button
                          type="primary"
                          onClick={() => {
                            LoadEdit(vente.id);
                          }}
                          style={{
                            backgroundColor: '#FFA500',
                            margin: '5px 8px',
                            fontWeight: '600',
                          }}
                        >
                          Modifier
                        </Button>
                        <Button
                          type="primary"
                          onClick={() => {
                            Removefunction(vente.id);
                          }}
                          style={{
                            backgroundColor: '#FF0000',
                            margin: '5px 8px',
                            fontWeight: '600',
                          }}
                        >
                          Supprimer
                        </Button>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={10}>Aucune donnée disponible</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabDeSuivi;
