import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Preferences } from "@capacitor/preferences";
import { remove } from "../localStorage/LocalStorage";
import { Observable } from "rxjs";
import { ToastService } from "./toast.service";

export const apiUrl = "https://learn2earnn.com/products/cashgrow/public/";
// export const apiUrl = "https://thecodingverse.com/L2E/cashgrow/public/";
// export const apiUrl = "http://localhost/cashgrow-API/public/";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    public http: HttpClient,
    private fireauth: AngularFireAuth,
    public router: Router,
    private toast: ToastService
  ) {}

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
  public register(email: string, password: string): Promise<boolean> {
    return this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        this.sendEmailForVarification(res.user);
        return true;
      },
      (err) => {
        if (
          err.message.includes(
            "The email address is already in use by another account."
          )
        ) {
          this.toast.ErrorToast(
            "The email address is already in use by another account.",
            "error"
          );
        }
        return false;
      }
    );
  }

  public sendEmailForVarification(user: any) {
    user.sendEmailVerification().then(
      (res: any) => {
        this.toast.SuccessToast(
          "Send Varification mail to your email.",
          "Good Job!"
        );
      },
      (err: any) => {
        this.toast.ErrorToast(
          "Something went wrong. Not able to send mail to your email.",
          "Error"
        );
      }
    );
  }
  public checkEmailVerification(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.fireauth.onAuthStateChanged((user) => {
        if (user) {
          user
            .reload()
            .then(() => {
              if (user.emailVerified) {
                this.toast.SuccessToast(
                  "You have successfully verified your email address.",
                  "Success"
                );
                resolve(true);
              } else {
                resolve(false);
              }
            })
            .catch((error) => {
              // Handle any errors during the reload process
              this.toast.ErrorToast(
                "An error occurred. Please try again.",
                "Error"
              );
              reject(error);
            });
        } else {
          // No user is signed in
          resolve(false);
        }
      });
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
