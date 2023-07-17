import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const ModifEmployee = () => {
    const URL = "http://localhost:8080/api/v1/admin/Personnels" ;
    const URL1 ="http://localhost:8080/api/v1/admin/Chefs";
   
    useEffect(() => {
        fetch(URL1) 
          .then((res) => res.json())
          .then((data) => {
            setChefsOptions(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);
    const {empid} =useParams();



    const[nom,setNom]=useState("");
    const[prenom,setPrenom]=useState("");
    const[ntel,setNtel]=useState("");
    const[role,setRole]=useState("");
    const[chef,setChef]=useState("");

    const [chefsOptions, setChefsOptions] = useState([]);
    
    const navigate=useNavigate();

    useEffect(()=> {
        fetch(URL+'/'+empid).then((res)=> {
            return res.json();
        }).then((resp)=> {
            setNom(resp.nom);
            setPrenom(resp.prenom) ;
            setNtel(resp.ntel);
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
          navigate('/Home?tab=employés');
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

                                    <div style={{ margin: "10px" }} className="col-lg-12">
  <div className="form-group">
    <label style={{ margin: "10px " }}>Son rôle :</label>
    <select value={role} onChange={e => setRole(e.target.value)} className="form-control">
      <option value="">Sélectionner un rôle</option>
      <option value="Admin">Admin</option>
      <option value="Gestionnaire">Gestionnaire</option>
      <option value="Gérant">Gérant</option>
    </select>
  </div>
</div>


                                  
                                    <div style={{ margin: "10px" }} className="col-lg-12">
  <div className="form-group">
    <label style={{ margin: "10px " }}>Son chef :</label>
    <select
      value={chef}
      onChange={(e) => setChef(e.target.value)}
      className="form-control"
    >
      <option value="">Sélectionner un chef</option>
      {chefsOptions.map((item) => (
        <option key={item.id} value={item.nom}>
          {item.nom}
        </option>
      ))}
    </select>
  </div>
</div>
                                  
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" style={{  padding:"10px 20px" ,margin: "20px" }} type="submit"> Enregistrer </button>
                                           <Link to="/Home?tab=employés" className="btn btn-danger" style={{ padding:"10px 20px" ,  margin: "20px" }} > Annuler</Link>
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
