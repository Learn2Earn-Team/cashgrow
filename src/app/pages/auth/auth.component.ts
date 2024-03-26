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

  ngOnInit(): void {}
}
