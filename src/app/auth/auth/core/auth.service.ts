import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  url = "login";

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post(`${environment.API_URL}${this.url}`, {
      username,
      password,
    });
  }

  saveUser(username: string, token: string) {
    localStorage.setItem("loggedUser", JSON.stringify({ username, token }));
  }

  logout() {
    localStorage.removeItem("loggedUser");
    this.router.navigate(["auth/login"]);
  }

  get loggedIn(): boolean {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (loggedUser && loggedUser.token) {
      return true;
    }
    return false;
  }
}
