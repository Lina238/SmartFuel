import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getDefaultFetchConfig from '../../fetchconfig';

const ModifEmployee = () => {
    const URL = "http://localhost:8000/Employees" ;
    const {empid} =useParams();



    const[nom,setNom]=useState("");
    const[prenom,setPrenom]=useState("");
    const[ntel,setNtel]=useState("");
    const[role,setRole]=useState("");
    const[chef,setChef]=useState("");
    
    const navigate=useNavigate();

    useEffect(()=> {
        fetch(URL+'/'+empid,getDefaultFetchConfig('GET')).then((res)=> {
            return res.json();
        }).then((resp)=> {
            setNom(resp.username);
            setRole(resp.role);
            setChef(resp.chef);
          
        }).catch((err)=> {
            console.log(err.message)
        })
    },[]);
    

    const handlesubmit=(e)=>{
        e.preventDefault();
        const empData={nom,prenom,ntel,role,chef};
  
        fetch(URL+"/"+empid,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(empData)
        }).then((res)=>{
          alert("Modifié avec succès")
          navigate('/Home');
        }).catch((err)=>{
          console.log(err.message)
        })
      }

  return (
    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center', height:"100vh"}}>

            <div  className="row">
                <div  className="offset-lg-3 col-lg-6">
                    <form style={{  fontFamily: 'Poppins, sans-serif',  fontWeight: '500',  letterSpacing: '1px', fontSize: '20px' }} className="container" onSubmit={handlesubmit}>

                        <div   className="card" style={{  padding :"20px",height:"85vh" ,textAlign:"left", overflow: 'auto'}}>
                            <div style={{margin :"10px"}} className="card-title">
                                <h2>Modifier l'employé</h2>
                            </div>


                            <div className="card-body">
                                <div className="row">

                                <div style={{ margin :"10px" }}className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px" }}>Nom :</label>
                                            <input required value={nom}  onChange={e=>setNom(e.target.value)} className="form-control"></input>
                                           
                                        </div>
                                    </div>

                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Prénom :</label>
                                            <input value={prenom} onChange={e=>setPrenom(e.target.value)} className="form-control"></input>
                                          
                                        </div>
                                    </div>
                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }} >Num de téléphone :</label>
                                            <input value={ntel} onChange={e=>setNtel(e.target.value)} className="form-control"></input>
                                          
                                        </div>
                                    </div>

                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Son rôle :</label>
                                            <input value={role} onChange={e=>setRole(e.target.value)} className="form-control"></input>
                                            
                                        </div>
                                    </div>
                                  
                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Son chef :</label>
                                            <input value={chef} onChange={e=>setChef(e.target.value)} className="form-control"></input>
                                            
                                        </div>
                                    </div>

                                  
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

export default ModifEmployee
