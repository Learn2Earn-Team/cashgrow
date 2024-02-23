import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    Resolve,
    Router,
    RouterStateSnapshot,
  } from '@angular/router';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
  import { ApicallService } from 'src/app/services/apicall.service';
  
  @Injectable({ providedIn: 'root' })
  export class RegiesterdResolver implements Resolve<any> {
    constructor(public apiCall: ApicallService) {}
  
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<any> | Promise<any> {
      const params: any = route.queryParams;
      console.log(params)
      return params;
    }
  }
  