import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { EmergenteComponent } from '../modal/emergente/emergente.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: MDBModalRef | null = null;

  cards = [
    {
      title: 'Norma Gisela Huerta',
      img: './assets/img/experiencias/7.png',
      url: 'https://www.youtube.com/watch?v=-s3LZXLtgxo',
      tipo: 2
    },
    {
      title: 'Kendra Tabata García Flores Parte 1',
      img: './assets/img/experiencias/1.png',
      url: 'oYb0kYcQA3g',
      tipo: 1
    },
    {
      title: 'Kendra Tabata García Flores Parte 2',
      img: './assets/img/experiencias/2.png',
      url: 'iVBZNbEuNv4',
      tipo: 1
    },
    {
      title: 'Juana Aguilar Oros',
      img: './assets/img/experiencias/3.png',
      url: 'VOPvNeCnBL4',
      tipo: 1
    },
    {
      title: 'Assandy García Azuara',
      img: './assets/img/experiencias/4.png',
      url: '4endlCPZSTA',
      tipo: 1
    },
    {
      title: 'Betzy Domínguez Mateo',
      img: './assets/img/experiencias/5.png',
      url: 'twCfZNRE-sQ',
      tipo: 1
    },
    {
      title: 'Ingrid Janeth López Ramírez',
      img: './assets/img/experiencias/6.png',
      url: 'o2VAqSnW6Dk',
      tipo: 1
    }
  ];

  slides: any = [[]];

  constructor(private modalService: MDBModalService) { }

  ngOnInit(): void {
    this.slides = this.chunk(this.cards, 3);
  }
  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent, 
    {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true,
      ignoreBackdropClick: true,
      class: 'modal-lg',
      containerClass: 'center',
      animated: true

    });
  }
  emergenteModal(tit, dir) {
    this.modalRef = this.modalService.show(EmergenteComponent, 
    {
      data: { title: tit, url: 'https://www.youtube.com/embed/'+dir },
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true,
      ignoreBackdropClick: true,
      class: 'modal-lg text-m',
      containerClass: 'center',
      animated: true
      
    });
  }
}
