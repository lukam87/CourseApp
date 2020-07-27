import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TeacherRoutingModule } from "./teacher-routing.module";
import { TeacherModalComponent } from "./teacher-modal/teacher-modal.component";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [TeacherModalComponent, TeacherListComponent],
  imports: [CommonModule, TeacherRoutingModule, SharedModule],
})
export class TeacherModule {}
