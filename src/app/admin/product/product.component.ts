import { Component, OnInit, Input } from '@angular/core';
import { TypeProduct } from './product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  validForm = false;
  detail: TypeProduct;
  products: TypeProduct[];

  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.productService.getProducts().subscribe(data => {
    this.products = data;
    })
  }
  onHandleRemove(id: number) {
    this.productService.removeProduct(id).subscribe(data => {
      this.getProduct()
    })
  }
  onDetail(product: TypeProduct) {
    console.log(product)
    this.detail = product;
  }
}
