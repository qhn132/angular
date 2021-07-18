import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeProduct } from './product/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  // products: TypeProduct[] = dataFake;
  API: string = 'http://localhost:3004'
  constructor(private http: HttpClient) { }
  getProducts(): Observable<TypeProduct[]> {
    return this.http.get<TypeProduct[]>(`${this.API}/products`)
    // return this.products;
  }
  get(id: number): Observable<TypeProduct> {
    return this.http.get<TypeProduct>(`${this.API}/products/${id}`);
  }
  addProduct(item: TypeProduct): Observable<TypeProduct> {
    return this.http.post<TypeProduct>(`${this.API}/products`, item);
  }
  removeProduct(id: number): Observable<TypeProduct> {
    return this.http.delete<TypeProduct>(`${this.API}/products/${id}`);
  }
  updateProduct(id: number, item: TypeProduct): Observable<TypeProduct> {
    return this.http.put<TypeProduct>(`${this.API}/products/${id}`, item);
  }
  getCategory() {
    // call api
  }
}
