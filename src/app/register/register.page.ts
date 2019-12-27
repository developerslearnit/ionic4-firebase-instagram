import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  signUpOption: any = "phone";
  constructor() {}

  ngOnInit() {}

  switchTab(tab) {
    this.signUpOption = tab;
  }
}
