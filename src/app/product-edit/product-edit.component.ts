import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { TypeProduct } from '../product/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: TypeProduct = {
    id: this.route.snapshot.params.id,
    name: '',
    price: 0,
    status: false,
    photo: '',
    description: ''
  };

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
      this.productService.get(this.product.id).subscribe(data => {
      this.product = data;
    })
  }

  onEditProduct() {
    // this.newProductEvent.emit(this.product);
    this.productService.updateProduct(this.product.id, this.product).subscribe(data => {
      console.log(data);
    });
  }

}
