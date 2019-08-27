import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    FormsModule, AngularFireDatabaseModule, AngularFireModule.initializeApp({
      apiKey: "AIzaSyCgkvKdGynB-ah_PVTt6rqyXZnZjYLGhYA",
      authDomain: "baker-e131b.firebaseapp.com",
      databaseURL: "https://baker-e131b.firebaseio.com",
      projectId: "baker-e131b",
      storageBucket: "baker-e131b.appspot.com",
      messagingSenderId: "42093386965",
      appId: "1:42093386965:web:87b4d458e7f67a8d"

    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
