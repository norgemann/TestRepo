import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

//service
import { PizzaService } from '../service/pizza.service';
import { forkJoin } from 'rxjs';

export interface Product {
  id: number;
  price: number;
  name: string;
}

export interface Item {
  product_id: '';
  kolicina: number;
}

@Component({
  selector: 'reactive-form',
  template: `
    <div>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <pizza-store [parent]="form"> </pizza-store>

        <pizza-product
          [parent]="form"
          [products]="products"
          (added)="handleAdded($event)"
        >
        </pizza-product>

        <pizza-menu
          [parent]="form"
          [map]="productMap"
          (removed)="handleRemoved($event)"
        >
        </pizza-menu>

        <button type="submit">
          Submit
        </button>

        <pre>{{ form.value | json }}</pre>
      </form>
      <br />
    </div>
  `,
})
export class ReactiveFormComponent implements OnInit {
  products: Product[];

  productMap: Map<number, Product>;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    const products = this.pizzaService.getProducts();
    const menu = this.pizzaService.getMenu();

    forkJoin(products, menu).subscribe(([products, menu]) => {
      const myMap = products.map<[number, Product]>((product: Product) => [
        product.id,
        product,
      ]);
      this.productMap = new Map<number, Product>(myMap);
      this.products = products;
      menu.forEach((item) => this.handleAdded(item));
    });
  }

  //formular
  //glavna grupa
  form = new FormGroup({
    //sub-grupa
    store: new FormGroup({
      NBGPizza: new FormControl(''),
      ZemunPizza: new FormControl(''),
    }),
    //sub-grupa
    pizza: this.createFormGroup({}),
    //sub-array
    menu: new FormArray([]),
  });

  handleRemoved(event) {
    (this.form.get('menu') as FormArray).removeAt(event);
  }

  handleAdded(event) {
    const newPizzaGroup = this.createFormGroup(event);
    (this.form.get('menu') as FormArray).push(newPizzaGroup);
  }

  createFormGroup(item) {
    return new FormGroup({
      product_id: new FormControl(parseInt(item.product_id, 10) || ''),
      kolicina: new FormControl(item.kolicina || 0),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
