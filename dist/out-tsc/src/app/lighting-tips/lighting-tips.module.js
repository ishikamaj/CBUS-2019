import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LightingTipsPage } from './lighting-tips.page';
var routes = [
    {
        path: '',
        component: LightingTipsPage
    }
];
var LightingTipsPageModule = /** @class */ (function () {
    function LightingTipsPageModule() {
    }
    LightingTipsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LightingTipsPage]
        })
    ], LightingTipsPageModule);
    return LightingTipsPageModule;
}());
export { LightingTipsPageModule };
//# sourceMappingURL=lighting-tips.module.js.map