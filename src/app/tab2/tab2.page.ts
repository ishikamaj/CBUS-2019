import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}
  
  water () {
    this.router.navigate(['water-tips'])
  }

  heating () {
    this.router.navigate(['heating-tips'])
  }

  lighting () {
    this.router.navigate(['lighting-tips'])
  }

  tech () {
    this.router.navigate(['tech-tips'])
  }
}
