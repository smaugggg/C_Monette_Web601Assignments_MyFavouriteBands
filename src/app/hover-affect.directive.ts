import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[HoverAffect]'
})
export class HoverAffectDirective {
  @HostBinding('style.textDecoration') textDecoration?: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.textDecoration = 'underline';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.textDecoration = 'none';
  }
}
