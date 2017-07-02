import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuModalService} from './au-modal.service';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    this.elements.forEach((el) => {
      el.removeEventListener('click', this.handleClick)
    })
  }

  elements: HTMLBaseElement[];

  ngOnInit(): void {
    this.auModalService.close$
      .subscribe(() => this.viewContainer.clear());
  }

  @Input()
  set auModalOpenOnClick (els) {

    if(Array.isArray(els)) {
      this.elements = els;
    } else {
      this.elements = [els];
    }

    this.elements.forEach(el => {
      el.addEventListener('click', this.handleClick);
    });
  }

  handleClick = () => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.template);
  };

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auModalService: AuModalService
  ) { }

}
