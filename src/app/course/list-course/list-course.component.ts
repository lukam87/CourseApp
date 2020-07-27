import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";

import { CourseModel } from "../core/courseModel";
import { CourseService } from "../core/course.service";
import { CourseModalComponent } from "../course-modal/course-modal.component";
import { AlertService } from "src/app/shared/alert/alert.service";
import { DeleteModalComponent } from "src/app/shared/delete-modal/delete-modal.component";

@Component({
  selector: "app-list-course",
  templateUrl: "./list-course.component.html",
  styleUrls: ["./list-course.component.css"],
})
export class ListCourseComponent implements OnInit {
  courses: CourseModel[];

  constructor(
    private courseService: CourseService,
    private modalService: NgbModal,
    private alert: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  private loadCourses() {
    this.courseService.getAll().subscribe((result) => (this.courses = result));
  }

  openCourse() {
    const modalRef = this.modalService.open(CourseModalComponent);
    modalRef.componentInstance.title = "Courses";

    modalRef.result.then((result) => {
      this.courseService.addCourse(result).subscribe(
        (success) => this.loadCourses(),
        (error) => {
          this.alert.error("Please try later", "Unexpected error");
        }
      );
    });
  }

  editCourse(course: CourseModel) {
    this.router.navigate(["courses/edit", course.id]);
  }

  deleteCourse(course: CourseModel) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.title = course.name;

    modalRef.result.then((result) => {
      if ("Ok click") {
        this.courseService.deleteCourse(course.id).subscribe(() => {
          this.loadCourses();
          this.alert.info("Delete Confirm");
          (error) => {
            this.alert.error("Please try later", "Unexpected error");
          };
        });
      }
    });
  }
}
