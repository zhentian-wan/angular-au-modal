import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective {

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
    private viewContainer: ViewContainerRef
  ) { }

}
