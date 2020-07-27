import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../core/auth.service";

type CustomResponse = {
  token: string;
};

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  login() {
    const {
      invalid,
      value: { password, username },
    } = this.loginForm;
    if (invalid) return;
    this.authService
      .login(username, password)
      .subscribe((response: CustomResponse) => {
        this.authService.saveUser(username, response.token);
        this.router.navigate(["/"]), (error) => console.log(error);
      });
  }

  private createForm() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
}
