import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";

import { CommonHeaderComponent } from "./common-header/common-header.component";
import { DeleteModalComponent } from "./delete-modal/delete-modal.component";

@NgModule({
  declarations: [DeleteModalComponent, CommonHeaderComponent],
  imports: [CommonModule, ToastrModule.forRoot(), ReactiveFormsModule],

  exports: [DeleteModalComponent, ReactiveFormsModule, CommonHeaderComponent],
})
export class SharedModule {}
