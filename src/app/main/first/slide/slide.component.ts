import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {
  graphImg_url = "/assets/images/stacked-graph.png";

  // Common default value for all sliders
  defaultValue: number = 5;

  // Slider values (set to defaultValue)
  fleetSize: number = this.defaultValue;
  kmPerDay: number = this.defaultValue;
  avgKmPerL: number = this.defaultValue;
  hourlyWages: number = this.defaultValue;
  dailyDeliveries: number = this.defaultValue;
  workingHours: number = this.defaultValue;

  // Methods to update slider values
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
}
