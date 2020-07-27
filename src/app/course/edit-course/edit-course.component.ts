import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, AbstractControl } from "@angular/forms";
import { map } from "rxjs/operators";

import { CourseModel, Teacher, Student } from "../core/courseModel";
import { TeacherService } from "src/app/teacher/core/teacher.service";
import { StudentService } from "src/app/student/core/student.service";
import { CourseService } from "../core/course.service";
import { NgbCalendar, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-edit-course",
  templateUrl: "./edit-course.component.html",
  styleUrls: ["./edit-course.component.css"],
})
export class EditCourseComponent implements OnInit {
  courses: CourseModel;
  teacher: Teacher[];
  student: Student;
  courseForm: FormGroup;
  model: NgbDateStruct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private teacherService: TeacherService,
    private studentService: StudentService,
    private fb: FormBuilder,
    private calendar: NgbCalendar
  ) {}

  ngOnInit(): void {
    this.loadCourse();
    this.loadTeacher();
    this.loadStudents();
  }

  private loadCourse() {
    const { id } = this.activatedRoute.snapshot.params;
    this.courseService.getCourseById(id).subscribe((result) => {
      this.courses = result;
      this.createForm();
    });
  }

  private loadTeacher() {
    this.teacherService
      .getAll()
      .pipe(
        map((response) =>
          response.map((x) => ({
            id: x.id,
            name: `${x.firstName} ${x.lastName}`,
          }))
        )
      )
      .subscribe((response) => (this.teacher = response));
  }

  private loadStudents() {
    this.studentService
      .getAll()
      .pipe(
        map((result) =>
          result.map((student) => ({
            id: student.id,
            name: `${student.firstName} ${student.lastName}`,
          }))
        )
      )
      .subscribe((result) => (this.student = result));
  }

  private createForm() {
    this.courseForm = this.fb.group({
      name: [this.courses.name],
      description: [this.courses.description],
      city: [this.courses.city],
      startDate: [this.courses.startDate],
      endDate: [this.courses.endDate],
      students: [this.courses.students],
      teacher: [this.courses.teacher],
    });
  }

  save(course: CourseModel) {
    const { id } = this.activatedRoute.snapshot.params;
    this.courseService
      .editCourse(id, course)
      .subscribe(() => this.loadCourse());
  }

  get startDate(): AbstractControl {
    return this.courseForm.controls.startDate.value;
  }

  goBack() {
    history.back();
  }
}
