import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programacionasesores',
  templateUrl: './programacionasesores.component.html',
  styleUrls: ['./programacionasesores.component.scss']
})
export class ProgramacionasesoresComponent implements OnInit {

  elements: any = [
    /*[ {name:'ABRIL', doc:'.pdf'}, {name:'ABRIL', doc:'.pdf'} ],
    [ {name:'MAYO', doc:'.pdf'}, {name:'MAYO', doc:'.pdf'} ],
    [ {name:'JUNIO', doc:'.pdf'}, {name:'JUNIO', doc:'.pdf'} ],*/
    
    
    
  ];

  headElements = ['Canal 15', 'Canal 27'];

  constructor() { }

  ngOnInit(): void {
  }

}
