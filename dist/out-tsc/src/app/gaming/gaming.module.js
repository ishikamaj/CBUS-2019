import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GamingPage } from './gaming.page';
var routes = [
    {
        path: '',
        component: GamingPage
    }
];
var GamingPageModule = /** @class */ (function () {
    function GamingPageModule() {
    }
    GamingPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GamingPage]
        })
    ], GamingPageModule);
    return GamingPageModule;
}());
export { GamingPageModule };
//# sourceMappingURL=gaming.module.js.map