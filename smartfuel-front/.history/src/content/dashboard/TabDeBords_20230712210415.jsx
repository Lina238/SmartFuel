import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import getDefaultFetchConfig from '../../fetchconfig';
import { useState, useEffect } from 'react';

const TabDeBords = () => {
  const [empData, setEmpData] = useState([]);
  const role = localStorage.getItem('role');
  const lowercaseRole = role ? role.toLowerCase() : '';
  const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Dashb`;

  useEffect(() => {
    fetch(URL, getDefaultFetchConfig('GET'))
      .then((res) => res.json())
      .then((resp) => {
        setEmpData(resp);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
      {empData && empData.length > 0 ? (
        <>
          <LineChart
            xAxis={[
              {
                data: empData.map((data) => new Date(data.periode).toLocaleDateString()), // Formater la date en "01-07-2023"
                label: 'Les jours',
              },
            ]}
            series={[
              {
                data: empData.map((data) => data.sommeMontant),
                label: 'Montants',
                color: '#FFA500',
              },
            ]}
            width={800}
            height={450}
          />
        </>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default TabDeBords;
