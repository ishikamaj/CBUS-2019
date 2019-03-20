import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var Tab3Page = /** @class */ (function () {
    function Tab3Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Tab3Page.prototype.tvs = function () {
        this.navCtrl.navigateForward('tvs');
    };
    Tab3Page.prototype.computers = function () {
        this.navCtrl.navigateForward('computers');
    };
    Tab3Page.prototype.appliances = function () {
        this.navCtrl.navigateForward('appliances');
    };
    Tab3Page.prototype.lighting = function () {
        this.navCtrl.navigateForward('lighting');
    };
    Tab3Page.prototype.navigation = function () {
        this.navCtrl.navigateForward('navigation');
    };
    Tab3Page.prototype.gaming = function () {
        this.navCtrl.navigateForward('gaming');
    };
    Tab3Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab3',
            templateUrl: 'tab3.page.html',
            styleUrls: ['tab3.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], Tab3Page);
    return Tab3Page;
}());
export { Tab3Page };
//# sourceMappingURL=tab3.page.js.map