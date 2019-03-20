import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from './../services/product.service'

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.page.html',
  styleUrls: ['./appliances.page.scss'],
})
export class AppliancesPage {

  
  constructor(private productService: ProductService) { }
  
  ngOnInit() {
  
    
  }

}
