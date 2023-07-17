import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { fr } from "date-fns/locale";


const ModifRemplissage = () => {
    const URL = "http://localhost:8000/Remplissages" ;
    const {rempid} =useParams();



    const[nom,setNom]=useState("");
    const[quantite,setQuantite]=useState("");
    const[unite_de_mesure,setUnite_de_mesure]=useState("");
    const[date_de_creation,setDate_de_creation]=useState("");
    const[prix_dachat,setPrix_dachat]=useState("");


    const dateActuelle = new Date();
    const formatDateModification = format(dateActuelle, "dd MMMM yyyy HH:mm", { locale: fr });
     const[date_de_modification, setDate_de_modification] = useState(formatDateModification);

    
    const navigate=useNavigate();
     
 
      
    useEffect(()=> {
        fetch(URL+'/'+rempid).then((res)=> {
            return res.json();
        }).then((resp)=> {
            setNom(resp.nom);
            setQuantite(resp.quantite) ;
            setUnite_de_mesure(resp.unite_de_mesure);
            setPrix_dachat(resp.prix_dachat);
            setDate_de_creation(resp.date_de_creation);
            const dateActuelle = new Date();
           const formatDateModification = format(dateActuelle, "dd MMMM yyyy HH:mm", { locale: fr });
           setDate_de_modification(formatDateModification);
        }).catch((err)=> {
            console.log(err.message)
        })
    },[]);
    

    const handlesubmit=(e)=>{
        e.preventDefault();
        const rempData={nom,quantite,unite_de_mesure,date_de_creation,date_de_modification,prix_dachat};
        
  
        fetch(URL+"/"+rempid,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(rempData)
        }).then((res)=>{
          alert("Modifié avec succès")
          navigate('/Home?tab=remplissages');
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
                                <h2>Modifier le remplissage</h2>
                            </div>


                            <div className="card-body">
                                <div className="row">

                                    <div style={{ margin :"10px" }}className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px" }}>Nom distributeur :</label>
                                            <input required value={nom} onChange={e=>setNom(e.target.value)} className="form-control"></input>
                                          
                                        </div>
                                    </div>

                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Quantité :</label>
                                            <input value={quantite} onChange={e=>setQuantite(e.target.value)} className="form-control"></input>
                                          
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
                                            <label style={{ margin:"10px " }}>Date de création :</label>
                                            <input value={date_de_creation} disabled className="form-control"></input>
                                            
                                        </div>
                                    </div>
                                  
                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Date de modification :</label>
                                            <input value={date_de_modification} disabled className="form-control"></input>
                                            
                                        </div>
                                    </div>
                                    
                                    <div style={{ margin :"10px" }} className="col-lg-12">
                                        <div className="form-group">
                                            <label style={{ margin:"10px " }}>Prix d'achat :</label>
                                            <input value={prix_dachat} onChange={e=>setPrix_dachat(e.target.value)} className="form-control"></input>
                                            
                                        </div>
                                    </div>

                                  
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" style={{  padding:"10px 20px" ,margin: "20px" }} type="submit"> Enregistrer </button>
                                           <Link to="/Home?tab=remplissages" className="btn btn-danger" style={{ padding:"10px 20px" ,  margin: "20px" }} > Annuler</Link>
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

export default ModifRemplissage
