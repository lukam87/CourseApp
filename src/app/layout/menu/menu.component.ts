import { Component, OnInit } from "@angular/core";

type Menu = {
  name: string;
  path: string;
};

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  menu: Menu[] = [
    { name: "Home", path: "/home" },
    { name: "Courses", path: "/courses" },
    { name: "Teachers", path: "/teachers" },
    { name: "Students", path: "/students" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
