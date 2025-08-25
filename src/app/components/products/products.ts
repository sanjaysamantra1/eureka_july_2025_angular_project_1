import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  product_api_url = 'https://fakestoreapi.com/products';
  isLoading: boolean = false;
  productArr: any;

  constructor(private httpClient: HttpClient) {
  }

  fetchProducts() {
    this.isLoading = true;
    this.httpClient.get(this.product_api_url).subscribe(
      (response) => {
        this.isLoading = false;
        this.productArr = response;
      }
    );
  }

}
