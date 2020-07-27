import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { CourseRoutingModule } from "./course-routing.module";

import { SharedModule } from "../shared/shared.module";
import { ListCourseComponent } from "./list-course/list-course.component";
import { CourseModalComponent } from "./course-modal/course-modal.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";

@NgModule({
  declarations: [
    CourseModalComponent,
    ListCourseComponent,
    EditCourseComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
    NgSelectModule,
    NgbDatepickerModule,
  ],
})
export class CourseModule {}
