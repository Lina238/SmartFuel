import React, { Component, useState , useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

import { Button } from 'antd';

const role=localStorage.getItem('role')
const lowercaseRole = role ? role.toLowerCase() : '';
const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Distributeur_gisement` ;
const  URL1 =`http://localhost:8080/api/v1/${lowercaseRole}/Distributeur` ;
const token = localStorage.getItem('token');
console.log(token)
const  headers= {
    'Authorization': `Bearer ${token}` 
  };
const TabDeProduits = () => {
    const[prodData,setProdData] =useState(null)
    const navigate = useNavigate();
    const[Nom,setNom]=useState("");
    const LoadEdit = (id) => {
        navigate("/ModifierProduit/" + id);
    }
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        const dataa={Nom};
        
    
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
    useEffect(() => {
        fetch(URL,
            {
                method:'GET',
                headers:headers
            }
            
            ).then((res) => {
            return res.json();
        }).then((resp) => {
            setProdData(resp);

        console.log(prodData);
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
                console.log("the id"+id)
                navigate('/Home?tab=produits');
            }).catch((err) => {
                console.log(err.message)
            })
        }
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
                                              <label style={{ margin:"5px " }} >Nom Distributeur :</label>
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
    
    <Link to='/AjouterProduit'>
    <Button type="primary"  style={{   marginBottom: 20, }} >
     Nouveau Produit
    </Button>
    </Link>

    <br></br>
    <div style={{ height: '400px', overflow: 'auto' }}>
      <table className = "table table-striped table-bordered rounded"  style={{ fontFamily: 'Poppins, sans-serif',borderRadius: '4px 2px 4px',
      fontSize: '14px', width:"150vh", border:'2px solid #ffffff' }}> 
     <thead style ={{backgroundColor :'#A0A0A0' }} >
        <tr style={ { borderRadius: '4px 2px 4px'}} >
           <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'  }}> Nom Distributeur</th>
           <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'  }}> nom de son gisement</th>
           <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Type de Gaz</th>
           <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'}}> Unité de mesure</th>
           <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Prix de ventes</th>
           <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Opérations</th>
          </tr>
    </thead>
    <tbody  >
         
          {  prodData && prodData.map(
                    produit=> 
           <tr key={produit.id}>
                                      
           <td >  {produit.iddistributeur.nom} </td>
           <td >  {produit.idgisement.nom} </td>
           <td >  {produit.idgisement.type_gisement.type} </td>
            <td >  {produit.table_dachat[0]?produit.table_dachat[0].unite_de_mesure:'Litre'} </td>
           <td >  {produit.idgisement.type_gisement.prix_de_vente} </td>
          <td >
          <Button type="primary" onClick={() => { LoadEdit(produit.id_gisement_distributeur) }} style={{  backgroundColor :"#FFA500" ,margin:"0px 8px 0px 0px",fontWeight :"600" }} >Modifier</Button>
          <Button type="primary" onClick={() => { Removefunction(produit.id_gisement_distributeur) }} style={{   backgroundColor :"#FF0000",margin:"0px 0px 0px 8px",fontWeight :"600" }} >Supprimer   </Button>                                  
           </td> 
           </tr>
           
                                 
                         )}   
                          
                      </tbody>
                  </table>

           </div>
     
      </div>
  )
}

export default TabDeProduits
