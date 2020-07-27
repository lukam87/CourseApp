import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomesRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home/home.component";
import { HomeCardComponent } from "./home-card/home-card.component";
import { SharedModule } from "../shared/shared.module";
import { HomeDetailComponent } from "./home-detail/home-detail.component";

@NgModule({
  declarations: [HomeComponent, HomeCardComponent, HomeDetailComponent],
  imports: [CommonModule, HomesRoutingModule, SharedModule],
})
export class HomeModule {}
