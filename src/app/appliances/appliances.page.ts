import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service'
import * as firebase from 'firebase';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.page.html',
  styleUrls: ['./appliances.page.scss']
})
export class AppliancesPage {
  constructor(private productService: ProductService) { 
   
    var config = {
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
           
    var myAppliances;

    applianceCollection.get().then(function(querySnapshot) {
      myAppliances = [];
      querySnapshot.forEach( (doc) => {
        myAppliances.push(doc.data());
     })
     console.log(myAppliances);
    }) 
  }
  
  ngOnInit() {
 
  }


}
