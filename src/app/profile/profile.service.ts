import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService implements Resolve<any> {
  onSelectedProfileChanged: BehaviorSubject<any>;
  profiles: any;
  profileIndex: number = 0;

  constructor(private httpClient: HttpClient) {
    this.onSelectedProfileChanged = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.getProfile()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  getProfile(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get('https://reqres.in/api/users?page=3').subscribe((response: any) => {
        this.profiles = response.data;
        if (this.profiles && this.profiles.length > 0) {
          this.onSelectedProfileChanged.next(this.profiles[0]);
        }
        console.log(response);
        resolve(response);
      }, reject);
    });
  }

  getNextProfile() {
    if (this.profiles) {
      if (this.profileIndex < this.profiles.length - 1) {
        this.profileIndex = this.profileIndex + 1;
      } else if (this.profileIndex == this.profiles.length - 1) {
        this.profileIndex = 0;
      }
      this.onSelectedProfileChanged.next(this.profiles[this.profileIndex]);
    }
  }

  getPreviousProfile() {
    if (this.profiles) {
      if (this.profileIndex > 0) {
        this.profileIndex = this.profileIndex - 1;
      } else if (this.profileIndex == 0) {
        this.profileIndex = this.profiles.length - 1;
      }
      this.onSelectedProfileChanged.next(this.profiles[this.profileIndex]);
    }
  }
}
