import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [];
  
  constructor() { }

  ngOnInit(): void {
    
    this.chartOptions = {
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
      },
      title: {
        text: 'RANDOM DATA-3'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          innerSize: 100,
            depth: 45
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        data: this.data
        
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}