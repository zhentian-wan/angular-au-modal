import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {AuModalService} from './au-modal.service';
import {EventManager} from '@angular/platform-browser';

@Component({
  selector: 'au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {

  @Input() body: TemplateRef<any>;
  @Input() context: any;
  @Input() closeOnClickOutside = true;
  @Input() closeOnEsc = true;

  constructor(private auModelService: AuModalService,
              private eventManage: EventManager) {
  }

  ngOnInit() {
    this.eventManage.addGlobalEventListener('window', 'keyup.esc', () => {
      if (this.closeOnEsc) {
        this.close();
      }
    })
  }

  onClick() {
    if (this.closeOnClickOutside) {
      this.close();
    }
  }

  close() {
    this.auModelService.close();
  }

  cancelCloseModal(evt: KeyboardEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }

}
