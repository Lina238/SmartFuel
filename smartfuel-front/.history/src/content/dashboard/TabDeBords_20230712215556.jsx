import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TabDeBords = () => {
  const [data, setData] = useState([]);

  const role = localStorage.getItem('role');
  const lowercaseRole = role ? role.toLowerCase() : '';
  const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Dashb`;

  const loadData = async () => {
    try {
      const response = await axios.get(URL,
        {
          headers: {
            Authorization: 'Bearer your-token',
          },
        }
        );
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const sommeMontantList = data.map((item) => item.sommeMontant);
  const datesList = data.map((item) => item.periode);
 console.log(sommeMontantList);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        borderRadius: '50px',
        width: '120vh',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {data.length > 0 ? (
        <LineChart
          xAxis={[
            {
              data: datesList,
              label: 'Les 10 derniers jours',
            },
          ]}
          series={[
            {
              data: sommeMontantList,
              label: 'Montants',
              color: '#FFA500',
            },
          ]}
          width={800}
          height={450}
        />
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default TabDeBords;
