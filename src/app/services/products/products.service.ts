import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://192.168.0.27:8000/api/products');
  }

  getProduct(id: number) {
    return this.http.get(`http://192.168.0.27:8000/api/products/${id}`);
  }

  updateProduct(product: Product) {
    return this.http.put(`http://192.168.0.27:8000/api/products/${product.id}`, product);
  }
}
