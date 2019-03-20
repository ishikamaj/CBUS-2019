import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private navCtrl: NavController) {}

  tvs() {
    this.navCtrl.navigateForward('tvs');  }

  computers() {
    this.navCtrl.navigateForward('computers')
  }

  appliances() {
    this.navCtrl.navigateForward('appliances')
  }

  lighting() {
    this.navCtrl.navigateForward('lighting')
  }

  navigation() {
    this.navCtrl.navigateForward('navigation')
  }

  gaming() {
    this.navCtrl.navigateForward('gaming')
  }
}
