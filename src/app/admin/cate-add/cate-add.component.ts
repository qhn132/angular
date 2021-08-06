import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeCategory } from '../category/category';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-cate-add',
  templateUrl: './cate-add.component.html',
  styleUrls: ['./cate-add.component.css']
})
export class CateAddComponent implements OnInit {
  category: TypeCategory= {
    id: 0,
    name: '',
    photo: ''
  };

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  onAddCate() {
    // this.newProductEvent.emit(this.product);
    this.productService.addCategory(this.category).subscribe(data => {
      this.router.navigate(['/categories'])
      console.log(data);
    });
  }

}
