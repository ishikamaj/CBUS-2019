import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NavigationPage } from './navigation.page';
var routes = [
    {
        path: '',
        component: NavigationPage
    }
];
var NavigationPageModule = /** @class */ (function () {
    function NavigationPageModule() {
    }
    NavigationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NavigationPage]
        })
    ], NavigationPageModule);
    return NavigationPageModule;
}());
export { NavigationPageModule };
//# sourceMappingURL=navigation.module.js.map