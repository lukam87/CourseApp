import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { DeleteModalComponent } from "src/app/shared/delete-modal/delete-modal.component";
import { AlertService } from "src/app/shared/alert/alert.service";
import { TeacherService } from "../core/teacher.service";
import { TeacherModalComponent } from "../teacher-modal/teacher-modal.component";
import { TeacherModel } from "../core/teacher-model";

@Component({
  selector: "app-teacher-list",
  templateUrl: "./teacher-list.component.html",
  styleUrls: ["./teacher-list.component.css"],
})
export class TeacherListComponent implements OnInit {
  teachers: TeacherModel[];

  constructor(
    private teacherService: TeacherService,
    private modalService: NgbModal,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.loadTeacher();
  }

  private loadTeacher() {
    this.teacherService
      .getAll()
      .subscribe((result) => (this.teachers = result));
  }

  openTeacherModal() {
    const modalRef = this.modalService.open(TeacherModalComponent);
    modalRef.componentInstance.title = "Teacher";

    modalRef.result.then((result) => {
      this.teacherService.addTeacher(result).subscribe((result) => {
        this.loadTeacher();
        this.alert.success("Teacher Added");
        (error) => {
          this.alert.error("Please try later", "Unable to create teacher");
        };
      });
    });
  }

  editTeacher(teacher: TeacherModel) {
    const modalRef = this.modalService.open(TeacherModalComponent);
    modalRef.componentInstance.teacher = teacher;
    modalRef.componentInstance.title = "Teacher";
    modalRef.componentInstance.btnLabel = "Edit";

    modalRef.result.then((result) => {
      this.teacherService
        .editTeacher(teacher.id, result)
        .subscribe((result) => {
          this.loadTeacher();
          this.alert.success("Edit Confirm");
          (error) => {
            this.alert.error("Please try later", "Unable to edit teacher");
          };
        });
    });
  }

  deleteTeacher(teacher: TeacherModel) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.title = teacher.firstName;

    modalRef.result.then((result) => {
      if ("Ok click") {
        this.teacherService.deleteTeacher(teacher.id).subscribe(() => {
          this.loadTeacher();
          this.alert.info("Delete Confirm");
          (error) => {
            this.alert.error("Please try later", "Unexpected error");
          };
        });
      }
    });
  }
}
