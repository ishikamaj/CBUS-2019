import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Tab2Page.prototype.water = function () {
        this.navCtrl.navigateForward('water-tips');
    };
    Tab2Page.prototype.heating = function () {
        this.navCtrl.navigateForward('heating-tips');
    };
    Tab2Page.prototype.lighting = function () {
        this.navCtrl.navigateForward('lighting-tips');
    };
    Tab2Page.prototype.tech = function () {
        this.navCtrl.navigateForward('tech-tips');
    };
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map