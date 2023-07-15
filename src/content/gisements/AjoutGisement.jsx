import React from 'react'
import { useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";


const AjoutGisement = () => {
    
    const URL = "http://localhost:8000/Gisements" ;
    const URL1 = "http://localhost:8000/types" ;

    const [chefsOptions, setChefsOptions] = useState([]);

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

    const[nom,setNom]=useState("");
    const[type,setType]=useState("");
    const[capacite_totale,setCapacite_totale]=useState("");
    const[seuil,setSeuil]=useState("");


    
 
    
    const navigate=useNavigate();

   

    const handlesubmit=(e)=>{
      e.preventDefault();
      const gisData={nom,type,capacite_totale,seuil};
      

      fetch(URL,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(gisData)
      }).then((res)=>{
        alert("ajout avec succès")
        navigate('/Home?tab=gisements');
      }).catch((err)=>{
        console.log(err.message)
      })
    }
    
    
    
  return (
   <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center', height:"100vh"}}>

            <div  className="row">
                <div  className="offset-lg-3 col-lg-6">
                    <form style={{  fontFamily: 'Poppins, sans-serif',  fontWeight: '500',  letterSpacing: '1px', fontSize: '20px', }}  className="container" onSubmit={handlesubmit}>

                        <div   className="card" style={{ padding :"20px",height:"85vh" , overflow: 'auto' ,textAlign:"left"}}>
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

                                    <div style={{ margin: "10px" }} className="col-lg-12">
                                        <div className="form-group">
                                           <label style={{ margin: "10px " }}>Le type :</label>
                                           <select
                                           value={type}
                                           onChange={(e) => setType(e.target.value)}
                                           className="form-control"
                                          >
                                        <option value="">Sélectionner un type</option>
                                       {chefsOptions.map((item) => (
                                       <option key={item.id} value={item.type}>
                                        {item.type}
                                        </option>
                                         ))}
                                       </select>
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
                                   
                                  
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" style={{  padding:"10px 20px" ,margin: "20px" }} type="submit"> Enregistrer </button>
                                           <Link to="/Home" className="btn btn-danger"  style={{ padding:"10px 20px" ,  margin: "20px" }}  > Annuler</Link>
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

export default AjoutGisement ;
