import { Component, OnInit } from '@angular/core';
import { TypeProduct } from '../product/product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  // @Output() newProductEvent = new EventEmitter<TypeProduct>();

  product: TypeProduct = {
    id: 0,
    name: '',
    price: 0,
    status: false,
    photo: '',
    description: ''
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  getCategory() {
    this.productService.getCategory().subscribe(data => {
      // this.categories = data;
    })
  }

  onAddProduct() {
    // this.newProductEvent.emit(this.product);
    this.productService.addProduct(this.product).subscribe(data => {
      this.router.navigate(['admin/products'])
      console.log(data);
    });
  }

}
