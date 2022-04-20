import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-tabla1',
  templateUrl: './tabla1.component.html',
  styleUrls: ['./tabla1.component.scss']
})
export class Tabla1Component implements OnInit  {
  
  constructor() { }

  elements: any = [];
  headElements = ['id', 'first', 'last', 'handle'];

  ngOnInit() {
    for (let i = 1; i <= 20; i++) {
      this.elements.push({ id: i, first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });
    }
  }


 


}
