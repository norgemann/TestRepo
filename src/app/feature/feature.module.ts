import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { FeatureComponent } from './subFeatureFolder/feature.component';
import { DumbFeatureComponent } from './dumbFeature/dumbFeature.component';
import { CounterComponent } from './dumbFeature/counter.component';
import { DumbForm } from './dumbFeature/dumbForm.component';
import { GirlPower } from './dumbFeature/girl-power.component';
import { DinamicComponent } from './dumbFeature/dinamic.component'

const ROUTES: Routes = [
  {path:'feature', 
children:[
  {path:'', component: FeatureComponent},
  {path:'dinamic', component: DinamicComponent}
]}
]

@NgModule({
  declarations: [
    FeatureComponent,
    DumbFeatureComponent,
    CounterComponent,
    DumbForm,
    GirlPower
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(ROUTES)],
  exports: [FeatureComponent],
  entryComponents:[DinamicComponent]
})
export class FeatureModule {}
