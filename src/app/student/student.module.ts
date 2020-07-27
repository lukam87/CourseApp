import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentRoutingModule } from "./student-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentModalComponent } from "./student-modal/student-modal.component";

@NgModule({
  declarations: [StudentListComponent, StudentModalComponent],
  imports: [CommonModule, StudentRoutingModule, SharedModule],
})
export class StudentModule {}
