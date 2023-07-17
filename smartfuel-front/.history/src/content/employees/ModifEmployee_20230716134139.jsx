import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getDefaultFetchConfig from "../../fetchconfig";

const ModifEmployee = () => {
  const URL = "http://localhost:8080/api/v1/admin/Personnels";
  const URL1 = "http://localhost:8080/api/v1/admin/Chefs";
  const token = localStorage.getItem("token");
  const { empid } = useParams();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [chef, setChef] = useState({ id: "", nom: "" });
  const [chefsOptions, setChefsOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL1, getDefaultFetchConfig("GET"))
      .then((res) => res.json())
      .then((data) => {
        setChefsOptions(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(URL + "/" + empid, getDefaultFetchConfig("GET"))
      .then((res) => res.json())
      .then((resp) => {
        setUsername(resp.username);
        setRole(resp.role);
        setPassword(resp.password);
        if (resp.chef != null) {
          setChef(resp.chef);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!chef.id) {
      alert("Veuillez sélectionner un chef.");
      return;
    }

    const empData = { username, password, role, chef:chef };

    fetch(URL + "/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(empData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Modifié avec succès");
        navigate("/Home?tab=employés");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <form
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500", letterSpacing: "1px", fontSize: "20px" }}
              className="container"
              onSubmit={handlesubmit}
            >
              <div className="card" style={{ padding: "20px", height: "85vh", textAlign: "left", overflow: "auto" }}>
                <div style={{ margin: "10px" }} className="card-title">
                  <h2>Modifier l'employé</h2>
                </div>
  
                <div className="card-body">
                  <div className="row">
                    <div style={{ margin: "10px" }} className="col-lg-12">
                      <div className="form-group">
                        <label style={{ margin: "10px" }}>username :</label>
                        <input
                          required
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div style={{ margin: "10px" }} className="col-lg-12">
                      <div className="form-group">
                        <label style={{ margin: "10px " }}>Son rôle :</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)} className="form-control">
                          <option value="">Sélectionner un rôle</option>
                          <option value="ADMIN">Admin</option>
                          <option value="MANGEMENT">Gestionnaire</option>
                          <option value="EMPLOYEE">Gérant</option>
                        </select>
                      </div>
                    </div>
  
                    <div style={{ margin: "10px" }} className="col-lg-12">
                      <div className="form-group">
                        <label style={{ margin: "10px " }}>Son chef :</label>
                        <select
                          value={chef.id} // Set value as chef.id instead of chef.nom
                          onChange={(e) => {
                            const selectedChef = chefsOptions.find((item) => item.id === parseInt(e.target.value));
                            setChef(selectedChef);
                          }}
                          className="form-control"
                        >
                          <option value="">Sélectionner un chef</option>
                          {chefsOptions.map((item) => (
                            <option key={item.id} value={item.id}> {/* Set value as chef.id */}
                              {item.nom}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
  
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn btn-success" style={{ padding: "10px 20px", margin: "20px" }} type="submit">
                          Enregistrer
                        </button>
                        <Link
                          to="/Home?tab=employés"
                          className="btn btn-danger"
                          style={{ padding: "10px 20px", margin: "20px" }}
                        >
                          Annuler
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModifEmployee;