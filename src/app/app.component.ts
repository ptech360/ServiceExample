import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <button routerLink="/first">First Component</button>
  <button routerLink="/second">Second Component</button>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
