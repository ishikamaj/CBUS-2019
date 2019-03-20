import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TechTipsPage } from './tech-tips.page';
var routes = [
    {
        path: '',
        component: TechTipsPage
    }
];
var TechTipsPageModule = /** @class */ (function () {
    function TechTipsPageModule() {
    }
    TechTipsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TechTipsPage]
        })
    ], TechTipsPageModule);
    return TechTipsPageModule;
}());
export { TechTipsPageModule };
//# sourceMappingURL=tech-tips.module.js.map