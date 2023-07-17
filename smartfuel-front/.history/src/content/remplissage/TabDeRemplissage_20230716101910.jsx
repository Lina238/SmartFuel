
import React, { Component, useState , useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

import { Button } from 'antd';
import getDefaultFetchConfig from '../../fetchconfig';


const role=localStorage.getItem('role')
const lowercaseRole = role ? role.toLowerCase() : '';
const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Distributeur_gisement` ;

const TabDeRemplissage = () => {
    const[rempData,setrempData] =useState(null)
    const navigate = useNavigate();
    
    const LoadEdit = (id) => {
        navigate("/ModifierRemplissage/" + id);
    }

    useEffect(() => {
        fetch(URL,
            getDefaultFetchConfig('GET')
            ).then((res) => {
            return res.json();
        }).then((resp) => {
            setrempData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    const Removefunction = (id) => {
        if (window.confirm('Voulez vous vraiment le supprimer ?')) {
            fetch(URL+"/" + id, getDefaultFetchConfig('DELETE')).then((res) => {
    
                window.location.reload();
                console.log("the id"+id)
                navigate('/Home?tab=remplissages');
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
  return (
    <div style={{ margin: '20px' }}>   
    <Link to='/AjouterRemplissage'>
    <Button type="primary"  style={{   marginBottom: 20, }} >
     Nouveau Remplissage
    </Button>
    </Link>

    <br></br>
    <div style={{ height: '400px', overflow: 'auto' }}>
      <table className = "table table-striped table-bordered rounded"  style={{ fontFamily: 'Poppins, sans-serif',borderRadius: '4px 2px 4px',
      fontSize: '14px', width:"150vh", border:'2px solid #ffffff' }}> 
     <thead style ={{backgroundColor :'#A0A0A0' }} >
                 <tr style={ { borderRadius: '4px 2px 4px'}} >                  
                  <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'  }}> Nom Distributeur</th>
                  <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Quantité de remplissage</th>
                  <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Unité de mésure</th>
                  <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px'}}> Date de création</th>
                  <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Date de modification</th>
                  <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Prix d'achats</th>
                 
                  <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Opérations</th>
                 </tr>
           </thead>
    <tbody>
  {rempData && rempData.length > 0 ? (
    rempData.map((item) => (
      <tr key={item.id}>
        <td>{item.id_gisement_distributeur.iddistributeur.nom}</td>
        
       

        <td>
          <Button
            type="primary"
            onClick={() => {
              LoadEdit(item.id);
            }}
            style={{
              backgroundColor: "#FFA500",
              margin: "5px 8px",
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
              margin: "5px 8px",
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
      <td colSpan={7}>Aucune donnée disponible</td>
    </tr>
  )}
</tbody>

                  </table>

           </div>
     
      </div>
  )
}

export default TabDeRemplissage

