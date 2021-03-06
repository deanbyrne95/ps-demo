import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: 'Dean',
    emailOffers: false,
    interfaceStyle: 'medium',
    subscriptionType: 'Annual',
    notes: 'Here is\nSome notes...'
  };

  userSettings : UserSettings = { ...this.originalUserSettings };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ' + form.valid);
  }

}
