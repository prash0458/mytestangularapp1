import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBluebackgrounddirective]'
})
export class BluebackgrounddirectiveDirective {

  constructor(private el: ElementRef) { 
     el.nativeElement.style.backgroundColor= 'yellow';
  }   

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('red');
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
