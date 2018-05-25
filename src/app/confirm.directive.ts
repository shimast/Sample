import { Directive,ElementRef,Renderer2,Input,HostListener,Output } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {WeatherComponent} from './weather/weather.component';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective{

  constructor(private we:WeatherComponent){}

  @Input() appConfirm = () => {};

  @HostListener('click',['$event'])
  confirmFirst(event:Event){
    const confirmed= window.confirm("Are you sure you want to do this??");
    if(confirmed){
      this.we.visitRangle();
    }
  };
}
