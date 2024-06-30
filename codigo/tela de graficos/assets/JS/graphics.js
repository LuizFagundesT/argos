const ctx = document.getElementById('chart').getContext('2d');

let chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
      datasets: [{
        label: 'Todos os Gráficos',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 5,
        borderColor: 'rgba(77,166,253,0.85)',
        backgroundColor: 'blue',
      }]
    },
    options: {
        Animation: {
            duration:5000
        }
    }
  });