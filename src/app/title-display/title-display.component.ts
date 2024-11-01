import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFetchService, Product } from '../data-fetch.service';

@Component({
  selector: 'app-title-display',
  templateUrl: './title-display.component.html',
  styleUrls: ['./title-display.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TitleDisplayComponent implements OnInit {
  titles: string[] = [];

  constructor(private dataFetchService: DataFetchService) {}

  ngOnInit(): void {
    this.dataFetchService.fetchProductData().subscribe(response => {
      this.titles = response.products.map((product: Product) => product.title);
    });
  }
}
