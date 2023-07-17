import { LineChart, ChartTheme } from '@mui/x-charts';

// ...

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
