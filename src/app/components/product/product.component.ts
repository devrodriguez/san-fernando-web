import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product = new Product(null, null, null, null, null, null);

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {
    this.activatedRoute.params.subscribe(params => {
      this.productsService.getProduct(params['id']).subscribe((product: Product) => {
        this.product = product;
      },
      (err) => {
        console.error(err);
      });
      
    })
   }

  ngOnInit() {
  }

  updateProduct() {
    this.productsService.updateProduct(this.product).subscribe(data => {
      console.log(data);
    },
    (err) => {
      console.error(err);
    });
  }

}
