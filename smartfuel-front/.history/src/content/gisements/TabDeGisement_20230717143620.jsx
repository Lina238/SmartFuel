import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import getDefaultFetchConfig from '../../fetchconfig';
import { Button } from 'antd';
const role = localStorage.getItem('role');
const lowercaseRole = role ? role.toLowerCase() : '';
const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Gisement`;
const TabDeGisement = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
const token=localStorage.getItem('token')
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
          alert(res.text());
          window.location.reload();
          console.log('the id' + id);
          navigate('/Home?tab=gisements');
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const URL1 = `http://localhost:8080/api/v1/${lowercaseRole}/Type_gisement`;

  const [type, setType] = useState([]);
  const[prix_de_vente,setprix_de_vente]=useState("");
  const handlesubmit=(e)=>{
    e.preventDefault();
    const dataa={type,prix_de_vente};
    

    fetch(URL1,{
      method:"POST",
      headers:{"content-type":"application/json",'Authorization': `Bearer ${token}`,},
      body:JSON.stringify(dataa)
    }).then((res)=>{
      alert("ajout avec succès")
    }).catch((err)=>{
      console.log(err.message)
    })
  }

  const [showChefForm, setShowChefForm] = useState(false);

  const showChefFormHandler = () => {
          setShowChefForm(true);
   };

  const hideChefFormHandler = () => {
    setShowChefForm(false);
      };
  return (
    <div style={{ margin: '20px' }}>
        {!showChefForm ? (
      <div style={{ display: 'flex', justifyContent: 'start',}}>
      <Button type="primary" style={{ marginBottom: 10 , padding:"5px 23px" }} onClick={showChefFormHandler}>
        Ajouter les types 
      </Button>
      </div>
    ) : (
      <div>
        <form onSubmit={handlesubmit} style={{  fontFamily: 'Poppins, sans-serif',  fontWeight: '400',  letterSpacing: '1px', fontSize: '20px', }} className="container">
                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"5px " }} >Type de gaz carburant :</label>
                                            <input style={{width:"30vw" , border:"1px solid black"}} value={type} onChange={e=> setType(e.target.value)} className="form-control"></input>
                                          
                                        </div>
                                        <div className="form-group">
                                            <label style={{ margin:"5px " }} >Prix de vente:</label>
                                            <input style={{width:"30vw" , border:"1px solid black"}} value={prix_de_vente} onChange={e=> setprix_de_vente(e.target.value)} className="form-control"></input>
                                          
                                        </div>
                                    </div>
                                    <div>
                                    <button className="btn btn-success" style={{  padding:"5px 20px" ,margin: "5px 10px 10px 10px" }} type="submit"> Enregistrer </button>
                                    <button className="btn btn-danger" style={{ padding:"5px 20px" ,  margin: "5px 10px 10px 10px"  }} onClick={hideChefFormHandler}>
                                       Annuler
                                    </button>
                                    </div>

        </form>

      </div>

    )}
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
          <thead style={{ backgroundColor: '#A0A0A0',position: 'sticky', top: '0',zIndex :"3" }}>
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
              data.map((item) =>
         
                  <tr key={item.id}>
                    <td>{item.nom}</td>
                    <td>{item.capacite_totale}</td>
                    <td>{item.seuil}</td>
                    <td>{item.quantite_actuelle}</td>
                    <td>{item.type_gisement.type}</td>
                    <td>
                      <Button
                        type="primary"
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        style={{ backgroundColor: '#FFA500', margin: '0px 8px 0px 0px', fontWeight: '600' }}
                      >
                        Modifier
                      </Button>
                      <Button
                        type="primary"
                        onClick={() => {
                          Removefunction(item.id);
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
