import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';

import { DinamicComponent } from './feature/dumbFeature/dinamic.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <div>
        <h1 class="klasa" [class.zeleno]="!postoji">{{ title }}</h1>
      </div>
      <div>
        <ng-template [ngIf]="postoji">
          {{ title }}
        </ng-template>
      </div>
      <div #entry ></div>
      
      <div>DATE: {{ date | date: 'yMMMMd' | uppercase }}</div>
      MARKO ROUTER OUTLET:
      <nav>
      <a
      routerLink='form'
      routerLinkActive="active"
      >
      Reactivan formular
      </a>
      <a
      routerLink="feature"
      routerLinkActive='active'>
      Feature componenta
      </a>
      </nav>
      <router-outlet></router-outlet>     
      <button (click)="unisti()">Unisti me</button>
      <button (click)="pomeri()">Pomeri me</button>

      Condition: <input type="text" name="condition" [value]="obj.condition" (input)="handleInput($event)" />
      ConditionNOT: <input type="text" name="conditionNOT" [value]="obj.conditionNOT" (input)="handleInput($event)" />
      Show: <input type="checkbox" name="show" [value]="obj.show" (change)="handleInput($event)" />
     
      
      <button (click)="onLog()">Loguj</button>
    
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  constructor(private resolver: ComponentFactoryResolver) {
    this.title = 'APP';
  }
obj={
  condition: "a",
  conditionNOT: "a",
  show: false
}
handleInput(event: any){
  if(event.target.type === "checkbox"){
    console.log(event.target.checked);
    this.obj[event.target.name] = event.target.checked;
  } else this.obj[event.target.name] = event.target.value;
}
  onLog(){
    console.log(this.obj);
  }
  
  // conditionNoFrost: string = "";
  // show: boolean = false;

 

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  ngAfterViewInit() {
    setTimeout(() => {
      const dinamicFactory = this.resolver.resolveComponentFactory(
        DinamicComponent
      );
      this.dinamicComponent = this.entry.createComponent(dinamicFactory);
      const dinamicComponent2 = this.entry.createComponent(dinamicFactory);
      this.dinamicComponent.instance.title = this.title
    }, 0);
  }

  

  dinamicComponent: ComponentRef<DinamicComponent>;
  title: string;

  postoji = false;
  zelen = false;
  zut = false;

  date = new Date();

  unisti(){
    this.dinamicComponent.destroy();
  }
  pomeri(){
    this.entry.move(this.dinamicComponent.hostView, 1)

  }
}
