import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate ,CanDeactivate} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./app/auth.service";
import { Router} from '@angular/router';


@Injectable({
  providedIn: "root"
})
export class TestCanActivate implements CanActivate {
  constructor(private auth:AuthService ,private router:Router){
  
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("can activate check");
 
    if(this.auth.LoggedIn){
      return true;
    }
    else{
    this.router.navigate(['/login']);
      return false;
    }
  }
}


export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  }
  
  @Injectable({
    providedIn: "root"
  })

  export class TestCanDeactivate implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate): any {
      return component && component.canDeactivate ? component.canDeactivate() : true;
    }
  }