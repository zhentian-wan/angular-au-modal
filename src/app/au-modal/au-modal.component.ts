import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {AuModalService} from './au-modal.service';

@Component({
  selector: 'au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {

  @Input() body: TemplateRef<any>;
  constructor(
    private auModelService: AuModalService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.auModelService.close();
  }

  cancelCloseModal(evt: KeyboardEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }

}
