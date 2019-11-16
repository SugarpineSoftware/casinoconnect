import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewMealEntryPage } from './new-meal-entry.page';

const routes: Routes = [
  {
    path: '',
    component: NewMealEntryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewMealEntryPage]
})
export class NewMealEntryPageModule {}
