import {NgModule} from "@angular/core";
import {AuModalComponent} from "./au-modal.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AuModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AuModalComponent
  ]
})
export class AuModalModule {}
