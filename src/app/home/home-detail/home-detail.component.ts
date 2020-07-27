import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CourseModel } from "src/app/course/core/courseModel";
import { CourseService } from "src/app/course/core/course.service";

@Component({
  selector: "app-home-detail",
  templateUrl: "./home-detail.component.html",
  styleUrls: ["./home-detail.component.css"],
})
export class HomeDetailComponent implements OnInit {
  courseDetail: CourseModel;

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCourse();
  }

  get startDateFormated(): string {
    if (!this.courseDetail.startDate) return ``;

    const { day, month, year } = this.courseDetail.startDate;

    return `${day}/${month}/${year}`;
  }

  get endDateFormated(): string {
    if (!this.courseDetail.endDate) return ``;

    const { day, month, year } = this.courseDetail.endDate;

    return `${day}/${month}/${year}`;
  }

  getCourse() {
    const { id } = this.activatedRoute.snapshot.params;

    this.courseService.getCourseById(id).subscribe((result) => {
      this.courseDetail = result;
    });
  }
}
