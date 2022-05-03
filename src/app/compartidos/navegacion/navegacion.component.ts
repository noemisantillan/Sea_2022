import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  constructor(private router:Router) { }
  nombre: string;
  ngOnInit(): void {
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

}
