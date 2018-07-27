import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-drops',
  templateUrl: './drops.component.html',
  styleUrls: ['./drops.component.css']
})
export class DropsComponent implements OnInit {

  randomNote = {
    date: '',
    primaryTag: '',
    secondaryTag: '',
    message: ''
  } as any;

  constructor(
    private db: AngularFireDatabase) {
  }
  ngOnInit() {
    this.db.list('/notes').valueChanges().subscribe(noteList => {
      const randomNumber = Math.floor((Math.random() * noteList.length));
      this.randomNote = noteList[randomNumber];
      console.log('noteList.length', noteList.length);
      console.log('randomNumber', randomNumber);
      console.log('noteList[randomNumber]', noteList[randomNumber]);
    });

  }

}
