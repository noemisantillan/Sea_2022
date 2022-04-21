import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private url = 'http://10.3.83.128/22-Sea_2022/php/';

  constructor(private http: HttpClient) { }

  postUnit(dat){
    return this.http.post(
      `${this.url}videos.php`, dat
    );
  }
}
