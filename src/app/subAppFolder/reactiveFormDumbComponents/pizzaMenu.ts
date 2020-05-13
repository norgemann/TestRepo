import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Product } from '../reactiveForm-component/reactiveForm.component';

@Component({
  selector: 'pizza-menu',
  template: `
    <div [formGroup]="parent">
      <div formArrayName="menu">
        <div *ngFor="let item of menus; let i = index">
          <div [formGroupName]="i">
            <div>
            <a
            routerLink="{{item.value.product_id}}">
            {{ getPizza(item.value.product_id).name }}         
            {{ getPizza(item.value.product_id).price | currency:"USD":true }}
            </a>       
            </div>
            
            <input type="number" formControlName="kolicina" />
            <button type="button" (click)="removePizza(i)">Remove pizza</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class PizzaMenu {
  @Input()
  parent: FormGroup;

  @Input()
  map: Map<number, Product>

  getPizza(id){
    return this.map.get(id);
  }

  @Output()
  removed = new EventEmitter()

  removePizza(index){
    this.removed.emit(index);
  }

  get menus() {
    return (this.parent.get('menu') as FormArray).controls;
  }
}