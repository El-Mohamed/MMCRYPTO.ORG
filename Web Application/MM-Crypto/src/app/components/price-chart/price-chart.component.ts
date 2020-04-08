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

  private fiatCurrency: string = "USD";

  public series: ApexAxisChartSeries;
  public chart: ApexChart;
  public dataLabels: ApexDataLabels;
  public markers: ApexMarkers;
  public title: ApexTitleSubtitle;
  public fill: ApexFill;
  public yaxis: ApexYAxis;
  public xaxis: ApexXAxis;
  public tooltip: ApexTooltip;

  CoinHistoryData: HistoryData;
  AllHistoryItems: HistoryItem[];
  private id: string;

  private lineChartlabels: number[] = [];
  private LineChartPrices: number[] = [];

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
      this.createChartLabels();
      this.createChartPrices();
      this.initChartData();

    }
    catch (error) {
      console.log("Error")
    }
  }

  private createChartLabels() {
    this.AllHistoryItems.forEach(element => {
      this.lineChartlabels.push(element.time);
    });
  }

  private createChartPrices() {
    this.AllHistoryItems.forEach(element => {
      this.LineChartPrices.push(Number(element.priceUsd));
    });
  }

  public initChartData(): void {
    let dates = [];
    for (let i = 0; i < this.AllHistoryItems.length; i++) {
      dates.push([this.lineChartlabels[i], this.LineChartPrices[i]]);
    }

    this.series = [
      {
        name: this.id.toUpperCase(), // Changed
        data: dates
      }
    ];

    this.chart = {
      type: "area",
      stacked: false,
      height: 500,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    };

    this.dataLabels = {
      enabled: false
    };

    this.markers = {
      size: 0
    };

    // Changed
    this.title = {
      text: "Price History",
      align: "center",
      style: {
        color: '#ffffff'
      }
    };

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
          color: '#ffffff'
        }
      }
    };

    // Changed
    this.xaxis = {
      type: "numeric"
    };

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
}
