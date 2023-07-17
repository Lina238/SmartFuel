import React, { Component, useState , useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

import { Button } from 'antd';

const URL = "http://localhost:8080/api/v1/admin/Distributeur_gisement" ;

const token = localStorage.getItem('token');
const  headers= {
    'Authorization': `Bearer ${token}` 
  };
const TabDeProduits = () => {
    const[prodData,setProdData] =useState(null)
    const navigate = useNavigate();
    
    const LoadEdit = (id) => {
        navigate("/ModifierProduit/" + id);
    }
    

    useEffect(() => {
        fetch(URL,
            {
                method:'GET',
                headers:headers
            }
            
            )      .then( data => data.json())
            .then(
              data => {
                   console.log(typeof(data))
    
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
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

  return (
    <div style={{ margin: '20px' }}>   
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
                                      
           <td >  {produit.nom} </td>
           <td >  {produit.type} </td>
           {/* <td >  {produit.unite_de_mesure} </td>
           <td >  {produit.prix_de_vente} </td>
          <td >
          <Button type="primary" onClick={() => { LoadEdit(produit.id) }} style={{  backgroundColor :"#FFA500" ,margin:"0px 8px 0px 0px",fontWeight :"600" }} >Modifier</Button>
          <Button type="primary" onClick={() => { Removefunction(produit.id) }} style={{   backgroundColor :"#FF0000",margin:"0px 0px 0px 8px",fontWeight :"600" }} >Supprimer   </Button>                                  
           </td> */}
           </tr>
           
                                 
                         )}   
                          
                      </tbody>
                  </table>

           </div>
     
      </div>
  )
}

export default TabDeProduits
