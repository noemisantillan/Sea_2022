import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-emergente',
  templateUrl: './emergente.component.html',
  styleUrls: ['./emergente.component.scss']
})
export class EmergenteComponent implements OnInit {
  title: string | null = null;
  url: string | null = null;
  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }

}
