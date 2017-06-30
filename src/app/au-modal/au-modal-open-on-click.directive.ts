import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuModalService} from './au-modal.service';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit{
  ngOnInit(): void {
    this.auModalService.close$
      .subscribe(() => this.viewContainer.clear());
  }

  @Input()
  set auModalOpenOnClick (els) {

    let elements: HTMLBaseElement[];

    if(Array.isArray(els)) {
      elements = els;
    } else {
      elements = [els];
    }

    elements.forEach(el => {
      el.addEventListener('click', () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.template);
      });
    });
  }

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auModalService: AuModalService
  ) { }

}
