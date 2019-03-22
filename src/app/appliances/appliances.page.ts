import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { strict } from 'assert';
import { ProductService, Appliance } from '../services/product.service';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.page.html',
  styleUrls: ['./appliances.page.scss']
})

/*
export interface Appliance {
  name: string;
  location: string;
  price: number;
  powerUsage: number;
  url: string;
  rating: number;
}
*/
export class AppliancesPage {
  constructor(productService: ProductService){

    
   //appliancelist: Appliance[];
   
  /*  var config = {
        apiKey: "AIzaSyBdTmUMlG1nMVJvtXynDlypPE73o-pZ3UA",
        authDomain: "cbus-2019.firebaseapp.com",
        databaseURL: "https://cbus-2019.firebaseio.com",
        projectId: "cbus-2019",
        storageBucket: "cbus-2019.appspot.com",
        messagingSenderId: "831426845778"
      }
  
      var app = firebase.initializeApp(config);
      var db = firebase.firestore(app);
  
      var applianceCollection = db.collection('Appliances');
    
      var myAppliances: Appliance[];
      var result = [];

      let myVar = [];
      
      applianceCollection.get().then(function(querySnapshot) {
        querySnapshot.forEach( (doc) => {
           this.appliancelist.push(doc.data());
                       
          })
       
        })
      */
      }
      
      ngOnInit() {

   
      }
    }

      



