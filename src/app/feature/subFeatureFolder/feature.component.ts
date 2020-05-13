import { Component, OnInit } from '@angular/core';

import { Pizza } from '../models/pizza.models';

@Component({
  selector: 'feature',
  template: `
    <div>
      Feature komponenta je pametna i pribavlja podatke
      <br />
      <br />
      <div>
        <dumb-feature [pizzas]="pizzas"></dumb-feature>
      </div>
      <br />
      <div>
        <counter [niz]="niz" (broj)="onPrebroj($event)"></counter>
      </div>
      <br />
      <div>
        <dumb-form
          [toppings]="toppings"
          (create)="onCreate($event)"
        >
        <span>for boys</span>
        <h3>Boys Pizza!</h3>
        </dumb-form>
      </div>
      <br />
      <div>
        <dumb-form
          [toppings]="toppings"
          (create)="onCreate($event)"
        >
        <span>for girls</span>
        <h3>Girls Pizza!</h3>
        <girl-power></girl-power>
        </dumb-form>
        <a
        routerLink="dinamic"
        routerLinkActive="active">
        Dinamic
        </a>
      </div>
      <br />
    </div>
  `,
})
export class FeatureComponent implements OnInit {
  niz: number[];
  pizzas: Pizza[];
  toppings: string[];

  ngOnInit() {
    setTimeout(() => {
      this.niz = [1, 2, 3, 4, 5, 6, 7];
    }, 1000);

    setTimeout(() => {
      this.pizzas = [
        {
          name: 'Kapricoza',
          toppings: ['pecurke', 'kecap', 'sir', 'maslinke'],
          ljuta: false,
        },
        {
          name: 'Vulkan',
          toppings: ['pecurke', 'kecap', 'sir', 'maslinke', 'susam'],
          ljuta: true,
        },
        { name: '4 vrste sira', toppings: ['sir'], ljuta: false },
      ];
    }, 1000);

    setTimeout(() => {
      this.toppings = [
        'pecurke',
        'kecap',
        'sir',
        'maslinke',
        'susam',
        'ljute papricice',
      ];
    }, 1000);
  }

  onPrebroj(event) {
    console.log('uspesan emit');
    console.log(event);
  }

  onCreate(pizza) {
    console.log(pizza);
    this.pizzas.push(pizza);
  }
}
