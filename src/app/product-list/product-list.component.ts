// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../product.model';
import { ProductCategoryService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data: ProductCategory[] = [];
  constructor(private service: ProductCategoryService) {

  }
  ngOnInit(): void {
    this.LoadData();
  }


  LoadData() {
    this.service.GetProductCategories().subscribe((response: ProductCategory[]) => {
      this.data = response;
      console.log(response);
    },
      (err: any) => {
        console.log(err);
      })


  }
  DeleteProduct(pro: ProductCategory) {
    let confirmDelete: boolean = confirm(`Delete ${pro.name}?`);
    if (confirmDelete) {
      this.service.DeleteProductCategory(pro.productCategoryID).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
