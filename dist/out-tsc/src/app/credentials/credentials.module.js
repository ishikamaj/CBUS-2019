import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CredentialsPage } from './credentials.page';
var routes = [
    {
        path: '',
        component: CredentialsPage
    }
];
var CredentialsPageModule = /** @class */ (function () {
    function CredentialsPageModule() {
    }
    CredentialsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CredentialsPage]
        })
    ], CredentialsPageModule);
    return CredentialsPageModule;
}());
export { CredentialsPageModule };
//# sourceMappingURL=credentials.module.js.map