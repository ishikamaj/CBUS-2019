import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';
import { Tab1PageModule } from '../tab1/tab1.module';
import { Tab2PageModule } from '../tab2/tab2.module';
import { Tab3PageModule } from '../tab3/tab3.module';
import { Tab4PageModule } from '../tab4/tab4.module';
import { Tab5PageModule } from '../tab5/tab5.module';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: './pages/tab1/tab1module#Tab1PageModule'
            },
            {
                path: 'tab2',
                loadChildren: './pages/tab2/tab2module#Tab2PageModule'
            },
            {
                path: 'tab3',
                loadChildren: './pages/tab3/tab3module#Tab3PageModule'
            },
            {
                path: 'tab4',
                loadChildren: './pages/tab4/tab4module#Tab4PageModule'
            },
            {
                path: 'tab5',
                loadChildren: './pages/tab5/tab5module#Tab5PageModule'
            },
        ]
    },
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
        this.tab1 = Tab1PageModule;
        this.tab2 = Tab2PageModule;
        this.tab3 = Tab3PageModule;
        this.tab4 = Tab4PageModule;
        this.tab5 = Tab5PageModule;
    }
    TabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                TabsPageRoutingModule
            ],
            declarations: [TabsPage]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TabsPageModule);
    return TabsPageModule;
}());
export { TabsPageModule };
//# sourceMappingURL=tabs.module.js.map