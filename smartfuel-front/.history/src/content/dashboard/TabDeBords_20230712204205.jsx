import React from 'react'
import {LineChart } from '@mui/x-charts/LineChart';
import getDefaultFetchConfig from '../../fetchconfig';
import  { Component, useState , useEffect } from 'react'
import { LineChart, ChartTheme } from '@mui/x-charts';
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
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'#F7F7F7' ,borderRadius:"50px" , width:"120vh" ,fontFamily: 'Poppins, sans-serif'  }}>
    {empData && empData.length > 0 ? (
      <>
        {empData.map((data) => (
          <div key={data.id}>
            <p>Periode: {data.periode}</p>
            <p>Somme Montant: {data.sommeMontant}</p>
          </div>
        ))}
        <LineChart
          xAxis={[
            {
              data: empData.map((data) => new Date(data.periode)),
              label: 'Les jours',
              tickFormat: (date) => new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short' }).format(date),
            },
          ]}
          series={[
            {
              data: empData.map((data) => data.sommeMontant),
              label: 'Montants',
              color: "#FFA500",
            },
          ]}
          width={800}
          height={450}
          theme={ChartTheme.light}
        />
      </>
    ) : (
      <p>No data available.</p>
    )}
  </div>
);


}

export default TabDeBords

