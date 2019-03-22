import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'heating-tips', loadChildren: './heating-tips/heating-tips.module#HeatingTipsPageModule' },
  { path: 'lighting-tips', loadChildren: './lighting-tips/lighting-tips.module#LightingTipsPageModule' },
  { path: 'air-tips', loadChildren: './air-tips/air-tips.module#AirTipsPageModule' },
  { path: 'tech-tips', loadChildren: './tech-tips/tech-tips.module#TechTipsPageModule' },
  { path: 'water-tips', loadChildren: './water-tips/water-tips.module#WaterTipsPageModule'},
  { path: 'computers', loadChildren: './computers/computers.module#ComputersPageModule' },
  { path: 'appliances', loadChildren: './appliances/appliances.module#AppliancesPageModule' },
  { path: 'lighting', loadChildren: './lighting/lighting.module#LightingPageModule' },
  { path: 'navigation', loadChildren: './navigation/navigation.module#NavigationPageModule' },
  { path: 'gaming', loadChildren: './gaming/gaming.module#GamingPageModule' },
  { path: 'tvs', loadChildren: './tvs/tvs.module#TvsPageModule' },
  { path: 'details/', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },  { path: 'appliance-tips', loadChildren: './appliance-tips/appliance-tips.module#ApplianceTipsPageModule' }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
