import {  Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocusoutOnEnter]'
})

export class FocusoutOnEnterDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.el.nativeElement.onkeyup = (e)=>{
      if(e.keyCode === 13)
        e.target.blur();};
  }

}
