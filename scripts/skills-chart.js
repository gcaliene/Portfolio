var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Node', 'React', 'Vanilla JS', 'jQuery', 'HTML5/CSS3'],
    datasets: [
      {
        label: '# of Votes',
        data: [4, 3, 4, 3, 4],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
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
      text: 'Skills by yours truly.'
    },
    scale: {
      ticks: {
        max: 4,
        min: 0,
        stepSize: 1,
        beginAtZero: true,
        callback: function(value, index, values) {
          // return '$' + value;
          switch (value) {
            case 1:
              return 'Just Learning...';
              break;
            case 2:
              return 'Novice';
              break;
            case 3:
              return 'Average';
              break;
            case 4:
              return 'Advanced';
              break;
            case 5:
              return 'Master';
              break;
            default:
              console.log('Graph Loaded');
          }
        }
      }
    }
  }
});
