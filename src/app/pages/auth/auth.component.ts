import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ApicallService } from "src/app/services/apicall.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent {
  constructor(
    private route: ActivatedRoute,
    private authService: ApicallService
  ) {}

  ngOnInit(): void {
    // Extract the authorization code from the URL query parameters
    const code = this.route.snapshot.queryParamMap.get("code");
    if (code) {
      // If authorization code is present, exchange it for an access token
      this.authService.exchangeCodeForToken(code).subscribe(
        (response) => {
          // Handle successful token exchange
          console.log("Access token:", response.access_token);
          // Here you can save the access token to use it for subsequent API calls
        },
        (error) => {
          // Handle error
          console.error("Error exchanging code for token:", error);
        }
      );
    } else {
      // Handle error: No authorization code found in the URL
      console.error("No authorization code found in URL.");
    }
  }
}
