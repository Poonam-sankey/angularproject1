import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {
  defaultValue: number = 5;

  fleetSize: number = this.defaultValue;
  kmPerDay: number = this.defaultValue;
  avgKmPerL: number = this.defaultValue;
  hourlyWages: number = this.defaultValue;
  dailyDeliveries: number = this.defaultValue;
  workingHours: number = this.defaultValue;

  onFleetSizeChange(event: any) {
    this.fleetSize = event.target.value;
  }

  onKmPerDayChange(event: any) {
    this.kmPerDay = event.target.value;
  }

  onAvgKmPerLChange(event: any) {
    this.avgKmPerL = event.target.value;
  }

  onHourlyWagesChange(event: any) {
    this.hourlyWages = event.target.value;
  }

  onDailyDeliveriesChange(event: any) {
    this.dailyDeliveries = event.target.value;
  }

  onWorkingHoursChange(event: any) {
    this.workingHours = event.target.value;
  }

  ngOnInit() {
    const data = {
      labels: ['Without FleetEdge', 'Basic Plan', 'Advanced Plan'],
      datasets: [
        {
          label: 'Idling Savings',
          data: [7560, 15120, 22680],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: 'Fuel and Safety Savings',
          data: [3339, 6678, 10017],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'Reduced Miled Savings',
          data: [8644, 17288, 25932],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        },
        {
          label: 'Labour Savings',
          data: [3062, 6124, 9186],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Time Management',
          data: [2520, 5040, 7560],
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }
      ]
    };

    const options: ChartOptions<'bar'> = {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return (Number(value) / 1000) ; // Explicitly cast value to a number
            }
          },
          title: {
            display: true,
            text: 'Total Savings'
          }
        }
      }
    };

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: data,
      options: options
    };

    const myChart = new Chart(
      document.getElementById('myChart') as HTMLCanvasElement,
      config
    );
  }

}
