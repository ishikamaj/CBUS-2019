import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}

  tvs() {
    this.router.navigate(['tvs'])
  }

  computers() {
    this.router.navigate(['computers'])
  }

  appliances() {
    this.router.navigate(['appliances'])
  }

  lighting() {
    this.router.navigate(['lighting'])
  }

  navigation() {
    this.router.navigate(['navigation'])
  }

  gaming() {
    this.router.navigate(['gaming'])
  }
}
