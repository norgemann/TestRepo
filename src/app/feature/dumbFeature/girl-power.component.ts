import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: `girl-power`,
  template: `
    <div>
      Girl Power
      <label>
        <input type="checkbox" (change)="onChange($event.target.checked)" />
      </label>
    </div>
  `,
})
export class GirlPower {
  
  onChange(power: boolean) {
      console.log("iz komponente girl power logujem event.target.value", power)
    this.powerEmitter.emit(power)
  }
  @Output()
  powerEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()
}


