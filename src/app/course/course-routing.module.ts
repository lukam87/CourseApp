import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListCourseComponent } from "./list-course/list-course.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";

const routes: Routes = [
  { path: "", component: ListCourseComponent },
  { path: "edit/:id", component: EditCourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
