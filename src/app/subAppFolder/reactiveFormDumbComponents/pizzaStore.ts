import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-store',
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        Kontakt:
        <input
          type="text"
          placeholder="Pisite nam..."
          formControlName="NBGPizza"
        />
        Kontakt:
        <input
          type="text"
          placeholder="Pisite nam..."
          formControlName="ZemunPizza"
        />
      </div>
    </div>
  `,
})
export class PizzaStore {
  @Input()
  parent: FormGroup;
}
