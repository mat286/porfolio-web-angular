import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {


  user:object={"nombre":"admin","contraseña":"admin1234"};
  constructor(private http:HttpClient) { }

  obtenerdatos():Observable<any>{ 
    return this.http.get('./assets/data/data.json')
    
  }

  public getDatos(url:string):Observable<any>{
    return this.http.get(url);
  }

  public editarDatos(url:string, body:any):Observable<any>{
    return this.http.put(url, body);
  }

  public crearDatos(url:string, body:any):Observable<any>{
    return this.http.post(url, body);
  }

  public eliminarDatos(url:string):Observable<any>{
    return this.http.delete(url);
  }
  
}
