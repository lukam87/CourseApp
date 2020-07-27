import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CourseService } from "src/app/course/core/course.service";
import { CourseModule } from "src/app/course/course.module";
import { CardItem } from "../core/card-item";
import { CourseModel } from "src/app/course/core/courseModel";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  courses: CourseModel[];
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
    console.log(this.courses);
  }

  getCourses() {
    this.courseService.getAll().subscribe((result) => {
      this.courses = result;
    });
  }
}
