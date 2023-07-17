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

  // Formate la date au format "DD-MM-YYYY"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
  };

  const parseDateToNumber = (dateString) => {
    const date = new Date(dateString);
    return date.getTime();
  };

  const xAxisData = empData.map((data, index) => ({
    value: parseDateToNumber(data.periode),
    label: `${index + 1}: ${formatDate(data.periode)}`,
  }));

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
                data: xAxisData,
                label: 'Les jours',
              },
            ]}
            series={[
              {
                data: empData.map((data) => data.somme_montant),
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
