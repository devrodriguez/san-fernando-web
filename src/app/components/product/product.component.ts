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
  alert_message: string = '';

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
      if(data) {
        this.alert_message = `${data['code']} actualizado`;
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
