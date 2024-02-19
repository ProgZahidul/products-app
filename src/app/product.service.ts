import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCategory } from './product.model';


@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {

  apiUrl: string = 'https://localhost:7115/ProductCategories';
  constructor(private http: HttpClient) {

  }

  public GetProductCategories(): Observable<ProductCategory[]> {

    return this.http.get<ProductCategory[]>(this.apiUrl);
  }

  public GetProductCategory(id: number): Observable<ProductCategory> {

    return this.http.get<ProductCategory>(this.apiUrl + '/' + id);
  }
  public SaveProductCategory(ProductCategory: any): Observable<any> {

    return this.http.post(this.apiUrl, ProductCategory);
  }
  public UpdateProductCategory(product: ProductCategory): Observable<ProductCategory> {

    return this.http.put<ProductCategory>(this.apiUrl + '/' + product.productCategoryID, product);
  }
  public DeleteProductCategory(id: number): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);
  }

}

