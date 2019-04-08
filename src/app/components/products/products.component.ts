import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  alert_message: string = '';

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    }, 
    (err) => {

    });
  }

  deleteProduct(product: Product, event: any) {
    event.preventDefault();
    this.productsService.deleteProduct(product.id).subscribe(data => {
      this.alert_message = `${product.code} eliminado`;
    },
    (err) => {
      console.error(err);
    });
  }

  goToProduct(product: Product, event: any) {
    event.preventDefault();
    this.router.navigate(['/product', product.id])
  }

}
