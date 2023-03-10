import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[HoverAffect]'
})
export class HoverAffectDirective {
  @Input() affect?: string
  @HostBinding('style.textDecoration') textDecoration?: string;
  @HostBinding('style.fontWeight') fontWeight?: string;

  @HostListener('mouseenter') onMouseEnter() {
    if(this.affect === 'underline') {
      this.textDecoration = 'underline';
    } else if(this.affect === 'bold') {
      this.fontWeight = 'bold';
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if(this.affect === 'underline') {
      this.textDecoration = 'none';
    } else if(this.affect === 'bold') {
      this.fontWeight = 'normal';
    }
  }
}
