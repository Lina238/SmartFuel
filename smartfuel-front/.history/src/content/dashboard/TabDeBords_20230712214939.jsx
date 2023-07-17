import * as React from 'react';
import {LineChart } from '@mui/x-charts/LineChart';
import { useState ,useEffect } from 'react';
import axios from "axios";

const TabDeBords = () => {
  const [data, setData] = useState([]);

  const role = localStorage.getItem('role');
  const lowercaseRole = role ? role.toLowerCase() : '';
  const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Dashb`;
  const loadData = async () => {
    const response = await axios.get(URL);
    setData(response.data);
    console.log(data);
  };

  // charger les données lors du lancement de la page
  useEffect(() => {
    loadData();
  }, []);

 
 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'#F7F7F7' ,borderRadius:"50px" , width:"120vh" ,fontFamily: 'Poppins, sans-serif'  }}>
           <LineChart
            xAxis={[{ data: [1,2,3,4],
            label: 'Les 10 derniers jours',
           
            
            }]}
          series={[
          {
            data: [100 ,200, 300 , 400],
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

