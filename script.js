const ctx = document.getElementById('emissionsChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: 'CO₂ Emissions (kg)',
      data: [0, 500, 1200, 800, 2000, 1500, 0, 0, 0, 0, 0, 0],
      borderColor: '#2b9c6c',
      backgroundColor: 'rgba(43,156,108,0.2)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});
