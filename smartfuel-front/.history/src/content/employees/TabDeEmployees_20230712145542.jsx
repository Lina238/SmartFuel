
import React, { Component, useState , useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

import { Button } from 'antd';
import getDefaultFetchConfig from '../../fetchconfig';
const URL ="http://localhost:8080/api/v1/admin/Personnels";

const TabDeEmployees = () => {
    const[empData,setempData] =useState(null)
    const navigate = useNavigate();
    
    const LoadEdit = (id) => {
        navigate("/ModifierEmployee/" + id);
    }

    useEffect(() => {
        fetch(URL,getDefaultFetchConfig('GET')).then((res) => {
            return res.json();
        }).then((resp) => {
           setempData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    const Removefunction = (id) => {
        if (window.confirm('Voulez vous vraiment le supprimer ?')) {
            fetch(URL+"/" + id,getDefaultFetchConfig('DELETE') ).then((res) => {
                // alert('Supprimé avec succès !')
                window.location.reload();
                console.log("the id"+id)
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
  return (
    <div style={{ margin: '20px' }}>   
    <Link to='/AjouterEmployee'>
    <Button type="primary"  style={{   marginBottom: 20, }} >
     Nouveau Employée
    </Button>
    </Link>

    <br></br>
    <div style={{ height: '400px', overflow: 'auto' }}>
      <table className = "table table-striped table-bordered rounded"  style={{ fontFamily: 'Poppins, sans-serif',borderRadius: '4px 2px 4px',
      fontSize: '14px', width:"150vh", border:'2px solid #ffffff' }}> 
     <thead style ={{backgroundColor :'#A0A0A0' }} >
                   <tr style={ { borderRadius: '4px 2px 4px'}} >
                    <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}> Username</th>
                    

                    <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Rôle </th>
                    <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>Son chef</th>

                  </tr>
           </thead>
    <tbody>
  {empData && empData.length > 0 ? (
    empData.map((item) => (
      <tr key={item.id}>
        <td>{item.username}</td>
        <td>{item.role}</td>
        {item.chef.nom}!=null?<td>{item.chef.nom}</td>
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
      <td colSpan={6}>Aucune donnée disponible</td>
    </tr>
  )}
</tbody>

                  </table>

           </div>
     
      </div>
  )
}

export default TabDeEmployees
