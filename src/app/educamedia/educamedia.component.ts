import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { VideosService } from '../services/videos.service';
import {  FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-educamedia',
  templateUrl: './educamedia.component.html',
  styleUrls: ['./educamedia.component.scss']
})
export class EducamediaComponent implements OnInit {

  forma: FormGroup;
  selectControl = new FormControl('1');
  selectedValue = '1';
  selectedValue2 = '1';
  nivel = [
    { value: '1', label: 'Nivel Inicial' },
    { value: '2', label: 'Nivel Avanzado' },
  ];
  video = [
    { value: '1', label: 'Apoyo Tematico' },
    { value: '2', label: 'Recapitulación Semanal' },
 
  ];

  id_asg: number;
  id_nivel: number = 0;
  id_video: number = 0;

  public asg: string;
  headElements = ['Sesión', 'Nombre', 'tipo de video', 'Link'];
  elements: any = [];
  nombre: string;

  constructor(private router:Router,  private rutas: ActivatedRoute, private videoservice: VideosService) {
    this.forma = new FormGroup({
      nivel: new FormControl(),
      video: new FormControl()
    });

    //this.asig();
    //this.buscaAsg(this.id_asg , 1, 1);
   }


  ngOnInit(): void {
  }
  
  asig(){
    this.rutas.params.subscribe(
      parametros => {
        this.asg = parametros.asg;
      }
    );

    switch (this.asg){
      case "lyc":
        this.nombre = "Lengua y Comunicación";
        this.id_asg = 1;
        //this.ruta(1);
        
      break;
      case "cyrp":
        //this.ruta(2);
        this.nombre = "Cálculo y Resolución de Problemas";
        this.id_asg = 2;
        
      break;
      case "sya":
        //this.ruta(3);
        this.nombre = "Salud y Ambiente";
        this.id_asg = 3;
        
      break;
      case "fcys":
        //this.ruta(4);
        this.nombre = "Familia, Comunidad y Sociedad";
        this.id_asg = 4;
        
      break;
    }
  }

  ruta(id){
    switch (id){
      case 1:
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>this.router.navigate(['/audiovisuales/lyc']));
      break;
      case 2:
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>this.router.navigate(['/audiovisuales/cyrp']));
      break;
      case 3:
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>this.router.navigate(['/audiovisuales/sya']));
      break;
      case 4:
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>this.router.navigate(['/audiovisuales/fcys']));
      break;
    }
    
  }

  buscaAsg(id, nivel, video){
    //console.log(id,nivel, video);
    const dat = {
      "asg": id,
      "nivel": nivel,
      "video": video
    };
    //console.log(dat);
    this.videoservice.postUnit(dat).subscribe(
      res => {
        //console.log(res);
        this.elements = res;
      },
      err =>{
        console.log(err);
      }
    );

  }

  get nivelNoValido(){
    return !this.forma.get('nivel').value && this.forma.get('nivel')?.touched
  }

  get videoNoValido(){
    return !this.forma.get('video').value && this.forma.get('video')?.touched
  }

  buscar(){

    if(!this.forma.controls.nivel.value || !this.forma.controls.video.value){
      return Object.values( this.forma.controls ).forEach( control => {
        if( control instanceof FormGroup){
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        }else{
          control.markAsTouched();
        }
      });

    }else{
      this.id_nivel = this.forma.controls.nivel.value;
      this.id_video = this.forma.controls.video.value;
      this.asig();
      this.buscaAsg(this.id_asg , this.id_nivel, this.id_video);
    }
  }

}
