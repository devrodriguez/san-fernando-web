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
    return this.http.get(`${this.util.apiUrl}/products?image=1`);
  }

  getProduct(id: number) {
    return this.http.get(`${this.util.apiUrl}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${this.util.apiUrl}/products`, product);
  }

  updateProduct(product: Product) {
    return this.http.put(`${this.util.apiUrl}/products/${product.id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.util.apiUrl}/products/${id}`);
  }
}
