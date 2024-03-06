import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Preferences } from "@capacitor/preferences";
import { remove } from "../localStorage/LocalStorage";
export const apiUrl = "https://learn2earnn.com/products/cashgrow/public/";
//  export const apiUrl = "https://7starcommercial.com/SMM/public/";

//  export const apiUrl = 'http://localhost/SMM/public/';
//export const apiUrl = "http://localhost/SMM_API/public/";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public http: HttpClient, public router: Router) {}

  con(data: any, type: any) {
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + type, JSON.stringify(data)).subscribe(
        (res) => {
          resolve(JSON.stringify(res));
        },
        (err) => {
          reject(err);
          console.log(err);
        }
      );
    });
  }

  // geting posts

  getdata(type: any) {
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + type).subscribe(
        (res) => {
          resolve(JSON.stringify(res));
        },
        (err) => {
          reject(err);
          console.log(err);
        }
      );
    });
  }

  // public isLoggedIn(): boolean {
  //   const result = Preferences.get({ key: 'getUser' })
  //   console.log(result)
  //   if (result == null) {
  //     return false;
  //   } else
  //     return true;
  // }

  public isLoggedIn(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      Preferences.get({ key: "user" })
        .then((result: any) => {
          const x = result.value;
          console.log(x);
          resolve(x !== null);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          resolve(false); // Resolve to false in case of an error
        });
    });
  }

  async logout() {
    await remove("user");
    this.router.navigate(["/login"]);
  }
}
