import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getDefaultFetchConfig from "../../fetchconfig";

const AjoutEmployee = () => {
  const URL = "http://localhost:8080/api/v1/admin/Personnels";
  const URL1 = "http://localhost:8080/api/v1/admin/Chefs";
  const token = localStorage.getItem("token");
  const { empid } = useParams();

  const [employee, setEmployee] = useState({
    username: "",
    password: "",
    role: "",
    chef: null,
    chefsOptions: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL1, getDefaultFetchConfig("GET"))
      .then((res) => res.json())
      .then((data) => {
        setEmployee((prevEmployee) => ({
          ...prevEmployee,
          chefsOptions: data,
        }));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.chef) {
      alert("Veuillez sélectionner un chef.");
      return;
    }

    const empData = {
      username: employee.username,
      password: employee.password,
      role: employee.role,
      chef: employee.chef,
    };
        console.log(empData)
    fetch(URL, {
      method: "POST",
      headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(empData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Ajout avec succès");
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
            onSubmit={handleSubmit}
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
                        value={employee.username}
                        onChange={(e) => setEmployee((prevEmployee) => ({ ...prevEmployee, username: e.target.value }))}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div style={{ margin: "10px" }} className="col-lg-12">
                    <div className="form-group">
                      <label style={{ margin: "10px " }}>Son rôle :</label>
                      <select value={employee.role} onChange={(e) => setEmployee((prevEmployee) => ({ ...prevEmployee, role: e.target.value }))} className="form-control">
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
                        value={employee.chef ? employee.chef.nom : ""}
                        onChange={(e) => {
                          const selectedChefName = e.target.value;
                          const selectedChef = employee.chefsOptions.find((item) => item.nom === selectedChefName);
                          setEmployee((prevEmployee) => ({ ...prevEmployee, chef: selectedChef || null }));
                        }}
                        className="form-control"
                      >
                        <option value="">Sélectionner un chef</option>
                        {employee.chefsOptions.map((item) => (
                          <option key={item.id} value={item.nom}>
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
                      <Link to="/Home?tab=employés" className="btn btn-danger" style={{ padding: "10px 20px", margin: "20px" }}>
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

export default AjoutEmployee;
