import { Directive,ElementRef,Renderer2,Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Directive({
  selector: '[appShadow]'
})
export class HighlightDirective implements OnInit {

  @Input() appShadow:string;
  @Input()  appShadowX:string;
  @Input()  appShadowY:string;
  @Input()  appShadowblur:string;

  constructor(private el:ElementRef,private renderer:Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement,'box-shadow','2px 2px 12px #58A362');
  }

ngOnInit(){
  let shadowStr = `${ this.appShadowX } ${ this.appShadowY } ${ this.appShadowblur } ${ this.appShadow }`;
  this.renderer.setStyle(this.el.nativeElement, 'box-shadow', shadowStr);
}
}
