import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Chart } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public barChartOptions: ChartOptions = {
    devicePixelRatio: 2,
    
    plugins: {
      legend: {
        position: 'left',
        labels: {
          fontSize: 14 
        }
  
      },
      tooltips: {
        titleFontSize: 14,
        bodyFontSize: 14
      },
      datalabels: {
        color: '#000',
        font: {

          size: 14,
          weight: 'bold'
        }

      }
    },
    cutoutPercentage: 30,

  };
  public barChartLabels = ['Critical', 'Build', 'Right', 'Excess'];
  public barChartType: ChartType = 'doughnut';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  colors = [
    { backgroundColor: '#d8d8d8' }, //gray

    {
      backgroundColor: '#D52904', //red
    },
  ];

  public barChartData = [
    {
      data: [90, 45, 13, 2],
      hoverBorderWidth: 4,
    hoverBorderColor: "#8c8c8c",
  
    }
  ];

  constructor() {}

  ngOnInit() {}
}
