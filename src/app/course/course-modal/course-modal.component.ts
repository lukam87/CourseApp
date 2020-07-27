import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {
  NgbActiveModal,
  NgbCalendar,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";
import { CourseModel } from "../core/courseModel";

@Component({
  selector: "app-course-modal",
  templateUrl: "./course-modal.component.html",
  styleUrls: ["./course-modal.component.css"],
})
export class CourseModalComponent implements OnInit {
  @Input() title: string;
  courseForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.courseForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      city: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
    });
  }

  addCourse() {
    this.activeModal.close(this.courseForm.value);
  }
}
