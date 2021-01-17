import { Component, VERSION ,OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);
//import * as newdata from './data';

@Component({
  selector: 'app-widget-donut3d',
  templateUrl: './donut3d.component.html',
  styleUrls: ['./donut3d.component.scss']
})
export class Donut3dComponent implements OnInit {

  public activity;
  public xData;
  public label;
  options:any;

  @Input() data = [];

  constructor() {
 

    this.options = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Random data  - 4'
    },
    subtitle: {
        text: 'sub title - 4'
    },
    plotOptions: {
        pie: {
            innerSize: 80,
            depth: 205
        }
    },
    series: [{
        name: 'Delivered amount',
        data: [
            ['Node-1', 8],
            ['Node-2', 3],
            ['Node-3', 1],
            ['Node-4', 6],
            ['Node-5', 8],
            ['Node-6', 5],
            ['Node-7', 4],
            ['Node-8', 1],
            ['Node-9', 3]
        ]
    }]
};
}

ngOnInit(){
  Highcharts.chart('container', this.options);
}

}