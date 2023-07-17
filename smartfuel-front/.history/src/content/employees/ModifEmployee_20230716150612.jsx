import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import getDefaultFetchConfig from "../../fetchconfig";

const ModifEmployee = () => {
  const URL = "http://localhost:8080/api/v1/admin/Personnels";
  const URL1 = "http://localhost:8080/api/v1/admin/Chefs";
  const token = localStorage.getItem("token");
  const { empid } = useParams();

  const [employee, setEmployee] = useState({ chef: null, chefsOptions: [] });
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

  useEffect(() => {
    fetch(URL + "/" + empid, getDefaultFetchConfig("GET"))
      .then((res) => res.json())
      .then((resp) => {
        setEmployee((prevEmployee) => ({
          ...prevEmployee,
          chef: resp.chef || null,
        }));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleChefChange = (e) => {
    const selectedChefName = e.target.value;
    const selectedChef = employee.chefsOptions.find(
      (item) => item.nom === selectedChefName
    );
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      chef: selectedChef || null,
    }));
  };

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
    // ... Le reste du code reste inchangé
  );
};

export default ModifEmployee;
