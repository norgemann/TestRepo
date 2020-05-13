import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
    selector:"counter",
    template:`
    <div>
    Counter
    <button (click)="prebroj(niz.length)">Broj u nizu</button>
    </div>
    `
})
export class CounterComponent{
    @Input()
    niz: number[];

    @Output()
    broj: EventEmitter<any> = new EventEmitter()
    
    prebroj(n: number){
        console.log("klik na prebroj", n)
        this.broj.emit(n)
    }
}