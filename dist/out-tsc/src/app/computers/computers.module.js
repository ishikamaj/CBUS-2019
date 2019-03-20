import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComputersPage } from './computers.page';
var routes = [
    {
        path: '',
        component: ComputersPage
    }
];
var ComputersPageModule = /** @class */ (function () {
    function ComputersPageModule() {
    }
    ComputersPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ComputersPage]
        })
    ], ComputersPageModule);
    return ComputersPageModule;
}());
export { ComputersPageModule };
//# sourceMappingURL=computers.module.js.map