import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoincapService, HistoryData, HistoryItem } from 'src/app/services/coincap.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from "ng-apexcharts";

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit {

  public series: ApexAxisChartSeries;
  public chart: ApexChart;
  public dataLabels: ApexDataLabels;
  public markers: ApexMarkers;
  public title: ApexTitleSubtitle;
  public fill: ApexFill;
  public yaxis: ApexYAxis;
  public xaxis: ApexXAxis;
  public tooltip: ApexTooltip;

  private CoinHistoryData: HistoryData;
  private AllHistoryItems: HistoryItem[];
  private id: string;

  private TimeValues: number[] = [];
  private PriceValues: number[] = [];
  private ChartData: any[] = [];

  constructor(private route: ActivatedRoute, private service: CoincapService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.UpdateHitory(this.id);
  }

  async UpdateHitory(id: string) {
    try {
      this.CoinHistoryData = await this.service.getHistoryFromCoin(id);
      this.AllHistoryItems = this.CoinHistoryData.data;
      this.createChartData();
      this.initChart();
    }
    catch (error) {
      console.log("Error")
    }
  }

  private createChartData() {
    this.createPriceValues();
    this.createTimeValues();

    for (let i = 0; i < this.AllHistoryItems.length; i++) {
      this.ChartData.push([this.TimeValues[i], this.PriceValues[i]]);
    }
  }

  private createTimeValues() {
    this.AllHistoryItems.forEach(element => {
      this.TimeValues.push(element.time);
    });
  }

  private createPriceValues() {
    this.AllHistoryItems.forEach(element => {
      this.PriceValues.push(Number(element.priceUsd));
    });
  }

  private setApexAxisChartSeries() {
    this.series = [
      {
        name: this.id.toUpperCase(), // Changed
        data: this.ChartData
      }
    ];
  }

  private setApexChart() {
    this.chart = {
      type: "area",
      stacked: false,
      height: 600,
      width: '100%',
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    };
  }

  private setApexDataLabels() {
    this.dataLabels = {
      enabled: false
    };
  }

  private setApexMarkers() {
    this.markers = {
      size: 0
    };
  }

  private setApexTitleSubtitle() {
    // Changed
    this.title = {
      text: this.id.toUpperCase() + " Price History",
      align: "center",
      style: {
        color: '#ffffff',
        fontSize: '30px',
        fontWeight: 500,
      }
    };
  }

  private setApexFill() {
    this.fill = {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
  }

  private setApexYAxis() {
    // Changed
    this.yaxis = {
      labels: {
        formatter: function (val) {
          return (((val).toFixed(2)).toString() + ' USD');
        }
      },
      title: {
        text: "Price",
        style: {
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 500,
          cssClass: 'apexcharts-xaxis-label'
        }
      }
    };
  }

  private setApexXAxis() {
    // Changed
    this.xaxis = {
      labels: {
        formatter: function (val) {
          var date = new Date(val);
          return (date.toLocaleString());
        }
      },
      type: "numeric",
      title: {
        text: "Time",
        style: {
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 500,
          cssClass: 'apexcharts-xaxis-label'
        }
      },
    };
  }

  private setApexTooltip() {
    // Changed
    this.tooltip = {
      shared: false,
      y: {
        formatter: function (val) {
          return (((val).toFixed(2)).toString() + ' USD');
        }
      },
      x: {
        formatter: function (val) {
          var date = new Date(val);
          return (date.toLocaleString());
        }
      },
    };
  }

  private initChart(): void {
    this.setApexAxisChartSeries();
    this.setApexChart();
    this.setApexDataLabels();
    this.setApexMarkers();
    this.setApexTitleSubtitle();
    this.setApexFill();
    this.setApexYAxis();
    this.setApexXAxis();
    this.setApexTooltip();
  }
}
