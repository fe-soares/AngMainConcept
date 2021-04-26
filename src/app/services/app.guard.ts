import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable() 
export class AuthGuard implements CanLoad, CanActivate{
    user = {admin: false, logged: false}

    canLoad() : boolean{
       return this.user.admin;
    }

    canActivate(): boolean {
        return this.user.logged;
    }
}