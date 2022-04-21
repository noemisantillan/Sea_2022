import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educamedia',
  templateUrl: './educamedia.component.html',
  styleUrls: ['./educamedia.component.scss']
})
export class EducamediaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ruta(){
    console.log("ruta");
  }

}
