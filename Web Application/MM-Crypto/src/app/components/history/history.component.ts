import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoincapService, HistoryData, HistoryItem } from 'src/app/services/coincap.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  CoinHistoryData: HistoryData;
  AllHistoryItems: HistoryItem[];
  private id: string;

  LineChartData: any;
  private lineChartlabels: string[] = [];
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
      this.createLineChartData();
    }
    catch (error) {
      console.log("Error")
    }
  }

  private createChartLabels() {
    this.AllHistoryItems.forEach(element => {
      this.lineChartlabels.push(String(element.date));
    });
  }

  private createChartPrices() {
    this.AllHistoryItems.forEach(element => {
      this.LineChartPrices.push(Number(element.priceUsd));
    });
  }

  private createLineChartData() {

    this.createChartLabels();
    this.createChartPrices();

    this.LineChartData = {
      labels: this.lineChartlabels,
      datasets:
        [{
          label: this.id.toUpperCase() + " Price in USD",
          data: this.LineChartPrices,
          fill: false,
          borderColor: '#1976d2'
        }]
    }

  }

}
