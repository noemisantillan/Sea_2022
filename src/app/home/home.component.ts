import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: MDBModalRef | null = null;
  constructor(private modalService: MDBModalService) { }

  ngOnInit(): void {
  }
  openModal() {
    this.modalRef = this.modalService.show(ModalComponent, 
    {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-full-height modal-top',
      containerClass: 'center',
      animated: true

  });
}
}
