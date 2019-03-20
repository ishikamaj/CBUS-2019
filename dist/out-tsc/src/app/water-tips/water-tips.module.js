import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WaterTipsPage } from './water-tips.page';
var routes = [
    {
        path: '',
        component: WaterTipsPage
    }
];
var WaterTipsPageModule = /** @class */ (function () {
    function WaterTipsPageModule() {
    }
    WaterTipsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [WaterTipsPage]
        })
    ], WaterTipsPageModule);
    return WaterTipsPageModule;
}());
export { WaterTipsPageModule };
//# sourceMappingURL=water-tips.module.js.map