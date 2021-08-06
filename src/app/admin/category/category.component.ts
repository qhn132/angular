import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { TypeCategory } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: TypeCategory[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory() {
    this.productService.getCategory().subscribe(data => {
      this.categories = data;
      })
  }

}
