import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educamedia',
  templateUrl: './educamedia.component.html',
  styleUrls: ['./educamedia.component.scss']
})
export class EducamediaComponent implements OnInit {
  public checkModel = { left: true, middle: false, right: false };
  public radioModel = 'Left';
  constructor() { }

  ngOnInit(): void {
  }

  ruta(){
    console.log("ruta");
  }

}
