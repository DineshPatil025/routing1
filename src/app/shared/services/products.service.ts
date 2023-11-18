import { Injectable } from '@angular/core';
import { Iproducts } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  prodsArr: Array<Iproducts> = [
    {
      pId: "1",
      pName: "Product1",
      pStatus: "InProgress"
    },
    {
      pId: "2",
      pName: "Product2",
      pStatus: "Dispatched"
    },
    {
      pId: "3",
      pName: "Product3",
      pStatus: "Delivered"
    },
  ]



  constructor() { }

  getAllProducts() {
    return this.prodsArr;
  }

  addNewProd(newProdObj: Iproducts) {
    this.prodsArr.push(newProdObj);

    
  }


}
