import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import getDefaultFetchConfig from '../../fetchconfig';
import ReactToPrint from 'react-to-print';
const MouvementsGisement = () => {
  const role = localStorage.getItem('role');
  const lowercaseRole = role ? role.toLowerCase() : '';
  const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Mouvement_gisement`;

  const [mouvData, setMouvData] = useState(null);

  useEffect(() => {
    fetch(URL, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((resp) => {
        setMouvData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const tableRef = useRef();


  return (
    <div style={{ margin: '20px' }}>
   <ReactToPrint trigger={() => {
        return( <Button type="primary"  style={{ marginBottom: '10px' }}>
         Imprimer la table
       </Button>)
   }} content={() => tableRef}>
   </ReactToPrint>

      <br />
      <div ref={tableRef} style={{ height: '400px', overflow: 'auto' }}>
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
                Quantité
              </th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>
                Type d'opération
              </th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>
                Date de création
              </th>
              <th style={{ backgroundColor: '#606060', color: '#ffffff', letterSpacing: '1.2px' }}>
                Date de modification
              </th>
            </tr>
          </thead>
          <tbody>
            {mouvData && mouvData.length > 0 ? (
              mouvData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id_gisement_distributeur.iddistributeur.nom}</td>
                  <td>{item.quantite}</td>
                  <td>{item.type === true ? 'entrée' : 'sortie'}</td>
                  <td>{item.date_de_creation}</td>
                  <td>{item.date_de_modification}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>Aucune donnée disponible</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MouvementsGisement;
