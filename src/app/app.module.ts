import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule  } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxPaginationModule} from 'ngx-pagination';

var firebaseConfig = {
  apiKey: "AIzaSyCiCM_psh9M79s5_pV8WDdLoh4xlvH0goA",
  authDomain: "sample-d8234.firebaseapp.com",
  databaseURL: "https://sample-d8234-default-rtdb.firebaseio.com",
  projectId: "sample-d8234",
  storageBucket: "sample-d8234.appspot.com",
  messagingSenderId: "751663947257",
  appId: "1:751663947257:web:2de882b4d33c7c64907128"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
