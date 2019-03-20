import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, CollectionReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { query } from '@angular/core/src/render3';

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

  

 //applianceRef: AngularFirestoreCollection<Appliance>;
 //appRef: AngularFirestoreCollection<Appliance>;
 
 //appliance$: Observable<Appliance[]>;

//applianceCollection: FireSto

 // constructor(private afs: AngularFirestore) {

 constructor(){

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

             
             applianceCollection.get().then(function(querySnapshot) {
        const myAppliances = [];
        querySnapshot.forEach( (doc) => {
          
          
          myAppliances.push(doc.data());

       //this.appliance$ = doc.data();

       // console.log( doc.data() )
       }
       
       )
       console.log(myAppliances);
      }) 

     */

   }


 
}
