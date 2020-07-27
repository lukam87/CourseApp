import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { StudentModel } from "../core/student-model";

@Component({
  selector: "app-student-modal",
  templateUrl: "./student-modal.component.html",
  styleUrls: ["./student-modal.component.css"],
})
export class StudentModalComponent implements OnInit {
  @Input() title: string;
  @Input() student: StudentModel;
  @Input() btnLabel: string = "Add";
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.createForm();
    this.editStudent();
  }

  private createForm() {
    this.studentForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      interstedFor: [],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      gender: ["male", Validators.required],
    });
  }

  editStudent() {
    if (this.student) {
      this.studentForm.patchValue(this.student);
    }
  }

  addStudent() {
    this.activeModal.close(this.studentForm.value);
  }

  get firstNameField(): AbstractControl {
    return this.studentForm.controls.firstName;
  }

  get lastNameField(): AbstractControl {
    return this.studentForm.controls.lastName;
  }

  get emailField(): AbstractControl {
    return this.studentForm.controls.email;
  }

  get phoneField(): AbstractControl {
    return this.studentForm.controls.phone;
  }
}
