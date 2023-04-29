import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaComponent } from '../componentes/contenido/acerca/acerca.component';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http:HttpClient) { }

  obtenerdatos():Observable<any>{ 
    return this.http.get('./assets/data/data.json')
    
  }

  public getDatos(url:string):Observable<any>{
    return this.http.get(url);
  }
  
}
