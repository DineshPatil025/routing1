import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iproducts } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {


  private _prodService = inject(ProductsService);
  private _routes = inject(Router);

  prodForm!: FormGroup;
  newProdObj !: Iproducts;
  constructor() { }

  ngOnInit(): void {

    this.createProdForm()
  }
  createProdForm() {
    this.prodForm = new FormGroup({
      pName: new FormControl(null, [Validators.required]),
      pStatus: new FormControl(null, [Validators.required])
    })
  }


  onProdAdd() {

    this.newProdObj = this.prodForm.value;
    this._prodService.addNewProd(this.newProdObj)
    this.prodForm.reset();
    this._routes.navigate(['/products'])
    

  }

}
