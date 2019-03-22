import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, CollectionReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { query } from '@angular/core/src/render3';
import { ApplianceTipsPage } from '../appliance-tips/appliance-tips.page';
import { addAllToArray } from '@angular/core/src/render3/util';

export interface Appliance {
  name: string;
  location: string;
  price: number;
  powerUsage: number;
  url: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
 
 constructor(){
  
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
      applianceCollection.get().then(function(querySnapshot) {
        const myAppliances = [];
        querySnapshot.forEach( (doc) => {
    
          console.log(myAppliances);
        })
      
      }) 
      
     
    //  this.myArr = myVar[doc.id];

   //   console.log("PP" + this.myArr);
      
     /*
      for (let i in this.myArr){
        console.log("QQQ" + i);
      }
      */
   //   this.aaa[1].name = "Hello 1";
  }
  
  ngOnInit() {

   
  }
}
