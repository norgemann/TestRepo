import { Component, Input } from "@angular/core"
import { Pizza } from '../models/pizza.models';

@Component({
    selector:"dumb-feature",
    template:`
    <div>
    Dumb Pizza Menu:
    <ul *ngIf="pizzas">
        <li *ngFor="let pizza of pizzas; index as i">Pizza {{ i }} : {{ pizza.name }}</li>
      </ul>
      <div *ngIf="!pizzas">
        Loading pizzas...
      </div>
    </div>
    `
})
export class DumbFeatureComponent{
    @Input()
    pizzas: Pizza[];
}