import React from 'react'
import {LineChart } from '@mui/x-charts/LineChart';
import getDefaultFetchConfig from '../../fetchconfig';
import  { Component, useState , useEffect } from 'react'
const TabDeBords = () => {
  const[empData,setempData] =useState([]);
  const role=localStorage.getItem('role')
  const lowercaseRole = role ? role.toLowerCase() : '';
  const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Dashb` ;
  
  useEffect(() => {
    fetch(URL,getDefaultFetchConfig('GET')).then((res) => {
        return res.json();
    }).then((resp) => {
       setempData(resp);
       console.log(resp)
    }).catch((err) => {
        console.log(err.message);
    })
}, [])
  return (
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'#F7F7F7' ,borderRadius:"50px" , width:"120vh" ,fontFamily: 'Poppins, sans-serif'  }}>
        {empData.map((data) => (
          <div key={data.id}>
            <p>Periode: {data.periode}</p>
            <p>Somme Montant: {data.sommeMontant}</p>
          </div>
        ))}
        <LineChart
          // ...rest of the code
        />
      </div>
    );
    
  

  )
}

export default TabDeBords

