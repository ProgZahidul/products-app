import { Component } from '@angular/core';
import { Product, ProductCategory } from '../product.model';
import { ProductCategoryService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  public model!: ProductCategory;
  id!: number;

  constructor(private Service: ProductCategoryService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();


  }


  OnSubmit() {


    this.Service.UpdateProductCategory(this.model).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  LoadData() {
    this.Service.GetProductCategory(this.id).subscribe((data: ProductCategory) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
  AddProduct() {

    this.model.products.push(new Product());
  }

  DeleteProduct(index: number) {

    const remItem = this.model.products.splice(index, 1);
  }

}
