import {Component} from '@angular/core';
import {SharedService} from './shared.service';
@Component({
  selector:'second-component',
  templateUrl:'./second.html'
})
export class SecondComponent{
  public secondComponentVariable:any;
  constructor(private ss:SharedService){
    this.secondComponentVariable = this.ss.sharedVariable;
  }
}