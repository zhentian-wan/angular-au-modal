import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuModalModule} from './au-modal/au-modal.module';
import {AuInputModule} from 'au-input';
import {AuTabPanelModule} from 'au-tab-panel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuInputModule,
    AuTabPanelModule,
    AuModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
