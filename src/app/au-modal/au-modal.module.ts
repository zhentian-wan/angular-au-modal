import {NgModule, ModuleWithProviders} from '@angular/core';
import {AuModalComponent} from './au-modal.component';
import {CommonModule} from '@angular/common';
import { AuModalOpenOnClickDirective } from './au-modal-open-on-click.directive';
import {AuModalService} from 'app/au-modal/au-modal.service';

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
export class AuModalModule {

  /*
  * Inject AuModuleService here instead of global providers is for lazy loading
  * to prevent duplicate serivce name.
  * */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuModalModule,
      providers: [
        AuModalService
      ]
    }
  }
}
