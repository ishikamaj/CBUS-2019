import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TvsPage } from './tvs.page';
var routes = [
    {
        path: '',
        component: TvsPage
    }
];
var TvsPageModule = /** @class */ (function () {
    function TvsPageModule() {
    }
    TvsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TvsPage]
        })
    ], TvsPageModule);
    return TvsPageModule;
}());
export { TvsPageModule };
//# sourceMappingURL=tvs.module.js.map