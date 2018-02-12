var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: [
      'Node',
      'React',
      'JS & jQuery',
      'MongoDB',
      'HTML5/CSS3',
      'Photoshop',
      'Python'
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [4, 4, 5, 4, 5, 3, 2],
        backgroundColor: [
          'rgba(255, 99, 132, .2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    title: {
      display: true,
      position: 'top',
      text: '*Skills are always improving.'
    },
    scale: {
      ticks: {
        max: 5,
        min: 1,
        stepSize: 1,
        beginAtZero: true,
        callback: function(value, index, values) {
          // console.log(value);
          // return '$' + value;
          switch (value) {
            case 1:
              return 'Some';
              break;
            case 2:
              return 'Still Learning';
              break;
            case 3:
              return 'Working Knowledge';
              break;
            case 4:
              return 'Great';
              break;
            case 5:
              return 'Awesome!';
              break;
            default:
              console.log('Graph Loaded');
          }
        }
      }
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, chartData) {
          // console.log(chartData.labels[tooltipItem.index]);
          // console.log(tooltipItem.yLabel);
          // console.log(chartData);
          switch (tooltipItem.yLabel) {
            case 1:
              return 'Some';
              break;
            case 2:
              return `I'm still learning ${
                chartData.labels[tooltipItem.index]
              }.`;
              break;
            case 3:
              return `I have a working knowledge of ${
                chartData.labels[tooltipItem.index]
              }`;
              break;
            case 4:
              return `My skills in ${
                chartData.labels[tooltipItem.index]
              } are great!`;
              break;
            case 5:
              return `My skills in ${
                chartData.labels[tooltipItem.index]
              } are AWESOME!`;
              break;
            default:
              console.log('Graph Loaded');
          }
        }
      }
    }
  }
});
