import {NgModule} from "@angular/core";
import {AuModalComponent} from "./au-modal.component";
import {CommonModule} from "@angular/common";
import { AuModalOpenOnClickDirective } from './au-modal-open-on-click.directive';

@NgModule({
  declarations: [AuModalComponent, AuModalOpenOnClickDirective],
  imports: [
    CommonModule
  ],
  exports: [
    AuModalComponent,
    AuModalOpenOnClickDirective
  ]
})
export class AuModalModule {}
