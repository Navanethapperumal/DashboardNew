import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Server-1',
      data: [502, 1635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Server-2',
      data: [106, 407, 111, 133, 221, 767, 1766]
    }, {
      name: 'Server-3',
      data: [163, 203, 476, 408, 547, 729, 628]
    }, {
      name: 'Server-4',
      data: [198, 31, 54, 756, 339, 818, 1201]
    }, {
      name: 'Server-5',
      data: [2, 2, 92, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Service-1',
      y: 41.41,
      sliced: true,
      selected: true
    }, {
      name: 'Service-2',
      y: 11.84
    }, {
      name: 'Service-3',
      y: 10.85
    }, {
      name: 'Service-4',
      y: 14.67
    }, {
      name: 'Service-5',
      y: 4.18
    }, {
      name: 'Service-6',
      y: 21.64
    }, {
      name: 'Service-7',
      y: 1.6
    }, {
      name: 'Service-8',
      y: 11.2
    }, {
      name: 'Service-9',
      y: 2.61
    }];
  }
}