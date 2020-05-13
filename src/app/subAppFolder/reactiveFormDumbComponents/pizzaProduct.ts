import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product } from '../reactiveForm-component/reactiveForm.component';


@Component({
  selector: 'pizza-product',
  template: `
    <div [formGroup]="parent">
      <div formGroupName="pizza">
        Kolicina:
        <input type="number" formControlName="kolicina" />

        Vrsta pizze:
        <select formControlName="product_id">
          <option value="">Select pizza</option>
          <option *ngFor="let product of products" [value]="product.id">{{
            product.name
          }}</option>
        </select>

        <button type="button" (click)="addPizza()">Add order</button>
      </div>
    </div>
  `,
})
export class PizzaProduct {
  @Input()
  parent: FormGroup;

  @Input()
  products: Product[];

  @Output()
  added = new EventEmitter();

  addPizza() {
    this.added.emit(this.parent.get('pizza').value);
    this.parent.get("pizza").reset({
      product_id:'',
      kolicina:0
    })
  }
}
