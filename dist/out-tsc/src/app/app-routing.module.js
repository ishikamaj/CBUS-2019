import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'heating-tips', loadChildren: './heating-tips/heating-tips.module#HeatingTipsPageModule' },
    { path: 'lighting-tips', loadChildren: './lighting-tips/lighting-tips.module#LightingTipsPageModule' },
    { path: 'air-tips', loadChildren: './air-tips/air-tips.module#AirTipsPageModule' },
    { path: 'tech-tips', loadChildren: './tech-tips/tech-tips.module#TechTipsPageModule' },
    { path: 'water-tips', loadChildren: './water-tips/water-tips.module#WaterTipsPageModule' },
    { path: 'computers', loadChildren: './computers/computers.module#ComputersPageModule' },
    { path: 'appliances', loadChildren: './appliances/appliances.module#AppliancesPageModule' },
    { path: 'lighting', loadChildren: './lighting/lighting.module#LightingPageModule' },
    { path: 'navigation', loadChildren: './navigation/navigation.module#NavigationPageModule' },
    { path: 'gaming', loadChildren: './gaming/gaming.module#GamingPageModule' },
    { path: 'tvs', loadChildren: './tvs/tvs.module#TvsPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map