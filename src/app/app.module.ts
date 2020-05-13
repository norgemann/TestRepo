import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//module
import {FeatureModule} from './feature/feature.module'
import {ReactiveModule} from './subAppFolder/reactiveForm.module'

//components
import { AppComponent } from './app.component';
import {SubComponent} from './subAppFolder/subApp.component'

const ROUTES: Routes = [
  {path:'**', redirectTo: 'form'}
]

@NgModule({
  declarations: [AppComponent, SubComponent],
  imports: [BrowserModule, CommonModule, FeatureModule, ReactiveModule, RouterModule.forRoot(ROUTES)],
  bootstrap: [AppComponent],
})
export class AppModule {}
