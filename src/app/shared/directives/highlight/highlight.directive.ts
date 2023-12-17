import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('0px 0px 8px #fff');

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }

  private highlight(textShadow: string) {
    this.el.nativeElement.style.textShadow = textShadow;
    this.el.nativeElement.style.transition = 'text-shadow 1s ease'
  }

}
