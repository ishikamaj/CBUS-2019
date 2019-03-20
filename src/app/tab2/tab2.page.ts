import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(private navCtrl: NavController) {}
  
  water () {
    this.navCtrl.navigateForward('water-tips')
  }

  heating () {
    this.navCtrl.navigateForward('heating-tips')
  }

  lighting () {
    this.navCtrl.navigateForward('lighting-tips')
  }

  tech () {
    this.navCtrl.navigateForward('tech-tips')
  }
}
