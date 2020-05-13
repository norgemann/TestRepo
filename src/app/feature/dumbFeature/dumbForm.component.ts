import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { GirlPower } from './girl-power.component';
import { Pizza } from '../models/pizza.models';

@Component({
  selector: 'dumb-form',
  template: `
    <div>
      <div>
        Create Pizza Form <ng-content select="span"></ng-content>
        <form
          #myForm="ngForm"
          (ngSubmit)="createPizza(myForm.value, myForm.valid)"
        >
          <div>
            Pizza name:
            <input
              type="text"
              name="name"
              ngModel
              required
              #pizzaName="ngModel"
            />
          </div>
          <div *ngIf="pizzaName.errors?.required && pizzaName.dirty">
            Pizza name is required
          </div>

          <div>
            Pizza toppings:
            <select name="toppings" ngModel required #pizzaTopping="ngModel">
              <option value="">Select...</option>
              <option [value]="topping" *ngFor="let topping of toppings">{{
                topping
              }}</option>
            </select>
          </div>
          <div *ngIf="pizzaTopping.errors?.required && pizzaTopping.dirty">
            Pizza topping is required
          </div>

          <div>
            Ljuta: <input type="checkbox" name="ljuta" [ngModel]="false" />
          </div>

          <button type="submit" [disabled]="myForm.invalid">Create</button>
          <ng-content select="h3"></ng-content>
          <span *ngIf="isGirlPower">Power of the pizza!</span>
          <ng-content select="girl-power"></ng-content>
          <br />
          <br />

          <div>{{ myForm.value | json }}</div>
          <div>Valid:{{ myForm.valid | json }}</div>
          <div>Innvalid:{{ myForm.invalid | json }}</div>
        </form>
        isGirlPower:{{isGirlPower}}
      </div>
    </div>
  `,
})
export class DumbForm implements AfterContentInit {
  isGirlPower: boolean;

  ngAfterContentInit() {
    if (this.girlPower) {
      console.log(this.girlPower);
      this.girlPower.powerEmitter.subscribe(
        (value: boolean) => (this.isGirlPower = value)
      );
    }
  }

  @Input()
  toppings: string[];

  @Output()
  create: EventEmitter<Pizza> = new EventEmitter<Pizza>();

  @ContentChild(GirlPower) girlPower: GirlPower;

  createPizza(pizza: Pizza, valid: boolean) {
    if (valid) {
      this.create.emit(pizza);
    }
  }
}
