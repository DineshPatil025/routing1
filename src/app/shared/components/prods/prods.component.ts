import { Component, OnInit, inject } from '@angular/core';
import { Iproducts } from '../../models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.scss']
})
export class ProdsComponent implements OnInit {


  private _productsService = inject(ProductsService)

  productsArr:Array<Iproducts> = []
  constructor() { }

  ngOnInit(): void {

    this.productsArr = this._productsService.getAllProducts()
    console.log(this.productsArr);
    
  }

}
