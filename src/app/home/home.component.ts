import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TypeProduct } from '../admin/product/product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: TypeProduct[];

  constructor(private activedRoute: ActivatedRoute, private productService: ProductService) {
    this.activedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
    });
  }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.productService.getProducts().subscribe(data => {
    this.products = data;
    })
  }

}
