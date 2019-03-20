import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AirTipsPage } from './air-tips.page';
var routes = [
    {
        path: '',
        component: AirTipsPage
    }
];
var AirTipsPageModule = /** @class */ (function () {
    function AirTipsPageModule() {
    }
    AirTipsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AirTipsPage]
        })
    ], AirTipsPageModule);
    return AirTipsPageModule;
}());
export { AirTipsPageModule };
//# sourceMappingURL=air-tips.module.js.map