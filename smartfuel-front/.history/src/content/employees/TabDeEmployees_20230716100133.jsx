
import React, { Component, useState , useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

import { Button } from 'antd';
import getDefaultFetchConfig from '../../fetchconfig';

const URL ="http://localhost:8080/api/v1/admin/Chefs";

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
                navigate('/Home?tab=employés');
                console.log("the id"+id)
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

const [nom, setNom] = useState([]);
    const URL1 = "http://localhost:8000/chefs" ;
    

    const handlesubmit=(e)=>{
      e.preventDefault();
      const dataa={nom};
      

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
                    <th style ={{backgroundColor :'#606060' ,color:'#ffffff',letterSpacing: '1.2px' }}>oppérations</th>
                  </tr>
           </thead>
           <tbody>
  {empData && empData.length > 0 ? (
    empData.map((chef) => (
      <React.Fragment key={perso.id}>
          <tr key={perso.id}>
            <td>{perso.username}</td>
            <td>{perso.role}</td>
            <td>{perso.nom}</td>
            <td>{perso.chef ? <td>{perso.chef}</td> : "aucun chef"}</td>
            <td>
              <Button
                type="primary"
                onClick={() => {
                  LoadEdit(perso.id);
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
                  Removefunction(perso.id);
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
      </React.Fragment>
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
