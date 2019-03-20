import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeatingTipsPage } from './heating-tips.page';
var routes = [
    {
        path: '',
        component: HeatingTipsPage
    }
];
var HeatingTipsPageModule = /** @class */ (function () {
    function HeatingTipsPageModule() {
    }
    HeatingTipsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HeatingTipsPage]
        })
    ], HeatingTipsPageModule);
    return HeatingTipsPageModule;
}());
export { HeatingTipsPageModule };
//# sourceMappingURL=heating-tips.module.js.map