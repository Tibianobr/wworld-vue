export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Temperature',
      backgroundColor: '#EEF2F3',
      fill: true,
      borderWidth: 5,
      borderColor: '#18304F',
      data: ['40', '39', '10', '40', '39', '80', '40']
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: (item:any) => `${item.formattedValue}° C`,
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
    },
    y: {
      grid: {
        display: true
      }
    }
  }
}
