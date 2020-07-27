import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { CourseModel } from "src/app/course/core/courseModel";

@Component({
  selector: "app-home-card",
  templateUrl: "./home-card.component.html",
  styleUrls: ["./home-card.component.css"],
})
export class HomeCardComponent implements OnInit {
  @Input() course: CourseModel;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  courseDetails() {
    this.router.navigate(["home/details", this.course.id]);
  }
}
