import * as React from 'react';
import {LineChart } from '@mui/x-charts/LineChart';

const TabDeBords = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'#F7F7F7' ,borderRadius:"50px" , width:"120vh" ,fontFamily: 'Poppins, sans-serif'  }}>
           <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10,6],
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

