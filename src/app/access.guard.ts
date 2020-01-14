import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AccessGuard implements CanActivate{
    name: string;
    canActivate(route: ActivatedRouteSnapshot): boolean {
        this.name = route.data.name;
        return true;
    }
}