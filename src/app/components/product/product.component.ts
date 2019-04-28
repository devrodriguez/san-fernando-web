import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { Util } from 'src/app/util';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product = new Product(null, null, null, null, null, null);
  alertMessage: string = '';
  productId: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      this.productsService.getProduct(this.productId).subscribe((product: Product) => {
        console.log(product);
        this.product = product;
      },
      (err) => {
        console.error(err);
      });
      
    })
   }

  ngOnInit() {
  }

  createProduct() {
    this.productsService.createProduct(this.product).subscribe(data => {
      this.alertMessage = `${data['code']} creado.`;
    },
    (err) => {
      console.log(err);
    });
  }

  updateProduct() {
    this.productsService.updateProduct(this.product).subscribe(data => {
      if(data) {
        this.alertMessage = `${data['code']} actualizado.`;
      }
    },
    (err) => {
      console.error(err);
    });
  }

  processFile(input: any) {
    const file: File = input.files[0];
    const reader = new FileReader();
    const util: Util = new Util();

    const image = new Image();

    // If file size 1MB
    if(file.size > 1048576) {
      throw 'File size';
    }

    reader.addEventListener('load', (event: any) => {

      image.src = event.target.result;

      image.onload = () => {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        canvas.width = util.imageSize;
        canvas.height = util.imageSize;

        context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);

        this.product.image = canvas.toDataURL();
      }
    });

    reader.readAsDataURL(file);
     
  }

}
