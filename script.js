
document.getElementById('weightForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const weightInput = document.getElementById('weight');
    const dateInput = document.getElementById('date');
  
    const weightValue = weightInput.value;
    const dateValue = dateInput.value;
  
  
    addDataToChart(dateValue, weightValue);
  
 
    weightInput.value = '';
    dateInput.value = '';
  });
  
 
  function addDataToChart(date, weight) {
    myChart.data.labels.push(date);
    myChart.data.datasets[0].data.push(weight);
    myChart.update();
  }
  

  const initialData = {
    labels: [],
    datasets: [{
      label: 'Weight Loss Progress (lbs)',
      data: [],
      borderColor: '#007bff',
      fill: false
    }]
  };
  
  const chartConfig = {
    type: 'line',
    data: initialData,
    options: {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Date'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Weight (lbs)'
          }
        }
      }
    }
  };
  
  // Create the chart
  const ctx = document.getElementById('progressChart').getContext('2d');
  const myChart = new Chart(ctx, chartConfig);
  