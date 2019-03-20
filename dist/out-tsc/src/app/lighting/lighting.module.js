import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LightingPage } from './lighting.page';
var routes = [
    {
        path: '',
        component: LightingPage
    }
];
var LightingPageModule = /** @class */ (function () {
    function LightingPageModule() {
    }
    LightingPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LightingPage]
        })
    ], LightingPageModule);
    return LightingPageModule;
}());
export { LightingPageModule };
//# sourceMappingURL=lighting.module.js.map