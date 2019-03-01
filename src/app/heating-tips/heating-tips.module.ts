import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeatingTipsPage } from './heating-tips.page';

const routes: Routes = [
  {
    path: '',
    component: HeatingTipsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeatingTipsPage]
})
export class HeatingTipsPageModule {}
