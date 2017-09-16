import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AddCustomerPage } from '../pages/add-customer/add-customer';
import { TabsPage } from '../pages/tabs/tabs';
import { CustomersPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';

export const firebaseConfig = {
  apiKey: "AIzaSyCTTgE4BZtYRpslwq74bQREmOXbrnHuqxE",
  authDomain: "beforelate-63bd5.firebaseapp.com",
  databaseURL: "https://beforelate-63bd5.firebaseio.com",
  projectId: "beforelate-63bd5",
  storageBucket: "beforelate-63bd5.appspot.com",
  messagingSenderId: "133104423608"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CustomersPage,
    HomePage,
    TabsPage,
    AddCustomerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CustomersPage,
    HomePage,
    TabsPage,
    AddCustomerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
