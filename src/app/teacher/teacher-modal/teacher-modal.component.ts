import { Component, OnInit, Input } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TeacherModel } from "../core/teacher-model";

@Component({
  selector: "app-teacher-modal",
  templateUrl: "./teacher-modal.component.html",
  styleUrls: ["./teacher-modal.component.css"],
})
export class TeacherModalComponent implements OnInit {
  @Input() title: string;
  @Input() teacher: TeacherModel;
  @Input() btnLabel: string = "Add";
  teacherForm: FormGroup;

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.createForm();
    this.editTeacher();
  }

  private createForm() {
    this.teacherForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      subject: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      gender: ["male", Validators.required],
      company: [null],
    });
  }

  editTeacher() {
    if (this.teacher) {
      this.teacherForm.patchValue(this.teacher);
    }
  }

  addTeacher() {
    this.activeModal.close(this.teacherForm.value);
  }

  get firstNameField(): AbstractControl {
    return this.teacherForm.controls.firstName;
  }

  get lastNameField(): AbstractControl {
    return this.teacherForm.controls.lastName;
  }

  get emailField(): AbstractControl {
    return this.teacherForm.controls.email;
  }

  get subject(): AbstractControl {
    return this.teacherForm.controls.subject;
  }
}
