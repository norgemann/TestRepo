import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';

//service
import { PizzaService } from './service/pizza.service';

//conteiner
import { ReactiveFormComponent } from './reactiveForm-component/reactiveForm.component';

//components
import { PizzaMenu } from './reactiveFormDumbComponents/pizzaMenu';
import { PizzaStore } from './reactiveFormDumbComponents/pizzaStore';
import { PizzaProduct } from './reactiveFormDumbComponents/pizzaProduct';
import { PizzaViewerComponent } from './reactiveFormDumbComponents/pizza-viewer/pizzaViewer';

const ROUTES: Routes = [
  {path: 'form',
  children:[
    {path: '',  component: ReactiveFormComponent},
    {path: ':id',  component: PizzaViewerComponent}
  ]
}
]

@NgModule({
  declarations: [ReactiveFormComponent, PizzaMenu, PizzaStore, PizzaProduct, PizzaViewerComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule.forChild(ROUTES)],
  providers:[PizzaService],
  exports: [ReactiveFormComponent],
})
export class ReactiveModule {}
