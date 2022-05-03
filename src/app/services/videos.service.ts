import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private url = 'https://sea.sep.gob.mx/php/';
  //private url = './php/';

  constructor(private http: HttpClient) { }

  postUnit(dat){
    return this.http.post(
      `${this.url}videos.php`, dat
    );
  }
}
