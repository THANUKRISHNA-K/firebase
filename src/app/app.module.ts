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
import { RouterModule,Routes} from '@angular/router';
import { UpanddownComponent } from './upanddown/upanddown.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './image/image.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestCanActivate,TestCanDeactivate} from '../guards';

const routes:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"login",component:LoginComponent },
  {path:"signup",component:SignupComponent },
  {path:"home",component:ImagesComponent,canActivate:[TestCanActivate],canDeactivate: [TestCanDeactivate],children:[
    {path:"upload",component:ImageComponent},
    {path:"gallery",component:ImageListComponent},
    {path:"data",component:UpanddownComponent}
  ]}]
  // Srikrishna
  // var firebaseConfig = {
  //   apiKey: "AIzaSyAVyawKSLQ2K7Sc84liEERd3XpQfh4_5GI",
  //   authDomain: "simpledb-e21aa.firebaseapp.com",
  //   databaseURL: "https://simpledb-e21aa-default-rtdb.firebaseio.com",
  //   projectId: "simpledb-e21aa",
  //   storageBucket: "simpledb-e21aa.appspot.com",
  //   messagingSenderId: "187379523045",
  //   appId: "1:187379523045:web:e349a94e7ea4cca610630c",
  //   measurementId: "G-N46TLM8H82"
  // };
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
    AppComponent,
    UpanddownComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent,
    LoginComponent,
    SignupComponent
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
    NgxPaginationModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
