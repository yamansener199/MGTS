


var ctx = document.getElementById("myColumnChart").getContext('2d');

var myColumnChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      label: 'apples',
      backgroundColor: "rgb(54, 162, 235)",
      data: [12, 19, 3, 17, 28, 24, 7],
    }, {
      label: 'oranges',
      backgroundColor: "rgb(255, 99, 132)",
      data: [30, 29, 5, 5, 20, 3, 10],
    }]
  },
   options: {
    scales: {
      xAxes: [{
        gridLines: {
        zeroLineColor: '#fff'
        }
      }],
      yAxes: [{
        gridLines: {
        zeroLineColor: '#fff'
        }
      }]
    }
    }
});
