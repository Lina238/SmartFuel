import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import * as d3 from 'd3';

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
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const sommeMontantList = data.map((item) => Number(item.sommeMontant));
  const datesList = data.map((item) => item.periode);

  const formatDateLabel = (dateString) => {
    return moment(dateString, 'DD-MM-YYYY HH:mm:ss').format('YYYY-MM-DD');
  };

  const formattedDatesList = datesList.map(formatDateLabel);

  useEffect(() => {
    if (data.length > 0) {
      // Create the graph with D3.js
      const svg = d3.select('#chart')
        .select('#chart')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);


      const margin = { top: 20, right: 20, bottom: 10, left: 40 };
      const width = 800 - margin.left - margin.right;
      const height = 450 - margin.top - margin.bottom;

      const x = d3
        .scaleBand()
        .domain(formattedDatesList)
        .range([0, width])
        .padding(0.1);

      const y = d3.scaleLinear().domain([0, d3.max(sommeMontantList)]).range([height, 0]);

      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisLeft(y);

      svg
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
        .call(yAxis);

      svg
        .append('g')
        .attr('transform', `translate(${margin.left}, ${height + margin.top})`)
        .call(xAxis)
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('transform', 'rotate(-45)');

      svg
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (d, i) => x(formatDateLabel(d.periode)) + margin.left)
        .attr('y', (d) => y(Number(d.sommeMontant)) + margin.top)
        .attr('width', x.bandwidth())
        .attr('height', (d) => height - y(Number(d.sommeMontant)))
        .attr('fill', '#FFA500');
    }
  }, [data]);

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
        marginLeft: '30px'
      }}
    >
      {data.length > 0 ? (
        <svg id="chart" width={820} height={550}></svg>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default TabDeBords;
