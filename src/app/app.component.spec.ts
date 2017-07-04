import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {By} from '@angular/platform-browser';

let component, fixture, el, modal;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    modal = el.query(By.css('#testModal'));

    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));


  it('should not add the modal to the page, if the modal is close', () => {

      expect(modal).toBeFalsy();
  });

  it('should open the modal when the test button is clciked', () => {
      fixture.nativeElement.querySelector("#testButton").click();
      fixture.detectChanges();
      const opendModal = fixture.nativeElement.querySelector("#testModal");
      expect(opendModal).toBeTruthy();
  });
});
