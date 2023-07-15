
import React, { Component, useState , useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

import { Button } from 'antd';



const TabDeGisement = () => {
  const URL = "http://localhost:8000/Gisements" ;
  const URL1 = "http://localhost:8000/types" ;

  const [type, setType] = useState([]);

  const handlesubmit=(e)=>{
    e.preventDefault();
    const dataa={type};
    

    fetch(URL1,{
      method:"POST",
      headers:{"content-type":"application/json"},
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



    const[gisData,setgisData] =useState(null)

    const navigate = useNavigate();
    
    const LoadEdit = (id) => {
        navigate("/ModifierGisement/" + id);
    }

    useEffect(() => {
        fetch(URL).then((res) => {
            return res.json();
        }).then((resp) => {
            setgisData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    const Removefunction = (id) => {
        if (window.confirm('Voulez vous vraiment le supprimer ?')) {
            fetch(URL+"/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Supprimé avec succès !')
                window.location.reload();
                navigate('/Home?tab=gisements');
                console.log("the id"+id)
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
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
    <Link to='/AjouterGisement'>
    <Button type="primary"  style={{   marginBottom: 20, }} >
     Nouveau Gisement
    </Button>
    </Link>

    <br></br>
    <div style={{ height: '400px', overflow: 'auto' }}>
      <table className = "table table-striped table-bordered rounded"  style={{ fontFamily: 'Poppins, sans-serif',borderRadius: '4px 2px 4px',
      fontSize: '14px', width:"150vh", border:'2px solid #ffffff' }}> 
     <thead style ={{backgroundColor :'#A0A0A0' }} >
        <tr style={ { borderRadius: '4px 2px 4px'}} >
           <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'  }}> Nom Distributeur</th>
           <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'}}> Type</th>
           <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Capacité totale</th>
           <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'}}> Seuil</th>
           <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Opérations</th>
          </tr>
    </thead>
    <tbody>
  {gisData && gisData.length > 0 ? (
    gisData.map((item) => (
      <tr key={item.id}>
        <td>{item.nom}</td>
        <td>{item.type}</td>
        <td>{item.capacite_totale}</td>
        <td>{item.seuil}</td>
        <td>
          <Button
            type="primary"
            onClick={() => {
              LoadEdit(item.id);
            }}
            style={{
              backgroundColor: "#FFA500",
              margin: "0px 8px 0px 0px",
              fontWeight: "600",
            }}
          >
            Modifier
          </Button>
          <Button
            type="primary"
            onClick={() => {
              Removefunction(item.id);
            }}
            style={{
              backgroundColor: "#FF0000",
              margin: "0px 0px 0px 8px",
              fontWeight: "600",
            }}
          >
            Supprimer
          </Button>
        </td>
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
  )
}

export default TabDeGisement

