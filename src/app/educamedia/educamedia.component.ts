import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { VideosService } from '../services/videos.service';


@Component({
  selector: 'app-educamedia',
  templateUrl: './educamedia.component.html',
  styleUrls: ['./educamedia.component.scss']
})
export class EducamediaComponent implements OnInit {
  //public checkModel = { left: true, middle: false, middle2: false, right: false };
  //public radioModel = 'left';
  public asg: string;
  headElements = ['Sesión', 'Nombre', 'tipo de video', 'Link'];
  elements: any = [];
  constructor(private router:Router,  private rutas: ActivatedRoute, private videoservice: VideosService) {
    this.rutas.params.subscribe(
      parametros => {
        this.asg = parametros.asg;
      }
    );
    switch (this.asg){
      case "lyc":
        //this.ruta(1);
        this.buscaAsg(1);
        //this.checkModel = { left: true, middle: false, middle2: false, right: false };
        //this.radioModel = 'Left';
        
      break;
      case "cyrp":
        //this.ruta(2);
        this.buscaAsg(2);
        //this.checkModel = { left: false, middle: true, middle2: false, right: false };
        //this.radioModel = 'middle';
        
      break;
      case "sya":
        //this.ruta(3);
        this.buscaAsg(3);
        //this.checkModel = { left: false, middle: false, middle2: true, right: false };
        //this.radioModel = 'middle2';
        
      break;
      case "fcys":
        //this.ruta(4);
        this.buscaAsg(4);
        //this.checkModel = { left: false, middle: false, middle2: false, right: true };
        //this.radioModel = 'right';
        
      break;
    }
   }


  ngOnInit(): void {
  }

  ruta(id){
    switch (id){
      case 1:
        this.buscaAsg(1);
        this.router.navigate(['/audiovisuales/lyc']);
        
      break;
      case 2:
        this.buscaAsg(2);
        this.router.navigate(['/audiovisuales/cyrp']);
        
      break;
      case 3:
        this.buscaAsg(3);
        this.router.navigate(['/audiovisuales/sya']);
        
      break;
      case 4:
        this.buscaAsg(4);
        this.router.navigate(['/audiovisuales/fcys']);
        
      break;
    }
    
  }

  buscaAsg(id){
    const dat = {
      "asg": id
    };
    //console.log(dat);
    this.videoservice.postUnit(dat).subscribe(
      res => {
        console.log(res);
        this.elements = res;
      },
      err =>{
        console.log(err);
      }
    );

  }

}
