// product-create.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductCategory } from '../product.model';
import { ProductCategoryService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  public productCategoryList: ProductCategory[] = [];
  public model!: ProductCategory;

  constructor(private service: ProductCategoryService, private router: Router) {

  }
  ngOnInit(): void {



    this.model = new ProductCategory();

  }


  OnSubmit() {




    this.service.SaveProductCategory(this.model).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }



  AddProduct() {

    this.model.products.push(new Product());
  }

  DeleteProduct(index: number) {
   

    const remItem = this.model.products.splice(index, 1);
    console.log(`Removed Items: ${remItem[0].name}`);
  }
}
