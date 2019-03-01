import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LightingTipsPage } from './lighting-tips.page';

const routes: Routes = [
  {
    path: '',
    component: LightingTipsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LightingTipsPage]
})
export class LightingTipsPageModule {}
