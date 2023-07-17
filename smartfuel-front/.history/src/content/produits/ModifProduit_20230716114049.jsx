import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

       import getDefaultFetchConfig from '../../fetchconfig';
const ModifProduit = () => {
    
 const role=localStorage.getItem('role')
 const lowercaseRole = role ? role.toLowerCase() : '';
    const URL =`http://localhost:8080/api/v1/${lowercaseRole}/Distributeur_gisement` ;
    const {prodid} =useParams();
    const token = localStorage.getItem('token');


    const[nom,setNom]=useState("");
    const[unite_de_mesure,setUnite_de_mesure]=useState("");
    const[prix_de_vente,setPrix_de_vente]=useState("");

    
    const navigate=useNavigate();

    useEffect(()=> {
        fetch(URL+'/'+prodid,getDefaultFetchConfig('GET')).then((res)=> {
            return res.json();
        }).then((produit)=> {
            setNom(produit.iddistributeur.nom);
            
            setUnite_de_mesure(produit.table_dachat[0].unite_de_mesure);
            setPrix_de_vente(produit.idgisement.type_gisement.prix_de_vente);
        }).catch((err)=> {
            console.log(err.message)
        })
    },[]); 
    

   

    const handlesubmit=(e)=>{
      e.preventDefault();
      const prodData={nom,unite_de_mesure,prix_de_vente};
      

    //   fetch(URL+"/"+prodid,{
    //     method:"PUT",
    //     headers:{
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`,},
    //     body:JSON.stringify(prodData)
    //   }).then((res)=>{
    //     alert("Modifié avec succès")
    //     navigate('/Home?tab=produits');
    //   }).catch((err)=>{
    //     console.log(err.message)
    //   })
    }
  return (
    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center', height:"100vh"}}>

            <div  className="row">
                <div  className="offset-lg-3 col-lg-6">
                    <form style={{  fontFamily: 'Poppins, sans-serif',  fontWeight: '500',  letterSpacing: '1px', fontSize: '20px', }} className="container" onSubmit={handlesubmit}>

                        <div   className="card" style={{ padding :"20px",height:"85vh" ,textAlign:"left", overflow:"auto"}}>
                            <div style={{margin :"10px"}} className="card-title">
                                <h2>Modifier le produit</h2>
                            </div>


                            <div className="card-body">
                                <div className="row">

                                    <div style={{ margin :"10px" }}className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px" }}>Nom distributeur :</label>
                                            <input required value={nom}  onChange={e=>setNom(e.target.value)} className="form-control"></input>
                                           
                                        </div>
                                    </div>


                                    <div style={{ margin: "10px" }} className="col-lg-12">
                                      <div className="form-group">
                                      <label style={{ margin: "10px " }}>Unité de mesure :</label>
                                      <select value={unite_de_mesure} onChange={e => setUnite_de_mesure(e.target.value)} className="form-control">
                                         <option value="">Sélectionnez une option</option>
                                         <option value="Litre">Litre</option>
                                         <option value="Mètre cube">Mètre cube</option>
                                      </select>
                                    </div>
                                    </div>
                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }} >Prix de vente :</label>
                                            <input value={prix_de_vente} onChange={e=>setPrix_de_vente(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                  
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" style={{  padding:"10px 20px" ,margin: "20px" }} type="submit"> Enregistrer </button>
                                           <Link to="/Home?tab=produits" className="btn btn-danger" style={{ padding:"10px 20px" ,  margin: "20px" }} > Annuler</Link>
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

export default ModifProduit