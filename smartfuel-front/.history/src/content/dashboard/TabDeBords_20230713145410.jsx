import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const TabDeBords = () => {
  const [data, setData] = useState([]);

  const role = localStorage.getItem('role');
  const lowercaseRole = role ? role.toLowerCase() : '';
  const URL = `http://localhost:8080/api/v1/${lowercaseRole}/Dashb`;
  const token = localStorage.getItem('token');
  const loadData = async () => {
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);


  const sommeMontantList = data.map((item) => Number(item.sommeMontant));


  const datesList = data.map((item) => item.periode);

  // Formate la date au format "DD-MM-YYYY"
  const formatDateLabel = (dateString) => {
    return moment(dateString).format('DD-MM-YYYY');
  };

  const formattedDatesList = datesList.map(formatDateLabel);

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
              data: [1,2,3,4,5,6,7,8,9],
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
