import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from 'antd';
import getDefaultFetchConfig from '../../fetchconfig';

const AjoutSuivi = () => {
  const URL = 'http://localhost:8080/api/v1/Distributeur_gisement'; // URL to save the Suivi data
  const URL1 = 'http://localhost:8080/api/v1/Chefs'; // URL to fetch chefs data

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

  useEffect(() => {
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
            {/* ... Your form content ... */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjoutSuivi;
