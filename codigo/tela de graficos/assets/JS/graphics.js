function criarGrafico(botao) {
  var ctx = document.getElementById('chart').getContext('2d');

  // Dados e cores para cada botão
  var dados, cores;

  // Definição dos dados e cores baseado no botão clicado
  switch (botao) {
      case 'button1':
          dados = [12, 19, 3, 5, 2];
          cores = ['rgba(165,42,42)'];
          backgroundColor=['rgba(255,0,0)']
          break;
      case 'button2':
          dados = [10, 15, 7, 8, 5];
          cores = ['rgba(50,205,50)'];
          backgroundColor=['rgba(0, 255, 0)'];
          break;
      case 'button3':
          dados = [8, 12, 10, 6, 4];
          cores = ['rgba(77,166,253,0.85)'];
          backgroundColor=['rgba(0,0,255)'];
          break;
      default:
          dados = [];
          cores = [];
          backgroundColor= []  
  }

  // Limpa o canvas antes de criar um novo gráfico
  if (window.grafico) {
      window.grafico.destroy();
  }

  // Cria um novo gráfico de barras com base nos dados e cores definidos
  window.grafico = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
          datasets: [{
              label: 'Denúncias',
              data: dados,
              backgroundColor: cores,
              borderColor: backgroundColor, // Ajusta a opacidade para o contorno
              borderWidth: 5
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}