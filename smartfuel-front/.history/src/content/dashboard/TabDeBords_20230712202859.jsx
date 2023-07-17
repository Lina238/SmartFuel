import React from 'react'
import {LineChart } from '@mui/x-charts/LineChart';
import getDefaultFetchConfig from '../../fetchconfig';
import  { Component, useState , useEffect } from 'react'
const TabDeBords = () => {
  const[empData,setempData] =useState(null);
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
           <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10],
            label: 'Les jours',
           
            
            }]}
          series={[
          {
           data: [2, 5.5, 2, 8.5, 1.5, 5],
           label:'Montants',
           color:"#FFA500",
        
           
          },
        ]}
    width={800}
    height={450}
   />
    </div>

  

  )
}

export default TabDeBords
