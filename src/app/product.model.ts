export class Product {

  productID: number = 0;
  name: string = '';
  productNumber: string = '';
  color: string = '';
  standardCost: number = 0;
  listPrice: number = 0;
  size: number = 0;
  weight: number = 0;

}



export class ProductCategory {
  productCategoryID: number = 0;
  name: string = '';
  products: Product[] = []
}
