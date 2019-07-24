import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService implements Resolve<any> {
  onSurveyChanged: BehaviorSubject<any>;
  url: string = 'https://api.myjson.com/bins/1c9yon';

  constructor(private httpClient: HttpClient) {
    this.onSurveyChanged  = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.getSurvey()
      ]).then(() => {
        resolve();
      }, reject);
    });
  }

  getSurvey(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.url).subscribe((response: any) => {
        console.log(response);
        this.onSurveyChanged.next(response);
        resolve();
      }, reject);
    });
  }
}