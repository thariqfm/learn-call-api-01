import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PeopleServiceProvider } from './../../providers/people-service/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public people: any;

  constructor(public navCtrl: NavController, public peopleService: PeopleServiceProvider) {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.load().then(data => {
      this.people = data;
    })
  }

}
