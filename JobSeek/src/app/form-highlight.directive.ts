import { Directive ,ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormHighlight]'
})
export class FormHighlightDirective {

  @Input('appFormHighlight') highlightColor: string ="";

  constructor(private eleRef : ElementRef) { 
  
  }

  @HostListener('click') onclicklick(){
    this.highlight(this.highlightColor);
  }

  private highlight(color: string) {
    this.eleRef.nativeElement.style.backgroundColor = color;
  }
 
}
