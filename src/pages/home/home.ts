import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    // how to send email from client 
    //option 1: https://www.thepolyglotdeveloper.com/2016/05/send-emails-ionic-2-mobile-app-via-rackspace-mailgun-api/
    //option 2: https://github.com/hypery2k/cordova-email-plugin
  }

}
