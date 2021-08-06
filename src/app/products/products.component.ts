import { Component, OnInit } from '@angular/core';
import { TypeProduct } from '../admin/product/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: TypeProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct() {
    this.productService.getProducts().subscribe(data => {
    this.products = data;
    })
  }
}
