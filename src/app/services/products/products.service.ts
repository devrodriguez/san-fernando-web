import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { Util } from 'src/app/util';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  util: Util = new Util();

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.util.apiUrl}/products`);
  }

  getProduct(id: number) {
    return this.http.get(`${this.util.apiUrl}/products/${id}`);
  }

  updateProduct(product: Product) {
    return this.http.put(`${this.util.apiUrl}/products/${product.id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.util.apiUrl}/products/${id}`);
  }
}
