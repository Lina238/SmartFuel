
import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AjoutGisement = () => {
    
    const URL = "http://localhost:8000/Gisements" ;

    const[nom,setNom]=useState("");
    const[capacite_totale,setCapacite_totale]=useState("");
    const[seuil,setSeuil]=useState("");
    const[quantite_actuelle,setQuantite_actuelle]=useState("");

    
 
    
    const navigate=useNavigate();

   

    const handlesubmit=(e)=>{
      e.preventDefault();
      const gisData={nom,capacite_totale,seuil,quantite_actuelle};
      

      fetch(URL,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(gisData)
      }).then((res)=>{
        alert("ajout avec succès")
        navigate('/Home');
      }).catch((err)=>{
        console.log(err.message)
      })
    }
  return (
   <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center', height:"100vh"}}>

            <div  className="row">
                <div  className="offset-lg-3 col-lg-6">
                    <form style={{  fontFamily: 'Poppins, sans-serif',  fontWeight: '500',  letterSpacing: '1px', fontSize: '20px', }}  className="container" onSubmit={handlesubmit}>

                        <div   className="card" style={{ padding :"20px",height:"85vh" ,textAlign:"left"}}>
                            <div style={{margin :"10px"}} className="card-title">
                                <h2>Ajouter un nouveau gisement</h2>
                            </div>


                            <div className="card-body">
                                <div className="row">

                                    <div style={{ margin :"10px" }}className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px" }}>Nom distributeur :</label>
                                            <input required value={nom}  onChange={e=>setNom(e.target.value)} className="form-control"></input>
                                           
                                        </div>
                                    </div>

                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Capacité totale :</label>
                                            <input value={capacite_totale} onChange={e=>setCapacite_totale(e.target.value)} className="form-control"></input>
                                          
                                        </div>
                                    </div>

                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Seuil :</label>
                                            <input value={seuil} onChange={e=>setSeuil(e.target.value)} className="form-control"></input>
                                            
                                        </div>
                                    </div>
                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }} >Quantité actuelle :</label>
                                            <input value={quantite_actuelle} onChange={e=>setQuantite_actuelle(e.target.value)} className="form-control"></input>
                                          
                                        </div>
                                    </div>

ابتهال صنصري, [7/12/2023 12:48 PM]
<div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" style={{  padding:"10px 20px" ,margin: "20px" }} type="submit"> Enregistrer </button>
                                           <Link to="/Home" className="btn btn-danger" style={{ padding:"10px 20px" ,  margin: "20px" }} > Annuler</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
  )
}

export default AjoutGisement