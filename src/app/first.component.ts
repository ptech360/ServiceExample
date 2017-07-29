import {Component} from '@angular/core';
import {SharedService} from './shared.service';
@Component({
  selector:'first-component',
  templateUrl:'./first.html'
})
export class FirstComponent{
  public firstComponentVariable:any;
  constructor(private ss:SharedService){
    this.firstComponentVariable = "anant";
    this.ss.sharedVariable = this.firstComponentVariable;
  }
}