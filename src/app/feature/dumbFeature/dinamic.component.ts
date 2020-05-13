import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dinamic',
  styleUrls: ['dinamic.component.scss'],
  template: `
    <div>
    DINAMICKA KOMPONENTA
      <div>
        <button (click)="promeni(userName.value)">Uvecaj</button>
      </div>
      <div>
        {{ num1 + num2 }}
      </div>
      
      <div>
        <input
          type="text"
          [value]="title"
          (input)="handleChange($event)"
          #userName
        />
      </div>

      
    </div>
  `,
})
export class DinamicComponent {
  num1 = 1;
  num2 = 2;
  
  title: string = "";
  zelen = false;
  zut = false;

  promeni(value) {
    console.log(value);
    this.num1 += this.num1;
  }

  handleChange($event) {
    console.log($event);
    this.title = $event.target.value;
  }
}
