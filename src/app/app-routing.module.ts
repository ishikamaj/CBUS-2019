import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'water-tips', loadChildren: './water-tips/water-tips.module#WaterTipsPageModule' },
  { path: 'heating-tips', loadChildren: './heating-tips/heating-tips.module#HeatingTipsPageModule' },
  { path: 'lighting-tips', loadChildren: './lighting-tips/lighting-tips.module#LightingTipsPageModule' },
  { path: 'air-tips', loadChildren: './air-tips/air-tips.module#AirTipsPageModule' },
  { path: 'tech-tips', loadChildren: './tech-tips/tech-tips.module#TechTipsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
