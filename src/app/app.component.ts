import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'instagramLike';

  ngOnInit() {

    const firebaseConfig = {
      apiKey: "AIzaSyBhjwiwn_i0SKAgV0-VHH-q5mSzRiKiJo4",
      authDomain: "instagramlike-a6c06.firebaseapp.com",
      databaseURL: "https://instagramlike-a6c06.firebaseio.com",
      projectId: "instagramlike-a6c06",
      storageBucket: "instagramlike-a6c06.appspot.com",
      messagingSenderId: "705324801301",
      appId: "1:705324801301:web:25fb9604bb21228087dd1c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
