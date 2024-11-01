// data-fetch.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface Product {  
  id: number;
  title: string;
  description: string;
  price: number;
}

export interface ProductResponse {  // Create an interface for the response
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
  private productsDataUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  fetchProductData(): Observable<ProductResponse> {  // Update the return type to ProductResponse
    return this.http.get<ProductResponse>(this.productsDataUrl).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        return of({ products: [] });  // Return an object with an empty products array
      })
    );
  }
}
