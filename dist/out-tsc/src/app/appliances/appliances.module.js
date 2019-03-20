import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppliancesPage } from './appliances.page';
var routes = [
    {
        path: '',
        component: AppliancesPage
    }
];
var AppliancesPageModule = /** @class */ (function () {
    function AppliancesPageModule() {
    }
    AppliancesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AppliancesPage]
        })
    ], AppliancesPageModule);
    return AppliancesPageModule;
}());
export { AppliancesPageModule };
//# sourceMappingURL=appliances.module.js.map