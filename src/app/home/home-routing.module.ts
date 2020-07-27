import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { HomeDetailComponent } from "./home-detail/home-detail.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  { path: "details/:id", component: HomeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomesRoutingModule {}
