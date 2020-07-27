import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { AlertService } from "src/app/shared/alert/alert.service";
import { DeleteModalComponent } from "src/app/shared/delete-modal/delete-modal.component";
import { StudentModalComponent } from "../student-modal/student-modal.component";
import { StudentService } from "../core/student.service";
import { StudentModel } from "../core/student-model";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"],
})
export class StudentListComponent implements OnInit {
  students: StudentModel[];

  constructor(
    private studentsService: StudentService,
    private modalService: NgbModal,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  private loadStudents() {
    this.studentsService
      .getAll()
      .subscribe((result) => (this.students = result));
  }

  openStudentModal() {
    const modalRef = this.modalService.open(StudentModalComponent);
    modalRef.componentInstance.title = "Student";

    modalRef.result.then((result) => {
      this.studentsService
        .addStudent(result)
        .subscribe(() => this.loadStudents());
      this.alert.success("Student added");
      (error) => {
        this.alert.error("Please try later", "Unable to create student");
      };
    });
  }

  editStudent(student: StudentModel) {
    const modalRef = this.modalService.open(StudentModalComponent);
    modalRef.componentInstance.title = "Edit Student";
    modalRef.componentInstance.student = student;
    modalRef.componentInstance.btnLabel = "Edit";

    modalRef.result.then((result) => {
      if (result) {
        this.studentsService
          .editStudent(student.id, result)
          .subscribe(() => this.loadStudents());
      }
      (error) => {
        this.alert.error("Please try later", "Unable to edit student");
      };
    });
  }

  deleteStudent(student: StudentModel) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.title = student.firstName;

    modalRef.result.then((result) => {
      if ("Ok click") {
        this.studentsService.deleteStudent(student.id).subscribe(() => {
          this.loadStudents();
          this.alert.info("Delete Confirm");
          (error) => {
            this.alert.error("Please try later", "Unexpected error");
          };
        });
      }
    });
  }
}
